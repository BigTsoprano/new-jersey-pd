import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/joy/Button";

//import Box from '@mui/material/Box';
//import Stack from '@mui/material/Stack';
import { useStateValue } from "../cart/StateProvider";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import Modal from "@mui/joy/Modal";
//import ModalClose from '@mui/joy/ModalClose';
//import Typography from '@mui/joy/Typography';
//import Sheet from '@mui/joy/Sheet';
import LinearProgress from "@mui/material/LinearProgress";
import CancelIcon from "@mui/icons-material/Cancel";
import { LazyLoadImage } from "react-lazy-load-image-component";
//import Typography from '@mui/material/Typography';
import IconButton from "@mui/joy/IconButton";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";


function Pricebox({
  price,
  image,
  name,
  id,
  strain,
  quantity,
  thc,
  cbd,
  description,
}) {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const handleIncrease = () => {
    if (count === 6) {
      return;
    }
    setCount(count + 1);
  };
  const handleDecrease = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  const handleClick = () => {
    setOpen(false);
    addToBasket();
  };

  const [{ basket }, dispatch] = useStateValue([]);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name: name,
        price: priceAmount,
        image: image,
        quantity: quantity,
        count: count,
      },
    });
  };

  const priceAmount = price * count;

  return (
    <motion.div className="pricebox">
      <div className="pricebox_wrap">
        <div
          
          className="pricebox_img"
        >
          <LazyLoadImage
            style={{
              width: "auto",
              maxHeight: "90px",
            }}
           
            src={image}
            alt=""
          />
        </div>

        <div className="swiper-content">
          <div className="swiper_content_wrap">
            <div className="swiper_content_wrapper">
              <motion.h2
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </motion.h2>
              <Rating name="size-small" defaultValue={5} size="small" />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="pricebox-strain"
            >
              <p>{strain}</p>
            </motion.div>
          </div>

          <div className="pricebox_rating">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p >weight:</p>
              <p style={{color:'#0C008C', paddingTop:'10px'}} >{quantity} </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p>select quantity:</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <IconButton onClick={handleDecrease} variant="plain">
                  <RemoveCircleIcon
                    style={{ color: "#BCCCDC", fontSize: "18px" }}
                  ></RemoveCircleIcon>
                </IconButton>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#0C008C",
                  }}
                >
                  {count}
                </p>
                <IconButton onClick={handleIncrease} variant="plain">
                  <AddCircleIcon style={{ color: "#C4C6FF", fontSize: "18px"  }} />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="modal_wrapper">
            <div className="modal_container">
              <Link to="/product-page">
              <Button
                onClick={() => setOpen(true)}
                variant="plain"
                style={{
                  color: "#3525E6",
                  backgroundColor: "#D9E2EC",
                  boxShadow:
                    "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
                }}
              >
                Learn more
              </Button>
          
              </Link>
            </div>

            <motion.div
              whileInView={{ scale: 1 }}
              transition={{
                type: "spring",

                delay: 0.6,
              }}
              viewport={{ once: true }}
              initial={{ scale: 0 }}
              style={{}}
              className="cart_btn"
            >
              <Button
                size="md"
                onClick={addToBasket}
                variant="solid"
                style={{
                  backgroundColor: "#C4C6FF",
                  color: "#102A43",
                  marginTop: "-10px",
                  fontSize: "16px",
                }}
              >
                <AddShoppingCartIcon
                  style={{ fontSize: "16px", paddingRight: "3px" }}
                />
                {priceAmount}
              </Button>
            </motion.div>
          </div>

          {/*<div style={{}}>
  <Rating name="no-value" precision={0.5} value={null} /> 
   </div>*/}
        </div>
      </div>
    </motion.div>
  );
}

export default Pricebox;
