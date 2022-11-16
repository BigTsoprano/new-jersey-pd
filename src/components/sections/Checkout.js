import React from 'react'

import Drawer from '@mui/material/Drawer';
import Subtotal from '../cart/Subtotal';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';

import { useStateValue } from "../cart/StateProvider";
import CheckoutProduct from '../cart/CheckoutProduct.js';

import UserdataForm from '../elements/UserdataForm.js';

import { Swiper, SwiperSlide } from "swiper/react";
//import "swiper/css/pagination";
//import { Pagination } from "swiper";



function Checkout({ setShowCheckout }) {

    const [{ basket }] = useStateValue();
  
    const handleClose = () => {
    setShowCheckout(false);
                    }
         

     const [state, setState] = React.useState(false);

          

     const toggleDrawer = (open) => (event) => {
              setState(open)
          };

      
       
  return (
    
    <Drawer 
            open={toggleDrawer(true)} 
            anchor={'bottom'}  
            BackdropProps={{ invisible: true }}>
        
        <div className='all-checkout' 
            style={{
                    backgroundColor:'#009B4E', 
                    height:'auto',
                    minHeight:'20vh'
                    }}>
   

                <div className='form_item' 
                        style={{
                            display:'flex', 
                            justifyContent:'space-between', 
                            flexDirection:'row', 
                            alignItems:'center',
                            padding:'0px 50px'
                             }}>

                        <div className='quit-button' 
                                style={{
                                    display:'flex', 
                                    marginBottom:'auto'
                                        }}>
                            <IconButton 
                                size='large'   
                                onClick={handleClose}>
                                    <CancelIcon 
                                    style={{
                                        color:'red'}}/>
                            </IconButton>
                        </div>

                <div 
                    style={{
                        display: 'flex',  
                        flexDirection:'row', 
                        marginRight:'10px', 
                        alignItems: 'center' , 
                        marginBottom:'0px'
                            }}>
                    <p style={{ 
                        paddingRight: '5px',
                        fontStyle:'italic', 
                        fontWeight:'650',
                        fontSize:'20px',
                        color:'#ffffff'
                                }}>{basket.length}</p> 
                                   
                     

            <p style={{
                fontSize:'24px'
                        }}>🛒</p>
                </div>  

            </div>

                <h1 style={{
                    textAlign:'center', 
                    color:'#ffc80f'}}>Checkout</h1>
            
            <div className='checkout-item'>

                <div className="checkout__left">
                     {basket?.length === 0 ? (
                         <div className='checkout__shopping'>
                        <h2>Your Shopping Cart Is Empty</h2>
                            </div>
                    
                                      ) : (
                  
                    <div className='checkout-swiper' >
{/*<Slider  {...settings} >*/}
<Swiper
        slidesPerView={2}
        spaceBetween={30}
    
        className="mySwiper"
      >
                    {basket.map(item => (
          <SwiperSlide>
                       
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                            />
                            
                            
                     </SwiperSlide>
                            ))}
                            {/*</Slider>*/}
                            </Swiper>
                    </div>
                    
                )}
            </div>
        
</div>
<div style={{textAlign:'center'}}>
    <h2>fill this form!</h2>
    <UserdataForm/>
</div>


        <div style={{
            marginTop:'15px',
            
                display:'flex', 
                flexDirection:'column', 
                justifyContent:'center', 
                alignItems:'center'
            }} 
            className='sub_pay'>

        {basket.length > 0 && (
                
                <div 
                    className="checkout__right">

                    <div className='subtotal-checkout'>
                    <Subtotal />
                    </div>


  
                
     
                    </div>
            )}              

</div>
        </div>
        </Drawer>

        

  )
}

export default Checkout
