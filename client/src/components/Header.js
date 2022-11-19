import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Login from './Login'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';




export default function Header() {

    const handleRegister = async () => {

        // const response =  await axios.post(
        //     '/user/register', data
        // )
        // console.log("🚀 Registration",  response)
      }

  return (
    <div className='bg-blue-200'>

        <ul className="flex justify-center items-center gap-[20px] p-[30px]" >
            <HomeOutlinedIcon className='cursor-pointer hover:text-blue-700'/>
            <Link to='/mothers' className='cursor-pointer hover:text-blue-700'>For mothers</Link>
            <Link to='/midwifes' className='cursor-pointer hover:text-blue-700'>For midwifes</Link>
            <Link  to='/login'>
                <Button className='' variant="outlined" onClick={handleRegister}>Login</Button>
            </Link>
        </ul>

    </div>
  )
}
