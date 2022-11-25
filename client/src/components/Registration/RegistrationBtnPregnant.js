import React from 'react'
import { Link } from 'react-router-dom';

export default function RegistrationBtnPregnant() {
  return (
    <div className='bg-white'>
        <div className='flex flex-col justify-center items-center my-[30px]'>
            <form className=''>
            <Link to='/registerpreg'>
                <button type="submit" 
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
                    hover:border-vividBlue'>
                    Looking for a Midwife?
                </button>
              </Link>
            </form>
        </div>
    </div>
  )
}
