import { useUserdataContext } from "../../hooks/useUserdataContext";
//import { useState } from "react";
//import { useStateValue } from "../cart/StateProvider";
import { motion } from 'framer-motion';
import React, { useState } from "react";


const Textuserdata = ({userdata,  columns }) => {

const { dispatch } = useUserdataContext()

    const handleClick = async () => {
        const response = await fetch('/api/Userdata/' + userdata._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USERDATA', payload: json})
        }
    }

    return(
        <div className='order_table'>
            
       {/*<motion.div whileHover={{ scale:1.05 }} className="userdata-title" 
            style={{
              
                flexDirection: 'column', 
                minWidth: '500px',
                padding:'20px'
                }}>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
<div style={{display:'flex', flexDirection:'column'}}>
            <h3 style={{textDecoration:'underline'}}>User</h3>
            <h4>{userdata.title}</h4>
            <h4>{userdata.number}</h4>
            <h4>{userdata.email}</h4>
            </div>
            <div>
                <h3 style={{textDecoration:'underline'}}>Address</h3>
            <h4>{userdata.street}</h4>
            <h4>{userdata.zip}</h4>
            <h4>{userdata.county}</h4>
          
            </div>
            </div>
            <h3 style={{textAlign:'center', padding:'10px'}}>customer notes</h3>
            <div 
            style={{
                display:'flex', 
                padding:'15px', 
                border: 'solid 1px #000000'
                }}>
               
            <p style={{textAlign:'left'}}>
                {userdata.notes}</p>
                </div>
            <div style={{display:'flex', justifyContent:'space-evenly', padding:'10px'}}>
                {userdata.arrayBasket.map((userdatas) => (
                    <div style={{padding:'5px'}} >
                        <p>{userdatas.name}</p>
                        <p>{userdatas.price}</p>
                        <p>{userdatas.quantity}</p>
                    </div>

                ))}
                </div>
                <p>{userdata.createdAt}</p>
            <button className='data_delete' onClick={handleClick} >
         delete
            </button>
                </motion.div>*/}

<table style={{overflowX:'scroll'}}>
        <tr>
            <th>status</th>
            <th>name</th>
            <th>Order</th>
          <th>price</th>
            <th>quantity</th>
            <th>phone number</th>
          
          <th>email</th>
          <th>address</th>
            <th>zip</th>
          <th>county</th>
          <th>additional notes</th>
          <th>date</th>
          <th>delete</th>

        </tr>
       
        {userdata.arrayBasket.map((userdatas) => (
                  <tr>
                    <td>status</td>
                    <td>{userdata.title}</td>
                        <td>{userdatas.name}</td>
                        <td>{userdatas.price}</td>
                        <td>{userdatas.quantity}</td>
                        <td>{userdata.number}</td>
                        <td>{userdata.email}</td>
                        <td>{userdata.street}</td>
                        <td>{userdata.zip}</td>
                        <td>{userdata.county}</td>
                        <td>{userdata.notes}</td>
                        <td>{userdata.createdAt}</td>
                        <td><button onClick={handleClick} > delete</button></td>
            
</tr>
                ))}
       
   
      </table>
    </div>
         
    );
}

export default Textuserdata