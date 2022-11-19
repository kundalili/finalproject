import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


export default function Logout() {
  const handleLogout = () => {

    // const response =  await axios.post(
    //     '/user/register', data
    // )
    // console.log("🚀 Registration",  response)


  }
  return (
    <div>

            <Link  to='/logout'>
                <Button className='' variant="outlined" onClick={handleLogout}>Logout</Button>
            </Link>
    </div>
  )
}
