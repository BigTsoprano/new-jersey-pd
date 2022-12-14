import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

function Byebanner() {
  return (
    <div className='bye_banner_section'>
        <div className='bye_banner_wrap'>
            <h1>Learn more about ordering online</h1>
            </div>
            <div className='bye_banner_button'>
<AwesomeButton type='primary'>
    <h3>LEARN MORE</h3>
</AwesomeButton>
           
        </div>
    </div>
  )
}

export default Byebanner