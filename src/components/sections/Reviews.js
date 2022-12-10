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
           <Swiper    autoplay={{delay: 5000,
        disableOnInteraction: true}} {...swiperParameters}>
        <SwiperSlide>
       <Reviewbox
       name="my name is"
       review='this product was great sfagfsg sdf dsf asfsdf sdf dsf sdaf sdf sdf sdf sf sdfds'
       />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/02.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Free Guy</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/03.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">The Nice Guys</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/04.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">John Wick</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/05.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Avatar</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/06.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Encanto</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/07.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Eternals</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/08.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Jurassic World</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/09.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Dr Strange</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="swiper-slide-image swiper-carousel-animate-opacity"
            src="https://studio.swiperjs.com/demo-images/movies/10.jpg"
          />

          <div className="swiper-slide-content swiper-carousel-animate-opacity">
            <div className="swiper-slide-title">Guardians Of The Galaxy</div>
          </div>
        </SwiperSlide>
      </Swiper>
     
        </div>
  );
}
