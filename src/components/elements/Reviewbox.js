import React from 'react';
import Avatar from '@mui/joy/Avatar';
import Rating from '@mui/material/Rating';

function Reviewbox(reviewItem) {
const {name, review} = reviewItem;



  return (
    <div className='reviewbox'>
        <div className='review_avatar'>
        <Avatar />
        </div>
        <div className='review_name'>
        <h2>{name}</h2>
        </div>
        <div className='review_description'>
        <p>{review}</p>
        </div>
        <div className='review_stars'>
        <Rating name="size-medium" defaultValue={5} />
        </div>
    </div>
  )
}

export default Reviewbox