import { useContext } from 'react';
import {AppContext} from '../Context'
import {BsEnvelope} from 'react-icons/bs'
import {BiMessageAdd} from "react-icons/bi"
import {BsBoxArrowUp} from 'react-icons/bs'
import {BsBoxArrowInDown} from 'react-icons/bs'
import {TbSend} from 'react-icons/tb'



export default function MessageCard(props) {
    
    console.log("🚀 Hello from Message Card, Props are :", props)
    
    const {state} = useContext(AppContext)

    return (
        <div className={'flex flex-col gap-[20px] rounded-md w-[300px] shadow p-[20px] m-[20px] '.concat((props.user._id===state.user._id)? "bg-vividBlue":'bg-coral text-')}>
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
                    <div className='text-3xl text-white' onClick={()=>props.sendMessage(props.user)}><BiMessageAdd/></div>
                </div>
                </div>

        </div>
    );
}
