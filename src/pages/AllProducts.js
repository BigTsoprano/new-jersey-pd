import React, { Suspense, useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
//import Products from '../components/sections/Products';
import { motion, AnimatePresence } from "framer-motion";
//import SwipeableEdgeDrawer from '../components/navbar/SwipeableEdgeDrawer';
//import { useFetch } from '../hooks/useFetch'
import Footer from "../components/sections/Footer";
import Slider from "@mui/material/Slider";
import SpaIcon from "@mui/icons-material/Spa";
//import LinearProgress from '@mui/material/LinearProgress';
import SortIcon from "@mui/icons-material/Sort";
import CheckoutBar from "../components/navbar/CheckoutBar";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
//import FormLabel from '@mui/joy/FormLabel';
//import FormHelperText from '@mui/joy/FormHelperText';
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import IconButton from "@mui/joy/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import NavBar from '../components/navbar/NavBar';
import CookieIcon from "@mui/icons-material/Cookie";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

const Pricebox = React.lazy(() => import("../components/elements/Pricebox"));

function AllProducts() {
  const [products1, setProducts1] = useState('');
  const [allProducts, setAllProducts] = useState(null);
  const [sativa, setSativa] = useState(null);
  const [indica, setIndica] = useState(null);
  const [flower, setFlower] = useState('');
  const [edible, setEdible] = useState(null);
  const [concentrate, setConcentrate] = useState(null);
  const [price, setPrice] = useState([1, 50]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/Product");
      const json = await response.json();

      if (response.ok) {
        setProducts1(json);
        setAllProducts(json);
        setProducts1(
          allProducts.filter((product) => {
            return product.price >= price[0] && product.price <= price[1];
          })
        );

        setSativa(
          products1.filter((product) => {
            return product.strain == "sativa";
          })
        );
        setIndica(
          products1.filter((product) => {
            return product.strain == "indica";
          })
        );
        setFlower(
          products1.filter((product) => {
            return product.type == "flower";
          })
        );
        setEdible(
          products1.filter((product) => {
            return product.type == "edible";
          })
        );
        setConcentrate(
          products1.filter((product) => {
            return product.type == "vape";
          })
        );
        console.log(products1);
      }
    };

    fetchProducts();
  }, [price]);

  const showAllProducts = () => {
    setProducts1(allProducts);
    setPrice([1, 50]);
  };

  const showSativa = () => {
    setProducts1(sativa);
  };

  const showIndica = () => {
    setProducts1(indica);
  };

  const showFlower = () => {
    setProducts1(flower);
  };

  const showEdible = () => {
    setProducts1(edible);
  };



  const showConcentrate = () => {
    setProducts1(concentrate);
  };


  const [open, setOpen] = useState(false);

  const [opens, setOpens] = useState(false);





  const refreshHandle = () => {
    showAllProducts();
    setOpen(false);
    setOpens(false);
  };



  const rangeSelector = (event, newValue) => {
    setPrice(newValue);
  };
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    showAllProducts();
    setVisible(!visible);
  };
  const sortedProducts = products1 && [...products1].sort((a, b) => a.name.localeCompare(b.name));

  const handleSort = () => {
    setProducts1(sortedProducts);
  };

  useEffect(() => {
    if (allProducts) {
      setProducts1(allProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchValue.toLowerCase());
      }));
    }
  }, [allProducts, searchValue]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };


  return (


    <section className="section-wrapper" style={{ height: "auto" }}>
      <NavBar />
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: 500 }}
            animate={{
              x: 0,
            }}
            exit={{ x: 500 }}
            transition={{
              type: "spring",
              bounce: 0,
              duration: 0.6,
              delay: 0.1,
              ease: "linear",
            }}
            className="allproduct_filter"
          >
            <div>
            <button className="back_btn" onClick={() => setVisible(false)}><SubdirectoryArrowRightIcon style={{fontSize:'30px'}}/></button>
           
            </div>
            <input className="input_search" id="outlined-basic" label="Outlined" variant="outlined" value={searchValue} onChange={handleSearchChange}/>

            <div className="category_filter_flower">
              <h2 style={{fontSize:'18px'}}>
                <SpaIcon
                  sx={{ fontSize: "18px", paddingRight: "3px" }}
                  style={{ color: "#18981D" }}
                />
                Flowers
              </h2>
              <button className="allproduct_filter_btn2" onClick={showFlower}>all flowers</button>
              <div style={{display:'flex', flexDirection:'row', }}>
              <button  className="allproduct_filter_btn2" onClick={showSativa}>sativa</button>
              <button className="allproduct_filter_btn2" onClick={showIndica}>indica</button>
              </div>
            </div>
            <div style={{paddingTop:'20px'}}>
              <h2 style={{fontSize:'18px'}}>
                <InvertColorsIcon
                  sx={{
                    color: "#A2A5FC",
                    fontSize: "18px",
                    paddingRight: "3px",
                  }}
                />
                Concentrates
              </h2>
              <button className="allproduct_filter_btn2" onClick={showConcentrate}>all concentrates</button>
              <div style={{display:'flex', flexDirection:'row'}}>
              <button className="allproduct_filter_btn2" onClick={showConcentrate}>shatter</button>
              <button className="allproduct_filter_btn2" onClick={showIndica}>vapes</button>
              </div>
            </div>
            <div>
              <h2>
                <CookieIcon
                sx={{ fontSize:'18px'}}
                />
                Edibles</h2>
              <button className="allproduct_filter_btn2" onClick={showEdible}>all edibles</button>
            </div>
            <div styles={{ display: "flex" }}>
              <p style={{ paddingTop: "20px", fontWeight: "500" }}>
                Price filter: ${price[0]} - ${price[1]}
              </p>
              <Slider
                getAriaLabel={() => "Minimum distance"}
                style={{ height: 3, width: 200, marginLeft: 0, marginTop: 0 }}
                value={price}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
                getAriaValueText={() => `$`}
                disableSwap
              />
            </div>
            <div>
              <button className="allproduct_filter_btn2">price: $15+</button>
              <button className="allproduct_filter_btn2">price: $20+</button>
              <button className="allproduct_filter_btn2" onClick={handleSort}>sort a to z</button>
            </div>
            <motion.button
            className="allproduct_refresh"
            whileTap={{ rotate: -390, scale: 1.0 }}
            onClick={refreshHandle}
            sx={{ background: "#000" }}
          >
            <RestartAltIcon sx={{ color: "#fff" }} />
          </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
