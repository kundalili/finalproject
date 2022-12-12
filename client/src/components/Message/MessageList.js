import React from 'react'
import {MdMarkEmailRead} from 'react-icons/md'
import arrow from '../../assets/Arrow 1.png'
import read from '../../assets/Group 3.svg' //icon for read messages
import unread from '../../assets/Group 4.svg' //icon for unread messages


import {useContext} from 'react'
import { AppContext } from '../Context'

export default function MessageList(props) {

  const {item, newPost, markRead} = props
  const {state} = useContext(AppContext)

  console.log("🚀 Hello from Message Card, Props and global are :", item)

  const bg = item?.from?._id!==state?.user?._id?"bg-lotionPink text-darkGray w-[350px] pr-[50px]  shadow ":"bg-blue-100 w-[350px] text-darkGray ml-[300px] shadow"

  function isoToDate (date) {
   let d = new Date(date)
   return   (d.toDateString() + " " + d.getHours() + ":"+ d.getMinutes())

  }

  return (

    <div className={'rounded-xl p-[20px] '+ bg}>

      <div className=' gap-[20px] p-[10px] text-vividBlue'>
          {
            item?.from?._id!==state?.user?._id
              ?<p className='font-bold text-2xl'>{item?.from?.username}</p>
              :<></>
            }
          <p size="-1">{isoToDate(item.date)}</p>
      </div>

      <p className='text-2xl p-[10px] text-vividBlue'>{item.text}</p>

      <hr></hr>
      
        {/* <MdMarkEmailRead className='text-2xl ml-[10px] mt-[10px]' onClick={handleClick}/> */
          item?.from._id!==state?.user?._id
            ?
            <div className='flex justify-between items-center'>
              <img src={item.tostatus?unread:read} alt='arrow' className='text-white  mt-[10px] h-[18px]' onClick={(e)=>{markRead(item)}}/>
      
              <img src={arrow} alt='arrow' className='text-white mt-[10px] h-[18px]' onClick={(e)=>{newPost(item)}}/>
            </div>
            :<></>
          }

    </div>
  )
}
