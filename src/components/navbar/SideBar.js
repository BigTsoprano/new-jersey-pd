import React from 'react'
import { motion } from "framer-motion";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/styles';

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
    </IconButton>      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
   <MyBox 
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            </MyBox>
      </Drawer>
    </React.Fragment>
  ))}

</div>

  )
}

export default SideBar