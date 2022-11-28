import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/ina_blue.svg'
import menu from '../../assets/menu.svg'
import magnifier from '../../assets/search.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export default function HeaderLinks() {
  return (
    <div >

    <nav  className="flex flex-wrap justify-center items-center h-[510px] gap-[10px] mb-[50px]]" > 
       
        <div>
        {/* <form className='flex flex-row pr-[50px]'>
                <input type="text" className="w-[180px] py-2.5 h-[40px] outline-none border-2 border-vividBlue rounded-full p-[10px] placeholder-lightBlue" placeholder="" />
                <button type="submit" className='ml-[-40px] mb-[30px]'>
                    <img className="cursor-pointer inline-block absolute object-cover" src={magnifier} alt='magnifier'/>
                </button>
        </form> */}
        </div>
        <div>
            <Link to='/'><img className='' src={logo} alt='logo'/></Link>
        </div>
        <Link to='/register' className='cursor-pointer hover:text-blue-700 font-bold'>REGISTRATION</Link>
        <Link to='/login' className='cursor-pointer hover:text-blue-700 font-bold'>LOGIN </Link>
        <div>
            <Link className='cursor-pointer hover:text-blue-700 font-bold' to='/message'>MESSAGES</Link>
        </div>
        <Link className='cursor-pointer hover:text-blue-700 font-bold' to='/'>LOGOUT
            {/* <LogoutIcon className='cursor-pointer hover:text-blue-700'/> */}
        </Link> 
        <div className='cursor-pointer hover:text-blue-700 font-bold'>FAQ</div>
        <div className='cursor-pointer hover:text-blue-700 font-bold'>CONTACT</div>

    </nav>

</div>
  )
}
