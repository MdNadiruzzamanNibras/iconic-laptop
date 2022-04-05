import React from 'react';
import { Link } from 'react-router-dom';
import CustomerReview from '../CustomerReview/CustomerReview';
import useReview from '../Hooks/useReview';

const Home = () => {
    const [laptops, setLaptop] = useReview()
    return (
        <div>
            <section className='md:grid md:grid-cols-2 gap-7'>
            <div>
                <h2 className='text-7xl font-extrabold my-4'>Performance power 
                <br /> <span className='text-blue-600'>for maximum flex</span></h2>
                <p> Everything you love in a Galaxy PC, and more. Galaxy Book Flex2 ⍺ sits at the top of its class with high-quality features to match. Equipped with our latest technology, innovative design, vivid display and a high-speed processor that'll dazzle your senses while exceeding all expectations.</p>
                <button className='bg-slate-200 py-3 px-9 my-10'>Live demo</button>
            </div>
          
           <div>
           <img src={require('../images/Galaxy_Book_Flex2_Alpha.jpg')} alt="Laptop" 
            />
          
        </div>
       
        </section>
        <section className='mx-12'>
            <h2  className='text-5xl font-medium my-10'>Customer Reviews({laptops.slice(0, 3).length})</h2>
            <div className='md:grid md:grid-cols-3 '>
            {
                laptops.slice(0, 3).map(laptop=> <CustomerReview key={laptop.id} laptop={laptop}></CustomerReview>)
            }
            </div>
            <Link to='/reviews'><button>reviews all</button></Link>
        </section>
        </div>
    );
};

export default Home;