import React from 'react'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';
import {BiMessageRoundedAdd} from 'react-icons/bi'
import SendMessage from '../Message/SendMessage'

export default function CardMidwifeListed({data, availability}) {

  const [message, setMessage] = useState(false)
    
  const {state} = useContext(AppContext)

  async function handleMessage(text){
    alert("Message Sent")
    setMessage(false)   
  }

  return (
<>
        <div className='lg:w-[600px] sm:w-[400px]'>
          <div className='flex justify-between p-[10px] items-center bg-vividBlue rounded-t-lg'>
            <h2 className='text-[1.5rem] p-[10px]  text-white font-bold '>Midwife: {data.name}</h2>
            <BiMessageRoundedAdd className='text-white text-4xl' onClick={()=>{setMessage(true)}}/>
          </div>
          <div>
                {
                    message
                    ?<SendMessage  to={data} cb={handleMessage} />
                    :<></>
                }
           </div>
              <div className='bg-white rounded-b-lg p-[20px]'>
                    <h3 className='text-[1rem] p-[10px] text-left  text-greyBlue pl-[15px]'>Midwife Since</h3>
                      <h3 className='font-bold text-[1rem] text-vividBlue pl-[15px] '>{data.since}</h3>
                        <hr className='my-2 mx-auto w-auto h-[2px] bg-greyBlue rounded border-0'></hr>

                    <h2 className='text-[16px] p-[10px] text-left text-greyBlue pl-[15px]'>My Services</h2>
                      <li className='font-bold text-[1rem] text-vividBlue pl-[15px]'>{data.service}</li>
                       <hr className='my-2 mx-auto w-auto h-[2px] bg-greyBlue rounded border-0'></hr>

                    <h2 className='text-[1rem] p-[10px] text-left text-greyBlue pl-[15px]'>Availability</h2>
                      <li className='font-bold text-[1rem] text-vividBlue pl-[15px]'>{data.availability}</li>
                        <hr className='my-2 mx-auto w-auto h-[2px] bg-greyBlue rounded border-0'></hr>

                    <h3 className='text-[1rem] p-[10px] text-left  text-greyBlue pl-[15px]'>City</h3>    
                      <h3 className='font-bold text-[1rem] text-vividBlue pl-[15px] '>{data.city}</h3>
                        <hr className='my-2 mx-auto w-auto h-[2px] bg-greyBlue rounded border-0'></hr>

                    <h3 className='text-[1rem] p-[10px] text-left  text-greyBlue pl-[15px]'>Languages</h3>
                      <li className='font-bold text-[1rem] text-vividBlue pl-[15px]'>{data.language}</li>
                        <hr className='my-2 mx-auto w-auto h-[2px] bg-greyBlue rounded border-0'></hr>

                    <h3 className='text-[1rem] p-[10px] text-left  text-greyBlue pl-[15px]'>About </h3>
                      <h3 className='italic font-semibold text-[1rem] text-vividBlue pb-[20px] pl-[15px]'>{data.about}</h3>

              </div>   
        </div>
    </>  )
}
