import { useContext, useState, useEffect } from "react";
import { collections } from "../../Data/Data";
import { DataContext } from "../../Context/DataProvider";
import { CiFilter, CiHeart } from "react-icons/ci";
import WomenSlider1 from "../Slider/WomenSlider1";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Women1 = () => {
    const { women, priceRange, vendor } = useContext(DataContext);
    const [loading, setLoading] = useState(true);
    const [filteredWomenCollections, setFilteredWomenCollections] = useState([]);
    const [tab, setTab] = useState('grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6');

    const handleButtonClick = (buttonValue) => {
        const tab = getTab(buttonValue);
        setTab(tab);
    };

    const getTab = (value) => {
        switch (value) {
            case '2':
                return 'grid grid-cols-1 sm:grid-cols-2 gap-6';
            case '3':
                return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6';
            case '4':
                return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6';
            default:
                return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6';
        }
    };

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            let womenCollections = collections.filter(item => item.gender === 'Women');

            if (women) {
                womenCollections = womenCollections.filter(item => item.productType === women);
            }
            if (priceRange) {
                womenCollections = womenCollections.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);
            }
            if (vendor) {
                womenCollections = womenCollections.filter(item => item.vendor === vendor);
            }

            setFilteredWomenCollections(womenCollections);
            setLoading(false);
        }, 300);
    }, [women, priceRange, vendor]);

    const handleAddToWishlist = (item) => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const itemExists = wishlist.some(wishlistItem => wishlistItem.title === item.title);

        if (!itemExists) {
            wishlist.push(item);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added to wishlist!",
                showConfirmButton: false,
                timer: 800
            });
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "This item is already in your wishlist.",
                showConfirmButton: false,
                timer: 800
            });
        }
    }

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
                <div className="flex justify-between mb-4 md:mb-6">
                    <label htmlFor="my-drawer" className="drawer-button flex gap-1 items-center lg:hidden font-bold cursor-pointer"><CiFilter className="text-2xl font-semibold" /> Filter</label>
                    <div className="flex items-center gap-2 pr-4">
                        <div className="flex gap-[1px] h-3 w-[10px] cursor-pointer" onClick={() => handleButtonClick('2')}>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                        </div>
                        <div className="flex gap-[1px] h-3 w-4 cursor-pointer" onClick={() => handleButtonClick('3')}>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                        </div>
                        <div className="flex gap-[1px] h-3 w-5 cursor-pointer" onClick={() => handleButtonClick('4')}>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                            <div className="border border-[#777777] rounded-sm w-full h-full"></div>
                        </div>
                    </div>
                </div>
                <div className={tab}>
                    {filteredWomenCollections.map((item, idx) => (
                        <Link key={idx} to={`/productdetails/${item.id}`}>
                            <div className='overflow-hidden group relative'>
                                <div className='w-full sm:max-w-[22.5rem] relative'>
                                    <img className='group-hover:opacity-0 transition-opacity duration-600' src='/image/24.webp' alt={item.title} />
                                    <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600' src='/image/23.webp' alt={item.title} />
                                    <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE 13%</p>
                                    <CiHeart onClick={() => handleAddToWishlist(item)} className='absolute top-2 right-3 text-2xl text-[#777777] cursor-pointer' />
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <div>
                                        <p className='text-xs text-[#777777] font-normal'>{item.brand}</p>
                                        <p className='text-base text-[#333333] font-medium'>{item.title}</p>
                                    </div>
                                    <div className='flex items-center gap-6 mt-4'>
                                        <div>
                                            <p className='text-lg font-bold text-red-600 '>${item.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
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

export default Women1;
