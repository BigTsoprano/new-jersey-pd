import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { A11y, Autoplay } from "swiper";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import 'react-awesome-button/dist/styles.css';
import Reviewbox from "../elements/Reviewbox";
import { motion } from "framer-motion";

export default function Reviews() {
  const swiperParameters = {
    modules: [A11y, EffectCarousel, Autoplay],
    effect: "carousel",
    loop: true,
    
    centeredSlides: true,
    slidesPerView: "auto",
    breakpoints: { 768: {} },
 
  };
  return (
    <div className='reviews-section'>
      <motion.div initial={{scale:.3}} whileInView={{scale:1}} transition={{delay:.1, type:'spring', duration:.6}} viewport={{ once: false }}>
      <h1>See what our cutomers say about us!</h1>
           <Swiper    autoplay={{delay: 5000,
        disableOnInteraction: true}} {...swiperParameters}>
      

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='I have used other vendors but New Jersey pd has by far had the best customer service and the best product.  I would recommend them to anyone and will be a regular customer for life. '
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='I ordered the cannabis vape pen from newjerseypd.com about 2 weeks ago and I am impressed with the quality of this vape pen.'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='I have never had any complaints. Their products are high-quality, fast, and they offer the best service.'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='My last order was shipped and delivered to my home within less than a day. I have been ordering from BudsGanja for several years and it has been a pleasant experience.'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='I love trying new cannabis products and I recently picked up some of the Sour Diesel vape oil. The flavor was strong and pungent, and the high was intense and euphoric.'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='Ive never had a bad experience with the Granddaddy Purple strain. Its always reliable for a relaxing, sedating high and the taste is always spot on.'
       />
        </SwiperSlide>
        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='I recently tried a cannabis delivery service and it exceeded my expectations. The delivery was fast and discreet, and the products were top-notch.'
       />
        </SwiperSlide>
        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='The selection was great, the prices were reasonable, and the delivery was fast and discreet. The customer service was also excellent and they were very helpful in answering all of my questions. '
       />
        </SwiperSlide>

   

     
   
       
      </Swiper>
      </motion.div>
        </div>
  );
}
