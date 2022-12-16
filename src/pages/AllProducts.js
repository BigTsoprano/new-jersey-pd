import { useEffect, useState } from 'react';
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




function AllProducts() {

  const [url, setUrl] = useState('http://localhost:3000/njpd')
  // const { data: products, isPending, error } = useFetch(url) 

  const [products1, setProducts1] = useState(null)
  const [productsCopied, setProductsCopied] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:4000/Product')
      const json = await response.json()

      if (response.ok) {
        setProducts1(json)
        setProductsCopied(json)
        console.log(products1)
      }
    }

    fetchProducts()
  }, [])

  const showAllProducts = () => {
    setProducts1(productsCopied)
  }

  const Sativa = () => {
    // setProducts1(productsCopied)
    // if (products1 == productsCopied) {
      const sativaFilter = products1.filter((product) => {
        return product.strain == 'sativa'
      })
      setProducts1(sativaFilter)
    // }
  }

  const Indica = () => {
    
    const indicaFilter = products1.filter((product) => {
      return product.strain == 'indica'
    })
    console.log(indicaFilter)
    setProducts1(indicaFilter)
  }

  return (
<section className='section-wrapper'>
  
  <button onClick={() => setProducts1(productsCopied)}>Show All Products</button>
  <button onClick={Sativa}>Sativa</button>
  <button onClick={Indica}>Indica</button>

        {products1 && products1.map(product => (
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
        </section>
  );
}

export default AllProducts