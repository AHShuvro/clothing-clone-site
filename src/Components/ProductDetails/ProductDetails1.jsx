import { useParams } from 'react-router-dom';
import { collections } from '../../Data/Data';

const ProductDetails1 = () => {
    const { id } = useParams();
    const product = collections.find(product => product.id == id);
    return (
        <div className='flex'>

            <div className='container mx-auto px-2 sm:px-0 xl:px-44 mb-8 sm:mb-12 md:mb-24 mt-8 sm:mt-12 md:mt-24 flex flex-col items-center'>
                <h3 className='text-4xl text-[#333333] font-bold mb-10 text-center'>Collections</h3>
                <div className='flex gap-8'>
                    <div className='grid grid-cols-2 gap-2 w-1/2'>
                        <div>
                            <img src={product.image1} alt="" />
                        </div>
                        <div>
                            <img src={product.image2} alt="" />
                        </div>
                    </div>
                    <div className=' w-1/2'>
                        <p className='text-3xl text-[#333333] font-bold'>{product.title}</p>
                        <p className='text-3xl text-[#48CAB2] font-bold mb-6'>${product.price}</p>
                        <p className='text-sm'>SKU: <span className='font-bold'>wwo7-1</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails1;