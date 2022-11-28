import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import mother2 from '../assets/footer.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import blog from '../assets/blogger.svg'
import bg_dot from '../assets/background_dot.png'


export default function Footer() {
  return (
<div style={{ backgroundImage:`url(${bg_dot})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",
    height: '83vh', width: '100vw'}} >      
    <footer className='h-[500px]'>
    <div className='newsletter h-[210px] flex flex-col gap-[20px] justify-center items-center'>
          <form>
            <input type="text" className="text-center w-[212px] py-2.5 h-[68px] outline-none rounded-md p-[10px] placeholder-coral" placeholder="Type your email" />
            </form>
            <button  type="submit"
                    className='cursor-pointer 
                    border-2 border-coral
                    bg-white 
                    text-coral 
                    text-center w-[212px] 
                    h-[68px] 
                    rounded-full 
                    hover:text-vividBlue
                    hover:bg-vividBlue 
                    hover:border-vividBlue
                   '>
                    Subscribe 
                    </button>
    </div>
      <div className='flex justify-center'>
        <img className='absolute z-1' src={mother2} alt='pregnant_yoga'/>
        <img className='socialIcon absolute z-2 w-[50px] mt-[100px]'src={facebook} alt='logo'/>
        <img className='socialIcon absolute z-2 w-[50px] mt-[100px] ml-[60px]'src={instagram} alt='logo'/>
        <img className='socialIcon absolute z-2 w-[50px] mt-[100px] ml-[-60px]'src={blog} alt='logo'/>
      </div>
      
      {/* <ul className="listElements p-[10px]" > 
            <Link><li>Blog</li></Link>
            <Link><li>About & Contact</li></Link>
            <Link><li>Work with us</li></Link>
        </ul> */}
        {/* <div className='newsletter p-[10px]'>
            <h3>Newsletter signup</h3>
            <p className="newsletterText">Never miss out on the latest news and updates</p>
        </div>   */}
        <div className='flex justify-center items-center gap-[10px] p-[10px]'>
        {/* <TextField placeholder="Type your email" id="outlined-basic" label="Email" variant="outlined" />
        <Button className='h-[55px]' variant="outlined">Subscribe</Button> */}
        </div>
        <div className="socialIcons flex justify-center items-center gap-[10px] p-[10px]">
        </div>
      </footer>
    </div>
  )
}
