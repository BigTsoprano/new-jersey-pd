import React, { Suspense, useEffect, useState} from 'react';
import NavBar from '../components/navbar/NavBar';
//import Products from '../components/sections/Products';
import { motion } from 'framer-motion';
//import SwipeableEdgeDrawer from '../components/navbar/SwipeableEdgeDrawer';
//import { useFetch } from '../hooks/useFetch'
import Footer from '../components/sections/Footer';
import Slider from '@mui/material/Slider';
import SpaIcon from '@mui/icons-material/Spa';
//import LinearProgress from '@mui/material/LinearProgress';
import SortIcon from '@mui/icons-material/Sort';
import CheckoutBar from '../components/navbar/CheckoutBar';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
//import FormLabel from '@mui/joy/FormLabel';
//import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import IconButton from '@mui/joy/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
//import NavBar from '../components/navbar/NavBar';
import CookieIcon from '@mui/icons-material/Cookie';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const Pricebox = React.lazy(() => import('../components/elements/Pricebox'));

function AllProducts() {

  //const [url, setUrl] = useState('http://localhost:3000/njpd')
  

  const [products1, setProducts1] = useState(null)
  const [allProducts, setAllProducts] = useState(null)
  const [sativa, setSativa] = useState(null)
  const [indica, setIndica] = useState(null)
  const [flower, setFlower] = useState(null)
  const [edible, setEdible] = useState(null)
  const [concentrate, setConcentrate] = useState(null)
  const [price, setPrice] = useState([1,50])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/Product')
      const json = await response.json()

      if (response.ok) {
        setProducts1(json)
        setAllProducts(json)
        setProducts1(allProducts.filter((product) => {
          return product.price >= price[0] && product.price <= price[1]
        }))
        setSativa(products1.filter((product) => {
          return product.strain == 'sativa'
        }))
        setIndica(products1.filter((product) => {
          return product.strain == 'indica'
        }))
        setFlower(products1.filter((product) => {
          return product.type == 'flower'
        }))
        setEdible(products1.filter((product) => {
          return product.type == 'edible'
        }))
        setConcentrate(products1.filter((product) => {
          return product.type == 'vape'
        }))
        console.log(products1)
      }
    }

    fetchProducts()
  }, [price])
  
  const showAllProducts = () => {
    setProducts1(allProducts)
    setPrice([1,50])

  }

  const showSativa = () => {
    setProducts1(sativa)
   
  }

  const showIndica = () => {
    setProducts1(indica)
  }

  const showFlower = () => {
    setProducts1(flower)
  }

  const showEdible = () => {
    setProducts1(edible)
  }

  const handleEdible = () => {
    setProducts1(edible)
    setOpen(false);
    setOpens(false);
  }

  const showConcentrate = () => {
    setProducts1(concentrate)
  }

  const [show, setShow] = useState(false);
const close = () => setShow(false);

const onClose = () => {
  setShow(false);
};

const [open, setOpen] = useState(false);

const [opens, setOpens] = useState(false);

const handleOpen = () => {
  setOpen(!open);
  setOpens(false);
};

const handleOpens = () => {
  setOpens(!opens);
  setOpen(false);
};

const refreshHandle = () => {
  showAllProducts();
  setOpen(false);
  setOpens(false);

}


const [value, setValue] = React.useState('female');
const [values,setValues] = React.useState('concentrates'); 

const handleChange = (event) => {
  setValue(event.target.value);
}

const handleChange2 = (event) => {
  setValues(event.target.value);
}


