 //import React from "react";
 import React, { useState,  } from "react";

function Dp(){
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false
      );
      const [autoBrightness, setAutoBrightness] = useState(
        JSON.parse(localStorage.getItem("autoBrightness")) || false
      );
      const [eyeComfort, setEyeComfort] = useState(
        JSON.parse(localStorage.getItem("eyeComfort")) || false
      );
      const [autoRotate, setAutoRotate] = useState(
        JSON.parse(localStorage.getItem("autoRotate")) || false
      );
      const [brightness, setBrightness] = useState(
        JSON.parse(localStorage.getItem("brightness")) || 50
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
    
      // Function to handle slider value change
      const handleSliderChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setBrightness(newValue);
        // Save the brightness value to local storage
        localStorage.setItem("brightness", JSON.stringify(newValue));
      };
    
    return(
//         <div>
       

//     <div class="section">
       
        
//         <div className="bt">
// <h3>Dark mode</h3>
// <label className="switch">
//         <input type="checkbox"/>
//         <span className="slider round"></span>
// </label>
// </div>
//     </div>

    
//     <div className="bt-noborder">
//         <label for="Auto brightness">Auto brightness</label>
//         <label className="switch">
//         <input type="checkbox"/>
//         <span className="slider round"></span>
// </label>
//     </div>
//     <div className="bt-noborder">
       
//         <label for="Eye comfort">Eye comfort</label>
        
//         <label className="switch">
//         <input type="checkbox"/>
//         <span className="slider round"></span>
// </label>
//     </div>
//     <div className="bt-noborder">
       
//         <label for="Auto-rotate">Auto-rotate</label>
//         <label className="switch">
//         <input type="checkbox"/>
//         <span className="slider round"></span>
// </label>
//     </div>
//     <div>
//         <p>Brightness</p>
        
//     </div>
    
    
// <div className="settings-container">
//     <input type="range" id="colorTemperature" name="colorTemperature" min="0" max="100" value="50"/>
// </div>
      
//         </div>
<div>
<div className="section">
  <div className="bt">
    <h3>Dark mode</h3>
    <label className="switch">
      <input type="checkbox" checked={darkMode} onChange={handleToggle(setDarkMode, "darkMode")} />
      <span className="slider round"></span>
    </label>
  </div>
</div>

<div className="bt-noborder">
  <label htmlFor="Auto brightness">Auto brightness</label>
  <label className="switch">
    <input type="checkbox" checked={autoBrightness} onChange={handleToggle(setAutoBrightness, "autoBrightness")} />
    <span className="slider round"></span>
  </label>
</div>

<div className="bt-noborder">
  <label htmlFor="Eye comfort">Eye comfort</label>
  <label className="switch">
    <input type="checkbox" checked={eyeComfort} onChange={handleToggle(setEyeComfort, "eyeComfort")} />
    <span className="slider round"></span>
  </label>
</div>

<div className="bt-noborder">
  <label htmlFor="Auto-rotate">Auto-rotate</label>
  <label className="switch">
    <input type="checkbox" checked={autoRotate} onChange={handleToggle(setAutoRotate, "autoRotate")} />
    <span className="slider round"></span>
  </label>
</div>

<div>
  <p>Brightness</p>
  <div className="settings-container">
    <input
      type="range"
      id="colorTemperature"
      name="colorTemperature"
      min="0"
      max="100"
      value={brightness}
      onChange={handleSliderChange}
    />
  </div>
</div>
</div>
    )

}
export default Dp;