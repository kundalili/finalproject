import React from 'react'
import Header from '../NavigationBar/Header'
import { Link } from 'react-router-dom'
import magnifier from '../../assets/search.svg'




export default function InformationForPregnant() {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
        <div>
        <h1 className='text-[2rem] p-[10px] text-vividBlue font-semibold text-center'>Find your midwife</h1>

        <form className='flex flex-row justify-center items-center pr-[50px]'>
                <input type="text" className="w-[180px] py-2.5 h-[40px] outline-none border-2 border-vividBlue rounded-full p-[10px] placeholder-lightBlue" placeholder="" />
                <button type="submit" className='ml-[-40px] mb-[30px]'>
                    <img className="cursor-pointer inline-block absolute object-cover" src={magnifier} alt='magnifier'/>
                </button>
        </form>
        </div>
            <div>
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
              </div>
          <div className='profileBtn flex flex-col'>
          <div className=''>
              <Link to='/profilepreg' className='cursor-pointer  font-bold'>
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
              <Link to='/logout' className='cursor-pointer  font-bold'>
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