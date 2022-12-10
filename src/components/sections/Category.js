import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";
import {Link} from 'react-router-dom';

import StorefrontIcon from '@mui/icons-material/Storefront';
import SpaIcon from '@mui/icons-material/Spa';
import CookieIcon from '@mui/icons-material/Cookie';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CategoryIcon from '@mui/icons-material/Category';
import { motion } from 'framer-motion';
import LinearProgress from '@mui/material/LinearProgress';
import Pricebox from '../elements/Pricebox';
import { useFetch } from '../../hooks/useFetch';
import { AwesomeButton } from "react-awesome-button";
import Avatar from '@mui/joy/Avatar';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';





function Category() {
  const [url, setUrl] = useState('http://localhost:3000/njpd')
  const { data: products, isPending, error } = useFetch(url) 
  return (
    <div className='category_section'>
      <h1>PRODUCT FILTER</h1>
    
      <div className='category_list'>

    {/*    <motion.div onClick={() => setUrl('http://localhost:3000/njpd')}  whileHover={{scale:1.14, rotate:5}} className='shop_all'>
          <motion.div  initial={{scale: 3.5}} className='shop_icon'>
<StorefrontIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
    <h3>Shop all</h3>
        </motion.div>
       
        <Link to='/all-products'>

        <motion.div whileHover={{scale:1.14, rotate:5}} className='category_flowers'>
        <motion.div  initial={{scale: 2.5}}>
<SpaIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
<h3>Flowers</h3>

        </motion.div>
        </Link>
        <Link to='/all-products'>

        <motion.div whileHover={{scale:1.14, rotate:5}} className='category_edibles'>
        <motion.div  initial={{scale: 3}}>
<CookieIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
<h3>Edibles</h3>

        </motion.div>
</Link>
<Link to='/all-products'>

        <motion.div whileHover={{scale:1.14, rotate:5}} className='category_concentrates'
        >
            <motion.div  initial={{scale: 3}}>
<InvertColorsIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
<h3>concentrates</h3>
        </motion.div>
        </Link>
        <Link to='/all-products'>

        <motion.div whileHover={{scale:1.14, rotate:5}} className='category_misc'>
        <motion.div  initial={{scale: 3}}>
<CategoryIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
<h3>Other</h3>

        </motion.div>
        </Link>
  </div>*/}
<RadioGroup
      aria-label="platform"
      defaultValue="All"
      overlay
      name="platform"
      
      sx={{
        flexDirection: 'row',
        gap: 5,
        [`& .${radioClasses.checked}`]: {
          [`& .${radioClasses.action}`]: {
            inset: -1,
            border: '4px solid #0081EB'
            
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
     
     variant="outlined"
     sx={{
       borderRadius: 'md',
       border:'2px solid #000000',
       bgcolor: '#292929',
       boxShadow: 'sm',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       gap: 1.5,
       p: 2,
       minWidth: 150,
     }}
     onClick={() => setUrl('http://localhost:3000/njpd')}
   >
     <Radio value='All' checkedIcon={<CheckCircleRoundedIcon style={{color:'#0081EB', backgroundColor:'#ffffff'}}  />} />
     <StorefrontIcon variant="soft" sx={{ fontSize: 40, color:'#E5E5E7' }} />
     <FormLabel ><h3>View all</h3></FormLabel>
   </Sheet>
        <Sheet
     onClick={() => setUrl('http://localhost:3000/njpd?strain=indica')}
          variant="outlined"
          sx={{
            borderRadius: 'md',
            bgcolor: '#292929',
            border:'2px solid #000000',
            boxShadow: 'sm',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1.5,
            p: 2,
            minWidth: 150,
          }}
        >
          <Radio value='Flowers' checkedIcon={<CheckCircleRoundedIcon style={{color:'#0081EB', backgroundColor:'#ffffff'}} />} />
          <SpaIcon variant="soft" sx={{ fontSize: 40, color:'#33EB00' }} />
          <FormLabel ><h3>Flowers</h3></FormLabel>
        </Sheet>
        <Sheet
     
     variant="outlined"
     sx={{
       borderRadius: 'md',
       bgcolor: '#292929',
       border:'2px solid #000000',
       boxShadow: 'sm',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       gap: 1.5,
       p: 2,
       minWidth: 150,
     }}
   >
     <Radio value='Edibles' checkedIcon={<CheckCircleRoundedIcon  style={{color:'#0081EB', backgroundColor:'#ffffff'}} />} />
     <CookieIcon variant="soft" sx={{ fontSize: 40, color:'#EBB800' }} />
     <FormLabel ><h3>Edibles</h3></FormLabel>
   </Sheet>
   <Sheet
     
     variant="outlined"
     sx={{
       borderRadius: 'md',
       bgcolor: '#292929',
       border:'2px solid #000000',
       boxShadow: 'sm',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       gap: 1.5,
       p: 2,
       minWidth: 150,
     }}
   >
     <Radio value='Concentrates' checkedIcon={<CheckCircleRoundedIcon style={{color:'#0081EB', backgroundColor:'#ffffff'}} />} />
     <InvertColorsIcon variant="soft" sx={{ fontSize: 40, color:'#D61EFF' }} />
     <FormLabel ><h3>Concentrates</h3></FormLabel>
   </Sheet>
   <Sheet
     
     variant="outlined"
     sx={{
       borderRadius: 'md',
       bgcolor: '#292929',
       border:'2px solid #000000',
       boxShadow: 'sm',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       gap: 1.5,
       p: 2,
       minWidth: 150,
     }}
   >
     <Radio value='Other' checkedIcon={<CheckCircleRoundedIcon style={{color:'#0081EB', backgroundColor:'#ffffff'}}/>} />
     <CategoryIcon variant="soft" sx={{ fontSize: 40, color:'#00EBB8' }} />
     <FormLabel ><h3>Other</h3></FormLabel>
   </Sheet>
  
    
    </RadioGroup>
    </div>

{isPending && <div style={{width:'100%'}}><LinearProgress /></div>}
        {error && <div>{error}</div>}
        <div style={{margin:'0 88px'}}>
<Swiper
        slidesPerView={4}
        spaceBetween={10}
        
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50
          }
        }}
    
        className="mySwiper"
      >
          {products && products.map(product => (
            <div style={{}}>
        <SwiperSlide>  
           <div className='products-box2' >
        <Pricebox 
         key={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        strain={product.strain}
        /> 
      </div>
      </SwiperSlide>
       </div>
       ))}

      </Swiper>
      </div>
</div>

   


  )
}

export default Category