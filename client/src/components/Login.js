import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState, useContext } from 'react';
import { AppContext } from './Context'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import PregnantProfile from './Pregnant/PregnantProfile';
import MidwifeProfile from './Midwife/MidwifeProfile'


export default function Login(props) {

  const navigate = useNavigate()
  const {dispatch} = useContext(AppContext)


  const [data, setData] = useState({
    username:'',
    email:'',
    password:'',
    type:''

  })

  const handleLogin = async () => {

    if ((!data.email && !data.username) || !data.password) {
        alert('Please fill in the fields!')
        return
    }

    const response = await axios.post('/user/login', data)
    console.log("🚀 ~ response", response)

    if ((response.data.success) && data.type===0 ) 
    
    {
        dispatch({
            type: 'login',
            payload: {...response.data.user}
        })

        navigate('/user')

    } else if ((response.data.success) && data.type===1) {
      navigate('/pregnant')

    } else {

      return alert('something went wrong')
    }

  }
  return (
      <>
        <Header />
        
        <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col'>  
            <div className='flex justify-center items-center gap-[10px]'>
                <TextField placeholder='Type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})} id="outlined-basic" label="Name" variant="outlined" />
                <p> OR </p>
                <TextField placeholder='Type your email' value={data.email} onChange={e => setData({...data, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <TextField placeholder='Type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})} id="outlined-basic" label="Password" variant="outlined" />
            <Button className='' variant="outlined" onClick={handleLogin}>Login</Button>
        
        </div>  
      </>
        )
}
