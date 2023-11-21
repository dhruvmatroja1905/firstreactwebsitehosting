
    import React, { useState } from 'react';
    import './App.css';


    import Navbar from './Component/Navbar';
    import Aboutus from './Component/Aboutus';
    import TextForm from './Component/TextForm';
    
    import {
      HashRouter as Router,
      Routes,
      Route,
          
    } from "react-router-dom";
    function App() {
    const [Mode, setMode] = useState('light');

    const toggleMode = ()=>{
      if(Mode === 'light'){
      setMode  ('dark')
      document.body.style.backgroundColor = '#345864';
      
    }
      else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      
      }
    }
    
      return (
   <>
   
   <Navbar title="Wordinfo" Mode={Mode} toggleMode={toggleMode} aboutText="About Us" Link="Link"/>
   
   <div className='container my-3' >
  
   
  <Router>
  <Routes>
  
  <Route path="/about" element={<Aboutus />} />
  <Route path="/" element={<TextForm heading="Enter your text for analyze" Mode={Mode}/>} />
  
  </Routes>
  </Router>
  </div>
  
  </>
  );
  
  
}
export default App;
