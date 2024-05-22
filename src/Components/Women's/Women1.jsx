import { useContext } from "react";
import { collections } from "../../Data/Data";
import { DataContext } from "../../Context/DataProvider";

const Women1 = () => {
    const { data } = useContext(DataContext);

    const menCollections = collections.filter(item => item.gender === 'Women');

    const filteredMenCollections = data === '' ? menCollections : menCollections.filter(item => item.productType === data);

    return (
        <div className=''>
            {
                filteredMenCollections.length == 0 ?
                    <div className=" flex flex-col items-center justify-center min-h-[50vh]">
                        <p className="text-5xl font-bold text-red-600 mb-8">Oops!</p>
                        <p className="text-center text-[#191919] text-lg font-medium"> It looks like this item is currently out of stock. We're working hard to replenish our inventory. Please check back later or explore our other amazing products!</p>
                    </div>
                    :
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {
                            filteredMenCollections.map((item, idx) => (
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
                            ))
                        }
                    </div>
            }

        </div>
    );
};

export default Women1;
