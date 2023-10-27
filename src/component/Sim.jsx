import React from "react";

function Sim(){
    return(
        
            <div>
            {/* <div class="settings-container">
            <h2><a href="./setting.html">&larr;</a>  Display&brightness </h2>   
        </div> */}
    
        <div class="section">
           
            
            <div className="bt">
    <h3>Mobile Data</h3>
    <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
    </label>
    </div>
        </div>
    
        {/* <h3>Dark mode setting</h3>
        <h5>style.reduce contrast in low-light conditions.<br/> and dark mode for third-party apps</h5>
    
        <div class="settings-container">
            <input type="range" id="brightness" name="brightness" min="0" max="100" value="50"/>
        </div> */}
        <div class="bt-noborder">
            <label for="Auto brightness">Sim 1</label>
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
    </label>
        </div>
        <div class="bt">
           
            <label for="Eye comfort">Sim 2</label>
            {/* <input type="checkbox" id="Eye comfort" /> */}
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
    </label>
        </div>


        



        {/* <div class="bt-noborder">
           
            <label for="Auto-rotate">Auto-rotate</label>
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
    </label>
        </div> */}
        {/* <div>
            <p>Brightness</p>
            
        </div> */}
        
        {/* <H5>SCREEN COLOR TEMPERATURE<H5/> */}
    {/* <P>Cooler          Default        Warmer</P> */}
    {/* <div class="settings-container">
        <input type="range" id="colorTemperature" name="colorTemperature" min="0" max="100" value="50"/>
    </div> */}
          {/* <p>Font & Display</p>
          <h5>More</h5>
          
          <h6>you might be looking for</h6> */}
          {/* <p>Wallpapers<p/>
          <p>Battery Saver<p/> */}
            </div>
        )
    
}
export default Sim;