import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '@mui/joy/Button';


function Ads() {

  return (
    <div className='ads_section'>
        <div className='all_ads'>
        <div viewport={{once:false}} initial={{x:'-10vw'}}   whileInView={{x:0}}
  transition={{ type: 'tween', duration: .4, delay: .3 }}   className='ads_two'>
    <LazyLoadImage src='/ads_two.png' alt='ads_two' />
   
</div> 

<div className='ads_two_button'> 
    <Button style={{backgroundColor:'#1D0EBE', 
    fontStyle:'italic', 
    whiteSpace:'nowrap', 
    fontSize:'20px', 
    color:'#F0F4F8', 
    }} 
    variant='solid' size='md' >
 Learn more about ordering online
</Button>
</div>
        <div 
         
  className='ads_one'>
<LazyLoadImage src='/ads_one.png' alt='ads_one'  />
  </div>
       
        </div>
        </div>
  )
}

export default Ads