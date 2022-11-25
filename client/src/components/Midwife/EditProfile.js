import React from 'react'
import { TextField, Button, Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox, alignProperty, TextareaAutosize }  from '@mui/material'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit'
import axios from 'axios';


export default function EditProfile({changeToFalse}) {

    const {state, dispatch} = useContext(AppContext)

    const [data, setData] = useState({...state.user})
    console.log(data)
    
    const [userToEdit, setUserToEdit] = useState({
        email: '',
        username: '',
        password: ''
      })

      const handleEdit = async () => {

        const response = await axios.patch('/user/edit', userToEdit)
        console.log("🚀 ~ response", response)
  
      }

  return (
    <div>
            <EditProfile /> 
            <div>
            <div className='flex justify-center items-center'>
                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                    placeholder='' value={data.username} 
                    onChange={e => setData({...data, username: e.target.value})} 
                    id="outlined-basic"  label="Username" variant="standard" />
                    <EditIcon onClick={handleEdit} className='mt-3'/>
            </div>
            <div className='flex justify-center items-center'>
                    <TextField lassName='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                    placeholder='' value={data.email} 
                    onChange={e => setData({...data, email: e.target.value})}
                    id="outlined-basic" label="Email" variant="standard" />
                    <EditIcon onClick={handleEdit} className='mt-3'/>
            </div>     
            <div className='flex justify-center items-center'>
                    <TextField lassName='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                    placeholder='' value={data.password} 
                    onChange={e => setData({...data, password: e.target.value})}
                    id="outlined-basic" label="Password" variant="standard" />
                    <EditIcon onClick={handleEdit} className='mt-3'/>
            </div>  
            </div>      
        
    </div>
  )
}

