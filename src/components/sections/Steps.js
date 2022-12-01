import React from 'react';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function Steps() {
  return (
    <div className='steps_section'>
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <h2 style={{paddingTop:'50px', marginTop:'20px', fontStyle:'italic', fontWeight:'700', color:'#009b4e'}}>CANNABIS ONLINE DELIVERY MADE EASY!!!</h2>
        <p style={{width:'45vh', padding:'15px'}}>Order online and pick up at store or have your product deliveried for a small fee</p>
        </div>
      
        <div className='steps_wrap'>
            <div className='step_one'><h3 style={{whiteSpace:'nowrap',fontStyle:'italic'}}><ShoppingCartCheckoutOutlinedIcon size='large'/> ADD TO CART</h3>
            <p style={{paddingTop:'9px'}}>Explore and browse our store for your favorite cannabis products in every categlory</p>
            </div>
            <div className='step_two'><h3 style={{fontStyle:'italic'}}><CreditScoreOutlinedIcon/> CHECKOUT</h3>
            <p style={{paddingTop:'9px'}}>Navigate to the checkout slider after selecting your products. Review items and complete payment</p>
            </div>
            <div className='step_three'>
                <div>
                    <h3 style={{fontStyle:'italic'}}>
                        <LocalShippingOutlinedIcon size='large'/> DELIVERIED</h3>
                        <p style={{paddingTop:'9px'}}>Your cannabis order deliveried to your door within 24 hrs of order submit</p>
                        
            </div>
            </div>
        </div>
        </div>
  );
}

export default Steps