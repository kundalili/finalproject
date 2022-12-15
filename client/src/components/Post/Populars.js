import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../Context'
import PopularCards from './PopularCards'


export default function Populars({setQuery}) {

    const {state} = useContext(AppContext)
    const [posts, setPosts] = useState([])
    const [text, setText] = useState('')


    useEffect(() => {
        getData()
        const interval = setInterval(() => {
            // The logic of refreshing message info.
            getData()
          }, 180000);
        
        return () => clearInterval(interval);
    }, [])

    const getData = async () => {
        
        const response = await axios.get('/post/populars')
        console.log("🚀 ~ popular post list from MongoDB", response)
        setPosts(response.data.posts)
    }

    const handleSave = async (parentId, text) => {
        let response
        console.log("parent post and text", parentId, text)
        if (text) response = await axios.post('/post/add', {parentId:parentId, userId: state.user._id, text:text})
        
        if (response) getData()
    }
    
    return (
        <div>

        {
            posts?.length 
                ?posts.map((item => <PopularCards  key={item._id} post={item} cb={handleSave} 
                    showPost={(item)=>{setQuery([item, {}])}} userPosts={(item)=>setQuery([{},item])}/>))
                :'No posts to show'
        }
        </div>
)}
