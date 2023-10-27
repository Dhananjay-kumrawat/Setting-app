import React from "react";
import P1 from "../images/p1.jpg";
import Arrow from "../images/arrow.png";
import Wifi from "../images/signal.png";
import blth from "../images/bluetooth.png";
import cn from "../images/connect.png";
import Sound from "../images/sound.png";
import Information from '../images/information.png';
import bright from "../images/dark-mode.png"
import { Link } from "react-router-dom";



function home() {
    return(
    <div>
        
        
        <div className='Flex-contener' >
          <div className="border">
          <h1 className='head'>Settings</h1>
          <div className='flex-item'>
        <img src={P1}width="5%" height="5%" alt="profile "></img>
        <h2>Dhananjay Kumrawat</h2> 
        </div>
          </div>
          <div className="border">
        
          <Link to="/sim"><div className='flex-item'> 
        <img src={Arrow}width="5%" height="5%" alt="data"></img>
          <h2>SIM Card & mobile data</h2>
        </div></Link>
        <Link to="/wifi"><div className='flex-item'>
        <img src={Wifi}width="5%" height="5%" alt="wifi"></img>
          <h2>Wi-Fi</h2>
          
        </div></Link>
        <Link to="/bluetooth"><div className='flex-item'>
        <img src={blth}width="5%" height="5%" alt="wifi"></img>
          <h2 >bluetooth</h2>
        </div>
        </Link>
        <Link to="/connection"><div className='flex-item'>
        <img src={cn}width="5%" height="5%" alt="connection"></img>
          <h2>Connection and Sharing</h2>
        </div>
        </Link>
        </div>
        
        <div className="border">
        <Link to="/display">
          <div className='flex-item'>
        <img src={bright}width="4%" height="4%" alt="wifi"></img>
          <h2>Display and Brightness</h2>
        </div>
        </Link>
        <Link to="/sound"><div className='flex-item'>
        <img src={Sound}width="4%" height="4%" alt="sound"></img>
          <h2>Sound and vibration</h2>
        </div>
        </Link>
        <Link to="/about">
          <div className='flex-item'>
        <img src={Information}width="4%" height="4%" alt="about"></img>
          <h2>About phone</h2>
        </div>
        </Link>
        </div>
          </div>
    </div>
    )
}
export default home;