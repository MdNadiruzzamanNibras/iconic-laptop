import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/home'>HOME</Link>
            <Link to ='/reviews'>REVIEWS</Link>
        </nav>
    );
};

export default Header;