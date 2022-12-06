import React from 'react';
import {Link} from 'react-router-dom';

import StorefrontIcon from '@mui/icons-material/Storefront';
import SpaIcon from '@mui/icons-material/Spa';
import CookieIcon from '@mui/icons-material/Cookie';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CategoryIcon from '@mui/icons-material/Category';
import { motion } from 'framer-motion';

function Category() {

  return (
    <div className='category_section'>
    
      <div className='category_list'>
<Link to='/all-products'>
        <motion.div whileHover={{scale:1.14, rotate:5}} className='shop_all'>
          <motion.div  initial={{scale: 3.5}} className='shop_icon'>
<StorefrontIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
    <h3>Shop all</h3>
        </motion.div>
        </Link>
        <Link to='/all-products'>

        <motion.div whileHover={{scale:1.14, rotate:5}} className='category_flowers'>
        <motion.div  initial={{scale: 3}}>
<SpaIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
<h3>Flowers</h3>

        </motion.div>
        </Link>
        <Link to='/all-products'>

        <motion.div whileHover={{scale:1.14, rotate:5}} className='category_edibles'>
        <motion.div  initial={{scale: 3}}>
<CookieIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
<h3>Edibles</h3>

        </motion.div>
</Link>
<Link to='/all-products'>

        <motion.div whileHover={{scale:1.14, rotate:5}} className='category_concentrates'
        >
            <motion.div  initial={{scale: 3}}>
<InvertColorsIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
<h3>concentrates</h3>
        </motion.div>
        </Link>
        <Link to='/all-products'>

        <motion.div whileHover={{scale:1.14, rotate:5}} className='category_misc'>
        <motion.div  initial={{scale: 3}}>
<CategoryIcon size='large' style={{color:'#ffffff'}}/>
</motion.div>
<h3>Other</h3>

        </motion.div>
        </Link>
      </div>
      </div>
  )
}

export default Category