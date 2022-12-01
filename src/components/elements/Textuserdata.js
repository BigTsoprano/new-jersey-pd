import { useUserdataContext } from "../../hooks/useUserdataContext";
//import { useState } from "react";
//import { useStateValue } from "../cart/StateProvider";
import { motion } from 'framer-motion';



const Textuserdata = ({userdata}) => {


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
        <motion.div whileHover={{ scale:1.05 }} className="userdata-title" 
            style={{
                display: 'flex',
                margin: '30px',
                border: 'solid 0px #000000',
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
        </motion.div>
    );
}

export default Textuserdata