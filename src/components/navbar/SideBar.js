import React from 'react'
import { motion } from "framer-motion";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
//import Typography from '@mui/material/Typography';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import {Link} from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const MyBox = styled(Box)({    
        backgroundColor: '#F7C948',
        height: '100vh',
        overflow:'hidden',
        
        
       
});

function SideBar() {

    const [state, setState] = React.useState({
   
        left: false,
       
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
  
  return (


  <div>
      
  {['left'].map((anchor) => (
    <React.Fragment key={anchor}>
    <IconButton onClick={toggleDrawer(anchor, true)}
    className='icon_menu'
    edge="start"
   
    aria-label="open drawer"
    sx={{ mr: 2 }}
    style={{marginLeft:'10px', boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor:'#D9E2EC'}} 
  >
<MenuSharpIcon sx={{color:'#1D0EBE'}}  /> 
    </IconButton>      
    <Drawer
   
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
       
   <MyBox 
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <div style={{margin: '20px 0px 0px 20px'}} >
            <IconButton onClick={toggleDrawer(anchor, false)} color='error'>
          <CancelIcon sx={{fontSize: 30}}/>
          </IconButton>
          </div>
          <motion.ul 
           className="container"
           variants={container}
           initial="hidden"
           animate="visible"
          style={{fontSize:'18px', fontWeight:'500', display:'flex', flexDirection:'column', paddingLeft:'30px', paddingTop:'10px', color:'#102A43'}}>
            <motion.li className="item" variants={item} style={{paddingTop:'10px'}}>
            <Link style={{display:'flex', alignItems:'center'}} to='/' >Home page<KeyboardArrowRightIcon/></Link>
            </motion.li>
            <motion.li className="item" variants={item} style={{paddingTop:'20px'}}> 
            <Link style={{display:'flex', alignItems:'center'}} to='/all-products' >View products<KeyboardArrowRightIcon/></Link>
</motion.li>
       
            <motion.li className="item" variants={item} style={{paddingTop:'20px'}}>
            <a style={{display:'flex', alignItems:'center'}} to='section-accordions' >FAQ<KeyboardArrowRightIcon/></a>
            </motion.li>
   
<motion.li className="item" variants={item} style={{paddingTop:'20px'}}> 
            <Link style={{display:'flex', alignItems:'center'}} to='/login' >Log in<KeyboardArrowRightIcon/></Link>
</motion.li>
<motion.li className="item" variants={item} style={{paddingTop:'20px'}}> 
            <Link style={{display:'flex', alignItems:'center'}} to='/signup' >sign up<KeyboardArrowRightIcon/></Link>
</motion.li>

          </motion.ul>
            </MyBox>
            
      </Drawer>
    </React.Fragment>
  ))}

</div>

  )
}

export default SideBar