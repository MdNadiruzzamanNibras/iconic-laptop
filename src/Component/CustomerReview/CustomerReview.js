import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const CustomerReview = ({laptop}) => {
    const{name,review, rating} = laptop
    return (
        <div className='border'>
            <h3 className='text-3xl font-medium'>{name}</h3>
            <p>{review}</p>
            <br />
            <p className='flex'><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar>{rating}</p>
        </div>
    );
};

export default CustomerReview;