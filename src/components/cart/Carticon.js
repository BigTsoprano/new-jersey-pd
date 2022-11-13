import {React,useState} from 'react'
import { useStateValue } from "./StateProvider";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Checkout from '../sections/Checkout';
import { motion } from 'framer-motion';



function Carticon() {

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
  )
}

export default Carticon