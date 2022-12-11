import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { AppContext } from '../Context'


export default function SendMessage(props) {
    
    const {state} = useContext(AppContext)

    const [users, setUsers] = useState({from:state.user._id, to:props.to._id})
    const [text, setText] = useState("")
    console.log("🚀 Hello from Send Message, users :", users)
    
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


    return (
        <div className='w-[700px] p-[20px] rounded-md  bg-blue-100 flex flex-row'>
            {
                (users.to===users.from)
                    ?<div>
                        <p>Can not send to itself</p>
                    </div>
                    :<div className='flex flex-col'>
                        <div className='flex flex-row'>    
                            <img 
                                className='rounded-full w-[30px] h-[30px] object-cover' 
                                src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + props.to.photo} alt=''/>
                            <span >{props.to.username}</span>
                        </div>
                        <label className='flex items-center p-[10px]'>
                        <textarea  
                            rows="6" 
                            cols="70"
                            className='resize-none p-[20px]' 
                            placeholder='Type your messages'
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />

                        </label>
                        <div className='flex justify-center items-center gap-[30px]'>
                            <button  
                                    onClick={handleSave}
                                    type="submit"
                                    className='cursor-pointer 
                                    border-2 border-vividBlue 
                                    text-vividBlue 
                                    font-semibold 
                                    hover:border-2
                                    text-center w-[106px] 
                                    h-[34px] 
                                    outline-none 
                                    rounded-full 
                                    hover:text-white
                                    hover:bg-vividBlue 
                                    hover:border-vividBlue
                                    shadow
                                    '>
                                    Send               
                            </button> 
                            <button  
                                    onClick={()=>props.cb("")}
                                    type="submit"
                                    className='cursor-pointer 
                                    border-2 border-vividBlue 
                                    text-vividBlue 
                                    font-semibold 
                                    hover:border-2
                                    text-center w-[106px] 
                                    h-[34px] 
                                    outline-none 
                                    rounded-full 
                                    hover:text-white
                                    hover:bg-vividBlue 
                                    hover:border-vividBlue
                                    shadow
                                    '>
                                    Cancel              
                            </button>    
 
                         </div>
                     
                </div>
            }
        </div>
    )
}
