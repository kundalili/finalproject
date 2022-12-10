import React from 'react'
import Header from '../NavigationBar/Header'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context'
import MidwifeProfile from './MidwifeProfile'
import { useState, useContext } from 'react';
import mobile from '../../assets/mobile.png'
import CardMidwife from './CardMidwife'
import ButtonMidwife from '../Buttons/ButtonMidwife';



export default function InformationForMidwifes({imgUrl}) {
  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})


  return (
        <div>
            <Header />
            <div className='flex flex-col justify-center items-center bg-softBlue '>
                  <div>
                        <div className='flex justify-center items-center p-[30px]'>
                            <img className='w-[150px] h-[150px] rounded-full object-cover' src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + state.user.photo} alt=''></img>
                            <h2 className='text-[2rem] p-[10px] text-left font-bold text-vividBlue'>Welcome {data.name}!</h2>
                        </div>
                        <div className='flex flex-col'>
                            <CardMidwife/>
                            <ButtonMidwife />
                        </div>
                  </div>
              </div>
          </div>
        )
}

   {/* <h1 className='text-[2rem] p-[10px] text-center'>How does INA work?</h1>
          <ol className='text-[1rem] p-[10px] bg-yellow-100'>
          <li>1. Enter your area and availabilities</li>
                  <br></br>
                  <li>2. State the postal codes in which you are active and the number of women you can care for each month. You will only receive requests that are in your desired area and for which you have capacity based on the estimated due date.</li>
                  <br></br>
                  <li>3. Accept or deny requests</li>
                  <br></br>
                  <li>4. The searching woman can send a maximum of five requests at a time and fills out an online form with each request. This way, you will receive all the information you need, in order to decide whether you can offer her care or not.</li>
                  <br></br>
                  <li>5. All requests at a glance</li>
                  <br></br>
                  <li>6. Open and already processed requests are displayed with the appropriate status. This way you can keep track.</li>
          </ol> */}               