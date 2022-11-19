import {Outlet} from 'react-router-dom'
import Login from '../components/Login'
function LoginLayout() {
    return (
        <div className='flex items-center 
        w-full
        justify-center gap-[20px] min-h-[100vh] 
        flex-col'>
            <Login />
            <Outlet />
        </div>
    );
}

export default LoginLayout;