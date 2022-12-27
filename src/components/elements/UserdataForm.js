import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useUserdataContext } from '../../hooks/useUserdataContext';
//mport { Streetview } from '@mui/icons-material';
import { useStateValue } from "../cart/StateProvider";
import CheckoutProduct from '../cart/CheckoutProduct';
import { Swiper, SwiperSlide } from "swiper/react";
import Subtotal from '../cart/Subtotal';

function UserdataForm() {

    const [{ basket }] = useStateValue();

    const {dispatch} = useUserdataContext()
    const [zip, setZip] = useState('')
    const [county, setCounty] = useState('')
    const [notes, setNotes] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [title, setTitle] = useState('')
    const [error, setError] = useState(null)
    const [arrayBasket, setArrayBasket] = useState({})    



    useEffect(() => {
        setArrayBasket(basket)
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault()
            
        const userdata = {title, number, street, email, zip, county, notes, arrayBasket}

        const response = await fetch('/api/Userdata', {
            method: 'POST',
            body: JSON.stringify(userdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
           
            setTitle('')
            setNumber('')
            setStreet('')
            setEmail('')
            setZip('')
            setCounty('')
            setNotes('')
            setError(null)
            setArrayBasket({})
            console.log('new title added', json)
            dispatch({type: 'CREATE_USERDATA', payload: json})
        }
    }

  return (
      <Box onSubmit={handleSubmit}
>
    <div className='checkout-item' style={{margin:'0 25%', }} >

    <div className="checkout__left">
         {basket?.length === 0 ? (
             <div className='checkout__shopping'>
            <h2 style={{fontSize:'24px'}}>Your Shopping Cart Is Empty</h2>
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
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            onChange={(e) => setArrayBasket(e.target.value) }
            value={arrayBasket}
                />
                
            
         </SwiperSlide>
                ))}
                {/*</Slider>*/}
                </Swiper>
        </div>
        
    )}
</div>

<div style={{display:'flex', flexDirection:'column', backgroundColor:'#F7F7F8', padding:'20px'  }}>
<h2 style={{paddingBottom:'20px',fontSize:'18px'}}>fill this form!</h2>
<Box

component="form"
sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', overflow: 'auto !important' }}
noValidate
autoComplete="on"
style={{

}}
>


<TextField id="outlined-basic" size='sm' label="Full Name" variant="outlined"  
style={{paddingBottom:'10px'}} 
onChange={(e) => setTitle(e.target.value) }
value={title}
/>






<TextField id="outlined-basic" label="Number" variant="outlined" 
style={{paddingBottom:'10px'}}   
onChange={(e) => setNumber(e.target.value) }
value={number}
/>
<TextField id="outlined-basic" label="Email" variant="outlined"
style={{paddingBottom:'10px'}} 
onChange={(e) => setEmail(e.target.value)}
value={email} />

<TextField id="outlined-basic" label="Street" variant="outlined"
style={{paddingBottom:'10px'}} 
onChange={(e) => setStreet(e.target.value)}
value={street}
/>

<TextField id="outlined-basic" label="Zip code" variant="outlined"
style={{paddingBottom:'10px'}}   
onChange={(e) => setZip(e.target.value)}
value={zip}
/>



<TextField id="outlined-basic" label="County" variant="outlined" 
style={{paddingBottom:'10px'}} 
onChange={(e) => setCounty(e.target.value)}
value={county}
/>

<TextField
sx={{ m: 1, width: '45ch' }}
id="outlined-multiline-static"
label="Additional Notes"
multiline
size="large"
rows={4}
defaultValue="Leave us a note!"
onChange={(e) => setNotes(e.target.value)}
value={notes}
/>


<button>add title</button>
</Box>
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
</Box>

  )
}

export default UserdataForm