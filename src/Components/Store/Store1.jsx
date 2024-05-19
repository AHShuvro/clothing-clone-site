import Slider2 from '../Slider/Slider2';
import Popular from './Popular';

const Store1 = () => {
    return (
        <>
            <div className='mt-24'>
                <div className='flex flex-col items-center'>
                    <h3 className='text-4xl text-[#333333] font-bold mb-7'>Welcome to Store</h3>
                    <ul className=" flex items-center justify-center gap-6 md:flex">
                        <li className="group flex text-xs cursor-pointer flex-col text-[#333333] hover:text-[#48cab2] font-bold">
                            NEW ARRIVAL<span className="mt-[2px] h-[1px] w-[0px] rounded-full bg-[#48cab2] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex text-xs cursor-pointer flex-col text-[#333333] hover:text-[#48cab2] font-bold">
                            POPULAR<span className="mt-[2px] h-[1px]  w-[0px] rounded-full bg-[#48cab2] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex text-xs cursor-pointer flex-col text-[#333333] hover:text-[#48cab2] font-bold">
                            FEATURED <span className="mt-[2px] h-[1px]  w-[0px] rounded-full bg-[#48cab2] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="group flex text-xs cursor-pointer flex-col text-[#333333] hover:text-[#48cab2] font-bold">
                            SPECIALS <span className="mt-[2px] h-[1px]  w-[0px] rounded-full bg-[#48cab2] transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </ul>
                </div>

                <div className='mt-24'>
                    <Popular />
                </div>
                <div className='mt-24 container mx-auto'>
                    <Slider2 />
                </div>
            </div>
        </>
    );
};

export default Store1;