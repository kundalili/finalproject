import {FaPlusCircle} from 'react-icons/fa'
import {AiOutlineLike, AiFillLike} from 'react-icons/ai'
import {useState, useContext, useEffect} from 'react'
import { CssBaseline } from '@mui/material'
import axios from 'axios'
import { AppContext } from '../Context'
import {TfiComment} from 'react-icons/tfi'

function Card(props) {
    console.log("🚀 ~ Card", props)
    const [text, setText] = useState('')
    const [showNewPost, setShowNewPost] = useState(false)
    const [like, setLike] = useState([props.post.likes.includes(props.post.userId._id), props.post.likes.length])
     const {state} = useContext(AppContext)

    function handleSave(){
        console.log("inside card data", props.post._id, text)
        props.cb(props.post._id, text)
        setShowNewPost(false)
        setText("")
    }

    async function handleLike(){
        
        const res = await axios.post('/post/like', {_id:props.post._id, userId: state.user._id})
        console.log("liked pressed and response is:", res, res.data)
        if (res.data.success) setLike([!like[0], res.data.data.likes.length])
    } 
    
    function isoToDate (date) {
        let d = new Date(date)
        return   (d.toDateString() + " " + d.getHours() + ":"+ d.getMinutes())
     
       }

    console.log("like render",like)

    return (
        <div className='flex flex-col justify-center gap-[20px] w-[500px] bg-lotionPink border-8 border-darkBlue text-vividBlue rounded-md p-[20px]'>
                <div className='flex justify-start items-center'>
                    <div className='flex justify-start items-center pl-[10px]'>
                    <img 
                        onClick={()=>props.userPosts(props.post.userId)}
                        className='rounded-full w-[60px] h-[60px] object-cover cursor-pointer' 
                        src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + props.post.userId.photo} alt=''/>
                        <div className='flex flex-col gap-[10px]'>
                            <p className='pl-[10px] text-xl'>{props.post.userId.username} </p>
                            <p className='text-m p-[10px]'>{isoToDate(props.post.date)}</p>   
                        </div>
                    </div>
                </div>
            <hr />
            <div className="text-l cursor-pointer" 
            onClick={()=>props.showPost(props.post)}>
                {props.post.text}  
            </div>
          
            <div className="flex justify-between items-center gap-[5px]" >  
                <div className='flex justify-start items-center'>
                    <div className='flex justify-center items-center gap-[5px]'>
                    <span>{like[1]}</span>
                        {
                            like[0]
                            ?<AiFillLike className='text-[1rem] cursor-pointer' onClick={() => handleLike()}/>
                            :<AiOutlineLike className='text-[1rem] cursor-pointer' onClick={() => handleLike()}/>
                        }
                    </div>
                    <div>
                        <div className='flex justify-start items-center gap-[5px]'>
                        <p >{props.post.numberOfComments}</p>
                        <TfiComment className='cursor-pointer ' onClick={() => setShowNewPost(true)}/>
                        </div>
                    </div>
                </div>

                {/* <FaPlusCircle className='text-[1rem] cursor-pointer' onClick={() => setShowNewPost(true)}/> */}

            </div>
            {   
                showNewPost
                ?<div> 
                    <textarea className="w-full p-[10px] placeholder-slate-300" 
                    placeholder='Enter your post here...' rows = "5" cols = "60" name = "posttext" value= {text} onChange={(e)=>setText(e.target.value)}>
                    </textarea>
                    {
                        text
                            ?<FaPlusCircle className='text-[2rem]' onClick={() => handleSave()}/>
                            :<p></p>
                    }
                </div>
                :<></>
            }
        </div>
    );
}

export default Card;