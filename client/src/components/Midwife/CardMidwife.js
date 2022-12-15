import React from 'react'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';
import './../../App.css'

export default function CardMidwife({availability}) {

  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})

  return (
<>
        <div className='midwifeCard w-[390px] m-[20px] lg:w-[600px]'>
            <h2 className='text-[2rem] p-[20px] text-left bg-vividBlue text-white  shadow rounded-t-lg'>My Profile</h2>

              <div className='bg-coral shadow rounded-b-lg p-[20px]'>

                    <h2 className='text-[1.5rem] p-[10px] text-left text-lotionPink pl-[15px] '>Name</h2>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.name}</h3>

                    <h2 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>Midwife Since</h2>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.since}</h3>

                    <h2 className='text-[1.5rem] p-[10px] text-left text-lotionPink pl-[15px]'>My Services</h2>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.service.toString()}</h3>

                    <h2 className='text-[1.5rem] p-[10px] text-left text-lotionPink pl-[15px]'>Availability</h2>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.availability.toString()}</h3> 

                    <h2 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>City</h2>    
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px] '>{data.city.toString()}</h3>

                    <h2 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>Languages</h2>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.language.toString()}</h3>

                    <h2 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>About </h2>
                    <h3 className='font-bold text-[1.5rem] text-white pb-[20px] pl-[15px]'>{data.about}</h3>

              </div>   
        </div>
    </>  )
}
