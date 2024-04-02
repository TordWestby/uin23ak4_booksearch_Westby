import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import './style.css';
import Layout from './components/layout.jsx';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Browse from './components/browse.jsx';
import Soke from './components/soke.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path='/search' element={<Soke />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
