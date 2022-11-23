import {Outlet} from 'react-router-dom'
import Header from '../components/Header'

function UserLayout(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default UserLayout;