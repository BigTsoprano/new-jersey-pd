import React from 'react';
import { Element } from "react-scroll";
import ReactCursorPosition from "react-cursor-position";
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/sections/Banner';
import Herosection from '../components/sections/Herosection';
import Products from '../components/sections/Products';
import CubeProducts from '../components/sections/CubeProducts';
function HomePage() {
  return (
<>
<main>
    <NavBar></NavBar>
    <Element name='section-home'>
    <ReactCursorPosition>
        <Herosection/>
        </ReactCursorPosition> 
    </Element>
    <Element name='section-banner'>
      <Banner/>
    </Element>
    <Element name='section-cube'>
      <CubeProducts/>
    </Element>
    <Element name='section-product'>
      <Products
      

      />
    </Element>
   


</main>

</>
  )
}

export default HomePage