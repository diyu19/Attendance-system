
import './App.css';
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import { useState } from 'react';
import Home from './pages/Home.tsx';


function App() {


    return (
    <div className="App">
      <div className="AppInfo">
        <p>ATTENDANCE SYSTEM</p>
        <ul type="none">
          <li>Home </li>
          <li>About Us</li>
          <li>Contact Us</li>

        </ul>
        <ul>
          <li>
            Login
          </li>
          <li>Sign Up</li>
        </ul>
        <div></div>
      </div>
      <div>
      
          {/* <Route path="/" element={<LandingWrapper />} /> */}
          <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  
 </div>
     
    </div>
  );
}

export default App;
