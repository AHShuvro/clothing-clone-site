
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';



import HomePage1 from './Pages/HomePage1.jsx';
import ShopPage1 from './Pages/ShopPage1.jsx';
import Men1 from './Components/Men\'s/Men1.jsx';
import Women1 from './Components/Women\'s/Women1.jsx';
import { DataProvider } from './Context/DataProvider.jsx';
import WomenCollectionsPage1 from './Pages/WomenCollectionsPage1.jsx';
import MenCollectionPage1 from './Pages/MenCollectionsPage1.jsx';
import WishListPage from './Pages/WishListPage.jsx';
import ProductDetailsPage from './Pages/ProductDetailsPage.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/shop" element={<ShopPage1 />} />
          <Route path="/page" element={<HomePage1 />} />
          <Route path="/blog" element={<HomePage1 />} />
          <Route path="/women" element={<HomePage1 />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/productdetails/:id" element={<ProductDetailsPage />} />
          <Route path="/womencollections" element={<WomenCollectionsPage1 />}>
            <Route path="women" element={<Women1 />} />
          </Route>
          <Route path="/mencollections" element={<MenCollectionPage1 />}>
            <Route path="men" element={<Men1 />} />
          </Route>

        </Routes>
      </Router>
    </DataProvider>
  </React.StrictMode>
);
