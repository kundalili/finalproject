import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import Header from '../NavigationBar/Header';
import Language from '../ProfileDetails/Language';




export default function PregnantProfile(props) {

  const {state, dispatch} = useContext(AppContext)

  const [data, setData] = useState({...state.user})
  console.log(data)

  const handleSave = async () => {

    const formdata = new FormData()
    
    console.log("🚀 ~ data", data)

    Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

    formdata.set('_id', data._id)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    formdata.set('city', data.city)
    
    const config = {
        Headers: {'content-type': 'multipart/form-data'}
    } 
    
    const response = await axios.patch('/user/profile', formdata, config)
    console.log("🚀 ~ response", response)

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

            <div className='text-[2rem] text-center'>PREGNANT PAGE</div>
            <div className='flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]'>
                <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.username} onChange={e => setData({...data, username: e.target.value})} id="outlined-basic"  label="Username" variant="standard" />
                <TextField lassName='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.email} onChange={e => setData({...data, email: e.target.value})}id="outlined-basic" label="Email" variant="standard" />
                <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.type} onChange={e => setData({...data, type: e.target.value})} id="outlined-basic" label="Type of User" variant="standard" />
                <TextField id="outlined-basic" label="City" variant="outlined" />
                <TextField id="outlined-basic" label="Profile photo" variant="outlined" />
                <label className='cursor-pointer'>
                        <Button variant="outlined">Upload your profile photo</Button>
                        <input type='file' className='hidden'/>
                </label>
                        <img className='w-[300px] h-[300px] rounded-full object-cover' 
                    alt='profile'/>
                <Language />
            </div>
      </>
        )
}