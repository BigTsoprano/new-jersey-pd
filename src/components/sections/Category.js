import React, { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";
//import {Link} from 'react-router-dom';
import "swiper/css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SpaIcon from '@mui/icons-material/Spa';
import CookieIcon from '@mui/icons-material/Cookie';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
//import CategoryIcon from '@mui/icons-material/Category';
import { motion } from 'framer-motion';
//import LinearProgress from '@mui/material/LinearProgress';
import Pricebox from '../elements/Pricebox';
//import { useFetch } from '../../hooks/useFetch';
//import { AwesomeButton } from "react-awesome-button";
//import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';





function Category() {



  const [, updateState] = useState();
 

  const [products1, setProducts1] = useState(null)
  const [allProducts, setAllProducts] = useState(null)
  const [flower, setFlower] = useState(null)
  const [edible, setEdible] = useState(null)
  const [concentrate, setConcentrate] = useState(null)


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/Product')
      const json = await response.json()

      if (response.ok) {
        setProducts1(json)
        setAllProducts(json)
        setFlower(json.filter((product) => {
          return product.type == 'flower'
        }))
        setEdible(json.filter((product) => {
          return product.type == 'edible'
        }))
        setConcentrate(json.filter((product) => {
          return product.type == 'vape'
        }))
       
      }
    }

    fetchProducts()
  }, [])
  
  const showAllProducts = () => {
    setProducts1(allProducts)
 
  }

  const showFlower = () => {
    setProducts1(flower)

  }

  const showEdible = () => {
    setProducts1(edible)
  }

  const showConcentrate = () => {
    setProducts1(concentrate)
  }

  return (
    <div className='category_section'>
      <h1>Quickly browse through a variety of products</h1>
    
      <motion.div
 
      initial={{  scale:1.2}}
      transition={{duration:.6, delay:.4, type:'spring'}}
      whileInView={{ scale:1}}
      className='category_list'>

   
<RadioGroup
      aria-label="platform"
      defaultValue="All"
      overlay
      name="platform"
      className='radio_group_icons'
      sx={{
        
        gap: 3,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
           // border: '4px solid #0081EB'
            
          },
        },

      
        [`& .${radioClasses.radio}`]: {
          display: 'contents',
          '& > svg': {
            zIndex: 2,
            position: 'absolute',
            top: '-8px',
            right: '-8px',
            bgcolor: 'background.body',
            borderRadius: '50%',
          },
        },
      }}
    >
      
         <Sheet
     
     variant="solid"
     sx={{
       borderRadius: '5px',
       bgcolor: '#E12D39',
      border:'none',

       boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       gap: 0,
       p: 1,
       minWidth: 120,
       maxHeight: 60
     }}
     
   >
     <Radio onClick={() => showAllProducts()} value='All' checkedIcon={<CheckCircleRoundedIcon style={{color:'#18981D', backgroundColor:'#ffffff'}}  />} />
     <StorefrontIcon variant="soft" sx={{ color:'#0C008C' }} />
     <FormLabel ><h3>view all</h3></FormLabel>
   </Sheet>
        <Sheet
          variant="outlined"
          sx={{
            borderRadius: '5px',
            bgcolor: '#E12D39',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
            border:'none',
            display: 'flex',
         
            alignItems: 'center',
            gap: 0,
            p: 1,
            minWidth: 120,
            maxHeight: 60,
      
            flexDirection:'column'
          }}
        >
          <Radio onClick={() => showFlower()} value='Flowers' checkedIcon={<CheckCircleRoundedIcon style={{color:'#18981D', backgroundColor:'#ffffff'}} />} />
          <SpaIcon variant="soft" sx={{ color:'#51CA58' }} />
          <FormLabel ><h3>flowers</h3></FormLabel>
        </Sheet>
        <Sheet
     
     variant="outlined"
     sx={{
       borderRadius: '5px',
       bgcolor: '#E12D39',
      border:'none',
       boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       gap: 0,
       p: 1,
       minWidth: 120,
       maxHeight: 60
     }}
   >
     <Radio onClick={() => showEdible()} value='Edibles' checkedIcon={<CheckCircleRoundedIcon  style={{color:'#18981D', backgroundColor:'#ffffff'}} />} />
     <CookieIcon variant="soft" sx={{  color:'#F7C948' }} />
     <FormLabel ><h3>edibles</h3></FormLabel>
   </Sheet>
   <Sheet
     
     variant="solid"
     sx={{
       borderRadius: '5px',
       bgcolor: '#E12D39',
      
       boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent:'center',
       gap: 0,
       p: 1,
       minWidth: 120,
       maxHeight: 60
     }}
   >
     <Radio onClick={() => showConcentrate()} value='Concentrates' checkedIcon={<CheckCircleRoundedIcon style={{color:'#18981D', backgroundColor:'#ffffff'}} />} />
     <InvertColorsIcon variant="soft" sx={{  color:'#A2A5FC' }} />
     <FormLabel ><h3>concentrates</h3></FormLabel>
   </Sheet>
  
  
    
    </RadioGroup>
    </motion.div>


     
        <div className='cat_swiper' >
<Swiper
        slidesPerView={4}
        spaceBetween={10}
        
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
    
        className="mySwiper"
      >
          {products1 && products1.map((product) => 
           
        <SwiperSlide>  
           <div className='products-box2' key={product._id} style={{borderRadius:'10px'}}>
           <Pricebox 
             key={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
            strain={product.strain}
            /> 
  
      </div>
      </SwiperSlide>
 
      )}

      </Swiper>
      </div>
</div>

   


  )
}

export default Category
