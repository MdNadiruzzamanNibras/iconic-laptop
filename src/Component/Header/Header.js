import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav >
            <Link className='mr-9' to='/home'>HOME</Link>
            <Link className='mr-9' to ='/reviews'>REVIEWS</Link>
            <Link className='mr-9' to ='/dashBoard'>DASHBOARD</Link>
            <Link className='mr-9' to ='/blogs'>BLOGS</Link>
            <Link className='mr-9' to ='/about'>ABOUT</Link>
        </nav>
    );
};

export default Header;