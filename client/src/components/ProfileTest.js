import React from 'react'
import { AppContext } from './Context'
import Service from './Midwife/Service';
import { useState, useContext } from 'react';
import axios from 'axios';

import { TextField, Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox}  from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils';




export default function Profile() {
  const {state, dispatch} = useContext(AppContext)

  const [data, setData] = useState({...state.user})
  
  console.log("state and data",state, data)

  const handleSave = async () => {

    const formdata = new FormData()
    
    console.log("🚀 ~ data and state", data, state)

    Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

    formdata.set('_id', data._id)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    formdata.set('city', data.city)
    
    const config = {
        Headers: {'content-type': 'multipart/form-data'}
    } 
    
    const response = await axios.patch('/user/profile', formdata, config)
    console.log("🚀 ~ response", response)

    if (response.data.success) {
        dispatch({
            type: 'login',
            payload: {...response.data.user}
        })
    } else {
        if (response.data.errorId === 1) {
            alert('email and username are mandatory')
        }
    }
        }
  return (
  
    <div className='flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]'>
      
        <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.username} onChange={e => setData({...data, username: e.target.value})} id="outlined-basic"  label="Username" variant="standard" />
        <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.email} onChange={e => setData({...data, email: e.target.value})}id="outlined-basic" label="Email" variant="standard" />
        <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'placeholder='' value={data.type} onChange={e => setData({...data, type: e.target.value})} id="outlined-basic" label="Type of User" variant="standard" />
        <TextField id="outlined-basic" label="City" variant="outlined" />
        <TextField id="outlined-basic" label="Midwife since" variant="outlined" />
        <TextField id="outlined-basic" label="Profile photo" variant="outlined" />
        {/* <TextField id="outlined-basic" label="Password" variant="outlined" /> */}
        
        <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel className='flex flex-wrap flex-row' component="legend">Availability</FormLabel>
        <FormGroup row sx={{ with: 3, display: 'flex', flexDirection:'column', flexWrap:'wrap'}}>
          <FormControlLabel
            control={
              <Checkbox  name="january" />
            }
            label="January"
          />
          <FormControlLabel
            control={
              <Checkbox name="february" />
            }
            label="February"
          />
          <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="March"
          />
           <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="April"
          />
            <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="May"
          />
            <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="June"
          />
            <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="July"
          />
            <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="August"
          />
            <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="September"
          />
            <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="October"
          />
            <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="November"
          />
          <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="December"
          />
        </FormGroup>
      </FormControl>
    </Box>
    <Box sx={{ display: 'flex' }}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel className='flex flex-wrap flex-row' component="legend">Services</FormLabel>
        <FormGroup row sx={{ with: 3, display: 'flex', flexDirection: 'column'}} >
    
          <FormControlLabel
            control={
              <Checkbox name="Prenatal examinations" />
            }
            label="Prenatal examinations"
          />
          <FormControlLabel
            control={
              <Checkbox  name="Postpartum care" />
            }
            label="Postpartum care"
          />
             <FormControlLabel
            control={
              <Checkbox  name="Breastfeeding- and nutrition-advice" />
            }
            label="Breastfeeding- and nutrition-advicey"
          />
           <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="Attending midwife"
          />
            <FormControlLabel
            control={
              <Checkbox  name="" />
            }
            label="Home birth"
          />
           
        </FormGroup>
      </FormControl>
    </Box>
        {/* <div>
          <input type="checkbox" id="january" name="january"></input>
          <label for="january">January</label>
        </div>
        <div>
          <input type="checkbox" id="february" name="february"></input>
          <label for="february">February</label>
        </div><div>
          <input type="checkbox" id="march" name="march"></input>
          <label for="march">March</label>
        </div><div>
          <input type="checkbox" id="april" name="april"></input>
          <label for="january">April</label>
        </div><div>
          <input type="checkbox" id="may" name="may"></input>
          <label for="january">May</label>
        </div><div>
          <input type="checkbox" id="june" name="june"></input>
          <label for="january">June</label>
        </div> */}

    </div>
        
    
  )
}
