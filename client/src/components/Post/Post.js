import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
import PostCard from './PostCard'

function Posts() {

    const [posts, setPosts] = useState([])

    const [text, setText] = useState('')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {

        const response = await axios.get('/post/list', {parentId:""})
        console.log("🚀 ~ response", response)
        setPosts(response.data.posts)
        
    }

    const handleSave = async () => {


    }


    return (
        <div className='flex items-center 
        w-full
        gap-[20px] min-h-[100vh] p-[40px] 
        flex-col'>
            <FaPlusCircle className='text-[2rem]' onClick={() => handleSave(true)}/>
             {
                posts?.length ?
                    posts.map((item => <PostCard key={item._id} post={item}/>))
                    :
                    'No posts to show'
             }

        </div>
)}
export default Posts;