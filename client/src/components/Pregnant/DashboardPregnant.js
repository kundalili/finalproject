import React, { useEffect } from 'react'
import Header from '../NavigationBar/Header'
import { Link } from 'react-router-dom'
import magnifier from '../../assets/search.svg'
import { useState, useContext } from 'react';
import mobile from '../../assets/mobile.png'
import { AppContext } from '../Context'
import CardPregnant from './CardPregnant';
import axios from 'axios';
import CardMidwife from '../Midwife/CardMidwife'
import CitySelect from '../Selections/CitySelect';
import Button from '../Buttons/Button';

export default function InformationForPregnant(props) {

  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})
  console.log('user is', state.user)
  const [midwifeList, setMidwifeList] = useState([])
  

  return (
    <div className=''>
      <Header />
        <div className='flex flex-col justify-center items-center bg-softBlue'>
              <div>
              <div className='flex justify-center items-center p-[30px]'>
                    <img className='w-[150px] h-[150px] rounded-full object-cover' src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + state.user.photo} alt=''></img>
                    <h2 className='text-[2rem] p-[10px] text-center font-bold text-vividBlue'>Welcome {data.name}!</h2>
              </div>
            {/* <div>
              <h1 className='text-[2rem] p-[10px] text-center text-vividBlue font-semibold '>How does INA work?</h1>
              <ol className='text-[1rem] p-[10px] bg-yellow-100'>
                    <li>1. Find an available midwife in your area</li>
                    <br></br>
                    <li>2. Contact a midwife who will care for you during pregnancy, labor, and even after childbirth</li>
                    <br></br>
                    <li>3. Send non-binding requests to up to five available midwives of your choice</li>
                    <br></br>
                    <li>4. Receive definite responses and feel well cared for</li>
                    <br></br>
                    <li>5. All requests at a glance</li>
                    <br></br>
                    <li>6. Open and already processed requests are displayed with the appropriate status. This way you can keep track.</li>
              </ol>
              </div> */}
              <div>
              <div className='flex flex-row justify-center items-center'>
                  <CardPregnant/>
              </div>
              <CitySelect />
              <Button />
              </div>
            </div>
        </div>
    </div>
      )
}