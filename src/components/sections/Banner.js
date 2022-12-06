import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';



export default function Banner () {
  const BootstrapButton = styled(Button)({
    fontWeight:'550',
    fontStyle:'italic',
                textTransform: 'none',
                fontSize: 20,
                padding: '6px 12px',
                border: '3px solid',
                lineHeight: 1.5,
                backgroundColor: '#009B4E',
                borderColor: '#009B4E',
                boxShadow: 'none',
                borderRadius:'40px',
    
                
                '&:hover': {
                  backgroundColor: '#292929',
                  borderColor: 'rgb(1, 177, 64)',
                  boxShadow: 'none',
                 
                  fontStyle:'italic',
                  fontWeight:'550',
                },
                '&:active': {
                  boxShadow: 'none',
                  backgroundColor: '#009B4E',
                  borderColor: 'rgb(1, 177, 64)',
                },
                '&:focus': {
                },
              });
  return (
  <div className='banner-wrap' > 
    <motion.div className='banner' initial={{scale:0}} whileInView={{scale:1}} viewport={{ once: true }} transition={{type:'tween',  duration: .5, delay:.2}}>
      <div style={{display:'flex', justifyContent:'center' ,flexDirection:' column'}}>
      <div className='banner-title' >
   <h3>MONTHLY SPECIALS!</h3>
   <div >
   <p style={{textAlign:'left' , paddingTop:'20px'}}>Pack( 20pc) of gummies and 7 grams</p>
   <p style={{textAlign:'left',paddingTop:'5px' }}>cannabis flower for $49.99</p>
   </div>
   </div>
   <div className='banner-button' style={{marginTop:'50px', marginLeft:'40px'}}>
   <BootstrapButton  variant="contained" disableRipple>
     <h5 style={{padding:'8px'}}>
Claim offer!
</h5>
      </BootstrapButton> 
                          </div>
    </div>
    </motion.div>
    </div>
  )
}