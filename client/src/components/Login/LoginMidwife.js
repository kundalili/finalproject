import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import Login_Single from './Login_Single';



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

        navigate('/infomid')

    }

  }
  return (
      <>
        <Login_Single />
  
      </>
)
}

