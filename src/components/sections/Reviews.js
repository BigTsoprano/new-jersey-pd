import React from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { A11y, Autoplay } from "swiper";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import 'react-awesome-button/dist/styles.css';
import Reviewbox from "../elements/Reviewbox";

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
      <h1>See what our cutomers say about us!</h1>
           <Swiper    autoplay={{delay: 5000,
        disableOnInteraction: true}} {...swiperParameters}>
      

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>
        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>
        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>

        <SwiperSlide>
        <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>

     
   
       
      </Swiper>
     
        </div>
  );
}
