import { useContext, useState } from 'react';
import {AppContext} from '../Context'
import {IoMdMailUnread  } from 'react-icons/io';
import SendMessage from './SendMessage';

function Card(props) {
    console.log("🚀 ~ Card", props)
    
    const {state} = useContext(AppContext)
    const [editModalOpen, setEditModalOpen] = useState(false)

    const handleMessage = async () => {
        setEditModalOpen(false)
    }

    return (
        <div className='flex flex-col gap-[20px] border-2 border-slate-500 rounded-md w-[400px]  p-[20px]'>
            <div className='flex'>
                {props.user.username}        
                <img 
                    className='rounded-full w-[50px] h-[50px] object-cover' 
                    src={'https://res.cloudinary.com/dgqr3qzxk/image/upload/v1668241829/' + props.user.photo} alt=''/>
                <div className='w-[40px]'> <IoMdMailUnread/> <span>{props.msg.from}</span></div>
                <div className='w-[40px]'> <IoMdMailUnread/> <span>{props.msg.to} </span></div>
                <div className='w-[40px]'> <IoMdMailUnread/> <span>{props.msg.unread}</span></div>
                <div className='justify-end' onClick={()=>setEditModalOpen(true)}><IoMdMailUnread/> </div> 
            </div>
            {
                editModalOpen?
                    <SendMessage to={props.user} cb={handleMessage}/>
                    :<></>
            }
            <hr />
        </div>
    );
}

export default Card;