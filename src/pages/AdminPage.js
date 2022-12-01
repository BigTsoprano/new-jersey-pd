import React from 'react'
import NavBar from '../components/navbar/NavBar';
import {useEffect, useState} from 'react';

import Textuserdata from '../components/elements/Textuserdata';
import { useUserdataContext } from '../hooks/useUserdataContext';



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
  return (
    <div style={{backgroundColor:'#ffffff', height:'auto', position:'relative'}}>
        <NavBar></NavBar>
        <div style={{marginTop:'100px'}} >

        <h1>
            order history
            </h1>
            </div>
            <div className='pricetest_box' style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {userdata && userdata.map((userdata) => (
           <Textuserdata key={userdata._id} userdata={userdata}/>

        ))}
        </div>
            
        </div>
  )
}

export default AdminPage