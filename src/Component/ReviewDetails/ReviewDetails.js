import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import Rating from 'react-rating';

const ReviewDetails = ({laptop}) => {
    const {name, review, rating} = laptop
    return (
        <div className='border'>
            <h3 className='text-3xl font-medium'>{name}</h3>
            <p>{review}</p>
            <br />
            <p className='flex'><Rating readonly starRating= {rating}/>{rating}</p>
        </div>
    );
};

export default ReviewDetails;