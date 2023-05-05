import React, { useState, useEffect, Suspense } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { Pagination } from "swiper";
//import {Link} from 'react-router-dom';
import "swiper/css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SpaIcon from "@mui/icons-material/Spa";
import CookieIcon from "@mui/icons-material/Cookie";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
//import CategoryIcon from '@mui/icons-material/Category';
import { motion } from "framer-motion";
//import LinearProgress from '@mui/material/LinearProgress';
//import { useFetch } from '../../hooks/useFetch';
//import { AwesomeButton } from "react-awesome-button";
//import Avatar from '@mui/joy/Avatar';

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import PricePage from "../elements/PricePage";
const Pricebox = React.lazy(() => import("../elements/Pricebox"));

function Category() {
  //const [, updateState] = useState();

  const [products1, setProducts1] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [flower, setFlower] = useState(null);
  const [edible, setEdible] = useState(null);
  const [concentrate, setConcentrate] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/Product");
      const json = await response.json();

      if (response.ok) {
        setProducts1(json);
        setAllProducts(json);
        setFlower(
          json.filter((product) => {
            return product.type == "flower";
          })
        );
        setEdible(
          json.filter((product) => {
            return product.type == "edible";
          })
        );
        setConcentrate(
          json.filter((product) => {
            return product.type == "vape";
          })
        );
      }
    };

    fetchProducts();
  }, []);

  const showAllProducts = () => {
    setProducts1(allProducts);
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

  return (
    <div className="category_section">
      <h1>Quickly browse through a variety of products</h1>

      <motion.div
        initial={{ scale: 1.2 }}
        transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
        whileInView={{ scale: 1 }}
        className="category_list"
      >
        <div className="cat_row1">
          <button onClick={showAllProducts} className="cat_button">
            <StorefrontIcon />
            <h3>view all</h3>
          </button>
          <button onClick={showFlower} className="cat_button">
            <SpaIcon />
            <h3>flowers</h3>
          </button>
        </div>
        <div className="cat_row2">
          <button onClick={showEdible} className="cat_button">
            <CookieIcon />
            <h3>edibles</h3>
          </button>
          <button onClick={showConcentrate} className="cat_button">
            <InvertColorsIcon />
            <h3>concentrates</h3>
          </button>
        </div>
      </motion.div>

      <div className="cat_swiper">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {products1 &&
            products1.map((product) => (
              <SwiperSlide>
                <div
                  className="products-box2"
                  key={product._id}
                  style={{ borderRadius: "10px" }}
                >
                  <Suspense
                    fallback={
                      <Box
                        sx={{
                          bgcolor: "#E3E3E4",
                          width: "100%",
                          height: "auto",
                        }}
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
                      key={product._id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      strain={product.strain}
                    />
                    <PricePage
                      key={product._id}
                      name={product.name}
                    
                    />
                  </Suspense>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Category;
