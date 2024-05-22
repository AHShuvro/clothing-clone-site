import Navbar1 from '../Components/Navbar/Navbar1';
import { Outlet } from 'react-router-dom';
import MenSlider1 from '../Components/Slider/MenSlider1';

const MenCollectionsPage1 = () => {



    return (
        <>
            <Navbar1 />

            <h3 className='text-4xl text-[#333333] font-bold text-center mt-8 sm:mt-12 md:mt-24 mb-10'>Collections</h3>
            <div className='flex justify-center w-full gap-6  container mx-auto px-2 sm:px-0 xl:px-44 mb-8 sm:mb-12 md:mb-24'>
                <div className='hidden lg:block '>
                    <MenSlider1 />
                </div>
                <div className='flex-1'>
                    <Outlet />
                </div>

            </div>
        </>
    );
};

export default MenCollectionsPage1;