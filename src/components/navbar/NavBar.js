import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
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








  


  
function NavBar(props) {
    
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    boxShadow: 'none !important',
    // Override media queries injected by theme.mixins.toolbar
    backgroundColor:'#009B4E',
    '@media all': {
     
     // boxShadow: '0 10px 50px 0 rgb(63 2 176 / 40%)',
   
    },
  }));



 
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
 

  

  return (
      <div className='all-navbar' 
      style={{position:'fixed',
       width: '-webkit-fill-available',
        zIndex:'999', boxShadow:'none'}} >
    <Box  sx={{ flexGrow: 1 }}  >

    <AppBar      elevation={0}
>
      <StyledToolbar>
  
     
      <SideBar/>
     
        
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, alignSelf: 'center' }}
        >
          <div className='navbar-title'>
          <h4 >
             NewJersey
          </h4>
          <p>PotDelivery</p>
          </div>
        </Typography>
        <IconButton size="large" aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton
          size="large"
          aria-label="display more actions"
          edge="end"
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </StyledToolbar>
    </AppBar>

  </Box>
  </div>
  );
}

export default NavBar