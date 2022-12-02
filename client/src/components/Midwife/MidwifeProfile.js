import React from 'react'
import { AppContext } from '../Context'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import axios from 'axios';
import { Checkbox, Select, MenuItem,OutlinedInput, FormControl, InputLabel,TextField, Button, Box, FormLabel, ListItemText, FormGroup, FormControlLabel, FormHelperText, alignProperty, TextareaAutosize }  from '@mui/material'
import Language from '../ProfileDetails/Language';
import EditIcon from '@mui/icons-material/Edit'
import EditProfile from './EditProfile';
import City2 from '../ProfileDetails/City2'
import Services from '../ProfileDetails/Services';
import Availability from './Availability';
// import TestCheckbox from "../TestCheckbox";

const genre = [
  "Action/Adventure",
  "Adult Animation",
  "Classics",
  "Comedy",
  "Documentary",
  "Drama",
  "Horror",
  "Kids/Family",
  "Music",
  "Romance",
  "Sci-Fi",
  "Suspense/Thriller",
  "Unscripted",
  "Other"
];

const contenttype = ["Series", "Movies", "Special", "Live Sports"];

const programtype = ["Acquired", "Original"];


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
// const [selectedCity, setSelectedCity] = useState()

// const handleChange = (event) => {
//         setSelectedCity(event.target.value);
//       };


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

const [myavailability, setMyavailability] = useState([]);
const [selected, setSelected] = useState()

const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setMyavailability(typeof value === 'string' ? value.split(',') : value,
  )
  // console.log("🚀 ~ file: Availability.js:42 ~ handleChange ~ value", value)
}
  
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
     <div className="flex justify-center items-center">
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
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.username} 
                  onChange={e => setData({...data, username: e.target.value})}
                //   onChange={e => setEdited(true)}
                  id="outlined-basic"  label="Username" variant="standard" />
              </div>
              <div className='flex justify-center items-center'>
                  <TextField lassName='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.email} 
                  onChange={e => setData({...data, email: e.target.value})}
                  id="outlined-basic" label="Email" variant="standard" />
              </div>
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.password} 
                  onChange={e => setData({...data, password: e.target.value})} 
                  id="outlined-basic" label="Password" variant="standard" />
              </div>
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.name} 
                  onChange={e => setData({...data, name: e.target.value})} 
                  id="outlined-basic" label="Name" variant="standard" />
              </div>
              <div className='flex justify-center items-center'>
                  <TextField id="outlined-basic" label="Midwife since" variant="outlined" 
                  value={data.since} 
                  onChange={e => setData({...data, since: e.target.value})}/>
              </div>
              <div>About me</div>
              <div className='flex justify-center items-center'>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={10}
                placeholder="Tell me more about you..."
                style={{ width: 350 }}
                value={data.about} 
                onChange={e => setData({...data, about: e.target.value})}/>
                </div>
              {/* <Services  /> */}
              {/* <Availability value={data.availability} 
                  onChange={e => setData({...data, availability: e.target.value})}/> */}

<div>
      <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Availability</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={myavailability}
        onChange={handleChange}
        input={<OutlinedInput label="Language" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {availabilities.map((availability, idx) => (
          <MenuItem
            key={idx}
            value={availability}
            name={idx}
          >
            <Checkbox checked={myavailability.indexOf(availability) > -1} />
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
             {/* <TestCheckbox data={genre} label="Genre" />
             <TestCheckbox data={contenttype} label="Content Type" />
             <TestCheckbox data={programtype} label="Program Type" /> */}
          </div>
        </>
  )
}

