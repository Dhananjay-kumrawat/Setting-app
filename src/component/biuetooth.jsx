
import React, { useState, useEffect } from "react";

function Bluetooth(){
    const [isChecked, setIsChecked] = useState(
        JSON.parse(localStorage.getItem("bluetoothState")) || false
      );
    
      
      const handleToggle = () => {
        const newState = !isChecked;
        setIsChecked(newState);
        
        localStorage.setItem("bluetoothState", JSON.stringify(newState));
      };
    
      
      useEffect(() => {
        const storedState = JSON.parse(localStorage.getItem("bluetoothState"));
        if (storedState !== null) {
          setIsChecked(storedState);
        }
      }, []); 
    return(

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