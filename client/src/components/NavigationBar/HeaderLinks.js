import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context'

import logo from '../../assets/ina_blue.svg'
/* import menu from '../../assets/menu.svg'
import magnifier from '../../assets/search.svg'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutIcon from '@mui/icons-material/Logout'; */

export default function HeaderLinks() {
    const {state, dispatch} = useContext(AppContext)
  return (
    <div >
        <nav className="flex flex-wrap justify-center items-start gap-[10px] p-[10px]" > 
                    {/* 
                    HERE IS THE SEARCH FIELD
                    <form className='flex flex-row pr-[50px]'>
                            <input type="text" className="w-[180px] py-2.5 h-[40px] outline-none border-2 border-vividBlue rounded-full p-[10px] placeholder-lightBlue" placeholder="" />
                            <button type="submit" className='ml-[-40px] mb-[30px]'>
                                <img className="cursor-pointer inline-block absolute object-cover" src={magnifier} alt='magnifier'/>
                            </button>
                    </form> */}
                        <Link to='/'><img className='' src={logo} alt='logo'/></Link>
                        <Link to='/register' className='headerLink cursor-pointer font-bold'><div className=''>REGISTRATION</div></Link>
                        {
                            !state.user._id
                                ?<Link to='/login' className='headerLink cursor-pointer font-bold'>LOGIN </Link>
                                :<></>
                        }
                        
                            <Link className='headerLink cursor-pointer font-bold' to='/message'>MESSAGES</Link>
                            
                            <Link className='headerLink cursor-pointer font-bold' to='/post'>POSTS</Link>
                        {
                            state.user._id
                                ?<Link onClick={()=>{dispatch({ type: 'login', payload: {}})}} 
                                        className='headerLink cursor-pointer font-bold' to='/'>LOGOUT</Link>
                                :<></>
                        }
                                        
                        <Link className='headerLink cursor-pointer font-bold' to='/'>
                        <div className='headerLink cursor-pointer font-bold'>FAQ</div></Link> 
                        <Link className='headerLink cursor-pointer font-bold' to='/'>  
                    <div className='headerLink cursor-pointer font-bold'>CONTACT</div></Link> 
        </nav>
    </div>
  )
}
