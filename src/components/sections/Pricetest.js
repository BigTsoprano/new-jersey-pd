//import { WorkOutline } from '@mui/icons-material';
import {useEffect, useState} from 'react';

import Textuserdata from '../elements/Textuserdata';
import { useUserdataContext } from '../../hooks/useUserdataContext';




function Pricetest() {
//const [userdatas, setUserdatas] = useState(null);

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
    <div className='pricetest-section' style={{
        height:'90vh',
        position:'relative',
        backgroundColor: '#ffffff',
 
    }}>
        <h1 style={{
            textAlign:'center',
            paddingBottom: '40px'

        }}>User Order data</h1>
        <div>
            <div className='pricetest_box' style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {userdata && userdata.map((userdata) => (
           <Textuserdata key={userdata._id} userdata={userdata}/>

        ))}
        </div>
     </div>
    </div>
  );
}

export default Pricetest;