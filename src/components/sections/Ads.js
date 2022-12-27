import React from 'react';
import { motion } from 'framer-motion';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Ads() {

  return (
    <div className='ads_section'>
        <div className='all_ads'>
        <motion.div viewport={{once:false}} initial={{x:'-10vw'}}   whileInView={{x:0}}
  transition={{ type: 'tween', duration: .4, delay: .3 }}   className='ads_two'>
    <motion.div className='ads_two_button'> 
    <AwesomeButton  type='primary' >
  <h3 style={{fontStyle:'italic', whiteSpace:'nowrap', fontSize:'18px'}}>ORDER DELIVERY</h3>
</AwesomeButton></motion.div></motion.div> 
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