import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
//import { response } from 'express'
import MessageCard from './MessageCard'
import MessageList from './MessageList'
import SendMessage from './SendMessage'
import UserSelect from "../Selections/UserSelect"
import Header from '../NavigationBar/Header'


export default function Messages (){

        const {state} = useContext(AppContext) //Global state for user
     //   const [msggroup, setMsggroup] = useState([]) //Left side corresponderlist
     //   const [msglist, setMsglist] = useState([]) //RightSide MessageList
     //   const [msglistUser, setMsglistUser] = useState([]) //RightSide MessageList
        const [query] = useState({to:state.user._id, tostatus:0})
        const [groupQuery] = useState({userId:state.user._id}) // State to update rightList
        const [otherUser, setOtherUser] = useState(state.user._id)
        const [modalOpen, setModalOpen] = useState(false)
        const [data, setData] = useState ({groupList:[], msgList:[], total:{from:0, to:0, unread:0}})
        
        
        useEffect(() => {
            let interval;
            loadDatas()
/*             interval = setInterval(() => {
                loadDatas()
                // The logic of refreshing message info.
              }, 300000);
             */
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
            console.log( "getting list for :", otherUser) 
            if (otherUser!==state.user._id) {
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

        async function newPost(item){
            const query={}
            query._id=item._id
            query.tostatus=1

            await axios.put('/message/edit',query)
            setOtherUser(item.from._id)
        }

        async function handleRead(item){
            console.log("message read clicked", item)
            const data={_id:item._id}
  
            if (state.user._id===item.to._id)
                {
                    data.tostatus=1-item.tostatus
                } 


            const res= await axios.put('/message/edit',data)
            console.log("message make read  response", res)
            loadDatas()
        }

        
        async function handleMessage(text){

            console.log("message send response", text)
            loadDatas()
        }

        console.log("Data WILL BE RENDERED", data)
        return (

            <div>
                    <Header />
                        <div className='flex flex-row'>

                            <div >
                                <div className='flex flex-col border-double' >
                                    <MessageCard user={state.user} msg={data.total} 
                                                sendMessage={(user)=>setOtherUser(state.user._id)}  
                                                getUserMessages={(user)=>setOtherUser(state.user._id)}/>
                                </div>

                                <div className= 'border-solid'>
                                { 
                                    data?.groupList.map(item =><MessageCard 
                                                key={item._id} user={item} msg={{from:item.from, to:item.to, unread:item.unread} } 
                                                    getUserMessages={(user)=>setOtherUser(user._id)} 
                                                    sendMessage={(user)=>setOtherUser(user._id)}/>)
                                }
                                </div>
                            </div>
                           
                            <div className='flex w-full gap-[20px] min-h-[100vh] p-[40px] flex-col'>
                                {    
                                    otherUser!==state.user._id?<SendMessage  to={otherUser} cb={handleMessage} />
                                                    :<UserSelect cb={(user)=>setOtherUser(user._id)}/>
                                }
                                { 
                                    data?.msgList?.length>0  
                                        ?data.msgList.map(item => <MessageList key={item._id} item={item} markRead={handleRead} newPost={newPost}/>)
                                        :<div className='bg-vividBlue text-white text-center text-2xl shadow rounded-md p-[5px]'> {otherUser!==state.user._id?'Loading...':"No unread messages!"} </div>
                                }  
                            </div>
                    </div>
            </div>

    )
}