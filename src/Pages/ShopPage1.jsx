import React from 'react';
import Navbar1 from '../Components/Navbar/Navbar1';
import { Link, Outlet } from 'react-router-dom';
import Collection1 from '../Components/Collections/Collection1';
import Footer1 from '../Components/Footer/Footer1';

const ShopPage1 = () => {



    return (
        <>
            <Navbar1 />
            <Collection1 />
            <Footer1 />
        </>
    );
};

export default ShopPage1;