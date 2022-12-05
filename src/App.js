import './App.css';
import Navbar from'./components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'
import React, { useState } from 'react';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const [mode , setMode] = useState('light'); // whether dark mode is enabled or not !
const [alert , setAlert] = useState(null);

const showAlert = (message , type)=> {
     setAlert({
      message : message,
      type : type
     })
     setTimeout(() => {
      setAlert(null)
     }, 1500);
}
const toggleMode = () => {
  if(mode==='light'){
    setMode('dark')
    document.body.style.background = '#004d4d';
    showAlert("Dark mode has been enabled" , "success");
  }
  else{
    setMode('light')
    document.body.style.background = 'white';
    showAlert("Light mode has been enabled" , "success");
  }
}
  return (
    <>
    <Router>
          <Navbar title="Textutils"  aboutText="About "  home="Home" contact="Contact Us"  mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container my-3" >
              <Routes>
                  <Route  path="/About" element={<About/>}/>
                    
                  <Route  path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>}/>
                  
              </Routes>
          </div>
      </Router>
    </>
  );
 }

export default App;
