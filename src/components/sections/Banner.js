import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/joy/Button';

import { motion } from 'framer-motion';



export default function Banner () {
 

  return (
<div className='banner_all'>
  <div className='banner-wrap' > 
  <div className='banner_img'> 
  <motion.img animate={{ rotate: 6 }}   transition={{  duration: 2, repeat: Infinity, repeatType: "reverse",ease: "linear" }}
 src="./hot_deal.png" alt="" style={{}}/>
 </div>
    <motion.div className='banner' initial={{scale:0}} whileInView={{scale:1}} viewport={{ once: true }} transition={{type:'tween',  duration: .5, delay:.2}}>
      <div style={{display:'flex', justifyContent:'center' ,flexDirection:' column'}}>
      <div className='banner-title' >
   <h3 style={{whiteSpace:'nowrap'}}>Monthly specials!</h3>
   <div >
   <p style={{textAlign:'left' , paddingTop:'10px'}}>Offer a pack( 20pc) of gummies and 7 grams</p>
   <p style={{textAlign:'left',paddingTop:'5px' }}>of cannabis flower for $49.99</p>
   </div>
   </div>
   <div  className='banner-button' style={{marginTop:'20px'}}>
   <Button variant='solid' style={{marginLeft:'45px', backgroundColor:'#1D0EBE',boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}} size='md'>
     <h2 style={{color:'#fff'}}>
Order now!
</h2>
      </Button> 
                          </div>
    </div>
    </motion.div>
    
    </div>
    </div>
  )
}