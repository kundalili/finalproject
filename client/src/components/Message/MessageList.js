import { listItemClasses } from '@mui/material'
import React from 'react'
import {MdMarkEmailRead} from 'react-icons/md'
import arrow from '../../assets/Arrow 1.png'
import readed from '../../assets/Group 3.svg'



export default function MessageList({item}) {
  console.log("🚀 Hello from Message Card, Props and global are :", item)
  function handleClick(){
    
  }
  return (
    <div className=' bg-softRed rounded-xl p-[20px]  text-white'>
      <div className='flex justify-between items-center gap-[20px] p-[10px]'>
          <p className='font-bold text-2xl'>{item.from.username}</p>
          <p >{item.date}</p>
      </div>

      <p className='text-2xl p-[10px]'>{item.text}</p>

      <p className='p-[10px]'>{item.to.username}</p>
      <hr></hr>
      <div className='flex justify-between items-center'>
      {/* <MdMarkEmailRead className='text-2xl ml-[10px] mt-[10px]' onClick={handleClick}/> */}
      <img src={readed} alt='arrow' className='text-white mt-[10px] h-[18px]' />

      <img src={arrow} alt='arrow' className='text-white mt-[10px] h-[18px]' />
      </div>
    </div>
  )
}
