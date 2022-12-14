import React from 'react'
import { Link } from 'react-router-dom'
import mother2 from '../assets/yoga.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import blog from '../assets/blogger.svg'
import bg_dot from '../assets/background_dot.png'
import { SocialIcon } from 'react-social-icons';



export default function Footer() {
  return (
      <div style={{ backgroundImage:`url(${bg_dot})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",
          height: '100vh', width: '100vw'}} >      
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
                                  hover:border-vividBlue'>
                                  Subscribe 
                          </button>
                  </div>
                  
                  <div className='footer flex flex-col justify-start gap-[10px] p-[10px]'>
                            
                            <div className='flex justify-center p-[10px] items-center'>
                                    <a className='socialBtn '>
                                      <img className='socialIcon  w-[50px] hover:text-red'src={facebook} alt='logo'/>
                                    </a>
                                    <a className='socialBtn'>
                                        <img className='socialIcon w-[50px]'src={instagram} alt='logo'/>
                                    </a>
                                    <a className='socialBtn'>
                                      <img className='socialIcon w-[50px]'src={blog} alt='logo'/>
                                    </a>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                    <div className='text-xl p-[10px] text-white font-bold'>Made by Oktay & Patricia</div>
                                    <div className='text-l p-[5px] text-white'>All rights are reserved</div>
                                    <div className='text-l p-[5px] text-white'>WDTP#010 2022</div>            
                            </div>
                    </div>
                </footer>
          </div>
  )
}
