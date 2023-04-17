import React, { Suspense, useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/sections/Footer";
import Slider from "@mui/material/Slider";
import SpaIcon from "@mui/icons-material/Spa";
import SortIcon from "@mui/icons-material/Sort";
import CheckoutBar from "../components/navbar/CheckoutBar";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const Pricebox = React.lazy(() => import("../components/elements/Pricebox"));

function AllProducts() {
  const [products1, setProducts1] = useState(null);
  const [allProducts, setAllProducts] = useState(null);
  const [price, setPrice] = useState([1, 50]);

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
    setProducts1(allProducts.filter((product) => product.strain === "sativa"));
  };

  const showIndica = () => {
    setProducts1(allProducts.filter((product) => product.strain === "indica"));
  };

  const showFlower = () => {
    setProducts1(allProducts.filter((product) => product.type === "flower"));
  };

  const showEdible = () => {
    setProducts1(allProducts.filter((product) => product.type === "edible"));
  };

  const showConcentrate = () => {
    setProducts1(allProducts.filter((product) => product.type === "vape"));
  };

  const refreshHandle = () => {
    showAllProducts();
  };

  const rangeSelector = (event, newValue) => {
    setPrice(newValue);
  };
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };
  const sortedProducts =
    products1 && [...products1].sort((a, b) => a.name.localeCompare(b.name));

  const handleSort = () => {
    setProducts1(sortedProducts);
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
            <button onClick={toggleVisible}>close</button>{" "}
            <button>clear filter</button>
            <h1>filter</h1>
            <div className="category_filter_flower">
              <h2>
                <SpaIcon
                  sx={{ fontSize: "20px", paddingRight: "3px" }}
                  style={{ color: "#18981D" }}
                />
                Flowers
              </h2>
              <button onClick={showFlower}>all flowers</button>
              <button onClick={showSativa}>sativa</button>
              <button onClick={showIndica}>indica</button>
            </div>
            <div>
              <h2>
                <InvertColorsIcon
                  sx={{
                    color: "#A2A5FC",
                    fontSize: "20px",
                    paddingRight: "3px",
                  }}
                />
                Concentrates
              </h2>
              <button onClick={showConcentrate}>all concentrates</button>
              <button onClick={showConcentrate}>shatter</button>
              <button onClick={showIndica}>vapes</button>
            </div>
            <div>
              <h2>Edibles</h2>
              <button>all edibles</button>
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
              <button>price: $15+</button>
              <button>price: $20+</button>
              <button onClick={handleSort}>sort a to z</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button className="allproduct_filter_btn" onClick={toggleVisible}>
          <SortIcon />
          <p>Filter </p>
        </button>

        <motion.button
          className="allproduct_refresh"
          whileTap={{ rotate: -390, scale: 1.2 }}
          onClick={refreshHandle}
          sx={{ background: "#000" }}
        >
          <RestartAltIcon sx={{ color: "#fff" }} />
        </motion.button>
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
