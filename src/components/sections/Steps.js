import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
//import IconButton from '@mui/joy/IconButton';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
////import Button from '@mui/joy/Button';

function Steps() {
  return (
    <div className='steps_section'>
      <div className='steps_wrapper'>
     
       
        <div style={{display:'flex', flexDirection:'column'}}>
        <div className='steps_title' style={{}}>
   <div className='easy_steps'>
        <h3>Easy steps for delivery</h3>
        </div>
      
        
        <p style={{paddingTop:'5px ', fontSize:'16px', fontWeight:'500', paddingBottom:'10px'}}>Order online and we bring the products to you<br/>or select pick up at our store</p>
       
        </div>
       <motion.div viewport={{ once: false }}
       initial={{ opacity:0, x:-100 }}
       whileInView={{ opacity: 1, x:0 }}
       transition={{ type: "easeIn", duration: .55, delay:.35, type: 'spring'}} 
       className='steps_wrap'>
        
            <div className='step_one'>
              <motion.div className='steps_icon' >

                
                <ShoppingCartOutlinedIcon size='large' style={{paddingRight:'12px', color:'#334E68'}}/>
        
                
                <div>
              <h5 style={{fontStyle:'italic', textAlign:'left', paddingBottom:'5px'}}> Add to cart</h5>
              <p>Browse our online store and add your desired products to your cart. Note that your cart will be reset if you reload or close the application.</p>
              </div>
            {/*<p style={{paddingTop:'9px'}}>Explore and browse our store for your favorite cannabis products in every categlory</p>*/}
            </motion.div>
            </div>
            <div className='step_two'>
            <motion.div className='steps_icon' >
<CreditScoreOutlinedIcon style={{paddingRight:'12px',color:'#334E68'}}/>
             <div style={{display:'flex', flexDirection:'column'}}>
              <h5 style={{fontStyle:'italic',textAlign:'left',paddingBottom:'5px'}}>Checkout</h5>
              <p>Click the checkout button and fill out the required forms. You will be prompted to select pick-up or delivery, and to make payment.</p>
              </div>
            </motion.div>
            </div>
            <div className='step_three'>
            <motion.div className='steps_icon' >
             
            <LocalShippingOutlinedIcon size='large' style={{paddingRight:'12px', color:'#334E68'}}/> 
   
            <div style={{display:'flex', flexDirection:'column'}}>
                    <h5 style={{fontStyle:'italic', textAlign:'left',paddingBottom:'5px'}}>
                        Delivered</h5>
                        <p>Your order will be processed and delivered within 24 hours, or you can pick it up at the store if you chose that option.</p>
                        </div>
                        </motion.div>
                       </div>
            </motion.div>
            </div>
            <motion.div initial={{scale:.6}}
            whileInView={{scale:1}}
            transition={{type:'spring', duration:.7, delay:.4}}>
            <LazyLoadImage 
            src='step_new.png' alt=''/>
            </motion.div>
            </div>
        </div>
  );
}

export default Steps