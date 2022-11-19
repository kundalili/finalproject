import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios'




export default function Registration() {

    const [data, setData] = useState({
        name:'',
        email:'',
        password:''
    
      })
    
      const handleRegister = async () => {

        const response =  await axios.post(
            '/user/register', data
        )
        console.log("🚀 Registration",  response)

    
      }
  return (
    <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col'>  
        <TextField placeholder='Type your name' value={data.name} onChange={e => setData({...data, name: e.target.value})} id="outlined-basic" label="Name" variant="outlined" />
        <TextField placeholder='Type your email' value={data.email} onChange={e => setData({...data, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" />
        <TextField placeholder='Type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})} id="outlined-basic" label="Password" variant="outlined" />
        <Button className='' variant="outlined" onClick={handleRegister}>Register</Button>
      
    </div>
  )
}
