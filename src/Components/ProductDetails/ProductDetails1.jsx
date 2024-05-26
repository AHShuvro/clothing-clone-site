import { useParams } from 'react-router-dom';
import { collections } from '../../Data/Data';

const ProductDetails1 = () => {
    const { id } = useParams();
    const product = collections.find(product => product.id == id);
    return (
        <div className='flex'>

            <div className='container mx-auto px-2 sm:px-0 xl:px-44 mb-8 sm:mb-12 md:mb-24 mt-8 sm:mt-12 md:mt-24 flex flex-col items-center'>
                <h3 className='text-4xl text-[#333333] font-bold mb-10 text-center'>Collections</h3>
                <div className='flex flex-col md:flex-row gap-12'>
                    <div className='w-full md:w-1/2'>
                        <div>
                            <img src={product.image1} alt="" />
                        </div>
                    </div>
                    <div className=' w-full md:w-1/2'>
                        <p className='text-3xl text-[#333333] font-bold'>{product.title}</p>
                        <p className='text-3xl text-[#48CAB2] font-bold mb-6'>${product.price}</p>
                        <p className='text-base'>SKU: <span className='font-bold'>wwo7-1</span></p>
                        <p className='text-base'>Availability:<span className='font-bold'> Many in stock </span></p>
                        <p className='text-base'>Vendor: <span className='font-bold'>{product.brand}</span></p>
                        <p className='text-base'>Barcode: <span className='font-bold'>0123456789</span></p>
                        <p className='text-base'>Tags: <span className='font-bold'>Cool</span></p>
                        <div className='mt-4'>
                            <p className='text-base mt-4'>Color: <span className='font-bold'>White</span></p>
                            <div className='flex gap-1'>
                                <img className='w-11 h-11 rounded-full' src={product.image1} alt="" />
                                <img className='w-11 h-11 rounded-full' src={product.image2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails1;