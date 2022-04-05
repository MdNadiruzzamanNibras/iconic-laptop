import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div >
            <img className='NotFound' src={require('../images/404-not-found.png')} alt="Laptop" 
            />
        </div>
    );
};

export default NotFound;