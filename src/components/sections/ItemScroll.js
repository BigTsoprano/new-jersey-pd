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
            Let's Work Together. Let's Work Together. Let's Work Together. Let's
            Work Together. Let's Work Together. Let's Work Together. Let's Work
            Together
          </h1>
</motion.div>
    </motion.div>
  );
}

export default ItemScroll