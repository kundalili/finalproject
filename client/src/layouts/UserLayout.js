import {Outlet} from 'react-router-dom'
import Header from '../components/NavigationBar/Header'

function UserLayout(props) {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default UserLayout;