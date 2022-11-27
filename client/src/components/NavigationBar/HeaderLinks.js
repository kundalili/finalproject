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
    <div>

    <ul className="flex flex-wrap justify-around items-center gap-[10px] p-[30px]" > 
        <div>
            <Link to='/'><img src={logo} alt='logo'/></Link>
        </div>
        <div>
        <form className='flex flex-row pr-[50px]'>
                <input type="text" className="w-[180px] py-2.5 h-[40px] outline-none border-2 border-vividBlue rounded-full p-[10px] placeholder-lightBlue" placeholder="" />
                <button type="submit" className='ml-[-40px] mb-[30px]'>
                    <img className="cursor-pointer inline-block absolute object-cover" src={magnifier} alt='magnifier'/>
                </button>
        </form>
        </div>
        <Link to='/registerpreg' className='cursor-pointer hover:text-blue-700'>For mothers</Link>
        <Link to='/registermid' className='cursor-pointer hover:text-blue-700'>For midwifes</Link>
        <div>
            <Link to='/message'>MESSAGES</Link>
        </div>
        <Link  to='/'>
            <LogoutIcon className='cursor-pointer hover:text-blue-700'/>
        </Link> 
    </ul>

</div>
  )
}
