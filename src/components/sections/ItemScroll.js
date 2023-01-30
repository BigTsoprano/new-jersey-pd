import React from "react";
import {
  motion
} from "framer-motion";






function ItemScroll() {
    const marqueeVariants = {
        animate: {
          x: [100,-500],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        },
      };
  





  return (


    <motion.div  className='item_scroll_section'>
        <motion.div className='item_wrap'   variants={marqueeVariants}
          animate="animate">
        <h1>
        The best weed dispensary in the neighborhood. 420 sale everyday $. 15% off new customers. It’s legal for a reason. All products
        lab tested for quality and safety. 100% satisfaction guaranteed. 100% organic. 100% natural. 100% legal. 100% safe. 100%
          </h1>
</motion.div>
    </motion.div>
  );
}

export default ItemScroll