import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';


export default function Footer() {
  return (
    <div className="bg-blue-200 h-[350px] flex justify-center items-center text-center]">
      <footer>
      <ul className="listElements p-[10px]" > 
            <Link><li>Blog</li></Link>
            <Link><li>About & Contact</li></Link>
            <Link><li>Work with us</li></Link>
        </ul>
        <div className='newsletter p-[10px]'>
            <h3>Newsletter signup</h3>
            <p className="newsletterText">Never miss out on the latest news and updates</p>
        </div>  
        <div className='flex justify-center items-center gap-[10px] p-[10px]'>
        <TextField placeholder="Type your email" id="outlined-basic" label="Email" variant="outlined" />
        <Button className='h-[55px]' variant="outlined">Subscribe</Button>
        </div>
        <div className="socialIcons flex justify-center items-center gap-[10px] p-[10px]">
                <SocialIcon network="twitter" bgColor="#FFFFFF" className="sm-icon p-[10px]" />
                <SocialIcon network="facebook" bgColor="#FFFFFF" className="sm-icon p-[10px]" />
                <SocialIcon network="instagram" bgColor="#FFFFFF" className="sm-icon p-[10px]"/>
            </div>
      </footer>
    </div>
  )
}
