import React from 'react'
import Header from '../NavigationBar/Header'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context'
import MidwifeProfile from './MidwifeProfile'
import { useState, useContext } from 'react';
import profileImg from '../../assets/midwife.jpeg'
import mobile from '../../assets/mobile.png'



export default function InformationForMidwifes(props) {
  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})


  return (
    <div>
    <div className='flex flex-col justify-center items-center bg-softBlue '>
        <div>
        <div className='flex justify-center items-center p-[30px]'>
        <img className='w-[150px] h-[150px] rounded-full object-cover' src={profileImg} alt=''></img>
        <h2 className='text-[2rem] p-[10px] text-left font-bold text-vividBlue'>Welcome {data.name}!</h2>
        {/* <h2 className='text-[2rem] p-[10px] text-center'></h2> */}
        </div>
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
          </div>
      <div className='profileBtn flex flex-col'>
      <div className='p-[15px]'>
          <Link to='/profilemid' className='cursor-pointer font-bold'>
            <button  type="submit"
                    className='cursor-pointer 
                    border-2 border-vividBlue 
                    text-vividBlue 
                    font-semibold 
                    hover:border-2
                    text-center w-[312px] 
                    h-[68px] 
                    outline-none 
                    rounded-full 
                    hover:text-white
                    hover:bg-vividBlue 
                    hover:border-vividBlue'>
                      My Profile
                </button>
                </Link>
        </div>
        <br></br>
        <div className='p-[15px]'>
          <Link to='/message' className='cursor-pointer  font-bold'>
            <button  type="submit"
                      className='cursor-pointer 
                      border-2 border-vividBlue 
                      text-vividBlue 
                      font-semibold 
                      hover:border-2
                      text-center w-[312px] 
                      h-[68px] 
                      outline-none 
                      rounded-full 
                      hover:text-white
                      hover:bg-vividBlue 
                      hover:border-vividBlue'>
                        Messages                
              </button>
            </Link>
        </div>
        <br></br>
        <div className='p-[15px]'>
          <Link to='/logout' className='cursor-pointer font-bold'>
                <button  type="submit"
                      className='cursor-pointer 
                      border-2 border-vividBlue 
                      text-vividBlue 
                      font-semibold 
                      hover:border-2
                      text-center w-[312px] 
                      h-[68px] 
                      outline-none 
                      rounded-full 
                      hover:text-white
                      hover:bg-vividBlue 
                      hover:border-vividBlue'>
                      Logut                
                </button>            
          </Link>
        </div>
        <img className='w-full h-auto object-cover' src={mobile} alt=''></img>

        </div>
        </div>
    </div>
  )
}

                  