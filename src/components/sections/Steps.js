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
     
       
        <div style={{display:'flex', flexDirection:'column'}}>
        <div className='steps_title' style={{}}>
   <div className='easy_steps'>
        <h3>EASY steps for delivery</h3>
        </div>
      
        
        <p style={{paddingTop:'5px ', fontSize:'16px', fontWeight:'500', paddingBottom:'10px'}}>Order online and pick up at store or have your product deliveried<br/> for a small fee</p>
       
        </div>
       <motion.div 
       className='steps_wrap'>
        
            <motion.div  viewport={{ once: false }}
       initial={{ opacity:0, x:100 }}
       whileInView={{ opacity: 1, x:0 }}
       transition={{ type: "easeIn", duration: .35, delay:.45, type: 'spring'}} className='step_one'>
              <motion.div className='steps_icon' >

                
                <ShoppingCartOutlinedIcon size='large' style={{paddingRight:'12px', color:'#334E68'}}/>
        
                
                <div>
              <h5 style={{fontStyle:'italic', textAlign:'left', paddingBottom:'5px'}}> ADD TO CART</h5>
              <p>Browse our online store and select your product for cart. cart will be reset if user reloads or closes the application</p>
              </div>
            {/*<p style={{paddingTop:'9px'}}>Explore and browse our store for your favorite cannabis products in every categlory</p>*/}
            </motion.div>
            </motion.div>
            <motion.div viewport={{ once: false }}
       initial={{ opacity:0, x:100 }}
       whileInView={{ opacity: 1, x:0 }}
       transition={{ type: "easeIn", duration: .35, delay:.65, type: 'spring'}} className='step_two'>
            <motion.div className='steps_icon' >
<CreditScoreOutlinedIcon style={{paddingRight:'12px',color:'#334E68'}}/>
             <div style={{display:'flex', flexDirection:'column'}}>
              <h5 style={{fontStyle:'italic',textAlign:'left',paddingBottom:'5px'}}>CHECKOUT</h5>
              <p>Click checkout button and fill forms to checkout. Payment menu will be prompt and select pick up or delivery</p>
              </div>
            </motion.div>
            </motion.div>
            <motion.div viewport={{ once: false }}
       initial={{ opacity:0, x:100 }}
       whileInView={{ opacity: 1, x:0 }}
       transition={{ type: "easeIn", duration: .35, delay:.85}}className='step_three'>
            <motion.div className='steps_icon' >
             
            <LocalShippingOutlinedIcon size='large' style={{paddingRight:'12px', color:'#334E68'}}/> 
   
            <div style={{display:'flex', flexDirection:'column'}}>
                    <h5 style={{fontStyle:'italic', textAlign:'left',paddingBottom:'5px'}}>
                        DELIVERIED</h5>
                        <p>Congrats! you have completed the nessesary forms and payment has been processes. Your order will be processed and deliveried within 24hrs</p>
                        </div>
                        </motion.div>
                        </motion.div>
            </motion.div>
            </div>
            <img src='step_new.png' alt=''/>
            </div>
        </div>
  );
}

export default Steps