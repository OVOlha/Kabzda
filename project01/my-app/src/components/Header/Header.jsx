import React from 'react';
import headerClass from './Header.module.css';



const Header = () => {
    return <header className={headerClass.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png' alt="site-logo">
        </img>
    </header>

}

export default Header;