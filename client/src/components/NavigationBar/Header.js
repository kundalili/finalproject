import React from 'react'
import HeaderLinks from './HeaderLinks';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import './Header.css'


export default function Header() {
    

  return (
    <div>
        <nav className='NavBar'>
          <HeaderMobile />
          <HeaderDesktop />
        </nav>

    </div>
  )
}
