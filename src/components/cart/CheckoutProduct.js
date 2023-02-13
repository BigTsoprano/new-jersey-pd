import React from 'react'

import DeleteIcon from '@mui/icons-material/Delete';
import {useStateValue} from "./StateProvider";
import IconButton from '@mui/material/IconButton';


  

function CheckoutProduct({ id, name, price, image, quantity, count}) {

  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
      dispatch({
          type: "REMOVE_FROM_BASKET",
          id:id
      })
  }
  

return (
  <div className='checkout_product_section' >
  <div className='checkout_product_box' >
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
            <div className='checkout_q_p'>

            <p>weight:{quantity}</p>
            <p>quantity:{count}</p>
            <p>
        {price}
        </p>
        </div>
       
     
        </div>
)
}

export default CheckoutProduct


