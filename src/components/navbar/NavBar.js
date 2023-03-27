import React, { Suspense } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/material/Typography';

import Slide from '@mui/material/Slide';
import { motion  } from "framer-motion";
import CircularProgress from '@mui/material/CircularProgress';
//import { makeStyles } from '@mui/styles';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {Link} from 'react-router-dom';

const SideBar = React.lazy(() => import('./SideBar'));



function HideOnScroll({ children }) {
 const trigger = useScrollTrigger();

 return(
  <Slide appear={false}  direction={"down"} in={!trigger}>
    {children}
  </Slide>
 );}



  


  
function NavBar(props) {

  
    
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    boxShadow: 'none !important',
    transition: 'top 0.3s',
    top:'0',
      right:'0',
    height:'10vh',
    width: '-webkit-fill-available',
    borderBottom:'solid 1px #102A43',
    // Override media queries injected by theme.mixins.toolbar
    background:'#18981D',
    zIndex:'999', 
 
    '@media all': {
     
     // boxShadow: '0 10px 50px 0 rgb(63 2 176 / 40%)',
   
    },
  }));





 
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
 

  

  return (
    <HideOnScroll>
  

    <AppBar  style={{
       position:'fixed',
       //margin: '0 90px',
       background:'#18981D',
        
        //boxShadow:'5px 5px 0 #000000',
       
       

      
        }}    elevation={0}
>
      <StyledToolbar>
  
     <motion.div animate={{scale:1}}>
      <Suspense fallback={<CircularProgress/>}>
      <SideBar/>
      </Suspense>
      </motion.div>
     
        
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, alignSelf: 'center' }}
        >
          <div  
  className='navbar-title'>
          <img src="ninjas_logo.png" alt="logo" style={{width:'40px', height:'auto', paddingRight:'3px'}}/>
          <p>Your brand</p>
          </div>
        </Typography>
        <motion.div 	     
            whileTap={{ backgroundColor: '#D9E2EC' }}>
          <Link to="/admin-page">
        <IconButton  className='icon_admin' style={{ boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset', backgroundColor:'#D9E2EC'}}  aria-label="search" >
          <ManageAccountsIcon style={{color:'#1D0EBE'}}/>
        </IconButton>
        </Link>
        </motion.div>
      </StyledToolbar>
    </AppBar>

  </HideOnScroll>
  );
}

export default NavBar