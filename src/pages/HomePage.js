import React from 'react';
import { Element } from "react-scroll";
import ReactCursorPosition from "react-cursor-position";
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/sections/Banner';
import Herosection from '../components/sections/Herosection';
import Products from '../components/sections/Products';
//import CubeProducts from '../components/sections/CubeProducts';
//import Pricetest from '../components/sections/Pricetest';
//import Carticon from '../components/cart/Carticon';
import Ads from '../components/sections/Ads';
//import SwipeableEdgeDrawer from '../components/navbar/SwipeableEdgeDrawer';
import Accordions from '../components/sections/Accordions';
import Footer from '../components/sections/Footer';
import Steps from '../components/sections/Steps';
import Category from '../components/sections/Category';
import Gmaps from '../components/sections/Gmaps';
//import Byebanner from '../components/sections/Byebanner';
import CheckoutBar from '../components/navbar/CheckoutBar';
import ItemScroll from '../components/sections/ItemScroll';

import Modal from '../components/sections/Modal';


function HomePage() {





return (

<>



{/*<Carticon/>*/}

<NavBar />
    <Element name='section-home'>
      <ReactCursorPosition>
        <Herosection/>
      </ReactCursorPosition> 
    </Element>

    <Element name='section-banner'>
        <Banner/>
    </Element>
    <Element name='section-steps'>
    <Steps/>
    </Element>
    <Element name='section-product'>
      
        <Products />
    </Element>
    <Element name='section-category'>
      <Category/>
      </Element>
   


   
    <Element name='section-accordions'>
      <Accordions/>
    </Element>

     

   
    
    
    
  
  
 
  
   
  

    <Element name='section-gmaps'>
<Gmaps/>
</Element>
<Element name='section-itemscroll'>
     <ItemScroll/>
   </Element>
<Element name='section-ads'>
      <Ads/>
    </Element>
   
    <Element name='section-footer'>
    <Footer/>
    </Element>
    

    <Modal >
  </Modal>
<CheckoutBar/>



</>
  );
}

export default HomePage