import React from 'react'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';

export default function MiniCardMid() {

  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})
  return (
    <div>
                    <h3 className='font-bold text-[1rem] text-vividBlue pl-[5px]'>Name: {data.name}</h3>
                    <h3 className='font-bold text-[1rem] text-vividBlue pl-[5px]'>Due Date: {new Date(data.duedate).toLocaleDateString('en-US')}</h3>
                    <h3 className='font-bold text-[1rem] text-vividBlue pl-[5px]'>City: {data.city.toString()}</h3>
                    <h3 className='font-bold text-[1rem] text-vividBlue pl-[15px]'>Languages: {data.language.toString()}</h3>
                    <h3 className='font-bold text-[1rem] text-vividBlue pb-[20px] pl-[15px]'>{data.about}</h3>
    </div>
  )
}
