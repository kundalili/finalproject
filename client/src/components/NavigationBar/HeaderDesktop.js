import React from 'react'
import './Header.css'
import HeaderLinksDesktop from './HeaderLinksDesktop'

export default function HeaderDesktop() {
  return (
    <div>
        <nav className='Navigation flex justify-center item-center text-vividBlue bg-blue-50 shadow font-bold text-2xl'>
            <HeaderLinksDesktop />
        </nav>
    </div>
  )
}
