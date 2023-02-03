import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import {useStateValue} from "./StateProvider";
import IconButton from '@mui/material/IconButton';


  

function CheckoutProduct({ id, name, price, image, quantity}) {

  const [ dispatch] = useStateValue();

  const removeFromBasket = () => {
      dispatch({
          type: "REMOVE_FROM_BASKET",
          id:id
      })
  }
  

return (
  <div className='checkout_product_section' style={{display:'flex', flexDirection:'column',  whiteSpace:'nowrap', padding: '10px 20px', borderBottom:'solid 1px #000'}}>
  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <img alt="complex" src={image} />
    
           <h4>
            {name}
            </h4>
            <div>
            <IconButton color="error" onClick={removeFromBasket} aria-label="delete" size="small">
             <DeleteIcon />
              </IconButton>
            </div>
            </div>
          <p>
              {id}
              </p>
            <div style={{display:'flex', flexDirection:'column'}}>

            <p>{quantity}</p>
            <p>
        {price}
        </p>
        </div>
       
     
        </div>
)
}

export default CheckoutProduct


