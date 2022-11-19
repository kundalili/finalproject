import React from 'react'
import { Link } from 'react-router-dom'
import {SocialIcon} from 'react-social-icons'
import Button from '@mui/material/Button';


export default function Footer() {
  return (
    <div className="bg-blue-200 h-[350px] flex justify-center items-center text-center]">
      <footer>
      <ul className="listElements gap-[10px]" > 
            <Link><li>Blog</li></Link>
            <Link><li>About & Contact</li></Link>
            <Link><li>Work with us</li></Link>
        </ul>
        <div className='newsletter'>
            <h3>Newsletter signup</h3>
            <p className="newsletterText">Never miss out on the latest news and updates</p>
                <input 
                type="text" placeholder='Email address' 
                className='emailInput' 
                // headerValue={headerValue} 
                // onChange={onChange}
                />
             <Button className='bg-white mt-[15px]' />
        </div>  
        <div className="socialIcons gap-[10px]">
                <SocialIcon network="twitter" bgColor="#FFFFFF" className="sm-icon" />
                <SocialIcon network="facebook" bgColor="#FFFFFF" className="sm-icon" />
                <SocialIcon network="instagram" bgColor="#FFFFFF" className="sm-icon"/>
            </div>
      </footer>
    </div>
  )
}
