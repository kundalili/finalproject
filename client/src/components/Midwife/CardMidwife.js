import React from 'react'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';

export default function CardMidwife({availability}) {

  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})

  return (
<>
        <div className='w-[500px]'>
            <h2 className='text-[2rem] p-[20px] text-left bg-vividBlue text-white rounded-t-lg'>My Profile</h2>

              <div className='bg-coral rounded-b-lg p-[20px]'>

                    <h3 className='text-[1.5rem] p-[10px] text-left text-lotionPink pl-[15px] '>Name</h3>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.name}</h3>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>Midwife Since</h3>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.since}</h3>

                    <h2 className='text-[1.5rem] p-[10px] text-left text-lotionPink pl-[15px]'>My Services</h2>
                    <li className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.service}</li>

                    <h2 className='text-[1.5rem] p-[10px] text-left text-lotionPink pl-[15px]'>Availability</h2>
                        {/* <ul>
                              {availability.map((item, index) => (
                              <li key={index} availability={item}></li> ))}
                            </ul>
                    <li className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.availability}</li> */}

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>City</h3>    
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px] '>{data.city}</h3>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>Languages</h3>
                    <li className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.language}</li>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>About </h3>
                    <h3 className='font-bold text-[1.5rem] text-white pb-[20px] pl-[15px]'>{data.about}</h3>

              </div>   
        </div>
    </>  )
}
