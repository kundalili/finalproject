import {FaPlusCircle} from 'react-icons/fa'
import {useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { AppContext } from './Context'
import Card from './Card'



export default function Message (props){

        const {userId, message, datefrom, dateto} = props
    
        useEffect(() => {
            getData()
        }, [])
    
        const getData = async () => {
           const response = await axios.get('/message/list',{"$or": [{ "from": userId },{ "to": userId }]})
            
            console.log("🚀 ~ response", response)
        }
    
    
        function handleSave () {
            savePost("", text)    
        }
    
        const savePost = async (parentId, post) => {
            
            console.log("new post", post)
            console.log("user", userId)
            console.log("parent post", parentId)
            
            const response = await axios.post('/post/add', {
                text: post?post:text,
                owner: userId,
                parentPostID: parentId?parentId:"0"
            })
            
    
            if (response.data.success) {
    
                dispatch({
                    type: 'addPost',
                    payload: response.data.post
                })
            }
            console.log("🚀 ~ response", response)
    
            setModalOpen(false)
        }
    
        console.log('state is', state)
        return (
            <div className='flex items-center 
            w-full
            gap-[20px] min-h-[100vh] p-[40px] 
            flex-col'>
                <FaPlusCircle className='text-[2rem]' onClick={() => setModalOpen([modalOpen[0], true])}/>
                 {
                    Id? <div>
    
    
                        </div>
                    
                    :
                        state.posts.length ?
                            state.posts.map((item => <Card key={item._id} post={item} cb={savePost}/>))
                            :
                            'No posts to show'
                }
                    
                {
                    modalOpen[1] ?
                        <div className='absolute top-[calc(50vh - 200px)] 
                            flex items-between justify-center
                            flex-col
                            p-[20px]
                        left-[calc(50vw - 200px)] w-[400px] h-[400px] bg-slate-300'>
                            <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
    
                            <div className='mt-auto'>
                                <button onClick={() => setModalOpen([modalOpen[0], false])}>Close</button>
                                <button onClick={handleSave}>Save</button>
                            </div>
                        </div>      
                    : null
                }   
            </div>
    )
}