import React from 'react'
import { AppContext } from '../Context'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import axios from 'axios';
import { Checkbox, Select, MenuItem, FormControl, InputLabel,TextField, ListItemText, TextareaAutosize }  from '@mui/material'
import Language from '../ProfileDetails/Language';
import City2 from '../ProfileDetails/City2'
import ListItemIcon from "@material-ui/core/ListItemIcon";

const ITEM_HEIGHT = 148;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Profile(props) {
  //CITIES
  const city = [
    'Berlin',
    'Hamburg',
    'München',
    'Köln',
    'Frankfurt',
    'Essen',
    'Dortmund',
    'Stuttgart',
    'Düsseldorf',
    'Bremen',
    'Hannover',
    'Duisburg',
    'Nürnberg',
    'Leipzig',
    'Dresden'
  ];

  //AVAILABILITIES
  const availabilities = [
    'January/2023',
    'February/2023',
    'March/2023',
    'April/2023',
    'May/2023',
    'June/2023',
    'July/2023',
    'August/2023',
    'September/2023',
    'October/2023',
    'November/2022',
    'December/2022'
  ];

  const [selected, setSelected] = useState([]);
  const [myavailability, setMyavailability] = useState([]);
  
  const isAllSelected =
    availabilities.length > 0 && selected.length === availabilities.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === availabilities.length ? [] : availabilities);
      return;
    }
    setSelected(value);
    setData({...data, availability: event.target.value})
  };

  
  
const {state, dispatch} = useContext(AppContext)
const [edited, setEdited] = useState(false);
const [imgUrl, setImgUrl] = useState(state.user.image ? '/images/' + state.user.image : null)
const [file, setFile] = useState(null)

const handleImageChange = (e) => {

      console.log('my photo is', e.currentTarget.files[0])
      const url = URL.createObjectURL(e.currentTarget.files[0])

      setImgUrl(url)
      setFile(e.currentTarget.files[0])
}

  const [data, setData] = useState({...state.user})
  console.log(data)

  const handleSave = async () => {

    const formdata = new FormData()
    
    console.log("🚀 ~ data", data)

    formdata.set('userId', data.userId)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    formdata.set('city', data.city)
    formdata.set('since', data.since)
    formdata.set('service', data.service)
    formdata.set('language', data.language)
    formdata.set('availability', data.availability)
    formdata.set('about', data.about)
    formdata.set('name', data.name)
    formdata.set('photo', data.photo)

    console.log("🚀",  data.city)

    const config = {
        Headers: {'content-type': 'multipart/form-data'}
    } 
    console.log("🚀 data", data)


    const response = await axios.patch('/user/edit', data)

    console.log("🚀 response", response)

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
      <>        
    <div className='text-[2rem]  text-center'>MIDWIFE PAGE</div>
     <div className="flex items-center justify-center">
        <div> 
            <Link path='/infomid'>
            <button onClick={handleSave} type="submit"
                    className='cursor-pointer 
                    border-2 border-vividBlue 
                    text-vividBlue 
                    font-semibold 
                    hover:border-2
                    text-center w-[200px] 
                    h-[68px] 
                    outline-none 
                    rounded-full 
                    hover:text-white
                    hover:bg-vividBlue 
                    hover:border-vividBlue'>UPDATE PROFILE                
             </button> 
             </Link>
        </div>
     </div>
     <div className='flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]'>
      <div className='flex items-center justify-center'>
          <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
          placeholder='' value={data.username} 
          onChange={e => setData({...data, username: e.target.value})}
        //   onChange={e => setEdited(true)}
          id="outlined-basic"  label="Username" variant="standard" />
      </div>
      <div className='flex items-center justify-center'>
          <TextField lassName='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
          placeholder='' value={data.email} 
          onChange={e => setData({...data, email: e.target.value})}
          id="outlined-basic" label="Email" variant="standard" />
      </div>
      <div className='flex items-center justify-center'>
          <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
          placeholder='' value={data.password} 
          onChange={e => setData({...data, password: e.target.value})} 
          id="outlined-basic" label="Password" variant="standard" />
      </div>
      <div className='flex items-center justify-center'>
          <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
          placeholder='' value={data.name} 
          onChange={e => setData({...data, name: e.target.value})} 
          id="outlined-basic" label="Name" variant="standard" />
      </div>
      <div className='flex items-center justify-center'>
          <TextField id="outlined-basic" label="Midwife since" variant="outlined" 
          value={data.since} 
          onChange={e => setData({...data, since: e.target.value})}/>
      </div>
      <div>About me</div>
      <div className='flex items-center justify-center'>
      <TextareaAutosize
        aria-label="minimum height"
        minRows={10}
        placeholder="Tell me more about you..."
        style={{ width: 350 }}
        value={data.about} 
        onChange={e => setData({...data, about: e.target.value})}/>
      </div>
      <div className='flex items-center justify-center'>
        <FormControl className="w-[300px]">
          <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
          <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="all"
            >
              <ListItemIcon>
                <Checkbox
                  checked={isAllSelected}
                />
              </ListItemIcon>
              <ListItemText
                primary="Select All"
              />
            </MenuItem>
            {availabilities.map((availability) => (
              <MenuItem key={availability} value={availability}>
                <ListItemIcon>
                  <Checkbox checked={selected.indexOf(availability) > -1} />
                </ListItemIcon>
                <ListItemText primary={availability} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <City2 city={city} 
        onChange={e => setData({...data, city: e.target.value})}/>
      <Language value={data.language} 
        onChange={e => setData({...data, language: e.target.value})} />
      <label className='cursor-pointer 
          border-2 border-vividBlue 
          text-vividBlue 
          font-semibold 
          hover:border-2
          text-center w-[200px] 
          h-[68px] 
          outline-none 
          rounded-full 
          hover:text-white
          hover:bg-vividBlue 
          hover:border-vividBlue flex justify-center items-center'>
          <input  className='hidden' onChange={handleImageChange} type='file'/>
          Select an image
      </label>
      <img className='w-[300px] h-[300px] rounded-full object-cover' 
        src={imgUrl} alt='profile'/>
      <button onClick={handleSave}>Save Profile</button>
    </div>
  </>
  )
}