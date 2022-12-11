import { useContext, useState } from 'react';
import {AppContext} from '../Context'
import {BsEnvelope} from 'react-icons/bs'
import {BiMessageAdd} from "react-icons/bi"
import {BsBoxArrowUp} from 'react-icons/bs'
import {BsBoxArrowInDown} from 'react-icons/bs'
import {TbSend} from 'react-icons/tb'
import SendMessage from '../Message/SendMessage'



export default function MessageCard(props) {

    const [message, setMessage] = useState(false)
    
    console.log("🚀 Hello from Message Card, Props are :", props)
    
    const {state} = useContext(AppContext)

    async function handleMessage(text){
        alert("Message sent")
        setMessage(false)   
    }

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
                    {
                        props.user._id!==state.user._id
                            ?<div className='text-3xl text-white' onClick={()=>(setMessage(true))}><BiMessageAdd/></div>
                            :<></>
                    }
                </div>
                </div>
            <div>
                {
                    message
                    ?<SendMessage  to={props.user._id} cb={handleMessage} />
                    :<></>
                }

            </div>
        </div>
    );
}
