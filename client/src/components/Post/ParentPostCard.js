import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import { CssBaseline } from '@mui/material'

function Card(props) {
    console.log("🚀 ~Parent  Card", props)
    const [text, setText] = useState('')
    const [showNewPost, setShowNewPost] = useState(false)


    function handleSave(){
        console.log("inside card data", props.post._id, text)
        props.cb(props.post._id, text)
        setShowNewPost(false)
        setText("")
    }

    function isoToDate (date) {
        let d = new Date(date)
        return   (d.toDateString() + " " + d.getHours() + ":"+ d.getMinutes())
     
       }

    return (
        <div className='flex flex-col gap-[20px] border-2 bg-blue-100 text-vividBlue rounded-md lg:w-[500px] sm:w-[300px] p-[20px]'>
            <div className='flex justify-between'>
                <div className="flex flex-row">
                    {props.post.userId.username}       
                    <img 
                        onClick={()=>props.userPosts(props.post.userId)}
                        className='rounded-full w-[50px] h-[50px] object-cover' 
                        src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + props.post.userId.photo} alt=''/>
                </div>
                {isoToDate( props.post.date)}
            </div>
            <hr />
            <p onClick={()=>props.showPost(props.post)}>
                {props.post.text}  
            </p>
            <FaPlusCircle className='text-[1rem]' onClick={() => setShowNewPost(true)}/>
            {   
                showNewPost
                ?<div> 
                    <textarea 
                    className="form-control
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-vividBlue
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-vividBlue 
                    focus:bg-white 
                    focus:border-vividBlue focus:outline-none" 
                    rows = "5" name = "posttext" 
                    value= {text} onChange={(e)=>setText(e.target.value)}>
                        Enter your post here...
                    </textarea>
                    {
                        text
                            ?<FaPlusCircle className='text-[2rem] cursor-pointer' onClick={() => handleSave()}/>
                            :<>Type something into text area to Post</>
                    }
                </div>
                :<></>
            }
        </div>
    );
}

export default Card;