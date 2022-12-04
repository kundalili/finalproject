import { listItemClasses } from '@mui/material'
import React from 'react'
import {MdMarkEmailRead} from 'react-icons/md'
export default function MessageList({item}) {
  console.log("🚀 Hello from Message Card, Props and global are :", item)
  function handleClick(){
    
  }
  return (
    <div>
      <MdMarkEmailRead onClick={handleClick}/>
      <span>{item.text}</span>
      <p></p>
      <span>{item.from.username}</span>
      <span>{item.to.username}</span>
      <span>{item.date}</span>
    </div>
  )
}
