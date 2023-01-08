import React from 'react';
import Typed from "react-typed";
import Button from '@mui/joy/Button';


import { motion } from 'framer-motion';
import AvatarReviews from './AvatarReviews';

function Herobox() {
    const heroStrings = [

        'Flowers.',
        'Carts.',
        'Shatter',
        'Edibles'
      ]
    
    
  return (
    <div className='hero-slogans'>
       <div className='hero_type' style={{}}>
          <p style={{position:'fixed'}}> 
         Cannabis&nbsp;
         <Typed 
           strings={heroStrings}
           typeSpeed={55}
           backSpeed={45}
           attr="value"
           loop
           style={{position:'fixed'}}
         >
           <label ></label>
         </Typed>
       </p>
       </div>
      <div className='hero_main_text' style={{}}>
        <h1 style={{textAlign:'center'}}>WEED DELIVERY <br/>TO YOUR DOOR.</h1>
        </div>

       
        <motion.div whileHover={{scale:1.05}} whileTap={{scale:1}} className='hero_btn' style={{}}>
       <Button size="lg" variant='solid' style={{backgroundColor:'#1D0EBE', color:'#fff',        boxShadow:' rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', fontSize:'20px',  fontStyle:'italic'}} >
         Order delivery now
         </Button>
      </motion.div>
        
       <div className='hero_reviews' style={{}}>
       <h4 style={{padding:'10px 10px', color:'#000', fontSize:'18px', fontStyle:'italic', fontWeight:'550', color:'#BCCCDC'}}>Satistfied customers</h4>
      <AvatarReviews style={{ zIndex:'100',}}/>
      </div>
      {/*<motion.div whileHover={{scale:1.2}} style={{color:'#000', display:'flex', flexDirection:'row', padding:' 5px 0'}}>
    <LocalShippingOutlinedIcon sx={{fontSize:'28px'}} /> <h4 style={{paddingLeft:'10px', whiteSpace:'nowrap'}}>Order now and get your product within 24/hrs</h4>
      </motion.div>
     */}
      </div>
  )
}

export default Herobox