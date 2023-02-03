import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from '@mui/joy/Button';

//import Box from '@mui/material/Box';
//import Stack from '@mui/material/Stack';
import { useStateValue } from "../cart/StateProvider";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import Modal from '@mui/joy/Modal';
//import ModalClose from '@mui/joy/ModalClose';
//import Typography from '@mui/joy/Typography';
//import Sheet from '@mui/joy/Sheet';
import ModalDialog from '@mui/joy/ModalDialog';
import LinearProgress from '@mui/material/LinearProgress';
import CancelIcon from '@mui/icons-material/Cancel';

//import Typography from '@mui/material/Typography';

 
function Pricebox({ price, image, name, id, strain, quantity, thc, cbd, description }) {
  

const [open, setOpen] = useState(false);


   const handleClick = () => {
    setOpen(false);
    addToBasket();
  };

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


  
 

  return (

 

  <motion.div 
  className='pricebox'
 
  >
      



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

 <div style={{display:'flex', flexDirection:'row-reverse', justifyContent:'space-between'}}>

<Rating name="size-small" defaultValue={5} size="small" />
<p style={{whiteSpace:'nowrap'}}>{quantity} </p>

</div>
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:'12px'}}>

    
    <motion.div  style={{marginTop:'-10px'}}>
<Button onClick={() => setOpen(true)} variant="plain" style={{color:'#3525E6'}}  >
Learn more
     </Button>
     <motion.div   >
     <Modal open={!!open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="layout-modal-title"
          aria-describedby="layout-modal-description"
          layout='fullscreen'
          variant="solid"
          
         style={{background: 'rgba(16,42,67,0.4)', backdropFilter: 'blur(10px) saturate(100%)', display:'flex', justifyContent:'center', alignItems:'center'}}
        >
     
          
          <motion.div className='product_modal' >
       
            <button className='modal_exit' onClick={() => setOpen(false)} style={{ backgroundColor:'transparent', border:'none', cursor:'pointer'}}><CancelIcon color='error'></CancelIcon></button>
       <div className="modal_two">
       <motion.img className="modal_img" style={{}} whileHover={{}} src={image} alt=''/>
       <div className='learn_more'>
        <div className="title_strain">
       <h1>{name}</h1>
       

       <p className='pricebox-strain' >{strain}</p>
       </div>
       <Rating name="size-medium" defaultValue={5} />
       <div className="modal_quantity">
       <p>{quantity}</p>
       </div>
       <div className="modal_price">
        <p >${price}</p>
        
        </div>
        <div className="thc_cbd">
        <div className="modal_thc">
        <p>THC: {thc}%</p>
        <LinearProgress sx={{height:'10px', borderRadius:'10px',backgroundColor:'#BCCCDC'}} variant="determinate" value={thc} />
        </div>
        <div className="modal_cbd">
        <p>CBD: {cbd}%</p>
        <LinearProgress sx={{height:'10px', borderRadius:'10px', backgroundColor:'#BCCCDC', color:'#000'}} variant="determinate" value={cbd} />
        </div>
        </div>
        <div className="modal_description">
        <p>{description}</p>
        </div>
        <motion.div  className="modal_button">
     <Button onClick={handleClick} style={{backgroundColor:'#1D0EBE',color:'#F0F4F8',boxShadow:' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}}>add to cart</Button>
        </motion.div>
        </div>
        </div>
        </motion.div>
        </ModalDialog>
      </Modal>
      </motion.div>
      


     
      </motion.div>
    

    <motion.div 
  whileInView={{  scale:1}}
  transition={{
    type: "spring",
   
    delay: .6,
    
  }}
  viewport={{ once: true }} 

 
  initial={{scale:0}}
  style={{}}  
  className='cart_btn'
  > 
        
 
       
        
        <Button size='md' onClick={addToBasket} variant="solid" style={{backgroundColor:'#C4C6FF', color:'#102A43', marginTop:'-10px'}} >
          
  
      ${price} <AddShoppingCartIcon  style={{ fontSize:'18px', paddingLeft:'3px' }}/>
    
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