import React from 'react'
import { Link } from 'react-router-dom'
import mother2 from '../assets/footer.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import blog from '../assets/blogger.svg'
import bg_dot from '../assets/background_dot.png'
import { SocialIcon } from 'react-social-icons';



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
                                  hover:border-vividBlue'>
                                  Subscribe 
                          </button>
                  </div>
                  
                  <div className='flex justify-center items-center gap-[10px] p-[10px]'>
                         
                          <div className='flex justify-center m-[10px]'>
                                <img className='absolute z-1 ml-[60px]' src={mother2} alt='pregnant_yoga'/>
                            </div>
                            
                            <div className='flex justify-center items-center'>
                                  <a className='socialBtn '>
                                      <img className='socialIcon absolute z-2 w-[50px] mt-[130px] hover:text-red'src={facebook} alt='logo'/>
                                  </a>
                                  
                                <a className='socialBtn'>
                                      <img className='socialIcon absolute z-2 w-[50px] mt-[130px] ml-[60px]'src={instagram} alt='logo'/>
                                      </a>
                                  
                                <a className='socialBtn'>
                                      <img className='socialIcon absolute z-2 w-[50px] mt-[130px] ml-[-60px]'src={blog} alt='logo'/>
                                  </a>
                                  <div className=' absolute z-2  text-white mt-[400px]'>All rights are reserved</div>
                                  <div className=' absolute z-2 text-white mt-[440px]'>Made by Oktay & Patricia</div>
                                  <div className=' absolute z-2 text-white mt-[580px]'>WDTP#010 2022</div>
                                    

                        
                          </div>
                   
                    </div>

                </footer>

          </div>
  )
}
