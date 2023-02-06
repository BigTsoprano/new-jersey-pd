import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { A11y, Autoplay } from "swiper";
import EffectCarousel from "./effect-carousel.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import 'react-awesome-button/dist/styles.css';
import Reviewbox from "../elements/Reviewbox";
import { motion } from "framer-motion";
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import { useUserdataContext } from '../../hooks/useUserdataContext';

export default function Reviews() {
const [reviewName, setReviewName] = useState('');
const [reviewText, setReviewText] = useState('');

const {review, dispatch} = useUserdataContext();





const handleSubmit = async (e) => {
  e.preventDefault()
  const review = {reviewName, reviewText}
  const response = await fetch('/api/Review', {
    method: 'POST',
    body: JSON.stringify(review),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const json = await response.json()

  if (response.ok) {
    dispatch({
      type: "ADD_REVIEW",
      payload: json
    })
    setReviewName('');
    setReviewText('');
    console.log('new title added', json)
  }
}






  const swiperParameters = {
    modules: [A11y, EffectCarousel, Autoplay],
    effect: "carousel",
    loop: true,
    
    centeredSlides: true,
    slidesPerView: "auto",
    breakpoints: { 768: {} },
 
  };
  const [text, setText] = React.useState('');
  const addEmoji = (emoji) => () => setText(`${text}${emoji}`);
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

      {/*<div   className='leave_review'>
      <h1>Leave a review</h1>
      <div style={{paddingLeft:'64px', paddingBottom:'20px'}}>
        <p style={{fontSize:'14px', paddingBottom:'12px'}}>name</p>
      
      
      <Textarea
      sx={{width:'30%', border:'none', boxShadow: 'rgba(217, 226, 236, 0.25) 0px 30px 60px -12px inset, rgba(51, 78, 104, 0.3) 0px 18px 36px -18px inset', borderRadius:'4px'}}
        label="Primary"
        placeholder="Type in here…"
        variant="outlined"
        color="primary"
        onChange={(e) => setReviewName(e.target.value)}
value={reviewName}
      />
      </div>
      <div  style={{paddingBottom:'20px'}}>
      <Textarea
      style={{  boxShadow: 'rgba(217, 226, 236, 0.25) 0px 30px 60px -12px inset, rgba(51, 78, 104, 0.3) 0px 18px 36px -18px inset', width:'80%', margin:'0 auto', border:'none'}}
      placeholder="Type in here…"
   
      onChange={(e) => setReviewText(e.target.value)}
      value={reviewText}
      minRows={2}
      maxRows={4}
      startDecorator={
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <IconButton variant="outlined" color="#F0F4F8" onClick={addEmoji('👍')}>
            👍
          </IconButton>
          <IconButton variant="outlined" color="#F0F4F8" onClick={addEmoji('🏖')}>
            🏖
          </IconButton>
          <IconButton variant="outlined" color="#F0F4F8" onClick={addEmoji('😍')}>
            😍
          </IconButton>
        </Box>
      }
      endDecorator={
        <p level="body3" sx={{ ml: 'auto' }} >
          {text.length} character(s)
        </p>
      }
      sx={{ minWidth: 300 }}
    />

    
    <button onClick={handleSubmit} >click here</button>

    </div>
    
      </div>*/}
      </motion.div>
        </div>
  );
}
