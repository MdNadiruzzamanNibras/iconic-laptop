import React from 'react';
import useReview from '../Hooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
const Reviews = () => {
    const [laptops, setLaptop] = useReview()
    return (
        <div>
           <h1 className='text-6xl'>What our customer say</h1>
           <div className='md:grid md:grid-cols-3 '>
               {
                   laptops.map(laptop=> <ReviewDetails key={laptop.id} laptop={laptop}></ReviewDetails>)
               }
           </div>
          
        </div>
    );
};

export default Reviews;