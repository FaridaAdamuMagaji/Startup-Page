import './App.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import Portfolio from './Component/Pages/Portfolio';


function Welcome() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
    
  );
}

export default Welcome;
