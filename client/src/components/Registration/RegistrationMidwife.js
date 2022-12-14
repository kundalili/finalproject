import React from 'react'
import {TextField, Button} from '@mui/material'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../NavigationBar/Header';
import RegistrationBtnMidwife from './RegistrationBtnMidwife';
import register from '../../assets/register.png'
import './../../App.css'


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
            navigate('/login')
        } else alert(response.data.error)
    }
  return (
    <div>

          <Header />
          <div className='registrationMid flex justify-center items-end' >
       
                <h2 className="text-4xl bg-vividBlue  font-bold italic text-white p-[20px] absolute 
                  text-center">You are a midwife?
                </h2>
          </div>  
              <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col bg-lotionPink'>   
                  <h1 className='text-[2rem] p-[10px] text-center text-vividBlue'>
                  Sign up now, easily and for free. On the largest midwife platform in Germany.
                  </h1>
                      <input className='h-[68px] w-[300px] text-center placeholder-lotionPink text-xl'
                      placeholder='Username' value={data.username} onChange={e => setData({...data, username: e.target.value})} label="Username"  />
                      <input className='h-[68px] w-[300px] text-center placeholder-lotionPink text-xl'
                      placeholder='Email' value={data.email} onChange={e => setData({...data, email: e.target.value})} label="Email"  />
                      <input className='h-[68px] w-[300px] text-center placeholder-lotionPink text-xl'
                      placeholder='Password' value={data.password} onChange={e => setData({...data, password: e.target.value})} label="Password"  />
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
                          variant="outlined" onClick={handleRegistration}>
                          Registration
                      </button>  
                      <h3 className='text-[2rem] text-vividBlue'>Do you have already an account?</h3>
                      <Link to='/loginpreg'>
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
                              Login
                        </button>
                       </Link>  
            </div>
      </div>

  )
}

  

