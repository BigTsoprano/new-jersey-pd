import {Link} from 'react-router-dom';
import React, { useRef, useState } from "react";
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/joy/Button';
//import Stack from '@mui/material/Stack';
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";



import Pricebox from '../elements/Pricebox';




function Products() {
  const swiperParameters = {
    modules: [A11y, EffectCarousel],
    breakpoints: { 768: {} },
    loop: true,
    centeredSlides: true,
    spaceBetween: 90,
    slidesPerView: "auto",
    effect: "carousel",
  };

  return (
    
    <div className='product-section' >
        <motion.h1  style={{fontWeight:'600', fontStyle:'italic !important', fontFamily:'futura-pt, sans-serif', paddingTop:'20px', paddingBottom:'10px', fontSize:'24px', textAlign:'center', color:'#102A43'}} >
            Best sellers weed recommend
        </motion.h1>
    <motion.div  className='products'>
       
    <Swiper {...swiperParameters}>

        
        <SwiperSlide  >
        

      
       <Pricebox
       name='Sour Diesel'
       price={39.99}
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
            price={69.99}
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
            price={29.99}
            image='nj_gummies.png'
            strain='indica'
            quantity='20 pack'
            description='Indulge in a delicious and convenient way to enjoy the benefits of THC with our pack of 20 gummies. Each gummy is infused with 10mg of THC, allowing for precise dosing and a consistent experience every time. Made with natural fruit flavors and colors, these gummies are a sweet treat that will take the edge off and leave you feeling relaxed and rejuvenated. Perfect for on-the-go use, these gummies are easy to carry and discreet. Whether you are looking for relief from pain, stress, or just need a way to unwind after a long day, our THC gummies are the perfect solution. So sit back, relax, and let the gummies do the work. Order now and enjoy the delicious and effective benefits of THC in every bite.'


            />        </SwiperSlide>
        <SwiperSlide 
       >
        <Pricebox
            name='Vape cart'
            price={12.99}
            image='vape_cart.png'
            strain='hybrid'
            quantity='one gram'
            description='Experience the convenience and potency of THC with our one gram vape cartridge. Each cartridge contains 1000mg of high-quality THC oil, delivering a powerful and long-lasting high with every inhale. The compact and discreet design makes it easy to take with you on-the-go, allowing you to enjoy the benefits of THC whenever and wherever you need it. With a smooth and satisfying vapor, this vape cartridge offers a clean and enjoyable way to consume THC. Simply attach it to your favorite vape battery and enjoy. Order now and elevate your THC experience to the next level.'
            />        
            </SwiperSlide>
        <SwiperSlide 
       >
        <Pricebox
            name='House mix'
            price={59.99}
            image='house_bud.png'
            strain='sativa'
            quantity='7 grams'
            description='House mix is a popular sativa strain known for its uplifting, energizing effects and signature diesel aroma. Its commonly used to treat depression, pain and stress. Growing requires dry outdoor climate, with a 77-day flowering time. Sour Diesel has been a legendary strain since the early 1990s.'

            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
            name='Punch bar'
            price={29.99}
            image='punch_bar.png'
            strain='sativa'
            quantity='one bar'
            description='Indulge in the rich, velvety taste of chocolate while enjoying the benefits of THC with our THC chocolate bar. Each bar contains 100mg of THC, expertly infused into every bite to provide a consistent and precise dosing experience. Made with premium ingredients, including cocoa butter and pure cocoa powder, this chocolate bar offers a satisfying and indulgent treat that will take the edge off and leave you feeling relaxed and rejuvenated. Perfect for sharing or enjoying as a solo treat, our THC chocolate bar is a delicious way to incorporate THC into your daily routine. So why settle for ordinary chocolate when you can have a chocolate bar that not only tastes great, but provides the added benefits of THC.'
            />        </SwiperSlide>
        <SwiperSlide >
        <Pricebox
            name='Pre rolls pack'
            price={29.99}
            image='nj_joint.png'
            strain='sativa'
            quantity='5, 1 grams'
            description='Enjoy the ease and convenience of THC with our pre-rolled joints. Each joint contains premium quality flower, expertly rolled and ready to smoke. With a consistent and potent dose of THC in every joint, you can sit back, relax, and enjoy the benefits of THC without having to fuss with rolling your own. Perfect for on-the-go use or for those who prefer a quick and simple smoking experience, our THC pre-rolls are the perfect solution. So whether you are looking for a stress-free way to unwind after a long day, or just want to enjoy the benefits of THC, our pre-rolled joints are the perfect choice. Order now and experience the convenience and potency of THC in every puff.'
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
         price={39.99}
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
        backgroundColor: '#1D0EBE',
        fontStyle:'italic',
        fontSize:'16px',
        color:'#F0F4F8',
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

