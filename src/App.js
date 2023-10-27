//import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import About from './component/about';
import Connection from './component/Connection';
import Display from './component/display';
import Wifi from './component/wifi';
import Bluetooth from './component/biuetooth';
import Sound from './component/Sound&vibration';
import Sim from './component/Sim';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <Router>
      <switch>
        
          
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About  />} />
      <Route path="/display" element={<Display  />} />
      <Route path="/connection" element={<Connection  />} />
      <Route path="/wifi" element={<Wifi />} />
      <Route path="/bluetooth" element={<Bluetooth />} />
      <Route path ="/sound" element={<Sound/>}/>
      <Route path ="/sim" element={<Sim/>}/>
    </Routes>
        
       
      </switch>
   
    </Router>
    </div>
  );
}

export default App;
