import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import { motion } from 'framer-motion';
import Button from '@mui/material/Button';


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
              <h5>Resources</h5>
              <ul>
                <li>Home page</li>
                <li>About us</li>
                <li>All products</li>
                <li>FaQ</li>
                <li>Terms and conditions</li>
              </ul>
              </div>
              <div className='footer_contact'>
                <h5>Contact</h5>
                <ul>
                  <li>(201)328-7539</li>
                  <li>support@newjerseypd.com</li>
                  <li>log-in/sign-up</li>
                </ul>
              </div>
          </div>
        </div>
        <div className='footer_three'>
            <div>
          <h4><EmailIcon/> Stay up to date with our specials!</h4>

            </div>
<div className='footer_special'>
            <div >
            <TextField id="standard-basic" label="Enter email address" variant="standard" sx={{ background: '#ffffff', width:'100%' }} />

            </div>
    <div style={{paddingTop:'20px'}}>
    <Button style={{ backgroundColor:'#009B4E', borderRadius:'40px'}} variant="contained" >
  <h3 style={{padding:'5px', fontStyle:'italic'}}>ORDER DELIVERY</h3>
</Button>
    </div>
    </div>
            </div>
      </div>
      </div>
  )
}

export default Footer