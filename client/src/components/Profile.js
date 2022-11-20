import React from 'react'
import { AppContext } from './Context'
import { useState, useContext } from 'react';


export default function Profile() {
  const {state, dispatch} = useContext(AppContext)

  const [data, setData] = useState({...state.user})
  console.log(data)

  return (
  
    <div className='flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]'>
      <input className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]' value={state.user.username}></input>
    </div>
        
    
  )
}
