// import React from "react";
import React, { useState,  } from "react";

const Connection = () =>{
    const [aeroplaneMode, setAeroplaneMode] = useState(
        JSON.parse(localStorage.getItem("aeroplaneMode")) || false
      );
      const [personalHotspot, setPersonalHotspot] = useState(
        JSON.parse(localStorage.getItem("personalHotspot")) || false
      );
      const [bluetoothTethering, setBluetoothTethering] = useState(
        JSON.parse(localStorage.getItem("bluetoothTethering")) || false
      );
      const [screencast, setScreencast] = useState(
        JSON.parse(localStorage.getItem("screencast")) || false
      );
    
      // Function to handle toggle state changes
      const handleToggle = (stateSetter, storageKey) => {
        return () => {
          const newState = !stateSetter;
          stateSetter(newState);
          // Save the state to local storage
          localStorage.setItem(storageKey, JSON.stringify(newState));
        };
      };
    return(
//         <div class="Connection">
//         <div className="bt">
            
//             <label for="Aeroplane mode">Aeroplane mode</label>
//             <label class="switch">
//         <input type="checkbox"/>
//         <span class="slider round"></span>
// </label>
//         </div>
//         <p className="head">TETHERING  </p>  
//         <div className="bt-noborder">
//             <label for="personal hotspot">personal hotspot:</label>
//             <label class="switch">
//         <input type="checkbox"/>
//         <span className="slider round"></span>
// </label>
        
//         </div>
//         <div className="bt">
//             <label for="Bluetooth Tethering">Bluetooth Tethering</label>
//             <label class="switch">
//         <input type="checkbox"/>
//         <span class="slider round"></span>
// </label>  
//         </div>
//         <div className="head">
//             <p>WIRELESS TRANSPORT</p>
//             <div className="bt-noborder">
//             <label for="Bluetooth Tethering">Screencast</label>
//             <label class="switch">
//         <input type="checkbox"/>
//         <span class="slider round"></span>
// </label>  
//         </div> 
//         </div>
        
//     </div>
<div className="Connection">
<div className="bt">
  <label htmlFor="Aeroplane mode">Aeroplane mode</label>
  <label className="switch">
    <input type="checkbox" checked={aeroplaneMode} onChange={handleToggle(setAeroplaneMode, "aeroplaneMode")} />
    <span className="slider round"></span>
  </label>
</div>
<p className="head">TETHERING </p>
<div className="bt-noborder">
  <label htmlFor="personal hotspot">personal hotspot:</label>
  <label className="switch">
    <input type="checkbox" checked={personalHotspot} onChange={handleToggle(setPersonalHotspot, "personalHotspot")} />
    <span className="slider round"></span>
  </label>
</div>
<div className="bt">
  <label htmlFor="Bluetooth Tethering">Bluetooth Tethering</label>
  <label className="switch">
    <input type="checkbox" checked={bluetoothTethering} onChange={handleToggle(setBluetoothTethering, "bluetoothTethering")} />
    <span className="slider round"></span>
  </label>
</div>
<div className="head">
  <p>WIRELESS TRANSPORT</p>
  <div className="bt-noborder">
    <label htmlFor="Screencast">Screencast</label>
    <label className="switch">
      <input type="checkbox" checked={screencast} onChange={handleToggle(setScreencast, "screencast")} />
      <span className="slider round"></span>
    </label>
  </div>
</div>
</div>
    )
}
export default Connection;