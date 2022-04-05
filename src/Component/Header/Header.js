import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
        <nav >
            <CustomLink className='mr-9' to='/home'>HOME</CustomLink>
            <CustomLink className='mr-9' to ='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='mr-9' to ='/dashBoard'>DASHBOARD</CustomLink>
            <CustomLink className='mr-9' to ='/blogs'>BLOGS</CustomLink>
            <CustomLink className='mr-9' to ='/about'>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;