import React from 'react';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';


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
  viewport={{ once: true }} transition={{ type: 'tween', duration: .4, delay: .8 }}   className='ads_two'><motion.div whileHover={{scale:1.05}} style={{position:'absolute', top:'75%', right:'50%',}}> <Button style={{ backgroundColor:'#000000', borderRadius:'40px'}} variant="contained" >
  <h3 style={{padding:'5px', fontStyle:'italic'}}>ORDER DELIVERY</h3>
</Button></motion.div></motion.div> 
        </div>
        </div>
  )
}

export default Ads