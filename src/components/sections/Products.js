import {Link} from 'react-router-dom';
import React, { useRef, useState } from "react";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Pricebox from '../elements/Pricebox';



function Products() {


  return (

    <div className='product-section' >
        <motion.h1  style={{fontWeight:'600', fontStyle:'italic !important', fontFamily:'futura-pt, sans-serif'}} animate={{ x: 500 }} transition={{ duration: 1.2 }} style={{padding:'30px'}}  >
            OUR FAVORITES
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


  <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }} className='all-products-button'>
      <Stack direction="row" 
            style={{
    backgroundColor:'none !important'
                  }}>

<Button  endIcon={<NavigateNextIcon style={{color:'#000000',textDecoration:'none'}} size="large" />}>
    
        <Link className='link-products' 
        style={{
          color:'#000000',
            fontStyle:'italic',
            textDecoration:'underline'
            }} 
            to='/all-products' ><h3>
All products
</h3>
</Link>
</Button>
</Stack>
</motion.div>
</div>
  );
}

export default Products

