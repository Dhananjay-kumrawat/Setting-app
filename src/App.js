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
import { BrowserRouter as Router,Switch,Route,Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
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
    {/* <Home />
    <About />
    <Connection />
    <Display /> */}
    </Router>
    </div>
  );
}

export default App;
