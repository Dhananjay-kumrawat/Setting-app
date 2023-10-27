
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
    
      
      const handleToggle = (stateSetter, storageKey) => {
        return () => {
          const newState = !stateSetter;
          stateSetter(newState);
          
          localStorage.setItem(storageKey, JSON.stringify(newState));
        };
      };
    return(

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