import React from 'react'
import NavBar from '../components/navbar/NavBar';
import {useEffect, useState} from 'react';

import Textuserdata from '../components/elements/Textuserdata';
import { useUserdataContext } from '../hooks/useUserdataContext';
import { motion } from 'framer-motion';



function AdminPage() {
    const {userdata, dispatch} = useUserdataContext()



    useEffect(() => {
    const fetchUserdatas = async () => {
    const response = await fetch('/api/Userdata')
    const json = await response.json()

        if (response.ok) {
            dispatch({type: 'SET_USERDATA', payload: json})
        }  
        }
        fetchUserdatas()
    }, [])

    const containerVariants = {

        exit: {
          x: '-100vw',
          transition: {ease: 'easeInOut'}
        }
      }
  return (
    <motion.div  variants={containerVariants}
 
    exit="exit" style={{backgroundColor:'#ffffff', height:'auto', position:'relative', paddingTop:'50px'}}>
        <NavBar></NavBar>
        <div style={{marginTop:'100px'}} >

        <h1 style={{textAlign:'center'}}>
            order history
            </h1>
            </div>
            <div className='pricetest_box' style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {userdata && userdata.map((userdata) => (
           <Textuserdata key={userdata._id} userdata={userdata}/>

        ))}
        </div>
            
        </motion.div>
  )
}

export default AdminPage