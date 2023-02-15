import React, { Suspense } from 'react';
import { Element } from "react-scroll";
import ReactCursorPosition from "react-cursor-position";
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/sections/Banner';
import Herosection from '../components/sections/Herosection';
import Steps from '../components/sections/Steps';
import Products from '../components/sections/Products';
//import CubeProducts from '../components/sections/CubeProducts';
//import Pricetest from '../components/sections/Pricetest';
//import Carticon from '../components/cart/Carticon';
//import Ads from '../components/sections/Ads';
//import SwipeableEdgeDrawer from '../components/navbar/SwipeableEdgeDrawer';
//import Byebanner from '../components/sections/Byebanner';

const ItemScroll = React.lazy(() => import('../components/sections/ItemScroll'));
const Category  = React.lazy(() => import('../components/sections/Category'));
const CheckoutBar  = React.lazy(() => import('../components/navbar/CheckoutBar'));
const Modal  = React.lazy(() => import('../components/sections/Modal'));
const Accordions = React.lazy(() => import('../components/sections/Accordions'));
const Footer = React.lazy(() => import('../components/sections/Footer'));
const Gmaps = React.lazy(() => import('../components/sections/Gmaps'));

function HomePage() {





return (

<div>



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
<Suspense fallback={<div>Loading...</div>}>
      <Category/>
      </Suspense>
      </Element>
   


   
    <Element name='section-accordions'>
    <Suspense fallback={<div>Loading...</div>}>
      <Accordions/>
      </Suspense>
    </Element>

     

   
    
    
    
  
  
 
  
   
  

    <Element name='section-gmaps'>
    <Suspense fallback={<div>Loading...</div>}>
<Gmaps/>
</Suspense>
</Element>
<Element name='section-itemscroll'>
  <Suspense fallback={<div>Loading...</div>}>
     <ItemScroll/>
      </Suspense>
   </Element>

   
    <Element name='section-footer'>
      <Suspense fallback={<div>Loading...</div>}>
    <Footer/>
    </Suspense>
    </Element>
    
<Suspense fallback={<div>Loading...</div>}>
    <Modal/>
    </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
<CheckoutBar/>
</Suspense>


</div>
  );
}

export default HomePage