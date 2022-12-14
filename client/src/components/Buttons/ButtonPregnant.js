import React from 'react'
import { Link } from 'react-router-dom'


export default function Button({cb}) {
  return (
    <div>
       <div className='flex flex-col justify-center items-center p-[60px]'>              
                <div className='messagesBtn pb-[40px]'>
                <Link to='/message' className='cursor-pointer font-bold'>
                    <button  type="submit"
                            className='cursor-pointer 
                            border-2 border-vividBlue 
                            text-vividBlue 
                            font-semibold 
                            hover:border-2
                            text-center w-[312px] 
                            h-[68px] 
                            outline-none 
                            rounded-full 
                            hover:text-white
                            hover:bg-vividBlue 
                            hover:border-vividBlue
                            shadow'>
                            Messages                
                    </button>
                    </Link>
                </div>
                <div className=' blogBtn pb-[40px]'>
                <Link to='/blog' className='cursor-pointer font-bold'>
                        <button  type="submit"
                            className='cursor-pointer 
                            border-2 border-vividBlue 
                            text-vividBlue 
                            font-semibold 
                            hover:border-2
                            text-center w-[312px] 
                            h-[68px] 
                            outline-none 
                            rounded-full 
                            hover:text-white
                            hover:bg-vividBlue 
                            hover:border-vividBlue
                            shadow'>
                            Blog             
                    </button>            
                </Link>
                </div>
                <div className='editprofileBtn pb-[40px] flex flex-col'>
                    <button  
                            onClick={()=>cb(true)}
                            type="submit"
                            className='cursor-pointer 
                            border-2 border-vividBlue 
                            text-vividBlue 
                            font-semibold 
                            hover:border-2
                            text-center w-[312px] 
                            h-[68px] 
                            outline-none 
                            rounded-full 
                            hover:text-white
                            hover:bg-vividBlue 
                            hover:border-vividBlue 
                            shadow'>
                            Edit Profile
                    </button>

                </div>
                <div className='pb-[40px] logoutBtn'>
                <Link to='/logout' className='cursor-pointer font-bold'>
                    <button  type="submit"
                            className='cursor-pointer 
                            border-2 border-vividBlue 
                            text-vividBlue 
                            font-semibold 
                            hover:border-2
                            text-center w-[312px] 
                            h-[68px] 
                            outline-none 
                            rounded-full 
                            hover:text-white
                            hover:bg-vividBlue 
                            hover:border-vividBlue
                            shadow
                            '>
                            Logout                
                    </button>            
                </Link>
                </div>
            </div>
    </div>
  )
}
