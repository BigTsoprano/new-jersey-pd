import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/joy/Button';
import UserdataForm from '../elements/UserdataForm';
import { useStateValue } from "../cart/StateProvider";
import { styled } from '@mui/styles';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
//import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { motion } from 'framer-motion';
import IconButton from '@mui/joy/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Redirect } from 'react-router-dom';



  const MyBox = styled(Box)({    
    backgroundColor: '#D9E2EC',
    height: 'auto',
   
   
});

function CheckoutBar() {
    const [{ basket }, dispatch] = useStateValue();

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

  const { user } = useAuthContext();

  return (
    <div>
 {['bottom'].map((anchor) => (
    <React.Fragment key={anchor}>
          <motion.div scale={{scale:1.3}} onClick={toggleDrawer(anchor, true)}> 
            <Button size="lg"
style={{color:'#fff', backgroundColor:'#1D0EBE', position:'fixed', zIndex:'999', top:'89%', left:'3%', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'}}  >
              <ShoppingCartOutlinedIcon size="lg" sx={{fontSize:'24px',color:'#fff'}}/> 
         {basket?.length}</Button></motion.div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
          >
            <MyBox 
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1000 }}
          role="presentation"
         
        >
                <IconButton color='error' variant="plain" onClick={toggleDrawer(anchor, false)}  onKeyDown={toggleDrawer(anchor, false)} 
                style={{marginLeft:'20px',marginTop:'20px'}} >
<CancelIcon size="lg" sx={{color:'#CF1124'}}/>
</IconButton>
            {user ? <UserdataForm/> : <Redirect to="/login" />}
        </MyBox>
          
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default CheckoutBar