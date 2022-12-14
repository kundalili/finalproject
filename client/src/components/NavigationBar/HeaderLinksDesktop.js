import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context'
import logo from '../../assets/ina_blue.svg'


export default function HeaderLinksDesktop() {
    const {state, dispatch} = useContext(AppContext)
  return (
    <div >
        <nav className="flex justify-center items-center gap-[20px] p-[10px] h-[100px]" > 
                   
                        <Link to='/'><img className='pr-[100px]' src={logo} alt='logo'/></Link>
                        <Link to='/register' className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral'><div className=''>REGISTRATION</div></Link>
                        {
                            !state.user._id
                                ?<Link to='/login' className='headerLink cursor-pointer font-bold p-[10px] hover:text-coral'>LOGIN</Link>
                                :<></>
                        }
                        
                            <Link className='headerLink cursor-pointer font-bold p-[10px] hover:text-coral' to='/message'>MESSAGES</Link>
                            
                            <Link className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral' to='/post'>POST</Link>
                        {
                            state.user._id
                                ?<Link onClick={()=>{dispatch({ type: 'login', payload: {}})}} 
                                        className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral' to='/'>LOGOUT</Link>
                                :<></>
                        }
                                        
                        {
                            state?.user?.type===0
                                ?<Link to='/infomid' className='headerLink cursor-pointer font-bold p-[10px] hover:text-coral'>PROFILE</Link>
                                : state?.user?.type===1
                            
                                ?<Link to='/infopreg' className='headerLink cursor-pointer font-bold p-[10px] hover:text-coral'>PROFILE</Link>
                                : <></>
                        }
                        <Link className='headerLink cursor-pointer font-bold' to='/'>  
                    <div className='headerLink cursor-pointer font-bold p-[10px]  hover:text-coral'>CONTACT</div></Link> 
        </nav>
    </div>
  )
}