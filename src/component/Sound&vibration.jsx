// import React from "react";
import React, { useState,  } from "react";

const Sound = ()=>{
    const [vibrate, setVibrate] = useState(
        JSON.parse(localStorage.getItem("vibrate")) || false
      );
      const [doNotDisturb, setDoNotDisturb] = useState(
        JSON.parse(localStorage.getItem("doNotDisturb")) || false
      );
      const [alarmVolume, setAlarmVolume] = useState(
        JSON.parse(localStorage.getItem("alarmVolume")) || 50
      );
      const [mediaVolume, setMediaVolume] = useState(
        JSON.parse(localStorage.getItem("mediaVolume")) || 50
      );
      const [ringtoneVolume, setRingtoneVolume] = useState(
        JSON.parse(localStorage.getItem("ringtoneVolume")) || 50
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
    
      // Function to handle volume change
      const handleVolumeChange = (e, stateSetter, storageKey) => {
        const newValue = parseInt(e.target.value, 10);
        stateSetter(newValue);
        // Save the volume value to local storage
        localStorage.setItem(storageKey, JSON.stringify(newValue));
      };
    
    return (
//         <div>
       

//     <div class="section">
       
//         <h3 className="head">Vibrate</h3>
//         <div className="bt">
//         <label>Vibrate or Ring</label>
// <label class="switch">
//         <input type="checkbox"/>
//         <span class="slider round"></span>
// </label>
// </div>
//     </div>

    
//     <div class="bt">
//         <label for="Auto brightness">Do Not Disturb</label>
//         <label class="switch">
//         <input type="checkbox"/>
//         <span class="slider round"></span>
// </label>
//     </div>
//     <h3 className="head">VOLUME</h3>
//     <div class="bt-noborder">
//       </div> 
     
//     <div>
//         <p>Alarm</p>
        
//     </div>
    
   
// <div class="settings-container">
//     <input type="range" id="colorTemperature" name="colorTemperature" min="0" max="100" value="50"/>
// </div>
// <div>
//         <p>Media</p>
        
//     </div>
    
    
// <div class="settings-container">
//     <input type="range" id="colorTemperature" name="colorTemperature" min="0" max="100" value="50"/>
// </div>
// <div>
//         <p>Ringtone</p>
        
//     </div>
    
    
// <div class="settings-container">
//     <input type="range" id="colorTemperature" name="colorTemperature" min="0" max="100" value="50"/>
// </div>
      
//         </div>
<div>
      <div className="section">
        <h3 className="head">Vibrate</h3>
        <div className="bt">
          <label>Vibrate or Ring</label>
          <label className="switch">
            <input type="checkbox" checked={vibrate} onChange={handleToggle(setVibrate, "vibrate")} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>

      <div className="bt">
        <label htmlFor="Do Not Disturb">Do Not Disturb</label>
        <label className="switch">
          <input type="checkbox" checked={doNotDisturb} onChange={handleToggle(setDoNotDisturb, "doNotDisturb")} />
          <span className="slider round"></span>
        </label>
      </div>

      <h3 className="head">VOLUME</h3>
      <div className="bt-noborder">
        <p>Alarm</p>
        <div className="settings-container">
          <input
            type="range"
            id="alarmVolume"
            name="alarmVolume"
            min="0"
            max="100"
            value={alarmVolume}
            onChange={(e) => handleVolumeChange(e, setAlarmVolume, "alarmVolume")}
          />
        </div>
      </div>

      <div className="bt-noborder">
        <p>Media</p>
        <div className="settings-container">
          <input
            type="range"
            id="mediaVolume"
            name="mediaVolume"
            min="0"
            max="100"
            value={mediaVolume}
            onChange={(e) => handleVolumeChange(e, setMediaVolume, "mediaVolume")}
          />
        </div>
      </div>

      <div className="bt-noborder">
        <p>Ringtone</p>
        <div className="settings-container">
          <input
            type="range"
            id="ringtoneVolume"
            name="ringtoneVolume"
            min="0"
            max="100"
            value={ringtoneVolume}
            onChange={(e) => handleVolumeChange(e, setRingtoneVolume, "ringtoneVolume")}
          />
        </div>
      </div>
    </div>

    )
}
export default Sound;