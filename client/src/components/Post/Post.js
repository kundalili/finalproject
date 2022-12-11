import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
import PostCard from './PostCard'
import Header from '../NavigationBar/Header'

function Posts() {

    const {state} = useContext(AppContext)

    const [posts, setPosts] = useState([])

    const [text, setText] = useState('')

    const [parentId, setParentId] = useState('')


    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
   
        const response = await axios.get('/post/list', {parentId:""})
        console.log("🚀 ~ post list from Mongo", response, parentId)
        setPosts(response.data.posts)
        
    }

    const handleSave = async (parentId, text) => {
        let response
        console.log("parent post and text", parentId, text)
        if (text) response = await axios.post('/post/add', {parentId:parentId, userId: state.user._id, text:text})
        
        if (response) getData()
        setText("")
        console.log(response)
    }


    return (
        <div>
            <Header />
                <div className='flex items-center 
                w-full
                gap-[20px] min-h-[100vh] p-[40px] 
                flex-col'>
                    <textarea className="" rows = "5" cols = "60" name = "posttext" value= {text} onChange={(e)=>setText(e.target.value)}>
                        Enter your post here...
                    </textarea>
                    {
                        text
                            ?<FaPlusCircle className='text-[2rem]' onClick={() => handleSave("", text)}/>
                            :<>Type something into text area to Post</>
                    }

                    {
                        posts?.length ?
                            posts.map((item => <PostCard key={item._id} post={item} cb={handleSave}/>))
                            :
                            'No posts to show'
                    }

                </div>
        </div>
)}
export default Posts;