import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
import PostCard from './PostCard'
import Header from '../NavigationBar/Header'
import ParentPostCard from './ParentPostCard'
import UserCard from './UserCard'
import Populars from './Populars'

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
            <div className='flex flex-row justify-around bg-darkBlue'>
               
                <div className='postThread flex items-center bg-darkBlue 
                gap-[20px] p-[40px] flex-col'>
                 {  
                        query[0]?._id
                            ?<ParentPostCard post={query[0]} showPost={(item)=>{setQuery([item, {}])}} userPosts={(item)=>setQuery([{},item])}/>
                            :query[1]?._id
                                ?<UserCard user={query[1]}/>
                                :<></>
                    } 
                    {   
                        !query[1]?._id
                            ?<textarea className="border-2 border-slate-500 p-[20px] rounded-md w-[400px]"
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
                        bg-lotionPink 
                        text-vividBlue 
                        font-semibold 
                        text-center w-[212px] 
                        h-[68px] 
                        outline-none 
                        rounded-full 
                        hover:bg-lightBlue
                        shadow'
                        onClick={()=>setQuery([{},{}])}>Back To All Posts</button>
                        :text
                        
                        ? <button className='cursor-pointer 
                            bg-lightBlue
                            text-darkBlue
                            font-semibold 
                            text-center w-[212px] 
                            h-[68px] 
                            outline-none 
                            rounded-full
                            text-xl
                            hover:bg-coral
                            shadow ' 
                            onClick={() => handleSave("", text)}>
                                SHARE
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
                <div className='p-[40px] flex flex-col items-center gap-[20px]'>
                <h2 className='bg-coral text-4xl rounded-md p-[20px] text-vividBlue text-center font-bold italic'>MOST POPULAR POSTS</h2>
                    <Populars setQuery={setQuery}/>
                </div>
            </div>
        </div>
)}
