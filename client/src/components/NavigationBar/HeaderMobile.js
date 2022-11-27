
import React from 'react'
import { useState } from 'react'
import HeaderLinks from './HeaderLinks'
import './Header.css'
import menu from '../../assets/menu.svg'
import {RiEyeCloseLine} from 'react-icons/ri'


export default function HeaderMobile() {

  const [open, setOpen] = useState(false);

  const closeIcon = <RiEyeCloseLine 
  alt=""
  className='hamburger right-5 top-12 text-4xl text-vividBlue
  cursor-pointer absolute hover:text-blue-700' 
  onClick={() => setOpen(!open)}
      />

  const hamburgerIcon = <img src={menu} 
            alt=""
            className='hamburger right-5 top-10 
            cursor-pointer absolute hover:text-blue-700' 
            onClick={() => setOpen(!open)}
                />
  return (
    <div>
        <nav className='MobileNavigation flex items-center bg-coral h-[150px]'>
            {open ? closeIcon : hamburgerIcon}
            {open && <HeaderLinks/>}    

        </nav>

    </div>
  )
}
