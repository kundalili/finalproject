import {Outlet} from 'react-router-dom'
import Header from '../components/Header';

function LoginLayout(props) {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default LoginLayout;