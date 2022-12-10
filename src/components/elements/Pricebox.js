import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import { useStateValue } from "../cart/StateProvider";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Rating from '@mui/material/Rating';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import InfoIcon from '@mui/icons-material/Info';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//import Typography from '@mui/material/Typography';


function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}


function Pricebox(priceboxItem) {
    const { price, image, name, id, strain, quantity, thc, cbd } = priceboxItem;

    const [{ basket }, dispatch] = useStateValue([]);

    const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
        item: {
          id:id,
          name:name,
          price:price,
          image:image,
          quantity:quantity

        
    
        },
    
      });
    };

    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
  
    const handleClick = (Transition) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    

  return (
  <motion.div 
  
  className='pricebox'>
 
   <div className='swiper-box'  >
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between' }}>
   <motion.h2  initial={{scale:0}}
  whileInView={{scale:1}}
  viewport={{ once: true }} transition={{ duration: .5, type:'spring', delay:.3}}  style={{
         whiteSpace:'nowrap'
       }}>{name}</motion.h2>
       <motion.div initial={{scale:1}} whileInView={{scale: 1.3}} whileHover={{scale: 1.5}} whileTap={{scale:1.3}}>
  <IconButton  >
     <InfoIcon style={{color:'#292929'}} size='large'/>
     </IconButton>
     </motion.div>
     </div>
   <div className='swiper-content'>
   
<motion.img whileHover={{ scale: 1.1 }} src={image} alt=''/>

<div className='swiper-price'>
<motion.div style={{marginBottom:'10px'}} initial={{scale:0}}
  whileInView={{scale:1}}
  viewport={{ once: true }} transition={{ duration: .5, type:'spring'}} className='pricebox-strain'>
      <p>{strain}</p>
    </motion.div>
    <div style={{display:'flex', flexDirection:'row'}}>
<h4 style={{color:'#292929'}}>THC {thc}</h4>
<h4 style={{paddingLeft:'10px'}}>CBD {cbd}</h4>
</div>
<div>
  <button style={{backgroundColor:'rgb(78, 0, 156)', color:'#ffffff', borderRadius:'0px', border:'none'}}>relaxing</button>
  <button style={{backgroundColor:'rgb(156, 78, 0)', color:'#ffffff', borderRadius:'0px', border:'none'}}>energizing</button>

</div>
  <div style={{}}>
  <Rating name="no-value" precision={0.5} value={null} /> 
   </div>
</div>
</div>
         </div>
       
    
      
<div style={{display:'flex', justifyContent: 'space-between'}}>
  <div style={{ width:'60%', display:'flex', justifyContent:'flex-end', flexDirection:'column', alignItems:'flex-start'}}>
  <p style={{whiteSpace:'nowrap'}}>{quantity} </p>
<div style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}}>
<medium>$</medium>
<h3>{price}</h3>
</div>

</div>
<div >

        <motion.div 
  whileInView={{  scale:1}}
  transition={{
    type: "spring",
   
    delay: .8,
    
  }}
  viewport={{ once: true }} 
 
  initial={{scale:0}}  > 
        
 
       
        <motion.div whileTap={{scale:.9}} onClick={addToBasket}>
         <AwesomeButton type="secondary"  style={{
          
           
       
  
            }}  >
      <ShoppingCartCheckoutIcon size='large' />
      </AwesomeButton>
      </motion.div>
           
           
            </motion.div>
 
  </div>
    </div>
    </motion.div>
  );
}

export default Pricebox;