<div style={{ display: "flex", flexDirection: "row" }}>
      <button className="allproduct_filter_btn" onClick={toggleVisible}>
        <SortIcon />
        <p>Filter </p>
      </button>

    
       
        
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products1 &&
          products1.map((product) => (
            <div style={{ padding: "20px", display: "flex" }}>
              <div className="products-box">
                <Suspense
                  fallback={
                    <Box
                      sx={{ bgcolor: "#E3E3E4", width: "100%", height: "auto" }}
                    >
                      <Skeleton
                        sx={{ borderRadius: "10px" }}
                        variant="rectangular"
                        width="100%"
                        height={118}
                      />

                      <Skeleton sx={{ margin: "12px" }} width="60%" />
                      <Skeleton sx={{ margin: "12px" }} width="40%" />

                      <Skeleton
                        variant="circular"
                        width={40}
                        height={40}
                        sx={{ margin: "20px" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Skeleton
                          sx={{ borderRadius: "10px" }}
                          variant="rectangular"
                          width="20%"
                          height={25}
                        />
                        <Skeleton
                          sx={{ borderRadius: "10px" }}
                          variant="rectangular"
                          width="20%"
                          height={25}
                        />
                      </div>
                      <Skeleton />
                    </Box>
                  }
                >
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
      <Footer />
      <CheckoutBar />
    </section>
  );
}

export default AllProducts;
