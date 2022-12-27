import React from 'react';
import Typed from "react-typed";
import Button from '@mui/joy/Button';


import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
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
       <div style={{position:'fixed', top:'19%',left:'38%'}}>
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
      <div style={{display:'flex', flexDirection:'row', position:'fixed',top:'22%', right:'34%'}}>
        <h1 style={{textAlign:'center'}}>WEED DELIVERY <br/>TO YOUR <br/>   DOOR.</h1>
        </div>

       
        <motion.div whileHover={{scale:1.05}} whileTap={{scale:1}} className='hero_btn' style={{position:'fixed', bottom:'17%', right:'36%', zIndex:'0'}}>
       <Button size="lg" variant='solid' style={{backgroundColor:'#1D0EBE', color:'#fff',        boxShadow:' rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px', fontSize:'20px',  fontStyle:'italic'}} >
         ORDER DELIVERY NOW!
         </Button>
      </motion.div>
        
       <div style={{display:'flex', flexDirection:'column', position:'fixed', bottom:'7%', right:'10%'}}>
       <h4 style={{padding:'10px 10px', color:'#000', fontSize:'18px', fontStyle:'italic', fontWeight:'550', color:'#243B53'}}>Satistfied customers</h4>
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