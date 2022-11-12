import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import { motion } from "framer-motion";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
//import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
//import "swiper/css/bundle";
import "swiper/css/autoplay";



// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import Pricebox from '../elements/Pricebox';




function Products() {

 


  return (

    <div className='product-section'>
        <motion.h1 animate={{ x: 500 }} transition={{ duration: 1.2 }}  >
            PRODUCT SECTIONs
        </motion.h1>
    <div className='products'>
       
<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"4"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
     
        }}
        loop={true}
        autoplay={false}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"

      >
   <div style={{}}>
        <SwiperSlide style={{borderRadius:'20px', boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}} >
        

      
       <Pricebox
       id={123456}
       title='Sour Diesel'
       price={11.99}
       image="sour_diesel.png"
       strain='sativa'
       />
          
         
        </SwiperSlide>
        </div>
        <SwiperSlide style={{borderRadius:'20px', boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}}>
            <Pricebox
            id={123457}
            title='Grand Daddy Purp'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />
        </SwiperSlide>
        <SwiperSlide style={{borderRadius:'20px', boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='indica'
            />        </SwiperSlide>
        <SwiperSlide style={{borderRadius:'20px', boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='hybrid'
            />        </SwiperSlide>
        <SwiperSlide style={{borderRadius:'20px', boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'}}>
        <Pricebox
            id={12345734}
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'
          }}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'
          }}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'
          }}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />        </SwiperSlide>
        <SwiperSlide style={{
          borderRadius:'20px', 
          boxShadow:'1px 3px 7px 2px rgba(57, 63, 72, 0.3)'
          }}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />
        </SwiperSlide>
      </Swiper>



</div>


        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='all-products-button'>
<Stack direction="row" style={{
    backgroundColor:'none !important'
}}>

<Button  endIcon={<DownloadTwoToneIcon size="large" />}>
    
        <Link className='link-products' 
        style={{
            fontSize:'28px',
            fontStyle:'italic',
            }} 
            to='/all-products' >
View all products!
</Link>
</Button>
</Stack>
</motion.div>
</div>
  );
}

export default Products

