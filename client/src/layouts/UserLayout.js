import {Outlet} from 'react-router-dom'

function UserLayout(props) {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default UserLayout;