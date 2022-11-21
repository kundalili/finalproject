import React from 'react'
import { AppContext } from './Context'
import { useState, useContext } from 'react';
import axios from 'axios';


export default function Profile() {
  const {state, dispatch} = useContext(AppContext)

  const [data, setData] = useState({...state.user})
  console.log(data)

  const handleSave = async () => {

    const formdata = new FormData()
    
    console.log("🚀 ~ data", data)

    // Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

    formdata.set('_id', data._id)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    formdata.set('address', data.address)
    formdata.set('age', data.age)
    
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
  
    <div className='flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]'>
        <p>Username</p>
        <input className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]' value={state.user.username}></input>
        <p>Email</p>
        <input className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.email}/>
        <p>Type of User</p>
        <input className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.type}/>

        

    </div>
        
    
  )
}
