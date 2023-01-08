import { useEffect, useState} from 'react';
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
import CookieIcon from '@mui/icons-material/Cookie';
//import NavBar from '../components/navbar/NavBar';




function AllProducts() {

  //const [url, setUrl] = useState('http://localhost:3000/njpd')
  

  const [products1, setProducts1] = useState(null)
  const [allProducts, setAllProducts] = useState(null)
  const [sativa, setSativa] = useState(null)
  const [indica, setIndica] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/Product')
      const json = await response.json()

      if (response.ok) {
        setProducts1(json)
        setAllProducts(json)
        setSativa(json.filter((product) => {
          return product.strain == 'sativa'
        }))
        setIndica(json.filter((product) => {
          return product.strain == 'indica'
        }))
        console.log(products1)
      }
    }

    fetchProducts()
  }, [])
  
  const showAllProducts = () => {
    setProducts1(allProducts)

  }

  const showSativa = () => {
    setProducts1(sativa)
   
  }

  const showIndica = () => {
    setProducts1(indica)
  }


  return (
<section className='section-wrapper' style={{height:'auto'}}>
  <NavBar/>
  <button onClick={() => showAllProducts()}>Show All Products</button>
  <button onClick={() => showSativa('sativa')}>Sativa</button>
  <button onClick={() => showIndica('indica')}>Indica</button>
<div style={{display:'flex', flexDirection:'row', height:'auto', flexWrap:'wrap', justifyContent:'center'}}>
        {products1 && products1.map(product => (
<div style={{padding:'20px', display:"flex"}}>
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
        </section>
  );
}

export default AllProducts