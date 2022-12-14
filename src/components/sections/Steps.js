import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import IconButton from '@mui/joy/IconButton';
import { motion } from 'framer-motion';
import Button from '@mui/joy/Button';

function Steps() {
  return (
    <div className='steps_section'>
      <div className='steps_wrapper'>
       <div className='steps_title' style={{}}>
   <div className='easy_steps'>
        <h4>EASY</h4><h1>STEPS</h1>
        </div>
       <div className='underline-steps'><h2> for cannabis</h2><h5>delivery</h5></div>
        
        <p style={{padding:'10px 0'}}>Order online and pick up at store or have your product deliveried for a small fee</p>
       
        </div>
      
       <div className='steps_wrap'>
        
            <div className='step_one'>
              <motion.div className='steps_icon'initial={{scale:1.1}}whileHover={{x:'3vw'}} >
              <IconButton style={{backgroundColor:'#FFEF0F'}} >
                
                <ShoppingCartOutlinedIcon size='large'/>
                </IconButton>
                </motion.div>
              <h3 style={{whiteSpace:'nowrap',fontStyle:'italic'}}> TO CART</h3>
            {/*<p style={{paddingTop:'9px'}}>Explore and browse our store for your favorite cannabis products in every categlory</p>*/}
            </div>
            <div className='step_two'>
            <motion.div className='steps_icon' initial={{scale:1.1}} whileHover={{x:'3vw'}}>
              <IconButton style={{backgroundColor:'#33EB00'}} variant="solid"><CreditScoreOutlinedIcon/> </IconButton>
              </motion.div>
              <h3 style={{fontStyle:'italic'}}>CHECKOUT</h3>
            </div>
            <div className='step_three'>
            <motion.div className='steps_icon' initial={{scale:1.1}} whileHover={{x:'3vw'}}>
              <IconButton style={{backgroundColor:'#FFD219'}} variant="solid">
            <LocalShippingOutlinedIcon size='large'/> 
            </IconButton>
            </motion.div>
                    <h3 style={{fontStyle:'italic'}}>
                        DELIVERIED</h3>
                        
           
            </div>
            </div>
            </div>
        </div>
  );
}

export default Steps