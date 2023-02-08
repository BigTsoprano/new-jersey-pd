import React from 'react'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">


        <CurrencyFormat
        
        renderText={(value) => (
            <>
            <div className='subtotal_wrap'  >
                
            <p >Grande Total: </p>
           { /*<p style={{fontSize:'16px'}}>({basket.length}):  </p>*/}
            <p  ><strong>{` ${value} `}</strong></p>
            </div>
            </>
        )}
        
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
    </div>
  )
}

export default Subtotal
