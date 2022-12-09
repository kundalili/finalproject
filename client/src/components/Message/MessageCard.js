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
        <div className={'flex flex-col gap-[20px] rounded-md w-[350px]  p-[20px] m-[20px] '.concat((props.user._id===state.user._id)? "bg-blue-600":'bg-lightBlue')}>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[20px] text-3xl text-white' onClick={()=>props.getUserMessages(props.user)}>
                    <div>  
                        <img 
                            className='rounded-full w-[50px] h-[50px] object-cover' 
                            src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + props.user.photo} alt=''/>
                    </div> 
                    <p>{props.user.username}</p>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='text-2xl text-white' onClick={()=>props.sendMessage(props.user)}><SiMinutemailer/></div>
                </div>
                </div>
            <div className='flex flex-row justify-around'>
                    <div className='flex flex-col justify-between items-center  text-white'>
                        <div className='flex justify-between w-[50px] p-[5px] text-2xl text-white'> 
                            <IoMdMail/> 
                            <span className='text-xl text-white'>{props?.msg?.from}</span>
                        </div>
                        <p>Inbox</p>
                    </div>
                    <div className='flex flex-col justify-between items-center  text-white'>
                        <div className='flex justify-between w-[50px] p-[5px] text-2xl text-white'> 
                            <IoMdMail/> 
                            <span className='text-xl text-white'>{props?.msg?.to}</span>
                        </div>
                        <p>Sent</p>
                    </div>
                    <div className='flex flex-col justify-between items-center  text-white'>
                        <div className='flex justify-between w-[50px] p-[5px] text-2xl text-white'> 
                            <IoMdMail/> 
                            <span className='text-xl text-white'>{props?.msg?.unread}</span>
                        </div>
                        <p>Unread</p>
                    </div>
                </div> 
        </div>
    );
}
