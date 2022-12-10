import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { AppContext } from '../Context'


export default function SendMessage(props) {
    
    const {state} = useContext(AppContext)

    const [users, setUsers] = useState({from:state.user._id, to:props.to})
    const [text, setText] = useState("")
    console.log("🚀 Hello from Send Message, users :", users)
    
    useEffect(()=>{
        console.log("users changed", users)
    }, [users])

    async function  handleSave(){
        let response
        console.log("message users",users)
        try {
            response = await axios.post('/message/send', {
                from : users.from,
                to : users.to,
                text : text
            })
            console.log("send message response:", response)
            setText("")
            props.cb(response.data)
        } catch (error) {
            props.cb(error)
        }
    }

/*     async  function  handleTo(e){
        let response
        try {
            response = await axios.post('/message/find', {
                username:e.target.value
            })
            console.log(response)
            if (response.username) setUsers({from:users.from, to:response.data})
        } catch (error) {
            return("error finding user ", e.target)
        }
    } */

    return (
        <div className='w-[400px] h-[200px] bg-slate-200  flex flex-row'>
            {
                (users.to===users.from)
                    ?<div>
                        <p>Can not send to itself</p>
                    </div>
                    :<div className='flex flex-col'>
                        <img 
                            className='rounded-full w-[30px] h-[30px] object-cover' 
                            src={'https://res.cloudinary.com/dgqr3qzxk/image/upload/v1668241829/' + users.photo} alt=''/>
                        {users.to.username}
                        <label className='border-2 border-slate-500 flex items-center p-[10px]'>
                        <textarea  
                            rows="4" 
                            cols="50"
                            className='resize-none ' 
                            placeholder='type your comment'
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        </label>
                        <button onClick={handleSave}>Save Message</button>
                        <button onClick={()=>props.cb("")}>Cancel</button>
                        
                    </div>
            }
        </div>
    )
}
