import { useContext, useState } from 'react';
import {AppContext} from '../Context'
import {IoMdMail, IoMdMailUnread } from 'react-icons/io'
import {MdOutgoingMail} from "react-icons/md"
import {SiMinutemailer} from "react-icons/si"
import SendMessage from './SendMessage';

export default function MessageCard(props) {
    
    console.log("🚀 Hello from Message Card, Props are :", props)
    
    const {state} = useContext(AppContext)
    const [editModalOpen, setEditModalOpen] = useState(false)

    return (
        <div className='flex flex-col gap-[20px] bg-lightBlue rounded-md w-[350px]  p-[20px] m-[20px]'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[20px] text-3xl text-white'>
                    <p>{props.user.username}</p>
                        <div>  
                            <img 
                                className='rounded-full w-[50px] h-[50px] object-cover' 
                                src={'https://res.cloudinary.com/dgqr3qzxk/image/upload/v1668241829/' + props.user.photo} alt=''/>
                        </div> 
                        </div>

                        <div className='flex justify-between items-center'>
                                <div className='text-2xl text-white' onClick={()=>props.sendMessage(props.user)}><SiMinutemailer/></div>
                    </div>
                </div>
            <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <div className='w-[50px] p-[5px] text-2xl text-white'> <IoMdMail/> Inbox</div>
                        <span className='text-xl text-white'>{props.msg.from}</span>
                    </div>
                    <div className='flex justify-between items-center'>

                        <div className='w-[50px] p-[5px] text-2xl text-white'> <MdOutgoingMail/> Sent </div>
                        <span className='text-xl text-white'>{props.msg.to} </span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='w-[50px] p-[5px] text-2xl text-white'> <IoMdMailUnread/> Unread</div>
                        <span className='text-xl text-white'>{props.msg.unread}</span>
                    </div>
                    
                </div> 
        </div>
    );
}
