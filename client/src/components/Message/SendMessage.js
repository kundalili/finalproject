import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AppContext } from '../Context'

export default function SendMessage(props) {
    
    const {state} = useContext(AppContext)

    const [users, setUsers] = useState({from:state.user._id, to:props.to})
    const [text, setText] = useState("")

    async function  handleSave(){
        let response
        try {
            response = await axios.post('/message/send', {
                from : users.from,
                to : users.to,
                text : text
            })
            props.cb(response)
        } catch (error) {
            props.cb(error)
        }
    }

    function handleTo(e){
        setUsers({from:state.user._id, to:e.target.value})
    }

    return (
     <div>
       !state.user._id  
        ?<span>From User is missing</span>
        :<div className='w-[400px] h-[300px] absolute top-[200px] left-[200px]
            bg-slate-200  flex flex-row'>
            {
                console.log("sender, reciver", props.from, props.to)
                (props.from._id===props.to._id)
                    ?<input onChange={handleTo}> Select a user </input>
                    :<div className='flex flex-col'>
                        <img 
                            className='rounded-full w-[30px] h-[30px] object-cover' 
                            src={'https://res.cloudinary.com/dgqr3qzxk/image/upload/v1668241829/' + props?.user?.photo} alt=''/>
                        {props?.user?.username}
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
                    </div>
            }
        </div>
     </div>
    )
}
