import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/joy/Button';

import { motion } from 'framer-motion';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';


export default function Banner () {
 

  return (
  <div className='banner-wrap' > 
    <motion.div className='banner' initial={{scale:0}} whileInView={{scale:1}} viewport={{ once: true }} transition={{type:'tween',  duration: .5, delay:.2}}>
      <div style={{display:'flex', justifyContent:'center' ,flexDirection:' column'}}>
      <div className='banner-title' >
   <h3 style={{whiteSpace:'nowrap'}}>MONTHLY SPECIALS!</h3>
   <div >
   <p style={{textAlign:'left' , paddingTop:'20px'}}>Offer a pack( 20pc) of gummies and 7 grams</p>
   <p style={{textAlign:'left',paddingTop:'5px' }}>of cannabis flower for $49.99</p>
   </div>
   </div>
   <div  className='banner-button' style={{marginTop:'50px', marginLeft:'40px'}}>
   <AwesomeButton type="primary" style={{marginLeft:'45px'}} variant="solid">
     <h2 style={{}}>
ORDER NOW!
</h2>
      </AwesomeButton> 
                          </div>
    </div>
    </motion.div>
    </div>
  )
}