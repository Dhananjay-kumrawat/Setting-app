// import React from "react";
import React, { useState, useEffect } from "react";

function Bluetooth(){
    const [isChecked, setIsChecked] = useState(
        JSON.parse(localStorage.getItem("bluetoothState")) || false
      );
    
      // Function to handle toggle state changes
      const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        // Save the state to local storage
        localStorage.setItem("bluetoothState", JSON.stringify(newState));
      };
    
      // Effect to run once when the component mounts to retrieve state from local storage
      useEffect(() => {
        const storedState = JSON.parse(localStorage.getItem("bluetoothState"));
        if (storedState !== null) {
          setIsChecked(storedState);
        }
      }, []); 
    return(
//     <>
//     <div>
//     <h2 className="head">Bluetooth</h2>
//     </div>
//     <div className="bt">
// <h3>Bluetooth</h3>
// <label class="switch">
//         <input type="checkbox"/>
//         <span class="slider round"></span>
// </label>
// </div>
//     </>
<>
      <div>
        <h2 className="head">Bluetooth</h2>
      </div>
      <div className="bt">
        <h3>Bluetooth</h3>
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </>

    );
}
export default  Bluetooth;