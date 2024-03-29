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
import TextField from '@mui/material/TextField';
import { useAuthContext } from '../../hooks/useAuthContext';


import Button from '@mui/joy/Button';

import Subtotal from '../cart/Subtotal';

function UserdataForm() {


 
    

    const [{ basket }] = useStateValue();

    // const removeAll = () => {
    //     dispatch({
    //         type: "REMOVE_ALL",
    //     })
    // }

    const {user} = useAuthContext()
     const {dispatch} = useUserdataContext()
    const [zip, setZip] = useState('')
    const [county, setCounty] = useState('')
    const [notes, setNotes] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [title, setTitle] = useState('')
   const [date, setDate] = useState('')
   const [time, setTime] = useState('')

    const [error, setError] = useState('')
    const [arrayBasket, setArrayBasket] = useState([])    



    useEffect(() => {
        setArrayBasket(basket)
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in to create a userdata')
            return
        }
            
        const userdata = {title, number, street, email, zip, county, notes, arrayBasket,date,time}

        const response = await fetch('/api/Userdata', {
            method: 'POST',
            body: JSON.stringify(userdata),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            
            dispatch({type: 'CREATE_USERDATA', payload: json})
      
            setTitle('')
            setNumber('')
            setStreet('')
            setEmail('')
            setZip('')
            setCounty('')
            setNotes('')
            setDate('')
            setTime('')
            setError('')
            setArrayBasket([])
            console.log('new title added', json)
            // removeAll()
        }
        
    }

    const [show, setShow] = useState(false);

  return (
      <Box 
       onSubmit={handleSubmit}
>
    <div className='checkout-item' style={{ }} >

    <div className="checkout__left">
         {arrayBasket?.length === 0 ? (
             <div className='checkout__shopping'>
            <h2 style={{fontSize:'24px'}}>Your Shopping Cart Is Empty</h2>
                </div>
        
                          ) : (
      
        <div className='checkout-swiper' >
{/*<Slider  {...settings} >*/}
        {arrayBasket.map(item => (
<div style={{}}>

           
            <CheckoutProduct 
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            count={item.count}
            //  onChange={(e) => setArrayBasket(e.target.value) }
            // value={arrayBasket}
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

        {arrayBasket.length > 0 && (
                
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




<div className='phone_email' >
    <div className='phone_padding'>
<Input id="outlined-basic" placeholder='phone #' size='sm' variant="outlined" 
style={{paddingBottom:'10px'}}   
onChange={(e) => setNumber(e.target.value) }
value={number}
/>
</div>
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
<div className='zip_county' >
    <div className='zip_padding'>
<Input id="outlined-basic" placeholder='zip code' size='sm' variant="outlined"
style={{paddingBottom:'10px'}}   
onChange={(e) => setZip(e.target.value)}
value={zip}
/>
</div>


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
<div style={{paddingTop:'20px'}}>
<p style={{paddingBottom:'9px'}} >pick-up date/time</p>
<div className='date_time' >
    <div className='date_padding'>
<TextField
        id="date"
        label="date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 , marginRight:'20px'}}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => setDate(e.target.value)}
        value={date}
      />
      </div>
      <TextField
        id="time"
        label="time"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150 }}
        onChange={(e) => setTime(e.target.value)}
        value={time}
      />
</div>
</div>


</div>
<button onClick={() => setShow(true)} className='userdata_btn' >checkout </button>
{show && (
<div>
    <p>your order has been placed!</p>
    </div>)}

</Box>
</div>



</div>

</Box>

  )
}

export default UserdataForm
