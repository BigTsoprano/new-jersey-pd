import { useState } from 'react';
import NavBar from '../components/navbar/NavBar';
//import Products from '../components/sections/Products';
import { motion } from 'framer-motion';
import SwipeableEdgeDrawer from '../components/navbar/SwipeableEdgeDrawer';
import Pricebox from '../components/elements/Pricebox';
import { useFetch } from '../hooks/useFetch'
import Footer from '../components/sections/Footer';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SpaIcon from '@mui/icons-material/Spa';
import LinearProgress from '@mui/material/LinearProgress';



function AllProducts() {

  const [url, setUrl] = useState('http://localhost:3000/njpd')
  const { data: products, isPending, error } = useFetch(url) 

  const containerVariants = {

    exit: {
      x: '-100vw',
      transition: {ease: 'easeInOut'}
    }
  }

  return (
<section className='section-wrapper'>
    <motion.div 
    className='all_products_section'
    variants={containerVariants}
 
    exit="exit"
    >
        <NavBar/>
        <div className='all-products-main'>
           <h1 style={{textAlign:'center', padding:'40px'}}>
            ALL PRODUCTS
            </h1>
            <div style={{display:'flex', justifyContent:'space-around'}}>
              <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
          <div style={{paddingBottom:'15px'}}>
            <Button style={{backgroundColor:'#009B4E'}} size="large" variant="contained" className='all_products_flowers'  onClick={() => setUrl('http://localhost:3000/njpd?type=flower')} >
                
                <SpaIcon/><h2>All flowers</h2>
                              </Button>
                              </div>
                              <ButtonGroup   orientation="vertical" style={{backgroundColor:'#ffffff'}} variant="contained" size="large" aria-label="outlined primary button group">
              <Button style={{backgroundColor:'#9C4E00'}} className='all_products_btn'  onClick={() => setUrl('http://localhost:3000/njpd?strain=sativa')} >
                
            <h3>sativa </h3>
              </Button>
              <Button style={{backgroundColor:'#4E009C'}} className='all_products_btn'  onClick={() => setUrl('http://localhost:3000/njpd?strain=indica')}>
      <h3>indica</h3>              </Button>
<Button   className='all_products_btn' ><h3>Hybrid</h3></Button>
</ButtonGroup>
</div>
              <button className='all_products_main' onClick={() => setUrl('http://localhost:3000/njpd')} >
            All products
              </button>
            </div>
            <div style={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', paddingTop:'30px', flexDirection:'row', margin:'40px'}}>

            {isPending && <div style={{width:'100%'}}><LinearProgress /></div>}
        {error && <div>{error}</div>}
        {products && products.map(product => (
<div style={{paddingTop:'40px'}}>
          <div className='products-box' >
            <Pricebox 
             key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            strain={product.strain}
            /> 
          </div>
</div>
        ))}
        </div>
               </div>
            <SwipeableEdgeDrawer/>
        </motion.div>
        <Footer/>
        </section>
  );
}

export default AllProducts