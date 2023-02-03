import React from 'react'
import NavBar from '../components/navbar/NavBar';
import {useEffect, useState} from 'react';
import UserdataForm from '../components/elements/UserdataForm';
import Textuserdata from '../components/elements/Textuserdata';
import { useUserdataContext } from '../hooks/useUserdataContext';
import { motion } from 'framer-motion';
import Footer from '../components/sections/Footer';



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
    <div  variants={containerVariants}
 
    exit="exit" style={{backgroundColor:'#ffffff', height:'auto', position:'relative', paddingTop:'50px'}}>
        <NavBar></NavBar>
        <div className='admin_section' style={{marginTop:'100px'}} >

        <h1 style={{textAlign:'center'}}>
            order history
            </h1>
            </div>
            <div className='pricetest_box' style={{display:'flex', flexWrap:'wrap', flexDirection:'column', overflowX:'scroll', minHeight:'60vh', height:'auto'}}>
        {userdata && userdata.map((userdata) => (
           <Textuserdata key={userdata._id} userdata={userdata}/>

        ))}
        </div>
            <Footer></Footer>
        </div>
  )
}

export default AdminPage