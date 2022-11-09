import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "swiper/css/autoplay";


// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";

function CubeProducts() {



  return (
    <div className='cube-section'>
    <div className='cube' style={{
      width:'350px',
      height:'300px',
        backgroundColor:'#ffffff'
    }}>
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }}
      loop= {true}
      autoplay={ {delay: 3000} }
      pagination={true}
      modules={[EffectCube, Pagination, Autoplay]}
      className="mySwiper"
    
    >
        <div className='cube-slider'>
      <SwiperSlide   style={{
        borderRadius:'30px',
        border:'solid 5px #000000'
      }}>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      </div>
    </Swiper>
  </div>
  <div className='cube2' style={{
      width:'350px',
      height:'300px'
    }}>
  <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }}
      loop= {true}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
        <div className='cube-slider'>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
      </SwiperSlide>
      </div>
    </Swiper>
  </div>
  </div>
  );
}

export default CubeProducts