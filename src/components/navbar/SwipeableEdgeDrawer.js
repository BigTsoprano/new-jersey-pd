import  React, {useRef} from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import UserdataForm from '../elements/UserdataForm';
import { useStateValue } from "../cart/StateProvider";
import { motion } from "framer-motion";



const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#009B4E' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;
  const [{ basket }] = useStateValue();


React.useEffect(() => {
  document.addEventListener("mousedown", (event) => {
    if (!menuRef.current.contains(event.target)) {
    setOpen(false);
    }
  });
});

let menuRef = useRef();

  return (
    <Root onClick={toggleDrawer(true)} ref={menuRef}>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(75% - ${drawerBleeding}px)`,
            overflow: 'visible',
            backgroundColor:'#009B4E'
          },
        }}
      />
    <div  >
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer( true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
          
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            boxShadow: '5px 0px 0px 1px rgba(57, 63, 72, 0.3)',
           
            visibility: 'visible',
            right: 0,
            left: 0,
            

          }}
          onClick={toggleDrawer(true)}
        >
            <motion.div whileHover={{scale: 1.1}}>
          <Puller />
          
          </motion.div>
          <Box sx={{ p: 2}}>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:'0px 80px 0px 33px', alignItems:'center'}}>

         
          <motion.div   initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1.5, y:0}}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 1.2 
  }}
 
  initial={{y: 100}}  >
              <h2 style={{fontWeight:'700', fontStyle:'italic', fontFamily:'futura-pt, sans-serif', color:'#ffc80f'}}>CHECKOUT</h2>
          </motion.div>
          
          <motion.div   initial={{ scale: 0 }}
  animate={{ rotate: 0, scale: 1.5, y:0}}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 1.2 
  }}
  style={{paddingRight:'2px'}}
 
  initial={{y: 100}}>
          <h2 style={{color:'#ffffff'}}>{basket?.length}🛒</h2>
          </motion.div>
          </div>
          </Box>
          
        </StyledBox>
       
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            
            height: '100%',
            width:'80%',
            overflow: 'auto',
            backgroundColor:'#ffffff',
            margin:'0 auto',
            marginTop:'60px',
            paddingTop:'20px',
            borderRadius:'30px'
          }}
          
        >
          
<UserdataForm/>
        
        </StyledBox>
      </SwipeableDrawer>
      </div>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;