import React from 'react';
import Typed from "react-typed";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { motion } from 'framer-motion';

function Herobox() {
    const heroStrings = [

        'Flowers.',
        'Carts.',
        'Shatter',
        'Edibles'
      ]
    
    
  return (
    <div className='hero-slogans'>
        <h1 style={{display:'flex', flexDirection:'row'}}><h1 style={{paddingRight:'8px', color:'#009B4E', WebkitTextStrokeColor: '#009B4E' }}>WEED </h1> DELIVERY SERVICE</h1>
        <h2>YOU       CAN DEPEND ON</h2>
        <div style={{margin:'20px 40px'}}>
          <p>
         Cannabis&nbsp;
         <Typed 
           strings={heroStrings}
           typeSpeed={55}
           backSpeed={45}
           attr="value"
           loop
         >
           <label></label>
         </Typed>
       </p>
       </div>
       <div className='hero_btn' style={{paddingTop:'10px'}}>
       <AwesomeButton type="primary" style={{}} >
         <h3 style={{padding: '0 15px'}}>SHOP NOW!</h3>
         </AwesomeButton>
      </div>
      <motion.div whileHover={{scale:1.2}} style={{color:'#fff', display:'flex', flexDirection:'row', padding:' 50px 0'}}>
    <LocalShippingOutlinedIcon size='large' /> <h4 style={{paddingLeft:'10px'}}>Order now and get your product within 24/hrs</h4>
      </motion.div>
      </div>
  )
}

export default Herobox