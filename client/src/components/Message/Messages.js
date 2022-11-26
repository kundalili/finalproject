import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
//import { response } from 'express'
import MessageGroupCard from './MessageGroupCard'
import MessageList from './MessageList'


export default function Messages (){

        const {state} = useContext(AppContext) //Global state for user
        const [msggroup, setMsggroup] = useState([]) //Left side corresponderlist
        const [msglist, setMsglist] = useState([]) //RightSide MessageList
        const [msg, setMsg] = useState({from:0, to:0, unread:0}) //total message info for the user
        const [query, setQuery] = useState({to:state.user._id, status:0})
        const [groupQuery] = useState({userId:state.user._id}) // State to update rightList
        
        console.log('state and msggroup is', state, msggroup)

        useEffect(() => {
            loadDatas()
            let interval;
            interval = setInterval(() => {
                loadDatas()
                // The logic of refreshing message info.
              }, 300000);
            
            return () => clearInterval(interval);
        }, [])
        
        const loadDatas = async()=>{
            await getGroupData()
            await getMsgData()
            await msgTotals()

        }
        const getGroupData = async () => {
            const response = await axios.post('/message/group', groupQuery)
            console.log("grouplist and filter", groupQuery, response)
            response.data.users.length>0?setMsggroup(response.data.users):setMsggroup([])
        }

        const getMsgData = async () => {
            const response = await axios.post('/message/list',query)
            console.log("msglistttt", response, query)
            response.data.messages.length>0?setMsglist(response.data.messages):setMsglist([])
        }

                
        function msgTotals(){
            let tmpmsg ={from:0, to:0, unread:0}
            tmpmsg.unread= query==={to:state.user._id, status:0}?msglist.length:tmpmsg.unread
            msggroup.forEach((item)=>{
                tmpmsg.from+=item.from
                tmpmsg.to+=item.to
            })
            setMsg(msg)
        }

        function newPost(){
            return
        }

        function handleUserClick(){
            setQuery({to:state.user._id, status:0})
        }

        function handleOtherUserClick(userId){
            
            setQuery(
                
                {
                    "from": {"$in":[state.user._id, 
                                    userId]},
                    "to": {"$in":[state.user._id, 
                                    userId]}
                }
            )
        }
        
        console.log("msggroup result", msggroup)

        return (
            <div className='flex flex-row'>
                <div >
                    <div className='flex-col border-double' >
                        <MessageGroupCard user={state.user} msg={msg} cb={handleUserClick}/>
                    </div>

                    <div className= 'border-solid'>
                    { 
                        msggroup.map(item =><MessageGroupCard key={item.userId} user={item} msg={{from:item.to, to:item.from, unread:item.unread} } 
                                                                cb={handleOtherUserClick}/>)
                    }
                    </div>
                </div>
                
                <div className='flex items-center w-full gap-[20px] min-h-[100vh] p-[40px] flex-col'>
                    {
                        
                        msglist.length>0?
                            msglist.map(item => <MessageList key={item.userId} post={item} cb={newPost}/>)
                            :
                            <p> No Record to List</p>
                    }
                </div>
            </div>
    )
}