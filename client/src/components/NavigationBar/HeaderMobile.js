
import React from 'react'
import { useState } from 'react'
import HeaderLinks from './HeaderLinks'
import './Header.css'
import menu from '../../assets/menu.svg'
import {GrClose} from 'react-icons/gr'


export default function HeaderMobile() {

  const [open, setOpen] = useState(false);

  const closeIcon = <GrClose
  alt=""
  className='hamburger right-5 top-6 text-4xl text-vividBlue
  cursor-pointer absolute hover:text-blue-700' 
  onClick={() => setOpen(!open)}
      />

  const hamburgerIcon = <img src={menu} 
            alt=""
            className='hamburger right-5 top-5 
            cursor-pointer absolute hover:text-blue-700' 
            onClick={() => setOpen(!open)}
                />
  return (
    <div>
        <nav className='MobileNavigation flex items-center pb-[30px] bg-coral h-[150px]'>
            {open ? closeIcon : hamburgerIcon}
            {open && <HeaderLinks/>}    

        </nav>

    </div>
  )
}
