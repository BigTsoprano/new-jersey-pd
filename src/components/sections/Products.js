import {Link} from 'react-router-dom';
import React, { useRef, useState } from "react";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination} from "swiper";

import Pricebox from '../elements/Pricebox';




function Products() {


  return (

    <div className='product-section' >
        <motion.h1  style={{fontWeight:'600', fontStyle:'italic !important', fontFamily:'futura-pt, sans-serif', paddingTop:'20px', paddingBottom:'10px', fontSize:'32px', textAlign:'center', color:'#102A43'}} >
            WEED RECOMMEND
        </motion.h1>
    <motion.div  className='products'>
       
<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
     
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
     
        }}
        loop={true}

        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          
          },
          768: {
            slidesPerView: 1,
           
          },
          1024: {
            slidesPerView: 3,
            
          }
        }}

      >
        
        <SwiperSlide  >
        

      
       <Pricebox
       name='Sour Diesel'
       price={11.99}
       image="sour_diesel.png"
       strain='sativa'
       quantity='1/8 oz. or 3.5 grams'
      thc='18%'
      cbd='0%'
       />
          
         
        </SwiperSlide>
        <SwiperSlide style={{}}>
            <Pricebox
            name='Grand Daddy Purp'
            price={12.99}
            image='grand_d.png'
            strain='sativa'
            quantity='1/4'

            />
        </SwiperSlide>
        <SwiperSlide style={{}}>
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='indica'
            />        </SwiperSlide>
        <SwiperSlide 
       >
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='hybrid'
            />        </SwiperSlide>
        <SwiperSlide 
       >
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />
        </SwiperSlide>
      </Swiper>



</motion.div>


  
      
   <Link className='link-products' 
        style={{
        
            }} 
            to='/all-products' >
              <div className='pricebox-button'>
<Button size='lg'  style={{
        backgroundColor:'#D9E2EC',
        fontStyle:'italic',
        fontSize:'20px',
        color:'#102A43',
        boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
      }}   variant='soft'>
    
     
Browse all products

<KeyboardArrowRight />
</Button>
</div>
</Link>

</div>
  );
}

export default Products

