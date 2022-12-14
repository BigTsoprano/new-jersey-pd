import React from 'react';
import { motion } from 'framer-motion';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Ads() {

  return (
    <div className='ads_section'>
        <div className='all_ads'>
        <motion.div 
        initial={{x:'-10vw'}} 
  whileInView={{x:0}}
  viewport={{ once: true }} 
  transition={{ type: 'tween', duration:.4, delay:.8 }}   
  className='ads_one'>
<div className='ads_one_background'></div>
  </motion.div>
        <motion.div initial={{x:'10vw'}}   whileInView={{x:0}}
  viewport={{ once: true }} transition={{ type: 'tween', duration: .4, delay: .8 }}   className='ads_two'>
    <motion.div className='ads_two_button'> 
    <AwesomeButton  type='primary' >
  <h3 style={{fontStyle:'italic', whiteSpace:'nowrap'}}>ORDER DELIVERY</h3>
</AwesomeButton></motion.div></motion.div> 
        </div>
        </div>
  )
}

export default Ads