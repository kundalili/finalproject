import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context'

import logo from '../../assets/ina_blue.svg'
/* import menu from '../../assets/menu.svg'
import magnifier from '../../assets/search.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout'; */

export default function HeaderLinksDesktop() {
    const {state, dispatch} = useContext(AppContext)
  return (
    <div >
        <nav className="flex flex-wrap justify-center items-center gap-[20px] p-[10px] h-[100px]" > 
                   
                        <Link to='/'><img className='pr-[100px]' src={logo} alt='logo'/></Link>
                        <Link to='/register' className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral'><div className=''>Registration</div></Link>
                        {
                            !state.user._id
                                ?<Link to='/login' className='headerLink cursor-pointer font-bold p-[10px] hover:text-coral'>Login </Link>
                                :<></>
                        }
                        
                            <Link className='headerLink cursor-pointer font-bold p-[10px] hover:text-coral' to='/message'>Messages</Link>
                            
                            <Link className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral' to='/post'>Post</Link>
                        {
                            state.user._id
                                ?<Link onClick={()=>{dispatch({ type: 'login', payload: {}})}} 
                                        className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral' to='/'>Logout</Link>
                                :<></>
                        }
                                        
                        <Link className='headerLink cursor-pointer font-bold p-[10px] hover:text-coral' to='/'>
                        <div className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral'>FAQ</div></Link> 
                        <Link className='headerLink cursor-pointer font-bold' to='/'>  
                    <div className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral'>Contact</div></Link> 
        </nav>
    </div>
  )
}