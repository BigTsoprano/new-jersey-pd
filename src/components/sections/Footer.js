import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/joy/TextField';
import { motion } from 'framer-motion';
import Button from '@mui/joy/Button';


function Footer() {
  return (
    <div className='footer-section'>
      <div className='footer_backdrop'></div>
      <div className='footer_three_sections'>
        <div className='footer_one'>
          <div className='footer_title'>
          <h3>newjersey</h3><h4>potdelivery</h4>
          </div>
          <div>
            <IconButton><FacebookIcon style={{color:'#F0F4F8'}}/></IconButton>
            <IconButton><InstagramIcon style={{color:'#F0F4F8'}}/></IconButton>
            <IconButton><TwitterIcon style={{color:'#F0F4F8'}}/></IconButton>
            <IconButton><YouTubeIcon style={{color:'#F0F4F8'}}/></IconButton>
            </div>
        </div>
        <div className='footer_two'>
          <div className='footer_two_group'>
            <div className='footer_resource'>
              <h5>Resources</h5>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>All products</li>
                <li>Faq</li>
                <li>Terms and conditions</li>
              </ul>
              </div>
              <div className='footer_contact'>
                <h5>Contact</h5>
                <ul>
                  <li>(201)328-7539</li>
                  <li>support@newjerseypd.com</li>
                  <li>Login/signup</li>
                </ul>
              </div>
          </div>
        </div>
        <div className='footer_three'>
        
<div className='footer_special'>
            <div style={{paddingBottom:'20px', display:'flex', flexDirection:'rox'}} >
            <EmailIcon/> 
            <TextField label="Stay up to date with our specials!" size="md" placeholder="Enter email address" variant="outlined" sx={{  width:'100%' }}/>
            </div>
    <Button size='sm' style={{ backgroundColor:'#1D0EBE', borderRadius:'5px', fontStyle:'italic', fontSize:'14px', color:'#F0F4F8', marginLeft:'30px',boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'}} variant="contained" >
  CLICK TO SIGN UP
</Button>
    </div>
            </div>
      </div>
      </div>
  )
}

export default Footer