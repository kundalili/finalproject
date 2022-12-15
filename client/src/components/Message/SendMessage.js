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
        <div className='w-full p-[20px] rounded-md flex flex-row justify-center items-center'>
            {
                (users.to===users.from)
                    ?<div>
                        <p>Can not send to itself</p>
                    </div>
                    :<div className='flex flex-col bg-blue-100 rounded-md shadow sm:p-[0px] lg:p-[20px]'>
                        <div className='flex flex-row justify-start items-center'>    
                            <img 
                                className='rounded-full w-[30px] h-[30px] object-cover m-[10px]' 
                                src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + props.to.photo} alt=''/>
                            <span className='text-vividBlue' >{props.to.username}</span>
                        </div>
                        <label className='flex items-center justify-center p-[10px]'>
                        <textarea  
                            
                            rows="6" 
                            cols="50"
                            className='resize-none rounded-md  lg:p-[20px] p-[0px] pl-[80px] pr-[80px] lg:pl-[0px] lg:pr-[0px] sm:w-[300px] lg:w-[600px]' 
                            placeholder='Type your messages'
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />

                        </label>
                        <div className='flex justify-center items-center p-[20px] gap-[30px]'>
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
