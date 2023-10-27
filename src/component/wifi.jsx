// import React from "react";
import React, { useState,    } from "react";

function Wifi(){
    const [isChecked, setIsChecked] = useState(
        JSON.parse(localStorage.getItem("wifiState")) || false
      );
    
      // Function to handle toggle state changes
      const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        // Save the state to local storage
        localStorage.setItem("wifiState", JSON.stringify(newState));
      };
    return(
//         <>
//         <div>
//     <h2 className="head">Wi-Fi</h2>
//     </div>
// <div className="bt">
// <h3>Wifi</h3>
// <label class="switch">
//         <input type="checkbox"/>
//         <span class="slider round"></span>
// </label>
// </div>
// </>
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