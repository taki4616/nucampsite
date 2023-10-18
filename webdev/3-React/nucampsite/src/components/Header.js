import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar dark color='primary'>
                <div className='container'>
                    <NavbarBrand href='/'>
                        <img src={NucampLogo} height='30' width='30' alt='NuCamp Logo' />
                        NuCamp
                    </NavbarBrand>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;