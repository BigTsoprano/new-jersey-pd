import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { motion  } from "framer-motion";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
//import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Fade from '@mui/material/Fade';
import { ClassNames } from '@emotion/react';
//import { makeStyles } from '@mui/styles';
import SideBar from './SideBar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import {Link} from 'react-router-dom';





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
    height:'10vh',
    // Override media queries injected by theme.mixins.toolbar
    background:'#18981D',
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
  

    <AppBar  style={{position:'fixed',
       width: '-webkit-fill-available',
       //margin: '0 90px',
        zIndex:'999', 
        //boxShadow:'5px 5px 0 #000000',
        
        borderBottom:'solid 1px #000',

      
        }}    elevation={0}
>
      <StyledToolbar>
  
     <motion.div animate={{scale:1}}>
      <SideBar/>
      </motion.div>
     
        
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, alignSelf: 'center' }}
        >
          <motion.div   initial={{x:'-100vw'}} animate={{x:0}}
  transition={{duration: .5, type:'spring', stiffness: 50}}
  className='navbar-title'>
          <h4 >
             NewJersey
          </h4>
          <p>PotDelivery</p>
          </motion.div>
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