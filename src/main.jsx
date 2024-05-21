
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';



import HomePage1 from './Pages/HomePage1.jsx';
import ShopPage1 from './Pages/ShopPage1.jsx';
import Collection1 from './Components/Collections/Collection1.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/shop" element={<ShopPage1 />}>
          <Route path="a" element={<Collection1 />} />
        </Route>
        <Route path="/page" element={<HomePage1 />} />
        <Route path="/blog" element={<HomePage1 />} />
        <Route path="/women" element={<HomePage1 />} />
        <Route path="/men" element={<HomePage1 />} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);
