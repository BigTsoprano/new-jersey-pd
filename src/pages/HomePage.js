import {useState, React} from 'react';
import { Element } from "react-scroll";
import ReactCursorPosition from "react-cursor-position";
import NavBar from '../components/navbar/NavBar';
import Banner from '../components/sections/Banner';
import Herosection from '../components/sections/Herosection';
import Products from '../components/sections/Products';
import CubeProducts from '../components/sections/CubeProducts';
import Pricetest from '../components/sections/Pricetest';
import { motion } from 'framer-motion';
import Checkout from '../components/sections/Checkout';
import { useStateValue } from "../components/cart/StateProvider";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




function HomePage() {
  const [showCheckout, setShowCheckout] = useState(false);


  const [{ basket }, dispatch] = useStateValue();

  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
      setToggleMenu(false);
    }
  });


  
  return (
<>
<main>
<div whileHover={{ scale: 1.2 }}  className="cart" 
style={{ position:"fixed", 
zIndex:"40", 
bottom:"0", 
left:"5%", 
paddingBottom: '20px', 
display:'flex', 
alignItems:'flex-end' }} >

 {showCheckout && <Checkout 
 style={{ position:"absolute", 
 padding:'10px'}} 
 setShowCheckout={setShowCheckout}/>}

 {!showCheckout && 
 <div  >
 <motion.button whileHover={{ scale: 1.2 }} 
 style={{ color:"#01B140", 
 backgroundColor:'#000000',  
 borderRadius:'20px', 
 border:'5px solid #000000'}} 
 onClick={() => setShowCheckout(true)}>
 <ShoppingCartIcon style={{height:'40px', width:'40px'}}/>
     <span  className='basket-count' 
     style={{fontSize:'18px', 
     fontWeight:'550', fontStyle:'italic', 
     paddingRight:'5px'}}> 
     {basket?.length}
     </span>
      </motion.button>
      </div>}
      <div>
        <p 
        style={{color:'#FFC80F', 
        paddingLeft:'10px', 
        fontWeight:'550', 
        textShadow: '-1.5px 0 #000000, 0 1.5px #000000, 1.5px 0 #000000, 0 -1.5px #000000', 
        fontStyle:'italic'}}>
          Checkout 
          </p>
          </div>
     </div>

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
      <Products/>
    </Element>
    <Element name='section-pricetest'>
      <Pricetest/>
    </Element>
   


</main>

</>
  )
}

export default HomePage