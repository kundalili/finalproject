import React from 'react'
import {TextField, Button} from '@mui/material'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../NavigationBar/Header';
import register from '../../assets/register.png'


export default function RegistrationPregnant() {
    const {dispatch} = useContext(AppContext)
    const navigate = useNavigate()
  
      const [data, setData] = useState({
          username:'',
          email:'',
          password:'',
          type:1
  
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
    <>
        <Header />
              <div className='flex justify-end items-center' >
                {/* <img src={register} alt='' className='w-[1000px]'/> */}
                  <div className='' style={{ backgroundImage:`url(${register})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",
                      height: '70vh', width: '120vw'}}></div>        
                        <h2 className="text-3xl font-bold italic w-[164px] h-[148px] text-white pt-[10px] absolute mr-[20px] text-left top-[270px]">
                            Are you looking for a midwife?
                        </h2>
              </div>  
              <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col bg-lotionPink'> 
          
                    <h1 className='text-[1.5rem] p-[10px] text-center'>
                      Search for midwives and book them online</h1>
                      <input className='h-[68px] w-[300px] text-center placeholder-lotionPink text-xl'
                      placeholder='Username' 
                      value={data.username} 
                      onChange={e => setData({...data, username: e.target.value})} 
                      label="Username"  />
                      <input className='h-[68px] w-[300px] text-center placeholder-lotionPink text-xl'
                      placeholder='Email' 
                      value={data.email} 
                      onChange={e => setData({...data, email: e.target.value})} 
                      label="Email"  />
                      <input className='h-[68px] w-[300px] text-center placeholder-lotionPink text-xl'
                      placeholder='Password' 
                      value={data.password} 
                      onChange={e => setData({...data, password: e.target.value})} 
                      label="Password"  />
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
                                      variant="outlined" onClick={handleRegistration}>Registration
                          </button>  
                          <h3 className='text-[2rem]'>Do you have already an account?</h3>
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
         </>
  )
}