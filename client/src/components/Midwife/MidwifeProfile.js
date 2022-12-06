import React from 'react'
import { AppContext } from '../Context'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import axios from 'axios';
import { Checkbox, Select, MenuItem, OutlinedInput, FormControl, InputLabel,TextField, Button, Box, FormLabel, ListItemText, FormGroup, FormControlLabel, FormHelperText, alignProperty, TextareaAutosize }  from '@mui/material'
import Language from '../ProfileDetails/Language';
import City from '../ProfileDetails/City'
import Services from './Services';
import profileImg from '../../assets/midwife.jpeg'
import Availability from './Availability'

const FormData = require('form-data')

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


export default function Profile() {


  // STATES
  
  const {state, dispatch} = useContext(AppContext)
  const [edited, setEdited] = useState(false);
  const [imgUrl, setImgUrl] = useState(state.user.photo ? 'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + state.user.photo : null)
  const [file, setFile] = useState(null)
  const [data, setData] = useState({...state.user})
    

// CITY

const [selectedCity, setSelectedCity] = useState(data?.city?data.city:[]);


//SERVICES


const [myService, setMyService] = useState(data?.service?data.service:[]);
console.log("🚀 myService", myService)

//LANGUAGE

const [spokenLanguage, setSpokenLanguage] = useState(data?.language?data.language:[]);


// AVAILABILITY

const [myavailability, setMyavailability] = useState(data?.availability?data.availability:[]);
console.log("🚀 ~ file: Availability.js:35 ~ Availability ~ myavailability", myavailability)

console.log("data is at the beginning", data)

//HANDLE IMAGES

  const handleImageChange = (e) => {

    console.log('file is', e.currentTarget.files[0])

    const url = URL.createObjectURL(e.currentTarget.files[0])

    setImgUrl(url)
    setFile(e.currentTarget.files[0])
  }

//HANDLE SAVE

  const handleSave = async () => {

    const formdata = new FormData()
    
    console.log("🚀 ~ data", data)

    formdata.set('_id', data._id)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    formdata.set('city', selectedCity)
    formdata.set('since', data.since)
    formdata.set('service', myService)
    formdata.set('language', spokenLanguage)
    formdata.set('availability', myavailability)
    formdata.set('about', data.about)
    formdata.set('name', data.name)
    formdata.set('photo', data.photo)

    let response
    
    console.log("formdata:", formdata)
    if (file) {
      console.log("formdata with image:", formdata)
      const config = {
        Headers: {'content-type': 'multipart/form-data'}
      } 
      formdata.set('image', file)
      response = await axios.patch('/user/profile', formdata, config)
      if (response._id) setData(response)
    }
    else {
      const mydata = {};
      formdata.forEach((value, key) => (mydata[key] = value))
      console.log("updating mydata", mydata)
      response = await axios.patch('/user/edit', mydata)
      setData(response)
    }
  

    console.log("🚀 updated datas are", response)

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
                  <img className='w-[100px] h-[100px] rounded-full object-cover m-[10px]' src={imgUrl} alt=''></img>
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

                            {/* USERNAME*/}

                                <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                placeholder='' value={data.username} 
                                onChange={e => setData({...data, username: e.target.value})}
                              //   onChange={e => setEdited(true)}
                                id="standard-basic"  label="Username" variant="standard" />
                                </div>
                                    
                                     {/* EMAIL*/}

                                        <div className='flex justify-center items-center'>
                                            <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                            placeholder='' value={data.email} 
                                            onChange={e => setData({...data, email: e.target.value})}
                                            id="standard-basic" label="Email" variant="standard" />
                                        </div>
                                                   {/* PASSWORD*/}

                                                <div className='flex justify-center items-center'>
                                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                                    placeholder='' value={data.password} 
                                                    onChange={e => setData({...data, password: e.target.value})} 
                                                    id="standard-basic" label="Password" variant="standard" />
                                                 </div>

                                                  {/* NAME */}

                                                      <div className='flex justify-center items-center'>
                                                          <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                                          placeholder='' value={data.name} 
                                                          onChange={e => setData({...data, name: e.target.value})} 
                                                          id="standard-basic" label="Name" variant="standard" />
                                                      </div>
                                                      
                                                      {/* SINCE */}

                                                            <div className='flex justify-center items-center'>
                                                                <TextField id="standard-basic" label="Midwife since" variant="standard" 
                                                                value={data.since} 
                                                                onChange={e => setData({...data, since: e.target.value})}/>
                                                            </div>
                              
                                                                  {/* SERVICES */}
                                                                  <Services myService={myService} setMyService={setMyService}
                                                                    onChange={e => setData({...data, service: e.target.value})} />
                                                                <div>
                                                              
                                                            </div>

                                                            {/*CITY*/}
                                                        <City selectedCity={selectedCity} setSelectedCity={setSelectedCity}
                                                            onChange={e => setData({...data, city: e.target.value})}/>
                                                          
                                                          {/* Availability */}

                                                    <Availability myavailability={myavailability} setMyavailability={setMyavailability}
                                                    onChange={e => setData({...data, availability: e.target.value})}/>
                                                   
                                                    {/* LANGUAGE */}

                                                <Language spokenLanguage={spokenLanguage} setSpokenLanguage={setSpokenLanguage}
                                                      onChange={e => setData({...data, language: e.target.value})} />
                                                      
                                                      {/* ABOUT */}

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

                                          {/* SELECT IMAGE */}
                                          
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
                            </div>

                            {/* SAVE BUTTON */}
                      
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
                  <div>
              </div>
        </>
  )
}
