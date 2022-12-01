import React, { useState, useRef } from "react";
import { motion } from 'framer-motion';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';





function Accordion(props) {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");
  
    const content = useRef(null);
  
    function toggleAccordion() {
      setActiveState(setActive === "" ? "active" : "");
      setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
      setRotateState(setActive === "active" ? "accordion__icon" : "accordion__icon rotate");
    }
  
    return (
      <div className="accordion__section"  >
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <p className="accordion__title">{props.title}</p>
          <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
        </button>
        <div ref={content} style={{maxHeight: `${setHeight}`}} className="accordion__content">
          <div
            className="accordion__text"
            dangerouslySetInnerHTML={{ __html: props.content}}
          />
        </div>
      </div>
    )
  }
  
  function Chevron(props) {
    return (
      <svg
        className={props.className}
        height={props.height}
        width={props.width}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill={props.fill}
          d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
        />
      </svg>
    )
  }


function Accordions() {

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };




  const icon = (
    <div>
      <motion.div  whileHover={{scale:1.02}}>
    <Accordion style={{padding:'10px'}}
    title="How can I pay for my order?"
    content="You can pay using our payment system as paypal, venmo, and credit card"
  />
  </motion.div >
  <motion.div whileHover={{scale:1.02}}>
  <Accordion style={{padding:'10px'}}
    title="Where do you deliver to?"
    content="All of New Jersey with Pa and NY coming soon!"
  />
  </motion.div>
  <motion.div whileHover={{scale:1.02}}>
  <Accordion style={{padding:'10px'}}
    title="How long does delivery take?"
    content="Orders that are placed before 10PM will be delivered the next business day (Mon-Sat).

    "
  />
  </motion.div>
  <motion.div whileHover={{scale:1.02}}>
  <Accordion style={{padding:'10px'}}
    title="Do I need a medical card?"
    content="No, you do not need a medical card. We offer recreational cannabis gifts to anyone over the age of 21. You must show ID to verify your age!

    "
  />
  </motion.div>
  <motion.div whileHover={{scale:1.02}}>
  <Accordion style={{padding:'10px'}}
    title="How do I request a refund?
    "
    content="All donations on our site are final, once the product is opened we are unable to take it back. The only exception is defective products. You will need to swap out the defective product to receive a replacement.

    "
  />
  </motion.div>
<motion.div whileHover={{scale:1.02}}>
  <Accordion style={{padding:'10px'}}
    title="Do you offer CBD products?"
    content="No, we do not offer any CBD products on our site, all of our gifts contain THC. We may offer some CBD options in the near future.

    "
  />
  </motion.div>
  </div>
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section id='accordions'>
    <div  className='q-a'>
    <div className="faq_container">
      <motion.div in={open} onClick={handleOpen} onChange={handleClose}  whileHover={{ scale: 1.1 }} >
       <button onClick={handleClick}  style={{paddingTop:'20px', paddingBottom:'20px'}} className="faq_button"  ><h2 >QUESTIONS?! CLICK HERE FOR ANSWERS!!</h2></button>
       
       </motion.div>
       </div>
       {/* <div className="spacer"></div> */}
       {isShown && (
         <div >
       
      <Slide direction="right" in={open}>{icon}</Slide>
</div>
       )}
     </div>
     
     </section>
   );
 }


export default Accordions