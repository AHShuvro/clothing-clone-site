import React from 'react';
import Navbar1 from '../Components/Navbar/Navbar1';
import { Link, Outlet } from 'react-router-dom';

const MensPage1 = () => {



    return (
        <>
            <Navbar1 />

            <div className='flex justify-center w-full px-0 xl:px-44 gap-6'>
                <div className='h-screen  hidden lg:block '>
                    <Link to={'/shop/a'}><p className='text-red-500 text-5xl'>amar sunar bangla</p></Link>
                </div>
                <div className=' flex-1 xl:flex-none pt-10'>

                    <Outlet />

                </div>

            </div>
        </>
    );
};

export default MensPage1;