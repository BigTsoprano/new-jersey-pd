import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';
import { useUserdataContext } from '../../hooks/useUserdataContext';
//mport { Streetview } from '@mui/icons-material';
import { useStateValue } from "../cart/StateProvider";
import CheckoutProduct from '../cart/CheckoutProduct';
//import { Swiper, SwiperSlide } from "swiper/react";
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import ForwardIcon from '@mui/icons-material/Forward';

import Button from '@mui/joy/Button';

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
    <div className='checkout-item' style={{ }} >

    <div className="checkout__left">
         {basket?.length === 0 ? (
             <div className='checkout__shopping'>
            <h2 style={{fontSize:'24px'}}>Your Shopping Cart Is Empty</h2>
                </div>
        
                          ) : (
      
        <div className='checkout-swiper' >
{/*<Slider  {...settings} >*/}
        {basket.map(item => (
<div style={{}}>

           
            <CheckoutProduct 
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            onChange={(e) => setArrayBasket(e.target.value) }
            value={arrayBasket}
                />
                
            
      
                </div>
                ))}
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
                {/*</Slider>*/}
        </div>
        
    )}
</div>

<div style={{display:'flex', minWidth:'350px', flexDirection:'column', backgroundColor:'#F0F4F8', padding:'0 20px', borderRadius:'5px',boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px', marginBottom:'60px', paddingBottom:'12px'  }}>
<h2 style={{paddingTop:'12px',fontSize:'18px',}}>fill this form!</h2>
<Box

component="form"
sx={{ display: 'flex', flexWrap: 'wrap', flexDirection:'column', overflow: 'auto !important' }}
noValidate
autoComplete="on"
style={{
paddingTop:'20px'
}}
>
<div style={{paddingBottom:'12px'}}>

<Input id="outlined-basic" size='lg' placeholder="full name" variant="outlined"  

onChange={(e) => setTitle(e.target.value) }
value={title}
/>
</div>




<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around', paddingBottom:'12px'}}>
<Input id="outlined-basic" placeholder='phone #' size='sm' variant="outlined" 
style={{paddingBottom:'10px'}}   
onChange={(e) => setNumber(e.target.value) }
value={number}
/>
<Input id="outlined-basic" placeholder='email address' size='sm' variant="outlined"
style={{paddingBottom:'10px'}} 
onChange={(e) => setEmail(e.target.value)}
value={email} />
</div>
<div style={{paddingBottom:'12px'}}>
<Input id="outlined-basic" placeholder='street address' variant="outlined"
style={{paddingBottom:'10px'}} 
onChange={(e) => setStreet(e.target.value)}
value={street}
/>
</div>
<div style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
<Input id="outlined-basic" placeholder='zip code' size='sm' variant="outlined"
style={{paddingBottom:'10px'}}   
onChange={(e) => setZip(e.target.value)}
value={zip}
/>



<Input id="outlined-basic" placeholder='county' size='sm' variant="outlined" 
style={{paddingBottom:'10px'}} 
onChange={(e) => setCounty(e.target.value)}
value={county}
/>
</div>
<div style={{padding:'20px 12px'}}>
<Textarea placeholder="Placeholder" minRows={3} 
id="outlined-multiline-static"
size="large"
rows={4}
defaultValue="Leave us a note!"
onChange={(e) => setNotes(e.target.value)}
value={notes}
/>

</div>
<Button variant="solid" style={{backgroundColor:'#1D0EBE', color:'#fff', fontSize:'18px'}}>checkout <ForwardIcon/></Button>
</Box>
</div>



</div>
</Box>

  )
}

export default UserdataForm