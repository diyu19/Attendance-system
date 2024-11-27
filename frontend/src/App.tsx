
import './App.css';
import { Routes, Route, BrowserRouter , Link } from "react-router-dom";

import Home from './pages/Home.tsx';
import React from 'react';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import NotAuthentication from './Dashboard/wrapper/NotAuthentication.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';



const App=()=> {


    return (
    <div className="App">
      
      <div>
      
          {/* <Route path="/" element={<LandingWrapper />} /> */}
          <BrowserRouter>
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path='/dashboard' element={<NotAuthentication/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  
 </div>
     
    </div>
  );
}

export default App;
