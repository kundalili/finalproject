import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import Header from '../NavigationBar/Header'
import { useNavigate } from 'react-router-dom'



export default function Login_Single(props) {

  const navigate = useNavigate()
  const {dispatch} = useContext(AppContext)


  const [data, setData] = useState({
    username:'',
    password:'',
    type:''
  })

  const handleLogin = async () => {

    if (!data.username || !data.password) {
        alert('Please fill out the fields!')
        return
    }

    const response = await axios.post('/user/login', data)
    console.log("🚀 ~ response", response)

    if (response.data.success) {
        dispatch({
            type: 'login',
            payload: {...response.data.user}
        })
      }   else 
      switch (response.data.error) {
        case 2:
          alert ("username or e-mail not found")
          break;
        case 3:
          alert ("Please approve the mail sent to your address")
          break;
        case 4:
          alert ("username, email or password is wrong")
          break;
        default:
          alert ("Unexpected error please try again or send an e-mail to info@myina.app@gmail.com")
      }
  
    
    if (response.data.user.type===0) navigate('/infomid')
        else navigate('/infopreg')
    
   console.log("login response", response.data)

  }
  return (
      <>
        <Header />
        
        <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col'>  
            <div className='flex justify-center items-center gap-[10px]'>
                <TextField placeholder='Type your username or email' value={data.username} onChange={e => setData({...data, username: e.target.value})} id="outlined-basic" label="Username" variant="outlined" />
            </div>
            <TextField placeholder='Type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})} id="outlined-basic" label="Password" variant="outlined" />
            <button  type="submit" onClick={handleLogin}
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
                        hover:border-vividBlue'>
                        LOGIN
                    </button>
        </div>  
      </>
        )
}
