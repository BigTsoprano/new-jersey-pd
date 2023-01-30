import React, {useState, useEffect} from 'react';
import { motion, AnimatePresence } from "framer-motion";
//import { Link } from "react-router-dom";
import Button from '@mui/joy/Button';
import LockPersonIcon from '@mui/icons-material/LockPerson';



const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
} 

const modal = {
    hidden: { y: '-100vh', opacity: 0 },
    visible: {
        y: '240px',
        opacity: 1,
        transition: { type: 'spring',  ease:'linear',  duration: 0.4, delay: 0.2}
    }
}


function Modal() {

    const [showModal, setShowModal] = useState(false); 

    useEffect(() => {
      setTimeout(() => {
        setShowModal(true)
      }, 6000)
    }, [setShowModal])

  return (
    <AnimatePresence exitBeforeEnter>
        {showModal && ( 

<motion.div className='backdrop'
variants={backdrop}
animate='visible'
initial='hidden' 
>

<motion.div className='modal'
variants={modal}
>
<LockPersonIcon size="large" style={{fontSize:'32px'}}/>
<h1>Must be over 21<br/>years old to visit this site</h1>
<p>please verify your age</p>
<div className='modal_buttons'>
<div className='age_btn'>
<Button size="lg" style={{ color:'#F0F4F8', fontSize:'18px'}} variant="solid" onClick={() => setShowModal(false)} >Yes 21+</Button>
</div>
<a  href="https://google.com" target="_blank"><Button size="lg" style={{fontSize:'18px',backgroundColor:'#BCCCDC', boxShadow: 'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',margin:'12px'}}>Not 21+</Button></a>
</div>
</motion.div>

</motion.div>



        ) }


    </AnimatePresence>  )
}

export default Modal
