import {FaPlusCircle} from 'react-icons/fa'
import {AiOutlineLike, AiFillLike} from 'react-icons/ai'
import {useState, useContext, useEffect} from 'react'
import { CssBaseline } from '@mui/material'
import axios from 'axios'
import { AppContext } from '../Context'

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
        <div className='flex flex-col gap-[20px] border-2 border-slate-500 rounded-md w-[400px]  p-[20px]'>
            <div className='flex '>
                {props.post.userId.username} - {props.post.date}       
                <img 
                    onClick={()=>props.userPosts(props.post.userId)}
                    className='rounded-full w-[50px] h-[50px] object-cover' 
                    src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + props.post.userId.photo} alt=''/>
            </div>
            <hr />
            <p onClick={()=>props.showPost(props.post)}>
                {props.post.text}  
            </p>
            <p >
                Comments: {props.post.numberOfComments}  
            </p>
            <div className="flex flex-between" >    
                <FaPlusCircle className='text-[1rem]' onClick={() => setShowNewPost(true)}/>
                {
                    like[0]
                    ?<AiFillLike className='text-[1rem]' onClick={() => handleLike()}/>
                    :<AiOutlineLike className='text-[1rem]' onClick={() => handleLike()}/>
                }
                <span>{like[1]}</span>
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