import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from '@mui/joy/Button';
import IconButton from '@mui/material/IconButton';

import { styled } from '@mui/material/styles';
//import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import { useStateValue } from "../cart/StateProvider";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';


import InfoIcon from '@mui/icons-material/Info';


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
    const [variant, setVariant] = React.useState('plain');

    const [isVisible, setVisible] = useState(false);
  return (

 
    

  <motion.div 
  className='pricebox'
 
  >
       <AnimatePresence mode="popLayout" initial={true}>
        {isVisible && (
            <motion.div
            key="modal"
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    //position:'relative',
                    zIndex:'26',
                    backgroundColor: "#C4C6FF",

                }}
                initial={{ x:'50vw' }}
                animate={{ x: 0 }}
                transition={{ duration: .3, ease: 'easeIn'}}
                exit={{ x: '50vw' }}
            >
              <button onClick={() => setVisible(false)} >close</button>
              <div style={{display:'flex', flexDirection:'row'}}>
<h4 style={{color:'#292929'}}>THC {thc}</h4>
<h4 style={{paddingLeft:'10px'}}>CBD {cbd}</h4>
</div>
            </motion.div>
        )}

</AnimatePresence >

 <div style={{display:'flex', flexDirection:'column'}}>
 <div className='pricebox_img' style={{height:'200px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#E6E6FF'}}>
      
 <motion.img style={{width:'auto', maxHeight:'130px'}} whileHover={{ scale: 1.1 }} src={image} alt=''/>
 </div>


   <div className='swiper-content'>
     <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
     <div style={{display:'flex'}}>
<motion.h2  initial={{scale:0}}
  whileInView={{scale:1}}
  viewport={{ once: true }} transition={{ duration: .5, type:'spring', delay:.3}}  style={{
         whiteSpace:'nowrap'
       }}>{name}</motion.h2>
      
       </div>
   <motion.div style={{marginBottom:'5px', display:'flex', flexDirection:'row', justifyContent:'space-between'}} initial={{scale:0}}
  whileInView={{scale:1}}
  viewport={{ once: true }} transition={{ duration: .5, type:'spring'}} className='pricebox-strain'>
      <p>{strain}</p>
  </motion.div>

 
</div>

 
<p style={{whiteSpace:'nowrap'}}>{quantity} </p>


   
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:'12px'}}>

    
    <motion.div  style={{marginTop:'-10px'}}>
<Button variant="plain" style={{color:'#486581'}} onClick={() => setVisible(!isVisible)} >
Learn more
     </Button>

            </motion.div>
    

    <motion.div 
  whileInView={{  scale:1}}
  transition={{
    type: "spring",
   
    delay: .8,
    
  }}
  viewport={{ once: true }} 
 
  initial={{scale:0}}
  style={{}}  > 
        
 
       
        
        <Button  onClick={addToBasket} variant="solid" sx={{backgroundColor:'#1D0EBE', color:'#fff', marginTop:'-10px'}}>
          
  
      ${price} <AddShoppingCartIcon  style={{ fontSize:'15px' }}/>
    
      </Button>
      </motion.div>
      </div>

  {/*<div style={{}}>
  <Rating name="no-value" precision={0.5} value={null} /> 
   </div>*/}
  </div>

         
            </div>

     
       
    
      




</motion.div>

  );
}

export default Pricebox;