import React from 'react';
import Button from '@mui/joy/Button';

import { motion } from 'framer-motion';

function Byebanner() {
  return (
    <div className='bye_banner_section'>
        <motion.div initial={{x:'-90vw'}} 
        viewport={{once:false}}
        whileInView={{x:0}}
        transition={{duration:.4, type:'spring', delay:.1, stiffness: 50}}
        className='bye_wrapper'>
        <div className='bye_banner_wrap'>
            <h1>Learn more about ordering online</h1>
            </div>
            <div className='bye_banner_button'>
<Button type='primary'>
    <h3>LEARN MORE</h3>
</Button>
           
        </div>
        </motion.div>
    </div>
  )
}

export default Byebanner