import { useContext } from 'react';
import {AppContext} from '../Context'
import {BsEnvelope} from 'react-icons/bs'
import {BsBoxArrowUp} from 'react-icons/bs'
import {BsBoxArrowInDown} from 'react-icons/bs'
import {TbSend} from 'react-icons/tb'


import SendMessage from './SendMessage';
import inbox from './../../assets/inbox_FILL0_wght400_GRAD0_opsz48.svg'

export default function MessageCard(props) {
    
    console.log("🚀 Hello from Message Card, Props are :", props)
    
    const {state} = useContext(AppContext)

    return (
        <div className=''>
            <div className={'flex flex-col gap-[20px] rounded-md w-[300px] shadow p-[20px] m-[20px] '.concat((props.user._id===state.user._id)? "bg-blue-100":'bg-lotionPink')}>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-[20px] text-2xl text-vividBlue' onClick={()=>props.getUserMessages(props.user)}>
                        <div>  
                            <img 
                                className='rounded-full w-[50px] h-[50px] object-cover cursor-pointer' 
                                src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + props.user.photo} alt=''/>
                        </div> 
                        <p>{props.user.username}</p>
                    </div>
                    <div className='flex flex-col justify-between items-center  text-vividBlue'>
                            {/* <div className='flex justify-between w-[50px] gap-[5px] text-3xl text-vividBlue'> 
                                <BsBoxArrowInDown className='cursor-pointer'/>
                                <span className='text-xl pt-[10px] text-vividBlue'>{props.msg.from}</span>
                            </div>
                            <p>Inbox</p>
                        </div>
                        <div className='flex flex-col justify-between items-center  text-vividBlue'>
                            <div className='flex justify-between w-[50px] gap-[5px] text-3xl text-vividBlue'> 
                                <BsBoxArrowUp className='cursor-pointer'/> 
                                <span className='text-xl pt-[10px] text-vividBlue'>{props?.msg?.to}</span>
                            </div>
                            <p>Sent</p> */}
                        </div>
                    {/* <div className='flex justify-between items-center'>
                        <div className='text-3xl text-vividBlue cursor-pointer' onClick={()=>props.sendMessage(props.user)}><BiMessageAdd/></div>
                    </div> */}
                    </div>
                <div className='flex flex-row justify-between'>
                        <div className='flex flex-col justify-between items-center  text-vividBlue'>
                            <div className='flex justify-between w-[50px] gap-[5px] text-2xl text-vividBlue'> 
                                <BsBoxArrowInDown className='cursor-pointer'/>
                                <span className='text-xl pt-[5px] text-vividBlue'>{props.msg.from}</span>
                            </div>
                            <p>Inbox</p>
                        </div>
                        <div className='flex flex-col justify-between items-center  text-vividBlue'>
                            <div className='flex justify-between w-[50px] gap-[5px] text-2xl text-vividBlue'> 
                                <BsBoxArrowUp className='cursor-pointer'/> 
                                <span className='text-xl pt-[5px] text-vividBlue'>{props?.msg?.to}</span>
                            </div>
                            <p>Sent</p>
                        </div>
                        {/* <div className='flex flex-col justify-between items-center  text-vividBlue'>
                            <div className='flex justify-between w-[50px] gap-[5px] pt-[5px] text-3xl text-vividBlue'> 
                                <BsEnvelope className='cursor-pointer'/> 
                                <span className='text-xl pt-[10px] text-vividBlue'>{props?.msg?.unread}</span>
                            </div>
                            <p>Unread</p>
                        </div> */}
                    </div> 
            </div>
     </div>
    );
}
