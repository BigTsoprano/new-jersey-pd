import React from 'react';
import Avatar from '@mui/joy/Avatar';
import Rating from '@mui/material/Rating';

function Reviewbox(reviewItem) {
const {name, review} = reviewItem;



  return (
    <div className='reviewbox'>
        <div className='review_description'>
          <h2 style={{fontSize:'45px', color:'#334E68'}}>"</h2>
        <p >{review}</p>
        </div>

        <div style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'flex-start'}} className='review_name_avatar'>
        <Avatar size='sm' src='review_1.png' />
        <h2>{name}</h2>
        </div>
      
        <div className='review_stars'>
        <Rating size='small' name="size-small" defaultValue={5} />
        </div>
    </div>
  )
}

export default Reviewbox