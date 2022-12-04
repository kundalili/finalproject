import React from 'react'
import { AppContext } from '../Context'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import axios from 'axios';
import { Checkbox, Select, MenuItem,OutlinedInput, FormControl, InputLabel,TextField, Button, Box, FormLabel, ListItemText, FormGroup, FormControlLabel, FormHelperText, alignProperty, TextareaAutosize }  from '@mui/material'
import Language from '../ProfileDetails/Language';
import City from '../ProfileDetails/City'
import Services from '../ProfileDetails/Services';
import Availability from './Availability';
import profileImg from '../../assets/midwife.jpeg'
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import CloudinaryWidget from './CloudinaryWidget'


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

async function uploadCloudinary (formData)  {
 
  const data = await fetch(process.env.CLOUD_PATH, {
      method: "POST",
      body: formData
    })
      .then((response) => {
        return response.text();
      })
  console.log("🚀 ~ file: MidwifeProfile.js:30 ~ uploadCloudinary ~ data", data)

  return data
  
}

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
  console.log('e is', e)
        uploadFile(e)
}

async function uploadFile (e) {

      console.log('my photo is', e.currentTarget.files[0])
      const url = URL.createObjectURL(e.currentTarget.files[0])
      const imageUrl = await uploadCloudinary(url)

      setImgUrl(imageUrl)
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
    // formdata.set('photo', data.photo)

    const config = {
        Headers: {'content-type': 'multipart/form-data'}
    } 

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
          <div className='bg-softBlue'>
          <div className='flex justify-center items-center p-[30px]'>
                <img className='w-[100px] h-[100px] rounded-full object-cover m-[10px]' src={profileImg} alt=''></img>
                <div className='text-[2rem] p-[10px] text-center font-bold text-vividBlue'>My Midwife Profile</div>
          </div>
          <div className="flex justify-center items-center">
              <div > 
                  <button onClick={handleSave} type="submit"
                          className='cursor-pointer 
                          border-2 border-vividBlue 
                          text-vividBlue 
                          font-semibold 
                          hover:border-2
                          text-center w-[321px] 
                          h-[68px] 
                          outline-none 
                          rounded-full 
                          hover:text-white
                          hover:bg-vividBlue 
                          hover:border-vividBlue'>Update Profile                
                  </button> 
              </div>
          </div>
                <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center gap-[20px] flex-col mt-[30px] w-min p-[30px] bg-white'>
                          <div className='flex justify-center items-center'>
                              <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                              placeholder='' value={data.username} 
                              onChange={e => setData({...data, username: e.target.value})}
                            //   onChange={e => setEdited(true)}
                              id="outlined-basic"  label="Username" variant="standard" />
                          </div>
                          <div className='flex justify-center items-center'>
                              <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
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
                          <div className='text-[1.5rem]'>About me</div>
                          <div className='flex justify-center items-center'>
                          <TextareaAutosize
                            className='text-[1rem] text-center italic'
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
                          <City city={city} 
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
                      
                      </div>
                      
                  </div>
                  <div className='flex justify-center items-center p-[30px]'> 
                        <button onClick={handleSave} type="submit"
                                className='cursor-pointer 
                                border-2 border-vividBlue 
                                text-vividBlue 
                                font-semibold 
                                hover:border-2
                                text-center w-[321px] 
                                h-[68px] 
                                outline-none 
                                rounded-full 
                                hover:text-white
                                hover:bg-vividBlue 
                                hover:border-vividBlue'>Save                
                        </button> 
                    </div>
                    <CloudinaryWidget />
              </div>
        </>
  )
}

