import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import DeleteIcon from '@mui/icons-material/Delete';
import {useStateValue} from "./StateProvider";
import IconButton from '@mui/material/IconButton';


  

function CheckoutProduct({ id, name, price, image, quantity}) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      dispatch({
          type: "REMOVE_FROM_BASKET",
          id:id
      })
  }
  

return (
  <div className='checkout_product_section'>
  
          <img alt="complex" src={image} />
    
           <h4>
            {name}
            </h4>
          <p>
              {id}
              </p>

            <p>{quantity}</p>
            <p>
        {price}
        </p>
       
          <IconButton color="error" onClick={removeFromBasket} aria-label="delete" size="small">
             <DeleteIcon />
              </IconButton>
     
        </div>
)
}

export default CheckoutProduct


