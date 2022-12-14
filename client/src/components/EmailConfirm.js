import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import {useEffect} from 'react'
import bgDotted from './../assets/background_dot.png'

function EmailConfirm(props) {
    
    const {token} = useParams()

    const navigate = useNavigate()

    useEffect(() => {

        async function getData() {

            const response = await axios.post('/user/emailconfirm', {token})
            console.log("🚀 ~ response", response)

            if (response.data.success) {

                response.data.type===0
                  ?setTimeout(() => navigate('loginmid'), 3000)
                  :setTimeout(() => navigate('loginpreg'), 3000)
            }
        }

        getData()
    }, [])

    return (

        <div className=" emailConfirm w-full text-4xl text-vividBlue flex justify-center items-center p-[100px]">
        <div>
            <p className="text-center">Thank you for registering</p>
            <p>Please wait while verifying your email</p>   

        </div>      
            {/* <p className="text-center">Thank you for registering</p>
            <br />
            <p>Please wait while verifying your email</p>
            <br /> */}
            {/* Your token {token} */}
        </div>
    );
}

export default EmailConfirm;