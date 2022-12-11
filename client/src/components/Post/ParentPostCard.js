import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import { CssBaseline } from '@mui/material'

function Card(props) {
    console.log("🚀 ~ Card", props)
    const [text, setText] = useState('')
    const [showNewPost, setShowNewPost] = useState(false)


    function handleSave(){
        console.log("inside card data", props.post._id, text)
        props.cb(props.post._id, text)
        setShowNewPost(false)
        setText("")
    }

    
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
            <FaPlusCircle className='text-[1rem]' onClick={() => setShowNewPost(true)}/>
            {   
                showNewPost
                ?<div> 
                    <textarea className="" rows = "5" cols = "60" name = "posttext" value= {text} onChange={(e)=>setText(e.target.value)}>
                        Enter your post here...
                    </textarea>
                    {
                        text
                            ?<FaPlusCircle className='text-[2rem]' onClick={() => handleSave()}/>
                            :<>Type something into text area to Post</>
                    }
                </div>
                :<></>
            }
        </div>
    );
}

export default Card;