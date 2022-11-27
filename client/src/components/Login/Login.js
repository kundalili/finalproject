import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div> 
        <div className='flex flex-col justify-center items-center my-[30px]'>
            <form className=''>
                <Link to='/loginpreg'>
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
                        hover:border-vividBlue'>
                        LOGIN AS MOTHER
                    </button>    
                </Link>
            </form>
        </div>
        <div className='flex flex-col justify-center items-center my-[30px]'>
            <form className=''>
                <Link to='/loginpreg'>
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
                        hover:border-vividBlue'>
                        LOGIN AS MIDWIFE
                    </button>    
                </Link>
            </form>
        </div>
</div>
  )
}