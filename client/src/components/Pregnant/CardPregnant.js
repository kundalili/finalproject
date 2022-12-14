import React from 'react'
import pregImg from '../../assets/pregnant.png'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';



export default function CardPregnant() {

  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})

  console.log('DUE DATE IS', data.duedate)
  return (
    <>
        <div>
              <h2 className='text-[1.5rem] font-bold flex w-[700px] justify-center items-center p-[20px] text-left bg-vividBlue text-white rounded-t-lg shadow'>My Profile</h2>
              <div className='bg-coral shadow w-[700px] rounded-b-lg p-[20px]'>

                    <h3 className='text-[1.5rem] p-[10px]  text-left text-darkRed pl-[15px] '>Name</h3>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.name}</h3>
                    
                    <h3 className='text-[1.5rem] p-[10px] text-left  text-darkRed pl-[15px]'>My Due Date </h3>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{new Date(data.duedate).toLocaleDateString('en-US')}</h3>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-darkRed pl-[15px]'>City</h3>    

                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px] '>{data.city.toString()}</h3>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-darkRed pl-[15px]'>Languages</h3>
                    <h3 className='font-bold text-[1.5rem] text-white pl-[15px]'>{data.language.toString()}</h3>

                    <h3 className='text-[1.5rem] p-[10px] text-left  text-darkRed pl-[15px]'>About </h3>
                    <h3 className='font-bold text-[1.5rem] text-white pb-[20px] pl-[15px]'>{data.about}</h3>

              </div>   
        </div>
    </>
  )
}


