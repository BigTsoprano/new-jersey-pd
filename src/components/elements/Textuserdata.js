import { useUserdataContext } from "../../hooks/useUserdataContext";
//import { useState } from "react";
//import { useStateValue } from "../cart/StateProvider";
//import { motion } from 'framer-motion';
import React, { useState } from "react";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { IconButton } from "@mui/joy";
import { useAuthContext } from "../../hooks/useAuthContext";

const Textuserdata = ({userdata}) => {

    const { user } = useAuthContext()

const { dispatch } = useUserdataContext()

    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('/api/Userdata/' + userdata._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_USERDATA', payload: json})
        }
    }

    const [show, setShow] = useState(false);

const open = () => {
    setShow(!show);
}


    return(
        <div className='order_table'>
     

        <div className="admin_data">
      

       
        <div className='data_name' >
            <p>name</p>
            <h3>{userdata.title}</h3>
        </div>
       
        <div className='data_number'>
            <p>phone number</p>
            <h3>{userdata.number}</h3>

        </div>
        <div className='data_email'>
            <p>email</p>
            <h3>{userdata.email}</h3>
            </div>
            <div className="data_items">
                <p>items</p>
   
                {userdata.arrayBasket.map((userdatas) => (
                         <h3>*{userdatas.name}</h3>
                   
                ))} 
           
                    </div>            
        
          <div className="data_price">
            <p>price</p>
            {userdata.arrayBasket.map((userdatas) => (
                         <h3>${userdatas.price}</h3>
                ))}      
    </div>
   
    <div className="data_quantity">
            <p>weight</p>
            {userdata.arrayBasket.map((userdatas) => (
                            <h3>{userdatas.quantity}</h3>
                ))}
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
        <IconButton onClick={open}><ExpandCircleDownIcon/></IconButton>
        <div >
        {show && (
    <div className="view_more">
      
    <div className="data_street">
                
            <p>address</p>
            <h3>{userdata.street}</h3>
    </div>
    <div className="data_zip">
                
            <p>zip</p>
            <h3>{userdata.zip}</h3>
    </div>
    <div className="data_county">

            <p>county</p>
            <h3>{userdata.county}</h3>
    </div> 
    <div className="data_notes">
            <p>notes</p>
            <h3>{userdata.notes}</h3>
    </div>
    <div className='data_create' >
            <p>created</p>
            <h3>{userdata.createdAt}</h3>
        </div>
        <div>
            <p>pick up time/date</p>
            <h3>{userdata.date}</h3>
        </div>
        <div>
            <h3>{userdata.time}</h3>
        </div>
    </div> )}
    </div>
    </div>
<div>
<button onClick={handleClick}>
                Delete
             </button>
</div>
             
             <h1>{userdata.reviewName}</h1>
        </div>



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

{/*<table>
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
       
   
      </table>*/}
    </div>
         
    );
}

export default Textuserdata