import React from 'react'
import {TextField, Button} from '@mui/material'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../NavigationBar/Header';
import RegistrationBtnMidwife from './RegistrationBtnMidwife';

export default function RegistrationMidwife() {
    const {dispatch} = useContext(AppContext)
    const navigate = useNavigate()
  
      const [data, setData] = useState({
          username:'',
          email:'',
          password:'',
          type:0
  
        })
      
        const handleRegistration = async () => {
          const response = await axios.post('/user/register', data)
          console.log('response is', response)
  
          if (response.data.success) {
            dispatch({
                type: 'login',
                payload: {...response.data.user}
            })
            navigate('/profilemid')
        }
    }
  return (
    <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col'>  
        <Header />
        <h1 className='text-[1.5rem] p-[10px] text-center'>You are a midwife? </h1>
          <h3 className='text-[1rem] p-[10px] text-center'>Sign up now, easily and for free. On the largest midwife platform in Germany.</h3>
            <TextField placeholder='Type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})} id="outlined-basic" label="Name" variant="outlined" />
            <TextField placeholder='Type your email' value={data.email} onChange={e => setData({...data, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" />
            <TextField placeholder='Type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})} id="outlined-basic" label="Password" variant="outlined" />
            <button  type="submit"
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
                          hover:border-vividBlue'
                          variant="outlined" onClick={handleRegistration}>REGISTRATION
                          </button>  
              <h3 className='text-[2rem]'>Do you have already an account?</h3>
                    <Link to='/loginmid'>
                      <button  type="submit" 
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
                  </Link>  
        </div>
  )
}
