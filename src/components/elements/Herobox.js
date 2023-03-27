import React, {Suspense} from 'react';
import Typed from "react-typed";
import Button from '@mui/joy/Button';
import {Link} from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';

import { motion } from 'framer-motion';

const AvatarReviews = React.lazy(() => import('./AvatarReviews'));

function Herobox() {
    const heroStrings = [

        'Flowers.',
        'Carts.',
        'Shatter',
        'Edibles'
      ]
    
    
  return (
    <div className='hero-slogans'>
       <div className='hero_type' >
          <p > 
         Cannabis&nbsp;
         <Typed 
           strings={heroStrings}
           typeSpeed={55}
           backSpeed={45}
           attr="value"
           loop
           style={{position:'fixed'}}
         >
           <label ></label>
         </Typed>
       </p>
       </div>
      <div className='hero_main_text' >
        <h1 >Your canna<br/>slogan goes here.</h1>
        </div>

       
        <motion.div  whileHover={{scale:1.05}} whileTap={{scale:1}} className='hero_btn' style={{}}>
          <Link to='/all-products'>
       <Button size="lg" variant='solid' style={{
        backgroundColor:'#1D0EBE',
       color:'#F0F4F8',
       boxShadow:' rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
       fontSize:'20px',
       fontStyle:'italic'}} >
         View product catalog
         </Button>
         </Link>
      </motion.div>
        
       <div className='hero_reviews' >
       <h4 >Satistfied customers</h4>
       <Suspense fallback={<LinearProgress/>}>
      <AvatarReviews style={{ zIndex:'100'}}/>
      </Suspense>
      </div>
  
      </div>
  )
}

export default Herobox