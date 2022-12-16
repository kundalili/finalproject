import React from 'react'
import { AppContext } from '../Context'
import profileImgP from '../../assets/pregnant.png'
import { useState, useContext } from 'react';
import axios from 'axios';
import { TextField, TextareaAutosize }  from '@mui/material'
import Language from '../ProfileDetails/Language';
import City from '../ProfileDetails/City'


import Header from '../NavigationBar/Header';


const FormData = require('form-data')


export default function PregnantProfile({cb}) {


  // STATES
  
  const {state, dispatch} = useContext(AppContext)

  const [imgUrl, setImgUrl] = useState(state.user.photo ? 'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + state.user.photo : null)
  const [file, setFile] = useState(null)
  const [data, setData] = useState({...state.user})



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
/*     formdata.set('_id', data._id)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    formdata.set('city', data.city)
    formdata.set('since', data.since)
    formdata.set('service', data.service)
    formdata.set('language', data.language)
    formdata.set('availability', data.availability)
    formdata.set('about', data.about)
    formdata.set('name', data.name)
    formdata.set('photo', data.photo) */

    formdata.set('_id', data._id)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    
    let response
    
    console.log("formdata:", formdata)
    if (file) {
      console.log("formdata with image:", formdata)
      const config = {
        Headers: {'content-type': 'multipart/form-data'}
      } 
      formdata.set('image', file)
      console.log("formdata", formdata)
      response = await axios.patch('/user/profile', formdata, config)
      delete data.photo

    }
  

      console.log("updating data", data)
      response = await axios.patch('/user/edit', data)
      cb(true, response)
  

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

  console.log("profile edit data:", data)
  return (
      <>        

        <div className='bg-softBlue'>
            <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center gap-[20px] flex-col mt-[30px] w-min p-[30px] shadow bg-white'>
                    <div className='flex justify-center items-center'>
                        <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                                  placeholder='' value={data.username} 
                                  onChange={e => setData({...data, username: e.target.value})}
                                  id="standard-basic"  label="Username" variant="standard" />
                    </div>

                            
                      {/* NAME */}
                      <div className='flex justify-center items-center'>
                          <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                          placeholder='' value={data.name} 
                          onChange={e => setData({...data, name: e.target.value})} 
                          id="standard-basic" label="Name" variant="standard" />
                      </div>
                                              

                      <div className='flex justify-center items-center'>

                                    <TextField id="outlined-basic" label="Due date" variant="standard" 
                                    value={data.duedate} 
                                    onChange={e => setData({...data, duedate: e.target.value})}
                                    />

                        </div>
                      

        
                      {/*CITY*/}
                      <City data={data.city} 
                            cb={e => setData({...data, city: e})}/>
                        
                                            
                      {/* LANGUAGE */}
                      <Language data={data.language}
                          cb={e => setData({...data, language: e})} />
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
              
              {/* SAVE BUTTON */}
              <div className='flex flex-col justify-center gap-[30px] items-center p-[30px]'> 
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
                            hover:border-vividBlue
                            shadow'>
                            Update Profile                
              </button>   
              <button onClick={()=>cb(false,data)} type="submit"
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
                      hover:border-vividBlue
                      shadow'>
                      Cancel                
              </button>  
        </div>
    </div>
  </>                   

  )
}



