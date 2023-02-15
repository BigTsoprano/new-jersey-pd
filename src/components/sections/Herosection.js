import React, {Suspense} from 'react';
import Skeleton from '@mui/material/Skeleton';


const Herobox = React.lazy(() => import('../elements/Herobox'));



function Herosection() {

  return (
    <div className='hero-section'>
        <div className='hero-image'> </div>
          <div className='hero_backdrop'></div>

    <div>
        <Suspense fallback={<div className='hero_skeleton' >
<div>
<Skeleton variant="text" animation="wave"  sx={{ fontSize: '1.5rem', width:'40vh' }} />
    <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
    
</div>
<div style={{paddingTop:'20px'}}>
<Skeleton variant="rectangular" animation="wave"  width={210} height={120} sx={{borderRadius:'10px'}} />      
</div>


        </div>}>
      <Herobox/>
      </Suspense>
        </div>
      
     </div>
  );
}

export default Herosection