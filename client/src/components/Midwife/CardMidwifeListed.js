import React from 'react'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';
import {BiMessageRoundedAdd} from 'react-icons/bi'

export default function CardMidwifeListed({data, availability}) {

  return (
<>
        <div className='w-min'>
          <div className='flex justify-between p-[10px] items-center bg-vividBlue rounded-t-lg'>
            <h2 className='text-[1.5rem] p-[10px]  text-white font-bold '>Midwife: {data.name}</h2>
            <BiMessageRoundedAdd className='text-white text-4xl'/>
          </div>
              <div className='bg-white rounded-b-lg p-[20px]'>

                    {/* <h3 className='text-[1rem] p-[10px] text-left text-greyBlue pl-[15px] '>Name</h3>
                    <h3 className='font-bold text-[1rem] text-vividBlue pl-[15px]'>{data.name}</h3> */}

                    <h3 className='text-[1rem] p-[10px] text-left  text-greyBlue pl-[15px]'>Midwife Since</h3>
                    <h3 className='font-bold text-[1rem] text-vividBlue pl-[15px] '>{data.since}</h3>
                    <hr className='my-2 mx-auto w-60 h-[3px] bg-greyBlue rounded border-0'></hr>

                    <h2 className='text-[16px] p-[10px] text-left text-greyBlue pl-[15px]'>My Services</h2>
                    <li className='font-bold text-[1rem] text-vividBlue pl-[15px]'>{data.service}</li>
                    <hr className='my-2 mx-auto w-60 h-[3px] bg-greyBlue rounded border-0'></hr>

                    <h2 className='text-[1rem] p-[10px] text-left text-greyBlue pl-[15px]'>Availability</h2>
                    <li className='font-bold text-[1rem] text-vividBlue pl-[15px]'>{data.availability}</li>
                    <hr className='my-2 mx-auto w-60 h-[3px] bg-greyBlue rounded border-0'></hr>

                        {/* <ul>
                              {availability.map((item, index) => (
                              <li key={index} availability={item}></li> ))}
                            </ul> */}
                    <h3 className='text-[1rem] p-[10px] text-left  text-greyBlue pl-[15px]'>City</h3>    
                    <h3 className='font-bold text-[1rem] text-vividBlue pl-[15px] '>{data.city}</h3>
                    <hr className='my-2 mx-auto w-60 h-[3px] bg-greyBlue rounded border-0'></hr>

                    <h3 className='text-[1rem] p-[10px] text-left  text-greyBlue pl-[15px]'>Languages</h3>
                    <li className='font-bold text-[1rem] text-vividBlue pl-[15px]'>{data.language}</li>
                    <hr className='my-2 mx-auto w-60 h-[3px] bg-greyBlue rounded border-0'></hr>

                    <h3 className='text-[1rem] p-[10px] text-left  text-greyBlue pl-[15px]'>About </h3>
                    <h3 className='italic font-semibold text-[1rem] text-vividBlue pb-[20px] pl-[15px]'>{data.about}</h3>

              </div>   
        </div>
    </>  )
}
