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
//import { motion } from "framer-motion";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';








  


  
function NavBar(props) {
    
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'center',
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
     
      backgroundColor:'#009B4E',
      boxShadow: '0 10px 50px 0 rgb(63 2 176 / 40%)',
    },
  }));



  const [state, setState] = React.useState({
   
    left: false,
   
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
      <div style={{position:'fixed', width: '-webkit-fill-available', zIndex:'999'}} >
    <Box  sx={{ flexGrow: 1 }}>

    <AppBar position="static">
      <StyledToolbar>
     
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
          {anchor}
          </MenuIcon>
          </IconButton>
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
       </div>
        
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, alignSelf: 'center' }}
        >
          <div   style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <h4 style={{fontFamily:'futura-pt, sans-serif', fontWeight:'550', color:'#FFC80F'}}>
          NewJersey
          </h4>
          <p style={{fontFamily:'futura-pt, sans-serif', fontWeight:'550', fontStyle:'italic', fontSize:'18px'}}>PotDelivery</p>
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