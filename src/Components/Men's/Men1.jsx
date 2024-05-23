import { useContext, useState, useEffect } from "react";
import { collections } from "../../Data/Data";
import { DataContext } from "../../Context/DataProvider";

import { CiFilter } from "react-icons/ci";
import WomenSlider1 from "../Slider/WomenSlider1";

const Men1 = () => {
    const { men } = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [filteredMenCollections, setFilteredMenCollections] = useState([]);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            const menCollections = collections.filter(item => item.gender === 'Men');
            const filteredCollections = men === '' ? menCollections : menCollections.filter(item => item.productType === men);

            setFilteredMenCollections(filteredCollections);
            setLoading(false);
        }, 300);
    }, [men]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <div className="w-10 h-10 animate-spin rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
            </div>
        );
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className=" drawer-button flex gap-1 items-center mb-4 lg:hidden font-bold"><CiFilter className="text-2xl font-semibold" /> Filter</label>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {filteredMenCollections.map((item, idx) => (
                        <div key={idx} className='overflow-hidden group relative'>
                            <div className='w-full sm:max-w-[22.5rem] relative'>
                                <img className='group-hover:opacity-0 transition-opacity duration-600' src='/image/24.webp' alt={item.title} />
                                <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600' src='/image/23.webp' alt={item.title} />
                                <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE 13%</p>
                            </div>
                            <div className='flex flex-col mt-4'>
                                <div>
                                    <p className='text-xs text-[#777777] font-normal'>{item.brand}</p>
                                    <p className='text-base text-[#333333] font-medium'>{item.title}</p>
                                </div>
                                <div className='flex items-center gap-6 mt-4'>
                                    <span>icon</span>
                                    <div>
                                        <p className='text-lg font-bold text-red-600'>${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-16">
                    <WomenSlider1 />
                </ul>
            </div>
        </div>
    );
};

export default Men1;