const rangeSelector = (event, newValue) => {
  setPrice(newValue)
}


  return (
<section className='section-wrapper' style={{height:'auto'}}>
  <NavBar/>
  <div styles={{height: '50px', width: '50px'}}>
    <h3>Price</h3>
    <Slider
      getAriaLabel={() => 'Minimum distance'}
      style={{ height: 10, width: 200, marginLeft: 30, marginTop: 20 }}
      value={price}
      onChange={rangeSelector}
      valueLabelDisplay="auto"
      getAriaValueText={() => `$`}
      disableSwap
    />
    <p>Price ${price[0]} - ${price[1]}</p>
  </div>
  <motion.div whileTap={{scale:.95}} className='allproduct_filter_btn' >
  <Button  style={{backgroundColor:'#BCCCDC', color:'#102A43',boxShadow: 'rgba(0, 0, 0, 0.35) 2.4px 2.4px 3.2px', fontStyle:'italic'}} onClick={() => setShow(!show)} ><SortIcon/><p>Filter </p></Button>
  </motion.div>
  {show && (
  <div className='product_filter'>
    <motion.div whileTap={{ rotate: -390, scale: 1.2 }} className='allproduct_refresh'>
    <IconButton variant="solid" onClick={refreshHandle} sx={{background:'#000'}}>
<RestartAltIcon sx={{color:'#fff'}}/>
    </IconButton>
    </motion.div>
    <div className='product_filter2'>
<div style={{}}>
<FormControl>
  <div className="flower_radio">
      <Button  onClick={handleOpen} >
        <h2 style={{fontSize:'16px', fontWeight:'550', color:'#102A43',display:'flex', alignItems:'center', flexDirection:'row'}}><SpaIcon sx={{fontSize:'20px',paddingRight:'3px'}} style={{color:'#18981D'}}/>Flowers<KeyboardArrowDownIcon/></h2>
       </Button>
       </div>
       {open && (
      <RadioGroup
        defaultValue="female"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{ my: 1 }}
      >
        <Radio style={{color:'#243B53', paddingTop:'12px', fontWeight:'500'}} onClick={showFlower} value="all flowers" label="all flowers" />
        <Radio style={{color:'#243B53', paddingTop:'12px', fontWeight:'500'}}  onClick={showSativa} value="sativa" label="sativa" />
        <Radio style={{color:'#243B53', paddingTop:'12px', fontWeight:'500'}}  onClick={showIndica} value="indica" label="indica" />
      </RadioGroup>
      )}
    </FormControl>
   
 

</div>

<FormControl>
<div className='concentrates_radio'>
  <Button onClick={handleOpens}><InvertColorsIcon sx={{color:'#A2A5FC', fontSize:'20px', paddingRight:'3px'}}/>
  <h2 style={{fontSize:'16px', fontWeight:'550', color:'#102A43',display:'flex', alignItems:'center', flexDirection:'row'}}>Concentrates<KeyboardArrowDownIcon/></h2></Button>
  </div>
  {opens && (
    <RadioGroup 
    defaultValue="consentrates"
    name="controlled-radio-buttons-group"
    value={values}
    onChange={handleChange2}
    sx={{ my: 1 }}
  >
      <Radio style={{color:'#243B53', paddingTop:'12px', fontWeight:'500'}} onClick={showConcentrate} value="all flowers" label="all concentrates" />
      <Radio style={{color:'#243B53', paddingTop:'12px', fontWeight:'500'}}  onClick={showConcentrate} value="sativa" label="vape pens" />
      <Radio style={{color:'#243B53', paddingTop:'12px', fontWeight:'500'}}  onClick={showIndica} value="indica" label="oil dabs" />
      </RadioGroup>
 
  )}

  </FormControl>
  <div className='edibles_radio'>
  <Button onClick={handleEdible}><CookieIcon sx={{color:'#DE911D', fontSize:'20px', paddingRight:'3px'}}/><p>Edibles</p></Button>
</div>
</div>
  </div>
  )}
<div style={{display:'flex', flexDirection:'row', height:'auto', flexWrap:'wrap', justifyContent:'center'}}>
        {products1 && products1.map(product => (
<div style={{padding:'20px', display:"flex"}}>
          <div className='products-box' >
            <Suspense fallback={ <Box sx={{bgcolor: '#E3E3E4', width: '100%' , height:'auto'}}>
    <Skeleton sx={{borderRadius:'10px'}} variant="rectangular" width="100%" height={118} />

              <Skeleton sx={{margin:'12px'}} width="60%" />
              <Skeleton sx={{margin:'12px'}} width="40%" />
             
              <Skeleton variant="circular" width={40} height={40} sx={{margin:'20px'}} />
<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
              <Skeleton sx={{borderRadius:'10px'}} variant="rectangular" width="20%" height={25} />
              <Skeleton  sx={{borderRadius:'10px'}} variant="rectangular" width="20%" height={25} />

              </div>
              <Skeleton/>
    
    </Box>}>
            <Pricebox 
             key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            strain={product.strain}
            /> 
            </Suspense>
          </div>
</div>
        ))}
        </div>
        <Footer/>
        <CheckoutBar/>
        </section>
  );
}

export default AllProducts
