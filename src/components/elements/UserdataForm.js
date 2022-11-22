import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useUserdataContext } from '../../hooks/useUserdataContext';
//mport { Streetview } from '@mui/icons-material';
import { useStateValue } from "../cart/StateProvider";
import CheckoutProduct from '../cart/CheckoutProduct.js';
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


    const handleSubmit = async (e) => {
        e.preventDefault()
            
        const userdata = {title, number, street, email, zip, county, notes}

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
            console.log('new title added', json)
            dispatch({type: 'CREATE_USERDATA', payload: json})
        }
    }

  return (
      <Box onSubmit={handleSubmit}
>
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
        {basket.map(userdata => (
<SwiperSlide>
           
            <CheckoutProduct 
            name={userdata.name}
            price={userdata.price}
            image={userdata.image}
            quantity={userdata.quantity}
      
                />
                
                
         </SwiperSlide>
                ))}
                {/*</Slider>*/}
                </Swiper>
        </div>
        
    )}
</div>

<div style={{textAlign:'center'}}>
<h2>fill this form!</h2>
<Box

component="form"
sx={{ display: 'flex', flexWrap: 'wrap' }}
noValidate
autoComplete="on"
style={{
display:'flex'
}}
>


<TextField id="outlined-basic" label="Full Name" variant="outlined"  
style={{padding:'10px'}} 
onChange={(e) => setTitle(e.target.value) }
value={title}
/>

<TextField id="outlined-basic" label="Street" variant="outlined"
style={{padding:'10px'}} 
onChange={(e) => setStreet(e.target.value)}
value={street}
/>




<TextField id="outlined-basic" label="Number" variant="outlined" 
style={{padding:'10px'}}   
onChange={(e) => setNumber(e.target.value) }
value={number}
/>

<TextField id="outlined-basic" label="Zip code" variant="outlined"
style={{padding:'10px'}}   
onChange={(e) => setZip(e.target.value)}
value={zip}
/>

<TextField id="outlined-basic" label="Email" variant="outlined"
style={{padding:'10px'}} 
onChange={(e) => setEmail(e.target.value)}
value={email} />

<TextField id="outlined-basic" label="County" variant="outlined" 
style={{padding:'10px'}} 
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