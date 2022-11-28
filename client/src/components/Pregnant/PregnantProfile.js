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

export default function PregnantProfile(props) {


const {state, dispatch} = useContext(AppContext)
const [edited, setEdited] = useState(false);
const [imgUrl, setImgUrl] = useState(state.user.image ? '/images/' + state.user.image : null)
const [file, setFile] = useState(null)

const handleImageChange = (e) => {

      console.log('file is', e.currentTarget.files[0])

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
    formdata.set('duedate', data.duedate)
    formdata.set('language', data.language)
    formdata.set('name', data.name)
    formdata.set('photo', data.photo)


    const config = {
        Headers: {'content-type': 'multipart/form-data'}
    } 
    console.log("🚀 data", data)


    const response = await axios.put('/user/1/edit', data)

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
    <div className='text-[2rem]  text-center'>MIDWIFE PAGE</div>
     <div className="dropdown h-[100px] bg-red-300 flex justify-center items-center">
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
                    hover:text-white
                    hover:bg-vividBlue 
                    hover:border-vividBlue'>UPDATE PROFILE                
                    </button> : <div></div> }
        </div>
     </div>
     <div className='flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]'>
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.username} 
                  onChange={e => setData({...data, username: e.target.value})}
                  onChange={e => setEdited(true)}
                  id="outlined-basic"  label="Username" variant="standard" />
              </div>
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.email} 
                  onChange={e => setData({...data, email: e.target.value})}
                  onChange={e => setEdited(true)}
                  id="outlined-basic" label="Email" variant="standard" />
              </div>
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.password} 
                  onChange={e => setData({...data, password: e.target.value})} 
                  onChange={e => setEdited(true)}
                  id="outlined-basic" label="Password" variant="standard" />
              </div>
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.name} 
                  onChange={e => setData({...data, name: e.target.value})}
                  onChange={e => setEdited(true)} 
                  id="outlined-basic" label="Name" variant="standard" />
              </div>
              <div className='flex justify-center items-center'>
                  <TextField id="outlined-basic" label="Due date" variant="outlined" value={data.duedate} 
                  onChange={e => setData({...data, duedate: e.target.value})}
                  onChange={e => setEdited(true)}
                  />
              </div>
                      
              <City value={data.city} 
                  onChange={e => setData({...data, city: e.target.value})}
                  onChange={e => setEdited(true)}
                  />
              <Language value={data.language} 
                  onChange={e => setData({...data, language: e.target.value})}
                  onChange={e => setEdited(true)}
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
                    <input  className='hidden' 
                    onChange={handleImageChange} 
                    onChange={e => setEdited(true)}
                    type='file'
                    />
                    Select an image
            </label>
            <img className='w-[300px] h-[300px] rounded-full object-cover' 
                src={imgUrl} alt=''/>
        
          </div>
        </>
  )
    
}