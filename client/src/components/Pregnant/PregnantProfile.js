import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import Header from '../NavigationBar/Header';
import Language from '../ProfileDetails/Language';
import City from '../ProfileDetails/City'
import profileImgP from '../../assets/pregnant.png'



export default function PregnantProfile(props) {


    const {state, dispatch} = useContext(AppContext)
    const [edited, setEdited] = useState(false);
    const [imgUrl, setImgUrl] = useState(state.user.image ? '/images/' + state.user.image : null)
    const [file, setFile] = useState(null)
    
    const handleImageChange = (e) => {
    
          console.log('my photo is', e.currentTarget.files[0])
          const url = URL.createObjectURL(e.currentTarget.files[0])
    
          setImgUrl(url)
          setFile(e.currentTarget.files[0])
    }
    
      const [data, setData] = useState({...state.user})
      console.log(data)
    
      const handleSave = async () => {
    
        const formdata = new FormData()
        
        console.log("🚀 ~ data", data)
    
        formdata.set('userId', data.userId)
        formdata.set('username', data.username)
        formdata.set('email', data.email)
        formdata.set('city', data.city)
        formdata.set('since', data.since)
        formdata.set('service', data.service)
        formdata.set('language', data.language)
        formdata.set('availability', data.availability)
        formdata.set('about', data.about)
        formdata.set('name', data.name)
        formdata.set('photo', data.photo)
    
        const config = {
            Headers: {'content-type': 'multipart/form-data'}
        } 
    
        const response = await axios.patch('/user/edit', data)
    
        console.log("🚀 response", response)
    
        if (response.data.success) {
            dispatch({
                type: 'login',
                payload: {...response.data.user}
            })
        } else {
            if (response.data.errorId === 1) {
                alert('email and username are mandatory')
            }
        }
    }
  return (
    <>        
                <div className='bg-softBlue'>
                        <div className='flex justify-center items-center p-[30px]'>
                        <img className='w-[100px] h-[100px] rounded-full object-cover m-[10px]' src={profileImgP} alt=''></img>
                        <div className='text-[2rem] p-[10px] text-center font-bold text-vividBlue'>My Profile</div>
                </div>
                <div className="flex justify-center items-center">
                    <div > 
                        <button onClick={handleSave} type="submit"
                                className='cursor-pointer 
                                border-2 border-vividBlue 
                                text-vividBlue 
                                font-semibold 
                                hover:border-2
                                text-center w-[321px] 
                                h-[68px] 
                                outline-none 
                                rounded-full 
                                hover:text-white
                                hover:bg-vividBlue 
                                hover:border-vividBlue'>Update Profile                
                        </button> 
                    </div>
                </div>

                        {/* <div className="flex justify-center items-center">
                            <div> { edited ? <button onClick={handleSave} type="submit"
                                        className='cursor-pointer 
                                        border-2 border-vividBlue 
                                        text-vividBlue 
                                        font-semibold 
                                        hover:border-2
                                        text-center w-[312px] 
                                        h-[68px] 
                                        outline-none 
                                        rounded-full 
                                        m-[20px]
                                        hover:text-white
                                        hover:bg-vividBlue 
                                        hover:border-vividBlue'>UPDATE PROFILE                
                                        </button> : <div></div> }
                            </div>
                        </div> */}
                     <div className='flex justify-center items-center'>

                        <div className='flex justify-center items-center gap-[20px] flex-col mt-[30px] w-min p-[30px] bg-white'>
                                <div className='flex justify-center items-center'>
                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                    placeholder='' value={data.username} 
                                    onChange={e => setData({...data, username: e.target.value})}
                                    id="outlined-basic"  label="Username" variant="standard" />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                    placeholder='' value={data.email} 
                                    onChange={e => setData({...data, email: e.target.value})}
                                    id="outlined-basic" label="Email" variant="standard" />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                    placeholder='' value={data.password} 
                                    onChange={e => setData({...data, password: e.target.value})} 
                                    id="outlined-basic" label="Password" variant="standard" />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                    placeholder='' value={data.name} 
                                    onChange={e => setData({...data, name: e.target.value})}
                                    id="outlined-basic" label="Name" variant="standard" />
                                </div>
                                <div className='flex justify-center items-center'>
                                    <TextField id="outlined-basic" label="Due date" variant="outlined" value={data.duedate} 
                                    onChange={e => setData({...data, duedate: e.target.value})}
                                    />
                                </div>
                                        
                                <City value={data.city} 
                                    onChange={e => setData({...data, city: e.target.value})}
                                    />
                                <Language value={data.language} 
                                    onChange={e => setData({...data, language: e.target.value})}
                                    />
                                <label className='cursor-pointer 
                                        border-2 border-vividBlue 
                                        text-vividBlue 
                                        font-semibold 
                                        hover:border-2
                                        text-center w-[312px] 
                                        h-[68px] 
                                        outline-none 
                                        rounded-full 
                                        hover:text-white
                                        hover:bg-vividBlue 
                                        hover:border-vividBlue flex justify-center items-center'>
                                        <input  className='hidden' onChange={handleImageChange} type='file'/>
                                        Select an image
                                    </label>
                                    <img className='w-[300px] h-[300px] rounded-full object-cover' 
                                        src={imgUrl} alt='profile'/>
                            </div>
                         </div>
                         <div className='flex justify-center items-center p-[30px]'> 
                        <button onClick={handleSave} type="submit"
                                className='cursor-pointer 
                                border-2 border-vividBlue 
                                text-vividBlue 
                                font-semibold 
                                hover:border-2
                                text-center w-[321px] 
                                h-[68px] 
                                outline-none 
                                rounded-full 
                                hover:text-white
                                hover:bg-vividBlue 
                                hover:border-vividBlue'>Save                
                        </button> 
                    </div>
                    </div>
        </>
  )
    
}