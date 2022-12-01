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
    <div className='cube-section' style={{ backgroundColor:'#000000', position: 'relative', height:'60vh',marginTop:'-60px' }}>
    <div className='cube' style={{
      display:'flex',
      alignItems:'center',
      width:'100%',
      justifyContent:'center',
      height:'100%'
   
      
     
    }}>
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: false,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94
      }}
      loop= {true}
      autoplay={ {delay: 3000} }
      pagination={true}
      modules={[EffectCube, Pagination, Autoplay]}
      className="mySwiper"
    style={{margin:'0 auto',width:'50%'}}
    >
        <div className='cube-slider'>
      <SwiperSlide   style={{
        borderRadius:'0px',
        border:'solid 3px #ffffff',
      height:'40vh',
      backgroundColor:'#000000',
      margin:'0px auto'

      }}>
        <div  style={{
       height:'20vh'
      
      }}><div style={{padding:'20px'}}><h1 style={{color: '#ffffff', fontStyle:'italic'}}>SPECIAL OFFER!!</h1></div></div> 
      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide style={{
        borderRadius:'0px',
        border:'solid 3px #ffffff'
      
      }}>
      <div  style={{
       height:'20vh'
      
      }}><div style={{padding:'20px'}}><h1 style={{color: '#ffffff'}}>hey</h1></div></div> 
      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide style={{
        borderRadius:'0px',
        border:'solid 1px #ffffff'
      
      }}>
      <div  style={{
       height:'20vh'
      
      }}><div style={{padding:'20px'}}><h1 style={{color: '#ffffff'}}>hey</h1></div></div>      </SwiperSlide>
      </div>
      <div className='cube-slider'>
      <SwiperSlide style={{
        borderRadius:'0px',
        border:'solid 1px #ffffff'
      
      }}>
         <div  style={{
       height:'20vh'
      
      }}><div style={{padding:'20px'}}><h1 style={{color: '#ffffff'}}>hey</h1></div></div> 
      </SwiperSlide>
      </div>
    </Swiper>
  </div>
 {/*<div className='cube2' style={{
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
  </div>*/}
  </div>
  );
}

export default CubeProducts