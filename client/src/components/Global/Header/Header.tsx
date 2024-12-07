import { Outlet } from 'react-router-dom';
import Navigation from './navigation/Navigation';

function Header() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
}

export default Header;
