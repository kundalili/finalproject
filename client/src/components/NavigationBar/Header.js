import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../../assets/ina_blue.svg'
import menu from '../../assets/menu.svg'
import magnifier from '../../assets/search.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react'
import { AppContext } from '../Context'
import HeaderLinks from './HeaderLinks';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';
import './Header.css'


export default function Header() {
    
    const {state} = useContext(AppContext)

  return (
    <div>
        <nav className='NavBar'>
          <HeaderMobile />
          <HeaderDesktop />
        </nav>

    </div>
  )
}
