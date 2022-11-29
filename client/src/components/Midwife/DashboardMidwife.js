import React from 'react'
import Header from '../NavigationBar/Header'
import { Link } from 'react-router-dom'
import MidwifeProfile from './MidwifeProfile'


export default function InformationForMidwifes() {
  return (
    <div>
    <div className='flex flex-col justify-center items-center'>
        <div>
        <h1 className='text-[2rem] p-[10px] text-center'>Welcome back, Patricia!</h1>

          <h1 className='text-[2rem] p-[10px] text-center'>How does INA work?</h1>
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
          </ol>
          </div>
      <div className='profileBtn flex flex-col'>
      <div className=''>
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
                      YOUR PROFILE
                </button>
                </Link>
        </div>
        <br></br>
        <div className=''>
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
                        MESSAGES                
              </button>
            </Link>
        </div>
        <br></br>
        <div className=''>
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
                      LOGOUT                
                </button>            
          </Link>
        </div>
        </div>
        </div>
    </div>
  )
}

                  