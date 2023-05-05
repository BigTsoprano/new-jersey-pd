import React, { Suspense } from "react";
import { Element } from "react-scroll";
import ReactCursorPosition from "react-cursor-position";
import { Redirect } from "react-router-dom";

import Herosection from "../components/sections/Herosection";
//import CubeProducts from '../components/sections/CubeProducts';
//import Pricetest from '../components/sections/Pricetest';
//import Carticon from '../components/cart/Carticon';
//import Ads from '../components/sections/Ads';
//import SwipeableEdgeDrawer from '../components/navbar/SwipeableEdgeDrawer';
//import Byebanner from '../components/sections/Byebanner';
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const ItemScroll = React.lazy(() =>
  import("../components/sections/ItemScroll")
);
const Category = React.lazy(() => import("../components/sections/Category"));
const CheckoutBar = React.lazy(() =>
  import("../components/navbar/CheckoutBar")
);
const Modal = React.lazy(() => import("../components/sections/Modal"));
const Accordions = React.lazy(() =>
  import("../components/sections/Accordions")
);
const Footer = React.lazy(() => import("../components/sections/Footer"));
const Gmaps = React.lazy(() => import("../components/sections/Gmaps"));
const Steps = React.lazy(() => import("../components/sections/Steps"));
const Products = React.lazy(() => import("../components/sections/Products"));
const NavBar = React.lazy(() => import("../components/navbar/NavBar"));
const Banner = React.lazy(() => import("../components/sections/Banner"));
function HomePage() {
  return (
    <div>
      {/*<Carticon/>*/}

      <Suspense
        fallback={
          <Skeleton
            sx={{ bgcolor: "#68E86D", width: "100%" }}
            variant="rectangular"
            height={50}
          />
        }
      >
        <NavBar />
      </Suspense>
      <Element name="section-home">
        <ReactCursorPosition>
          <Herosection />
        </ReactCursorPosition>
      </Element>

      <Element name="section-banner">
        <Suspense
          fallback={
            <div className="banner_skeleton">
              <Skeleton
                sx={{ bgcolor: "#FCE588", width: "90%", margin: "0 auto" }}
                variant="rectangular"
                height={250}
              />
            </div>
          }
        >
          <Banner />
        </Suspense>
      </Element>
      <Element name="section-steps">
        <Suspense
          fallback={
            <div className="steps_skeleton">
              <div style={{}}>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem", width: "40vh" }}
                />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
              </div>

              <div style={{}}>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={210}
                  height={120}
                  sx={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          }
        >
          <Steps />
        </Suspense>
      </Element>
      <Element name="section-product">
        <Suspense
          fallback={
            <div className="product_skeleton">
              <div>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton
                  variant="circular"
                  animation="wave"
                  width={40}
                  height={40}
                />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={210}
                  height={60}
                />
              </div>
              <div>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={210}
                  height={60}
                />
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={210}
                  height={60}
                />
              </div>
              <div>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={210}
                  height={60}
                />
                <Skeleton variant="rounded" width={210} height={60} />
              </div>
            </div>
          }
        >
          <Products />
        </Suspense>
      </Element>
      <Element name="section-category">
        <Suspense
          fallback={
            <div className="product_skeleton">
              <div>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />

                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={210}
                  height={60}
                />
                <Skeleton variant="rounded" width={210} height={60} />
              </div>
              <div>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={210}
                  height={60}
                />
              </div>
              <div>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />

                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={210}
                  height={60}
                />
              </div>
            </div>
          }
        >
          <Category />
        </Suspense>
      </Element>

      <Element name="section-accordions">
        <Suspense
          fallback={
            <div className="faq_skeleton">
              <Skeleton
                sx={{
                  height: 100,
                  width: "60%",
                  backgroundColor: "#FCE588",
                  margin: "0 auto",
                  borderRadius: "10px",
                }}
                animation="wave"
                variant="rectangular"
              />
            </div>
          }
        >
          <Accordions />
        </Suspense>
      </Element>

      <Element name="section-gmaps">
        <Suspense
          fallback={
            <div className="steps_skeleton">
              <div style={{}}>
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={210}
                  height={120}
                  sx={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{}}>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem", width: "40vh" }}
                />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
              </div>
            </div>
          }
        >
          <Gmaps />
        </Suspense>
      </Element>
      <Element name="section-itemscroll">
        <Suspense
          fallback={
            <div className="item_skeleton">
              <Skeleton
                variant="rectangular"
                animation="wave"
                height={50}
                style={{ width: "100%", backgroundColor: "#3525E6" }}
              />
            </div>
          }
        >
          <ItemScroll />
        </Suspense>
      </Element>

      <Element name="section-footer">
        <Suspense fallback={<LinearProgress />}>
          <Footer />
        </Suspense>
      </Element>

      <Suspense fallback={<LinearProgress />}>
        <Modal />
      </Suspense>
      <Suspense fallback={<CircularProgress />}>
        <CheckoutBar />
      </Suspense>

    </div>
  );
}

export default HomePage;
