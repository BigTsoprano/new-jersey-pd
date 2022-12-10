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
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Pricebox from '../elements/Pricebox';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';



function Products() {


  return (

    <div className='product-section' >
        <motion.h1  style={{fontWeight:'600', fontStyle:'italic !important', fontFamily:'futura-pt, sans-serif', paddingTop:'20px', paddingBottom:'10px', fontSize:'28px'}} animate={{ x: 500 }} transition={{ duration: 1.2 }}  >
            FAVORITES
        </motion.h1>
    <motion.div  className='products'>
       
<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
     
        }}
        loop={true}
        autoplay={{delay: 5000,
          disableOnInteraction: true}}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"

      >
        
        <SwiperSlide style={{borderRadius:'20px', boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}} >
        

      
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
        <SwiperSlide style={{borderRadius:'20px', boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}}>
            <Pricebox
            name='Grand Daddy Purp'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            quantity='1/4'

            />
        </SwiperSlide>
        <SwiperSlide style={{borderRadius:'20px', boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}}>
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='indica'
            />        </SwiperSlide>
        <SwiperSlide 
        style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}}>
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='hybrid'
            />        </SwiperSlide>
        <SwiperSlide 
        style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}}>
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'
          }}>
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'
          }}>
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'
          }}>
        <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'
          }}>
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
<AwesomeButton type="secondary" after={<KeyboardArrowRight />} color="success">
    
     <h3>
Browse all products
</h3>

</AwesomeButton>
</div>
</Link>

</div>
  );
}

export default Products

