import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DeleteIcon from '@mui/icons-material/Delete';
import {useStateValue} from "./StateProvider";
import IconButton from '@mui/material/IconButton';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  

function CheckoutProduct({ id, name, price, image, quantity}) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      dispatch({
          type: "REMOVE_FROM_BASKET",
          id:id
      })
  }
  

return (
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 500,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
    >
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src={image} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
           
            {name}
         
          
            <Typography variant="body2" color="text.secondary">
              {id}
            </Typography>
            <p>{quantity}</p>
          </Grid>
          <Grid item>
          <IconButton color="error" onClick={removeFromBasket} aria-label="delete" size="small">
             <DeleteIcon />
              </IconButton>
          </Grid>
        </Grid>
        <Grid item>
        {price}
        </Grid>
      </Grid>
    </Grid>
    </Paper>
 
)
}

export default CheckoutProduct


