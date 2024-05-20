
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';


import Slider1 from './Components/Slider/Slider1.jsx';
import Footer1 from './Components/Footer/Footer1.jsx';
import Home1 from './Pages/Home1.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/S" element={<Slider1 />}>
          <Route path="accordion" element={<Footer1 />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
