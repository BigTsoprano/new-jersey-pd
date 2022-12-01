import React from 'react';
import NavBar from '../components/navbar/NavBar';
//import Products from '../components/sections/Products';
import { motion } from 'framer-motion';

function AllProducts() {

  const containerVariants = {

    exit: {
      x: '-100vw',
      transition: {ease: 'easeInOut'}
    }
  }

  return (

    <motion.div 
    variants={containerVariants}
 
    exit="exit"
    >
        <NavBar></NavBar>
        <h1>
            hersldafjklasdj
            </h1>
           
        </motion.div>
  );
}

export default AllProducts