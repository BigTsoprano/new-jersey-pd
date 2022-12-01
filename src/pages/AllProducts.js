import React from 'react';
import NavBar from '../components/navbar/NavBar';
//import Products from '../components/sections/Products';
import { motion } from 'framer-motion';
import SwipeableEdgeDrawer from '../components/navbar/SwipeableEdgeDrawer';
import Pricebox from '../components/elements/Pricebox';


function AllProducts() {

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
            hersldafjklasdj
            </h1>
            <div style={{display:'flex', justifyContent:'space-around'}}>
            <div style={{height:'100px', padding:'50px'}}>
              <button style={{height:'50px', width:'60px'}}>
Flowers
              </button>
            </div>
            <div style={{height:'100px', padding:'50px'}}>
              <button style={{height:'50px', width:'60px'}}>
Flowers
              </button>
            </div>
            <div style={{height:'100px', padding:'50px'}}>
              <button style={{height:'50px', width:'60px'}}>
Flowers
              </button>
            </div>
            </div>
            <div style={{paddingTop:'50px',display:'flex', justifyContent:'space-evenly', flexWrap:'wrap', }}>
              <div className='products-box' style={{height:'auto', width:'300px'}}>
            <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />  
            </div>
            <div className='products-box' style={{height:'auto', width:'300px'}}>
            <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />  
            </div>
            <div className='products-box' style={{height:'auto', width:'300px'}}>
            <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />  
            </div>
            <div className='products-box' style={{height:'auto', width:'300px'}}>
            <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />  
            </div>
            <div style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'space-evenly',
              padding:'50px'

            }}>
            <div className='products-box' style={{height:'auto', width:'300px'}}>
            <Pricebox
            name='this is other title'
            price={12.99}
            image='sour_diesel.png'
            strain='sativa'
            />  
            </div>
            </div>
            </div>
               </div>
            <SwipeableEdgeDrawer/>
        </motion.div>
        </section>
  );
}

export default AllProducts