import React from 'react'
import {TextField, Button, Box, InputLabel, MenuItem, FormControl, Select, Radio, RadioGroup, FormControlLabel, FormLabel} from '@mui/material'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function RegistrationBtnMidwife() {

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
          navigate('/user')
      }
    }
      
  return (
    <div className='bg-white'>
        <div className='flex flex-col justify-center items-center my-[30px]'>
            <form className=''>
                <button  type="submit"
                    className='bg-vividBlue 
                    text-white 
                    font-semibold 
                    text-center 
                    w-[312px] 
                    mt-[30px] 
                    h-[68px] 
                    outline-none 
                    rounded-full
                    hover:bg-lightBlue  
                    hover:border-lightBlue 
                    hover:border-2'>
                    Are you a Midwife?
                </button>
            </form>
        </div>
    </div>
  )
}
