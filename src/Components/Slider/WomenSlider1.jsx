import { Link } from 'react-router-dom';
import { collections } from '../../Data/Data';
import { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';

const WomenSlider1 = () => {
    const { women, setWomen, setPriceRange, setVendor } = useContext(DataContext);

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
        setPriceRange(range);
    };

    const handleVendorFilter = (vendor) => {
        setVendor(vendor);
    };

    return (
        <div className='w-56'>
            <h3 className='text-[#191919] text-lg font-bold mb-2'>Collections</h3>
            <ul>
                <Link to={'/womencollections/women'}><li className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300'>Womens</li></Link>
                <Link to={'/mencollections/men'}><li className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300'>Mens</li></Link>
            </ul>
            <h3 className='text-[#191919] text-lg font-bold mt-8 mb-2'>Product Type</h3>
            <ul>
                {productTypes.map((productType, idx) => (
                    <li
                        key={idx}
                        onClick={() => setWomen(productType)}
                        className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300'>
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
                        className='text-base text-[#888888] hover:text-[#48cab2] mb-[2px] cursor-pointer duration-300'>
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
