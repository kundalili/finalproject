import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

function ForgotPass(props) {

    const [data, setData] = useState('')

    const handleSubmit = async () => {
        
        const response = await axios.post('/user/forgotpassword', {emailOrUsername: data})
        console.log("🚀 ~ response", response)
    }

    return (
        <div className='flex items-center 
    
        justify-center gap-[20px] h-[400px] p-[40px] 
        flex-col '>
            <h3 className='text-vividBlue text-l font-bold'>Forgot your password?</h3>
            <label>
                <input className='h-[51px] w-[225px] text-center 
                     placeholder-softBlue text-xl'
                       placeholder='Your email/username' label="Forgotten Password"  />            
            </label>
            <Link to='/login'>
            <button type="submit" 
                    className='cursor-pointer 
                    border-2 border-vividBlue 
                    text-vividBlue 
                    font-semibold 
                    hover:border-2
                    text-center w-[235px] 
                    h-[51px] 
                    outline-none 
                    rounded-full 
                    hover:text-white
                    hover:bg-vividBlue 
                    hover:border-vividBlue' 
                    onClick={handleSubmit}>
                    Submit
                </button>
                </Link>
        </div>
    );
}

export default ForgotPass;