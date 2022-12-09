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
        const [msggroup, setMsggroup] = useState([]) //Left side corresponderlist
        const [msglist, setMsglist] = useState([]) //RightSide MessageList
        const [msglistUser, setMsglistUser] = useState([]) //RightSide MessageList
        const [msg, setMsg] = useState({from:0, to:0, unread:0}) //total message info for the user
        const [query, setQuery] = useState({to:state.user._id, tostatus:0})
        const [groupQuery] = useState({userId:state.user._id}) // State to update rightList
        const [otherUser, setOtherUser] = useState()
        const [modalOpen, setModalOpen] = useState(false)
        
        console.log('Hello from Messages state and msggroup are :', state, msggroup)

        useEffect(() => {
            let interval;
            loadDatas()
            interval = setInterval(() => {
                loadDatas()
                // The logic of refreshing message info.
              }, 300000);
            
            return () => clearInterval(interval);
        }, [])

        useEffect(() => {
            console.log("new query", query)
            getMsgData()
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }, [otherUser])

        useEffect (()=>{
            console.log("msggroup", msggroup)
            console.log("msglist", msglist)
            console.log("msglistUser", msglistUser)
            
        },[msggroup, msglist, msglistUser, otherUser, query])

        
        const loadDatas = async()=>{
            await getGroupData()
            await getMsgData()
            await msgTotals()

        }
       
        const getGroupData = async () => {
            const response = await axios.post('/message/group', groupQuery)
            // console.log("grouplist and filter", groupQuery, response)

            console.log( "groupdata:",response?.data?.users)
            console.log( "groupquery:",groupQuery)
            let myarr = response?.data?.users
            myarr.sort((a, b)=>{
                if(a.username.toLowerCase() > b.username.toLowerCase()){
                  return 1;
                }else{
                  return -1;
                }
              });
            console.log("sorted", response?.data?.users)
            response?.data?.users?.length>0?setMsggroup(response.data.users):setMsggroup([])
        }

        const getMsgData = async () => {
            if (otherUser) {
                    const response = await axios.post('/message/list',{users:[state.user._id, otherUser]})
                    console.log("msglistttt for corresposder", response?.data, query)
                    response?.data?.messages?.length>0?setMsglistUser(response.data.messages):setMsglistUser([])
            } else {
                const response = await axios.post('/message/list',query)
                console.log("msglistttt for active user", response, query)
                response?.data?.messages?.length>0?setMsglist(response.data.messages):setMsglist([])
            }
        }

                
        function msgTotals(){
            console.log("calculate total for messages:",msglist)
            let tmpmsg ={from:0, to:0, unread:msglist.length}
            msggroup.forEach((item)=>{
                console.log("message numbers", item.from, item.to, msglist.length )
                tmpmsg.from+=item?.from?item.from:0
                tmpmsg.to+=item?.to?item.to:0
            })
            setMsg()
        }

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

        return (
            <div className='flex flex-row'>

                <div >
                    <div className='flex-col border-double' >
                        <MessageCard user={state.user} msg={msg} sendMessage={handleOtherUserClick}  
                                    getUserMessages={handleUserClick}/>
                    </div>

                    <div className= 'border-solid'>
                    { 
                        msggroup.map(item =><MessageCard 
                                    key={item.userId} user={item} msg={{from:item.from, to:item.to, unread:item.unread} } 
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
                        otherUser
                            ?msglistUser.map(item => <MessageList key={item._id} item={item} markRead={handleRead} newPost={newPost}/>)
                            :msglist.map(item => <MessageList key={item._id} item={item} markRead={handleRead} newPost={newPost}/>)
                    }  
              </div>
            </div>
    )
}