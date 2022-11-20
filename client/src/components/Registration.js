import React from 'react'
import { useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Registration() {

  const [type, setType] = useState();

  const handleChange = (event) => {
    setType(event.target.value);
  };

    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        type:0

      })
    
      const handleRegister = async () => {

        const response =  await axios.post(
            '/register', data
        )
        console.log("🚀 Registration",  response)

    
      }
  return (
    <div className='flex p-[20px] gap-[20px] justify-center items-center flex-col'>  
        <h1 className='text-[1.5rem] p-[10px] text-center'>You haven't used INA before? Create a profile here.</h1>
        <TextField placeholder='Type your username' value={data.username} onChange={e => setData({...data, username: e.target.value})} id="outlined-basic" label="Name" variant="outlined" />
        <TextField placeholder='Type your email' value={data.email} onChange={e => setData({...data, email: e.target.value})} id="outlined-basic" label="Email" variant="outlined" />
        <TextField placeholder='Type your password' value={data.password} onChange={e => setData({...data, password: e.target.value})} id="outlined-basic" label="Password" variant="outlined" />
        <Box sx={{ minWidth: 120 }}>
          <FormControl className='w-[195px]'>
            <InputLabel id="demo-simple-select-label">Type of User</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={data.type}
                value={1}
                label="Type of user"
                onChange={handleChange}
              >
                <MenuItem value={data.type}>Midwife</MenuItem>
                <MenuItem value={data.type}>Mother</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* <form>
          <label for="user">Type of user</label>
          <select id="cars" name="cars">
            <option value="midwife">Midwife</option>
            <option value="mother">Mother</option>
          </select>
        </form> */}
        <Button className='' variant="outlined" onClick={handleRegister}>Register</Button>  
    
    </div>
  )
}
