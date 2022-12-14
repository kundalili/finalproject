import React from 'react'
import { Link } from 'react-router-dom';
import couple from './../../assets/couple.png'
import './../../App.css' 
import Header from './../NavigationBar/Header'

export default function Registration() {
  return (
    <div className=""> 
        <Header />
        <div>
            <img src={couple} alt='couple'></img>
        </div>
        <div className='flex flex-col justify-center items-center my-[30px]'>
            <form className=''>
                <Link to='/registerpreg'>
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
                    Are you a Mother?
                </button>
                </Link>
            </form>
        </div>
        <div className='flex flex-col justify-center items-center my-[30px]'>
            <form className=''>
                <Link to='/registermid'>
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
                    Are you a Midwife?
                </button>
                </Link>
            </form>
        </div>
</div>
  )
}
