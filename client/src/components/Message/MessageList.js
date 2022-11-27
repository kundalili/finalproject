import { listItemClasses } from '@mui/material'
import React from 'react'
import {MdMarkEmailRead} from 'react-icons/md'
export default function MessageList({item}) {
  console.log("🚀 Hello from Message Card, Props and global are :", item)
  return (
    <div>
      <MdMarkEmailRead />
      <span>{item.text}</span>
      <span>{item.from.username}</span>
      <span>{item.to.username}</span>
      <span>{item.date}</span>
    </div>
  )
}
