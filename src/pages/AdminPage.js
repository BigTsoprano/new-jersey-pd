
import NavBar from '../components/navbar/NavBar';
import React, {Suspense, useEffect} from 'react';
//import UserdataForm from '../components/elements/UserdataForm';
import { useUserdataContext } from '../hooks/useUserdataContext';
//import { motion } from 'framer-motion';
const Footer = React.lazy(() => import('../components/sections/Footer'));

const Textuserdata = React.lazy(() => import('../components/elements/Textuserdata'));


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
    <div  className='admin_page'
 
    style={{ height:'auto', position:'relative', paddingTop:'50px'}}>
        <NavBar></NavBar>
        <div className='admin_section' style={{marginTop:'100px'}} >

        <h1 style={{textAlign:'center'}}>
            order history
            </h1>
       
            </div>
            <div className='pricetest_box' style={{}}>
        {userdata && userdata.map((userdata) => (
            <Suspense fallback={<div>Loading...</div>}>
           <Textuserdata key={userdata._id} userdata={userdata}/>
              </Suspense>
        ))}
        </div>
        <Suspense fallback={<div>Loading...</div>}>
            <Footer></Footer>
        </Suspense>
        </div>
  )
}

export default AdminPage