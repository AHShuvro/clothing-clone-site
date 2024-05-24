import { Link } from 'react-router-dom';
import { collections } from '../../Data/Data';
import { useContext, useState } from 'react';
import { DataContext } from '../../Context/DataProvider';
import { RxCross2 } from "react-icons/rx";

const WomenSlider1 = () => {
    const { women, setWomen, setPriceRange, setVendor } = useContext(DataContext);
    const [price, setPrice] = useState('');

    const productTypes = [...new Set(collections.filter(item => item.gender === 'Women').map(item => item.productType))];
    const vendors = [...new Set(collections.filter(item => item.gender === 'Women').map(item => item.vendor))];

    const priceRanges = [
        { label: 'Under $50', range: [0, 50] },
        { label: '$50 - $100', range: [50, 100] },
        { label: '$100 - $200', range: [100, 200] },
        { label: '$200 - $300', range: [200, 300] },
        { label: 'Above $300', range: [300, Infinity] },
    ];

    const handlePriceFilter = (range) => {
        if (range === '') {
            setPriceRange('');
            setPrice('');
        } else {
            setPriceRange(range);
            setPrice(`$${range[0]} - $${range[1]}`);
        }
    };

    const handleVendorFilter = (vendor) => {
        setVendor(vendor);
    };

    const handleProductTypeFilter = (e) => {
        if (women === e) {
            setWomen('');
        } else {
            setWomen(e);
        }
    };

    return (
        <div className='w-56'>
            <h3 className='text-[#191919] text-lg font-bold mb-2'>Collections</h3>
            <ul>
                <Link to={'/womencollections/women'}><li className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300'>Womens</li></Link>
                <Link to={'/mencollections/men'}><li className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300'>Mens</li></Link>
            </ul>
            <h3 className={`text-[#191919] text-lg font-bold mt-8 mb-6 ${women || price ? '' : 'hidden'}`}>Shopping by:</h3>
            <ul>
                <div className={`${women ? '' : 'hidden'}`}>
                    <p className='text-lg text-[#888888]'>Product Type:</p>
                    <div className='flex items-center gap-1 pl-2'>
                        <RxCross2 className='cursor-pointer' onClick={() => handleProductTypeFilter('')} />
                        <li className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] duration-300'>
                            {women}
                        </li>
                    </div>
                </div>
                <div className={`${price ? '' : 'hidden'}`}>
                    <p className='text-lg text-[#888888]'>Price:</p>
                    <div className='flex items-center gap-1 pl-2'>
                        <RxCross2 className='cursor-pointer' onClick={() => handlePriceFilter('')} />
                        <li className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] duration-300'>
                            {price}
                        </li>
                    </div>
                </div>
            </ul>
            <h3 className='text-[#191919] text-lg font-bold mt-8 mb-2'>Product Type</h3>
            <ul>
                {productTypes.map((productType, idx) => (
                    <li
                        key={idx}
                        onClick={() => handleProductTypeFilter(productType)}
                        className={`text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300 ${women === productType ? 'font-bold' : ''}`}>
                        {productType}
                    </li>
                ))}
            </ul>
            <h3 className='text-[#191919] text-lg font-bold mt-8 mb-2'>Price</h3>
            <ul>
                {priceRanges.map((priceRange, idx) => (
                    <li
                        key={idx}
                        onClick={() => handlePriceFilter(priceRange.range)}
                        className={`text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300`}>
                        {priceRange.label}
                    </li>
                ))}
            </ul>
            <h3 className='text-[#191919] text-lg font-bold mt-8 mb-2'>Vendor</h3>
            <ul>
                {vendors.map((vendor, idx) => (
                    <li
                        key={idx}
                        onClick={() => handleVendorFilter(vendor)}
                        className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300'>
                        {vendor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WomenSlider1;
