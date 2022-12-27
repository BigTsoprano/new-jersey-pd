import { Component } from 'react';
import {Map, GoogleApiWrapper, Circle} from 'google-maps-react';


class Gmaps extends Component{
  render(){
    const coords = { lat: 40.330388, lng: -73.981526 };
  return (
    <div className='gmap_section'>
        
        <div className='maps_content'>
          
       
       
        <Map
        className='gmap_map'
        google = {this.props.google}
        style={{width:'100%', height:'100%'}}
        zoom={10}
        initialCenter={{
          lat: 40.330388,
          lng: -73.981526
        }}
        >
          <Circle
          radius={10000}
          center={coords}
          onMouseover={() => console.log('mouseover')}
          onClick={() => console.log('click')}
          onMouseout={() => console.log('mouseout')}
          strokeColor='transparent'
          strokeOpacity={0}
          strokeWeight={5}
          fillColor='#FF0000'
          fillOpacity={0.2}
          />
        </Map>
  

        
        </div>
        </div>
  )
}
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyADaZ17gHP5P7vFvjUajEcJpbvxxBdCoYY"
})(Gmaps)