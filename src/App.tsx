import React, { useEffect, useState } from 'react'; 
import L from 'leaflet';
import 'leaflet/dist/leaflet.css' 

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import './App.css';


L.Icon.Default.mergeOptions({
	iconRetinaUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
	iconUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

function App() {
const [api, setApi] = useState([])


 const getApi = async() => {
 const response = await fetch('../api/2023-01-01/T00.json')
 console.log(response)
}

useEffect(()=>{
  getApi()
})


  return (
    <div className="App">
      <MapContainer style={{height: "100vh", width: "100%"}} center={[-34.60, -58.38]} zoom={13}>
        <TileLayer
          attribution="Google Maps"
          url="http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={[-34.60, -58.38]}>
          <Popup>
            Alo!. <br /> I'm a marker.
          </Popup>
        </Marker>
        <Marker position={[-34.60, -58.40]}>
          <Popup>
            Alo!. <br /> I'm a marker 2.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
