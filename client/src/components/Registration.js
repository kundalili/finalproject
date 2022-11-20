import React from 'react'
import { useState, useContext } from 'react';
import { AppContext } from './Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';



export default function Registration() {

  // const {dispatch} = useContext(AppContext)
  const navigate = useNavigate()


    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        type:0

      })
    console.log("🚀 setData", setData)
    
      const handleRegistration = async () => {
        const response = await axios.post('/user/register', data)
        console.log('response is', response)
        navigate('/user')
      //   if (response.data.success) {
      //     dispatch({
      //         type: 'login',
      //         payload: {...response.data.user}
      //     })
      //     navigate('/user')
      // }
      }

      
  return (
    <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col'>  
        <h1 className='text-[1.5rem] p-[10px] text-center'>You haven't used INA before? Create a profile here.</h1>
        <TextField placeholder='Type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})} id="outlined-basic" label="Name" variant="outlined" />
        <TextField placeholder='Type your email' value={data.email} onChange={e => setData({...data, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" />
        <TextField placeholder='Type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})} id="outlined-basic" label="Password" variant="outlined" />
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Type of User</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              >
                <FormControlLabel value={0} onChange={e => setData({...data, type: e.target.value})} control={<Radio />} label="Midwife" />
                <FormControlLabel value={1} onChange={e => setData({...data, type: e.target.value})} control={<Radio />} label="Mother" />

            </RadioGroup>
        </FormControl>
        <Button className='' variant="outlined" onClick={handleRegistration}>Register</Button>  
    
    </div>
  )
}
