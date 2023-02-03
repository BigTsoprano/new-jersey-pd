import {Link} from 'react-router-dom';
import React, { useRef, useState } from "react";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/joy/Button';
//import Stack from '@mui/material/Stack';
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination} from "swiper";

import Pricebox from '../elements/Pricebox';




function Products() {
  const swiperParameters = {
    
    effect: "coverflow",
    loop: true,
    
    centeredSlides: true,
    slidesPerView: "auto",
    breakpoints: { 768: {} 
  },
 
  };

  return (
    
    <div className='product-section' >
        <motion.h1  style={{fontWeight:'600', fontStyle:'italic !important', fontFamily:'futura-pt, sans-serif', paddingTop:'20px', paddingBottom:'10px', fontSize:'24px', textAlign:'center', color:'#102A43'}} >
            Best sellers weed recommend
        </motion.h1>
    <motion.div  className='products'>
       
<Swiper
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={20}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: false,
          
     
        }}
        {...swiperParameters}
        loop={true}
        centeredSlides={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 'auto',
            centeredSlides: true,
         
          
          },
          768: {
            slidesPerView: 3,
           
          },
          1024: {
            slidesPerView: 4,
            
          }
        }}

      >
        
        <SwiperSlide  >
        

      
       <Pricebox
       name='Sour Diesel'
       price={11.99}
       image="sour_diesel.png"
       strain='sativa'
       quantity='3.5 grams'
      thc={18}
      cbd={20}
      description='Sour Diesel is a popular sativa strain known for its uplifting, energizing effects and signature diesel aroma. Its commonly used to treat depression, pain and stress. Growing requires dry outdoor climate, with a 77-day flowering time. Sour Diesel has been a legendary strain since the early 1990s.'
       />
          
         
        </SwiperSlide>
        <SwiperSlide style={{}}>
            <Pricebox
            name='Grand Daddy Purp'
            price={12.99}
            image='grand_d.png'
            strain='indica'
            quantity='7 grams'
            thc={17}
            cbd={21}
            description='Granddaddy Purple is a popular indica strain with a complex grape and berry aroma. Its a cross of Mendo Purps, Skunk, and Afghanistan and is used to treat pain, stress, insomnia, appetite loss, and muscle spasms. Flowers have a 60-day flowering time indoors and are deep purple with white crystal resin.'

            />
        </SwiperSlide>
        <SwiperSlide style={{}}>
        <Pricebox
            name='Gummies'
            price={12.99}
            image='nj_gummies.png'
            strain='indica'
            quantity='pack of 20'
            />        </SwiperSlide>
        <SwiperSlide 
       >
        <Pricebox
            name='Vape cart'
            price={12.99}
            image='vape_cart.png'
            strain='hybrid'
            quantity='one gram'
            />        
            </SwiperSlide>
        <SwiperSlide 
       >
        <Pricebox
            name='House mix'
            price={12.99}
            image='house_bud.png'
            strain='sativa'
            quantity='7 grams'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
            name='Punch bar'
            price={12.99}
            image='punch_bar.png'
            strain='sativa'
            quantity='one bar'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
            name='Pre rolls pack'
            price={12.99}
            image='nj_joint.png'
            strain='sativa'
            quantity='5 one grams per pack'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
       name='Sour Diesel'
       price={89.99}
       image="sour_diesel.png"
       strain='sativa'
       quantity='7 grams'
      thc={18}
      cbd={20}
      description='Sour Diesel is a popular sativa strain known for its uplifting, energizing effects and signature diesel aroma. Its commonly used to treat depression, pain and stress. Growing requires dry outdoor climate, with a 77-day flowering time. Sour Diesel has been a legendary strain since the early 1990s.'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
         name='Grand Daddy Purp'
         price={12.99}
         image='grand_d.png'
         strain='indica'
         quantity='3.5 grams'
         thc={17}
         cbd={21}
         description='Granddaddy Purple is a popular indica strain with a complex grape and berry aroma. Its a cross of Mendo Purps, Skunk, and Afghanistan and is used to treat pain, stress, insomnia, appetite loss, and muscle spasms. Flowers have a 60-day flowering time indoors and are deep purple with white crystal resin.'
            />
        </SwiperSlide>
      </Swiper>



</motion.div>


  
      
   <Link className='link-products' 
        style={{
        
            }} 
            to='/all-products' >
              <motion.div viewport={{ once: false }} initial={{scale:1}} whileInView={{scale:1.1}}  transition={{type:"spring",duration: 3, bounce: 0.6}} className='pricebox-button'>
<Button size='lg'  style={{
        backgroundColor:'#D9E2EC',
        fontStyle:'italic',
        fontSize:'16px',
        color:'#102A43',
        boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
      }}   variant='soft'>
    
     
Browse all products

<KeyboardArrowRight />
</Button>
</motion.div>
</Link>

</div>
  );
}

export default Products

