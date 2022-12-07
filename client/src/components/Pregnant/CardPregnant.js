import React from 'react'
import pregImg from '../../assets/pregnant.png'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';



export default function CardPregnant() {

  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})
  return (
    <>
        <div>
            <h2 className='text-[2rem] p-[20px] text-left bg-vividBlue text-white rounded-t-lg'>My Profile</h2>

              <div className='bg-coral rounded-b-lg p-[20px]'>

                    <h3 className='text-[1.5rem] p-[10px] text-left text-lotionPink pl-[15px] '>Name</h3>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.name}</h3>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>My Due Date </h3>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.duedate}</h3>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>City</h3>    
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px] '>{data.city}</h3>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>Languages</h3>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.language}</h3>
                    
                    <h3 className='text-[1.5rem] p-[10px] text-left  text-lotionPink pl-[15px]'>About </h3>
                    <h3 className='font-bold text-[1.5rem] text-white pb-[20px] pl-[15px]'>{data.about}</h3>

              </div>   
        </div>
    </>
  )
}

// Email
// 2a@.com
// Password
// $2b$10$SrA7jBG5AE7ThyM9NjDFzOeIaV5Ah6rAXvxKPzqKOeRH14blumdLu
// Name
// Aline Lou
// Due date
// 2023-11-10T23:00:00.000Z
// City
// München
// Languages

