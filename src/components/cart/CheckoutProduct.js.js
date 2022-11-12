import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import {useStateValue} from "./StateProvider";
import IconButton from '@mui/material/IconButton';


function CheckoutProduct({ id, title, price}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
      dispatch({
          type: "REMOVE_FROM_BASKET",
          id:id
      })
  }

return (
  <div style={{paddingLeft:'40px'}}>
      {/*<img className="checkoutProduct__image" style={{display:'flex', height:'50px', marginRight:'20px'}} src={image} alt=""/>*/}
  <div className="checkoutProduct" style={{display:'flex'}}>
      <div style={{}}>
         

      <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}} className="checkoutProduct__info">
      
          <p style={{marginBottom:'-4px'}} className="checkoutProduct__title">{title}</p>
        
 
     
          <p  className="checkoutProduct_price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          
      </div>
          <div style={{display:'flex',marginLeft:'30px', marginBottom:'35px'}}>
          <IconButton color="error" onClick={removeFromBasket} aria-label="delete" size="small">
         <DeleteIcon />
          </IconButton>
          </div>
          </div>
      </div>
  </div>
  
 
)
}

export default CheckoutProduct