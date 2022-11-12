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
            <div style={{textAlign:'left', display:'flex', flexDirection:'row', alignItems:'center', whiteSpace:'nowrap'}} >
                
            <p style={{ fontSize:'16px'}}>Grande Total: </p>
           { /*<p style={{fontSize:'16px'}}>({basket.length}):  </p>*/}
            <p style={{fontStyle:'italic'}} ><strong>{` ${value} `}</strong></p>
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
