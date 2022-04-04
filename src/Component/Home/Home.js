import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div>
                <h2 className='text-7xl font-extrabold my-4'>Performance power 
                <br /> <span className='text-blue-600'>for maximum flex</span></h2>
                <p> Everything you love in a Galaxy PC, and more. Galaxy Book Flex2 ⍺ sits at the top of its class with high-quality features to match. Equipped with our latest technology, innovative design, vivid display and a high-speed processor that'll dazzle your senses while exceeding all expectations.</p>
            </div>
          
           <div>
           <img src={require('../images/Galaxy_Book_Flex2_Alpha.jpg')} alt="Laptop" 
            />
           </div>
        </div>
    );
};

export default Home;