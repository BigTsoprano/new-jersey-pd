import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/joy/TextField';
import { motion } from 'framer-motion';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Footer() {
  return (
    <div className='footer-section'>
      <div className='footer_three_sections'>
        <div className='footer_one'>
          <div className='footer_title'>
          <h3>NewJersey</h3><h4>POTDELIVERY</h4>
          </div>
          <div>
            <IconButton><FacebookIcon style={{color:'#ffffff'}}/></IconButton>
            <IconButton><InstagramIcon style={{color:'#ffffff'}}/></IconButton>
            <IconButton><TwitterIcon style={{color:'#ffffff'}}/></IconButton>
            <IconButton><YouTubeIcon style={{color:'#ffffff'}}/></IconButton>
            </div>
        </div>
        <div className='footer_two'>
          <div className='footer_two_group'>
            <div className='footer_resource'>
              <h5>RESOURCES</h5>
              <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>ALL PRODUCTS</li>
                <li>FAQ</li>
                <li>TERMS AND CONDITIONS</li>
              </ul>
              </div>
              <div className='footer_contact'>
                <h5>CONTACT</h5>
                <ul>
                  <li>(201)328-7539</li>
                  <li>support@newjerseypd.com</li>
                  <li>LOGIN/SIGNUP</li>
                </ul>
              </div>
          </div>
        </div>
        <div className='footer_three'>
        
<div className='footer_special'>
            <div style={{paddingBottom:'30px'}} >
            <EmailIcon/> 
            <TextField label="Stay up to date with our specials!" size="lg" placeholder="Enter email address" variant="outlined" sx={{  width:'100%' }}/>
            </div>
    <AwesomeButton style={{ backgroundColor:'#009B4E', borderRadius:'40px'}} variant="contained" >
  <h3 style={{ fontStyle:'italic'}}>CLICK TO SIGN UP</h3>
</AwesomeButton>
    </div>
            </div>
      </div>
      </div>
  )
}

export default Footer