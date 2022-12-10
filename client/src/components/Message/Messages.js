import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
//import { response } from 'express'
import MessageCard from './MessageCard'
import MessageList from './MessageList'
import SendMessage from './SendMessage'
import UserSelect from "../Selections/UserSelect"


export default function Messages (){

        const {state} = useContext(AppContext) //Global state for user
     //   const [msggroup, setMsggroup] = useState([]) //Left side corresponderlist
     //   const [msglist, setMsglist] = useState([]) //RightSide MessageList
     //   const [msglistUser, setMsglistUser] = useState([]) //RightSide MessageList
        const [query] = useState({to:state.user._id, tostatus:0})
        const [groupQuery] = useState({userId:state.user._id}) // State to update rightList
        const [otherUser, setOtherUser] = useState("")
        const [modalOpen, setModalOpen] = useState(false)
        const [data, setData] = useState ({groupList:[], msgList:[], total:{from:0, to:0, unread:0}})
        
        
        useEffect(() => {
            let interval;
            loadDatas()
            interval = setInterval(() => {
                loadDatas()
                // The logic of refreshing message info.
              }, 300000);
            
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            return () => clearInterval(interval);
        },[otherUser])


        useEffect (()=>{
            console.log("msggroup", data.groupList)
            console.log("msglist after set data", data.msgList)
            console.log("msglistUser", data.total)
        },[data])

        
        const loadDatas = async()=>{
            
            let groupList = await getGroupData()
            console.log ("groupList is :", groupList)
            
            let msgList = await getMsgData()
            console.log ("msgList is :", msgList)
            

            let total ={from:0, to:0, unread:0}
            groupList.forEach((item)=>{
                console.log("message numbers", msgList.from, msgList.to )
                total.from+=msgList?.from?msgList.from:0
                total.to+=msgList?.to?msgList.to:0
            })
            
            console.log ("Hello from data State set")
            setData({groupList:groupList, msgList:msgList, total:total})

        }
       
        const getGroupData = async () => {
            console.log( "groupquery:",groupQuery)

            const response = await axios.post('/message/group', groupQuery)
            let myarr = response?.data?.data
            console.log( "my group search result:",myarr)

            if (Array.isArray(myarr)) {
                    myarr.sort((a, b)=>{
                        if(a.username.toLowerCase() > b.username.toLowerCase()){
                        return 1;
                        }else{
                        return -1;
                        }
                    });
            }
            
            console.log( "group query response:",response)
            if (myarr.length>0) return myarr
            return []
        }

        const getMsgData = async () => {
            if (otherUser) {
                    const response = await axios.post('/message/list',{users:[state.user._id, otherUser]})
                    if (response?.data?.messages?.length>0) return response.data.messages 
                    return []
            } else {
                const response = await axios.post('/message/list',query)
                console.log( "group query response:",response)
                if (response?.data?.messages?.length>0) return response.data.messages
                return []
            
            }
        }

                
/*         function msgTotals(msgList, groupList){
            let tmpmsg ={from:0, to:0, unread:msgList.length}
            msggroup.forEach((item)=>{
                console.log("message numbers", item.from, item.to, msgList.length )
                tmpmsg.from+=item?.from?item.from:0
                tmpmsg.to+=item?.to?item.to:0
            })
            return tmpmsg
        } */

        async function newPost(item){
            const query={}
            query._id=item._id

            if (item.from._id===state.user._id){
                query.fromstatus=1
            } else query.tostatus=1

            const response = await axios.put('/message/edit',query)
            if (response.success) {    
                sendMessage(item.from._id)
            } else alert("Message cannot be set as read")
        }

        async function handleRead(item){
            console.log("message read clicked", item)
            const data={_id:item._id}
  
            if (state.user._id===item.from._id)
                {
                    data.status=[1,item.status[1]]
                } else data.status=[item.status[0],1]


            const res= await axios.put('/message/edit',data)
            console.log("message etid response", res)
            loadDatas()
        }

        function handleUserClick(){
            setOtherUser()
        }

        function handleOtherUserClick(otherUserId){
            console.log("selected card", otherUserId)
            otherUserId._id!==state.user._id?setOtherUser(otherUserId):setOtherUser("")
            setModalOpen(true)   
        }
        
        function sendMessage(otherUserId){
            console.log("message send clicked", otherUserId)
            setOtherUser(otherUserId)
            setModalOpen(true)
        }

        async function handleMessage(text){

            console.log("message send response", text)
            setModalOpen(false)
            setOtherUser("")
            loadDatas()

        }

        console.log("Data WILL BE RENDERED", data)
        return (
            <div className='flex flex-row'>

                <div >
                    <div className='flex-col border-double' >
                        <MessageCard user={state.user} msg={data.total} sendMessage={handleOtherUserClick}  
                                    getUserMessages={handleUserClick}/>
                    </div>

                    <div className= 'border-solid'>
                    { 
                        data?.groupList.map(item =><MessageCard 
                                    key={item._id} user={item} msg={{from:item.from, to:item.to, unread:item.unread} } 
                                        getUserMessages={(user)=>setOtherUser(user._id)} 
                                        sendMessage={sendMessage}/>)
                    }
                    </div>
                </div>
                {
                    modalOpen? otherUser?<SendMessage  to={otherUser} cb={handleMessage} />
                                        :<UserSelect cb={sendMessage}/>
                            :<></>

                }
                <div className='flex items-center w-full gap-[20px] min-h-[100vh] p-[40px] flex-col'>
                    { 
                        data?.msgList?.length>0  
                            ?data.msgList.map(item => <MessageList key={item._id} item={item} markRead={handleRead} newPost={newPost}/>)
                            :<>No Messages</>
                    }  
              </div>
            </div>
    )
}