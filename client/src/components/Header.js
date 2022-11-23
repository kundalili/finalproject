import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import { Link } from 'react-router-dom'
import Login from './Login'
import logo from '../assets/ina_blue.svg'
import menu from '../assets/menu.svg'
import magnifier from '../assets/search.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from 'react'
import { AppContext } from './Context'


export default function Header() {
    
    const {state} = useContext(AppContext)
    const handleRegister = async () => {

        // const response =  await axios.post(
        //     '/user/register', data
        // )
        // console.log("🚀 Registration",  response)
      }

  return (
    <div>

        <ul className="flex justify-around items-center gap-[10px] p-[30px]" >
            {/* <Link to='/'>
                <HomeOutlinedIcon className='cursor-pointer hover:text-blue-700'/>
            </Link> */}
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
            <div>
                <img src={menu} alt='menu'/>
            </div>

            <Link to='/mothers' className='cursor-pointer hover:text-blue-700'>For mothers</Link>
            <Link to='/midwifes' className='cursor-pointer hover:text-blue-700'>For midwifes</Link>
            <Link  to='/regmidwife'>
                <Button className='' variant="outlined" onClick={handleRegister}>Login</Button>
            </Link>
            <Link  to='/'>
                <LogoutIcon className='cursor-pointer hover:text-blue-700'/>
            </Link> 
        </ul>

    </div>
  )
}
