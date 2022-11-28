
import React from 'react'
import { useState } from 'react'
import HeaderLinks from './HeaderLinks'
import './Header.css'
import menu from '../../assets/menu.svg'
import { TfiClose } from 'react-icons/tfi'
import { Link } from 'react-router-dom'
import logo from '../../assets/ina_blue.svg'


export default function HeaderMobile() {

  const [open, setOpen] = useState(false);

  const closeIcon = <TfiClose
  alt=""
  className='hamburger right-5 top-6 text-4xl
  cursor-pointer absolute' 
  onClick={() => setOpen(!open)}
      />

  const hamburgerIcon = <img src={menu} 
            alt=""
            className='hamburger right-5 top-5 
            cursor-pointer absolute' 
            onClick={() => setOpen(!open)}
                />
  return (
    <div>
       
        <nav className='MobileNavigation flex pb-[30px] bg-coral h-[150px]'>
            {open ? closeIcon : hamburgerIcon}
            {open && <HeaderLinks className=''/>}    

        </nav>

    </div>
  )
}
