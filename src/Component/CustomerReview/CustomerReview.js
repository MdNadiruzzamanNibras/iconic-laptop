import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
const CustomerReview = ({laptop}) => {
    const{name,review, rating} = laptop
    return (
        <div className='border-0 w-60 '>
            <h3 className='text-3xl font-medium py-3'>{name}</h3>
            <p>{review}</p>
            <br />
            <p className='text-yellow-500  text-center'><Rating
  placeholderRating={rating}
  emptySymbol={<AiOutlineStar></AiOutlineStar>}
  placeholderSymbol={<AiFillStar></AiFillStar>}
  fullSymbol={<AiFillStar></AiFillStar>}
/></p>
        </div>
    );
};

export default CustomerReview;