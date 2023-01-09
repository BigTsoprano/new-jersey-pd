import React from 'react';
import { motion } from 'framer-motion';

import Button from '@mui/joy/Button';


function Ads() {

  return (
    <div className='ads_section'>
        <div className='all_ads'>
        <motion.div viewport={{once:false}} initial={{x:'-10vw'}}   whileInView={{x:0}}
  transition={{ type: 'tween', duration: .4, delay: .3 }}   className='ads_two'>
    <motion.div className='ads_two_button'> 
    <Button style={{backgroundColor:'#1D0EBE', fontStyle:'italic', whiteSpace:'nowrap', fontSize:'20px', color:'#F0F4F8', boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px'}} variant='solid' size='lg' >
 Order delivery
</Button></motion.div></motion.div> 
        <motion.div 
        initial={{x:'10vw'}} 
  whileInView={{x:0}}
  viewport={{once:false}}
  transition={{ type: 'tween', duration:.4, delay:.3 }}   
  className='ads_one'>

  </motion.div>
       
        </div>
        </div>
  )
}

export default Ads