
import React, { useState,    } from "react";

function Wifi(){
    const [isChecked, setIsChecked] = useState(
        JSON.parse(localStorage.getItem("wifiState")) || false
      );
    
      
      const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        
        localStorage.setItem("wifiState", JSON.stringify(newState));
      };
    return(

<>
<div>
  <h2 className="head">Wi-Fi</h2>
</div>
<div className="bt">
  <h3>Wifi</h3>
  <label className="switch">
    <input type="checkbox" checked={isChecked} onChange={handleToggle} />
    <span className="slider round"></span>
  </label>
</div>
</>
    );
}
export default  Wifi;