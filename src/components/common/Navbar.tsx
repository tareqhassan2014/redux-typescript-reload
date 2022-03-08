import { Fragment } from 'react';
import './Navbar.css';
import NavMenu from './NavMenu';
import TopNavbar from './TopNavbar';

function Navbar() {
    return (
        <Fragment>
            <TopNavbar></TopNavbar>
            <NavMenu></NavMenu>
        </Fragment>
    );
}

export default Navbar;
