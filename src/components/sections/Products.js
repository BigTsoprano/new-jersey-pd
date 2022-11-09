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
            product section
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
        autoplay={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"

      >
   <div style={{}}>
        <SwiperSlide style={{border:'solid 2px #000000', borderRadius:'20px'}} >
        

      
       <Pricebox
       id='123456'
       title='sour diesel'
       price={11.99}
       image="sour_diesel.png"

       />
          
         
        </SwiperSlide>
        </div>
        <SwiperSlide style={{border:'solid 2px #000000'}}>
            <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            />
        </SwiperSlide>
        <SwiperSlide style={{border:'solid 2px #000000'}}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            />        </SwiperSlide>
        <SwiperSlide style={{border:'solid 2px #000000'}}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            />        </SwiperSlide>
        <SwiperSlide style={{border:'solid 2px #000000'}}>
        <Pricebox
            id='123457'
            title='this is other title'
            price={12.99}
            image='sour_diesel.png'
            />        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
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
