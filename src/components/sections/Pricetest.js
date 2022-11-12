//import { WorkOutline } from '@mui/icons-material';
import {useEffect, useState} from 'react';
import Textuserdata from '../elements/Textuserdata';




function Pricetest() {
const [userdatas, setUserdatas] = useState(null);
    useEffect(() => {

const fetchUserdatas = async () => {
    const response = await fetch('/api/Userdata')
    const json = await response.json()

        if (response.ok) {
            setUserdatas(json)
        }  
        }
        fetchUserdatas()
    }, [])

  return (
    <div className='pricetest-section' style={{
        height:'90vh',
        position:'relative',
        backgroundColor: '#ffffff'
    }}>
        <div>
        {userdatas && userdatas.map((userdata) => (
           <Textuserdata key={userdata._id} userdata={userdata}/>

        ))}
    </div>
    </div>
  );
}

export default Pricetest;