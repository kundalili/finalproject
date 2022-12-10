import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import { useNavigate } from 'react-router-dom'
import Header from '../NavigationBar/Header';
import Language from '../ProfileDetails/Language';
import City from '../ProfileDetails/City'
import profileImgP from '../../assets/pregnant.png'

const FormData = require('form-data')


export default function PregnantProfile(props) {

//STATES

    const {state, dispatch} = useContext(AppContext)
    const [edited, setEdited] = useState(false);
    const [imgUrl, setImgUrl] = useState(state.user.image ? '/images/' + state.user.image : null)
    const [file, setFile] = useState(null)
    const [data, setData] = useState({...state.user})

    
    // CITY

const [selectedCity, setSelectedCity] = useState(data?.city?data.city:[]);

//LANGUAGE

const [spokenLanguage, setSpokenLanguage] = useState(data?.language?data.language:[]);

//HANDLE IMAGES

const handleImageChange = (e) => {

    console.log('file is', e.currentTarget.files[0])

    const url = URL.createObjectURL(e.currentTarget.files[0])

    setImgUrl(url)
    setFile(e.currentTarget.files[0])
  }

  // DUE DATE

  

//HANDLE SAVE

  const handleSave = async () => {

    const formdata = new FormData()
    
    console.log("🚀 ~ data", data)

    formdata.set('_id', data._id)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    formdata.set('city', selectedCity)
    formdata.set('duedate', data.duedate)
    formdata.set('language', spokenLanguage)
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
                <Header />
                <div className='bg-softBlue'>
                        <div className='flex justify-center items-center p-[30px]'>
                        <img className='w-[100px] h-[100px] rounded-full object-cover m-[10px]' src={imgUrl} alt=''></img>
                        <div className='text-[2rem] p-[10px] text-center font-bold text-vividBlue'>My Profile</div>
                </div>
                {/* <div className="flex justify-center items-center">
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
                </div> */}

                        {/* <div className="flex justify-center items-center">
                            <div> { edited ? <button onClick={handleSave} type="submit"
                                        className='cursor-pointer 
                                        border-2 border-vividBlue 
                                        text-vividBlue 
                                        font-semibold 
                                        hover:border-2
                                        text-center w-[312px] 
                                        h-[68px] 
                                        outline-none 
                                        rounded-full 
                                        m-[20px]
                                        hover:text-white
                                        hover:bg-vividBlue 
                                        hover:border-vividBlue'>UPDATE PROFILE                
                                        </button> : <div></div> }
                            </div>
                        </div> */}
                     <div className='flex justify-center items-center'>

                        <div className='flex justify-center items-center gap-[20px] flex-col mt-[30px] w-min p-[30px] bg-white'>
                                
                                 {/* USERNAME*/}

                                <div className='flex justify-center items-center'>
                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                    placeholder='' value={data.username} 
                                    onChange={e => setData({...data, username: e.target.value})}
                                    id="outlined-basic"  label="Username" variant="standard" />
                                </div>

                                {/* EMAIL*/}

                                <div className='flex justify-center items-center'>
                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                    placeholder='' value={data.email} 
                                    onChange={e => setData({...data, email: e.target.value})}
                                    id="outlined-basic" label="Email" variant="standard" />
                                </div>

                                {/*PASSWORD*/}

                                <div className='flex justify-center items-center'>
                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                    placeholder='' value={data.password} 
                                    onChange={e => setData({...data, password: e.target.value})} 
                                    id="outlined-basic" label="Password" variant="standard" />
                                </div>

                                {/*NAME*/}

                                <div className='flex justify-center items-center'>
                                    <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                    placeholder='' value={data.name} 
                                    onChange={e => setData({...data, name: e.target.value})}
                                    id="outlined-basic" label="Name" variant="standard" />
                                </div>

                                {/*DUE DATE*/}

                                <div className='flex justify-center items-center'>
                                    <TextField id="outlined-basic" label="Due date" variant="standard" 
                                    value={data.duedate} 
                                    onChange={e => setData({...data, duedate: e.target.value})}
                                    />
                                </div>

                                  {/*CITY*/}
                                  <City selectedCity={selectedCity} setSelectedCity={setSelectedCity}
                                                            onChange={e => setData({...data, city: e.target.value})}/>

                                {/* LANGUAGE */}

                                <Language spokenLanguage={spokenLanguage} setSpokenLanguage={setSpokenLanguage}
                                                      onChange={e => setData({...data, language: e.target.value})} />
                                        

                                    {/* SELECT IMAGE */}
                                <label className='cursor-pointer 
                                        border-2 border-vividBlue 
                                        text-vividBlue 
                                        font-semibold 
                                        hover:border-2
                                        text-center w-[312px] 
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

                         {/* SAVE BUTTON */}

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
        </>
  )
    
}