import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
import PostCard from './PostCard'
import ParentPostCard from './ParentPostCard'
import UserCard from './UserCard'

function Posts() {

    const {state} = useContext(AppContext)

    const [posts, setPosts] = useState([])

    const [text, setText] = useState('')

    const [query, setQuery] = useState([{},{}]) //[selectedPost, selectedUser]
    

    useEffect(() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        getData()

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
        <div className='flex items-center 
        w-full
        gap-[20px] min-h-[100vh] p-[40px] 
        flex-col'>
            {
                query[0]?._id
                ?<ParentPostCard post={query[0]}/>
                :query[1]?._id
                ?<UserCard user={query[0]}/>
                :<></>
            }

            <button onClick={()=>setQuery([{},{}])}>Home</button>
            
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
                    posts.map((item => <PostCard key={item._id} post={item} cb={handleSave} 
                        showPost={(item)=>{setQuery([item, {}])}} userPosts={(item)=>setQuery([{},item])}/>))
                    :
                    'No posts to show'
             }

        </div>
)}
export default Posts;