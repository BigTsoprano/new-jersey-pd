import React from 'react'
import { motion } from "framer-motion";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';
import {Link} from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';



const MyBox = styled(Box)({    
        backgroundColor: '#009B4E',
        height: '100%'
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
    <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="open drawer"
    sx={{ mr: 2 }}
  >
<MenuIcon onClick={toggleDrawer(anchor, true)} > 
    </MenuIcon>
    </IconButton>      
    <Drawer
   
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
       
   <MyBox 
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 , minHeight:'100vh'}}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <div style={{margin: '20px 0px 0px 20px'}} onClick={toggleDrawer(anchor, false)}>
            <IconButton color='error'>
          <CancelIcon sx={{fontSize: 30}}/>
          </IconButton>
          </div>
          <motion.ul 
           className="container"
           variants={container}
           initial="hidden"
           animate="visible"
          style={{fontSize:'24px', fontWeight:'550', display:'flex', flexDirection:'column', paddingLeft:'90px', paddingTop:'10px'}}>
            <motion.li className="item" variants={item} style={{paddingTop:'10px'}}>
            <Link to='/' >Home</Link>
            </motion.li>
            <motion.li className="item" variants={item} style={{paddingTop:'10px'}}> 
            <Link to='/all-products' >All products</Link>
</motion.li>
            <motion.li className="item" variants={item} style={{paddingTop:'10px'}}>
            <a  to='/accordions' >FAQ</a>
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