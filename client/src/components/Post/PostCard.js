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
    

    console.log("like render",like)

    return (
        <div className='flex flex-col gap-[20px] border-2 bg-blue-100 text-vividBlue rounded-md w-[500px] p-[20px]'>
            
            <div>
                <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center pl-[10px]'>
                <img 
                    onClick={()=>props.userPosts(props.post.userId)}
                    className='rounded-full w-[50px] h-[50px] object-cover' 
                    src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + props.post.userId.photo} alt=''/>
                    <p className='pl-[10px] text-2xl'>{props.post.userId.username} </p>
                </div>
                <p>{props.post.date}</p>   
                </div>
            </div>
            <hr />
            <p className="text-xl" 
            onClick={()=>props.showPost(props.post)}>
                {props.post.text}  
            </p>
          
            <div className="flex justify-between items-center" >  
          
            <div className='flex justify-center items-center gap-[5px]'> 
            <span>{like[1]}</span>
                {
                    like[0]
                    ?<AiFillLike className='text-[1rem]' onClick={() => handleLike()}/>
                    :<AiOutlineLike className='text-[1rem]' onClick={() => handleLike()}/>
                }
                  <div className='flex justify-start items-center gap-[5px]'>
                <p >{props.post.numberOfComments}</p>
                <TfiComment />
            </div>
               
            </div> 
                <FaPlusCircle className='text-[1rem]' onClick={() => setShowNewPost(true)}/>

            </div>
            {   
                showNewPost
                ?<div> 
                    <textarea className="" rows = "5" cols = "60" name = "posttext" value= {text} onChange={(e)=>setText(e.target.value)}>
                        Enter your post here...
                    </textarea>
                    {
                        text
                            ?<FaPlusCircle className='text-[2rem]' onClick={() => handleSave()}/>
                            :<p>Type something into text area to Post</p>
                    }
                </div>
                :<></>
            }
        </div>
    );
}

export default Card;