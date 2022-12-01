import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import { useStateValue } from "../cart/StateProvider";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

//import Typography from '@mui/material/Typography';


function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',

  padding: '10px 30px',
  //border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#181818',
  borderRadius: 'none',
 

  '&:hover': {
    backgroundColor: '#009B4E',
    boxShadow: 'none',
    borderRadius: '30px'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#009B4E',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

function Pricebox(priceboxItem) {
    const { price, image, name, id, strain, quantity } = priceboxItem;

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
    <motion.div  initial={{scale:0}}
  whileInView={{scale:1}}
  viewport={{ once: true }} transition={{ duration: .5, type:'spring'}} className='pricebox-strain'>
      <p>{strain}</p>
    </motion.div>
   <div className='swiper-box'  >
       <motion.h1  initial={{scale:0}}
  whileInView={{scale:1}}
  viewport={{ once: true }} transition={{ duration: .5, type:'spring', delay:.3}}  style={{
         whiteSpace:'nowrap'
       }}>{name}</motion.h1>
       <div className='learn_more' >
  
      <Button variant="outlined">
        Open success snackbar
      </Button>
      
        </div>

        <motion.div 
  whileInView={{  y:0}}
  transition={{
    type: "spring",
    stiffness: 60,
    damping: 20,
    delay: .8,
    duration:.4 
  }}
  viewport={{ once: true }} 
 
  initial={{y: 25}}  > 
        
<div className='swiper-content'>
<motion.img whileHover={{ scale: 1.1 }} src={image} alt=''/>
<div className='swiper-price'>
<small>$</small>
<p>{price}</p>
</div>
       <p>{quantity}</p>
         </div>
         <motion.div whileTap={{ scale: .8}} whileHover={{scale:.94}}  transition={{delay: .1}} onClick={handleClick(TransitionUp)} className='pricebox-button'>
         <BootstrapButton variant="contained" disableRipple size='large'  onClick={addToBasket} style={{
          
           display:'flex', 
           margin:'0px auto',
  
            }} startIcon={<AddShoppingCartIcon />} >
              <h3 
            style={{
            fontFamily: 'futura-pt, sans-serif',
            fontStyle:'italic',
            fontWeight:'650'
            
            }}>ADD TO CART</h3>
            </BootstrapButton>
            <Snackbar
          
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ''}
      >
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          successfully added to cart!
        </Alert>
      </Snackbar>
            </motion.div>
            </motion.div>
    </div>
    </motion.div>
  );
}

export default Pricebox;