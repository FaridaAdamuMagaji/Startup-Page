import './App.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Portfolio from './Component/Pages/Portfolio';
import Services from './Component/Pages/Services';


function Welcome() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
    
  );
}

export default Welcome;
