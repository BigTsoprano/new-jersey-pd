import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';

function Pricebox(priceboxItem) {
    const { price, image, title, id } = priceboxItem;


  return (
  <div className='pricebox'>
   <div className='swiper-box'  >
       <h1>{title}</h1>
<div className='swiper-content'>
<motion.img whileHover={{ scale: 1.1 }} src={image} alt=''/>
<div className='swiper-price'>
<small>$</small>
<p>{price}</p>
</div>
         </div>
         <Button size='large' style={{backgroundColor:'#181818', display:'flex', margin:'0px auto'}} variant="contained"><h3>ADD TO CART</h3></Button>

    </div>
    </div>
  );
}

export default Pricebox;