import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
import PostCard from './PostCard'
import Header from '../NavigationBar/Header'
import ParentPostCard from './ParentPostCard'
import UserCard from './UserCard'

export default function Posts() {

    const {state} = useContext(AppContext)

    const [posts, setPosts] = useState([])

    const [text, setText] = useState('')

    const [query, setQuery] = useState([{},{}]) //[selectedPost, selectedUser]
    

    useEffect(() => {
        getData()
        const interval = setInterval(() => {
            // The logic of refreshing message info.
            getData()
          }, 180000);
        
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        return () => clearInterval(interval);

    }, [query])

    const getData = async () => {
        const postquery={}
        
        if (query[1]?._id) {
            postquery.userId=query[1]._id
        } else postquery.parentId= (query[0]?._id) ? (query[0]._id) : ("")

        console.log("postUser, parentPost and ", {params:postquery})
        
        const response = await axios.post('/post/list', postquery)
        console.log("🚀 ~ post list from MongoDB", response)
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

    console.log("states before render", query)

    return (
        <div>
            <Header />
                <div className='postThread flex items-center bg-blue-50 
                w-full
                gap-[20px] min-h-[100vh] p-[40px] 
                flex-col'>
                 {  
                        query[0]?._id
                            ?<ParentPostCard post={query[0]} showPost={(item)=>{setQuery([item, {}])}} userPosts={(item)=>setQuery([{},item])}/>
                            :query[1]?._id
                                ?<UserCard user={query[1]}/>
                                :<></>
                    } 
                    {   
                        !query[1]?._id
                            ?<textarea className="border-2 border-slate-500 rounded-md w-[400px]  p-[20px]"
                                placeholder='Type your post' 
                                rows = "3" cols = "60" name = "posttext" value= {text} 
                                onChange={(e)=>setText(e.target.value)}>
                                Enter your post here...
                            </textarea>
                            :<></>
                    }
                    {
                        query[1]?._id
                        ? <button className='cursor-pointer 
                        border-2 border-vividBlue 
                        text-vividBlue 
                        font-semibold 
                        hover:border-2
                        text-center w-[212px] 
                        h-[34px] 
                        outline-none 
                        rounded-full 
                        hover:text-white
                        hover:bg-vividBlue 
                        hover:border-vividBlue
                        shadow'
                        onClick={()=>setQuery([{},{}])}>Back To All Posts</button>
                        :text
                        
                        ? <button className='cursor-pointer 
                            border-2 bg-blue-100 
                            text-darkBlue
                            font-semibold 
                            text-center w-[212px] 
                            h-[68px] 
                            outline-none 
                            rounded-full
                            hover:bg-coral
                            shadow ' 
                            onClick={() => handleSave("", text)}>
                                Share your thoughts
                            </button>
                            :<div className='text-l text-vividBlue'></div>
                    }

                    {
                        posts?.length 
                            ?posts.map((item => <PostCard key={item._id} post={item} cb={handleSave} 
                                showPost={(item)=>{setQuery([item, {}])}} userPosts={(item)=>setQuery([{},item])}/>))
                            :'No posts to show'
                    }

                </div>
        </div>
)}
