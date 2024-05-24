import { collections } from "../../Data/Data";

const Collection1 = () => {

    const productTypeCounts = collections.reduce((acc, item) => {
        if (acc[item.productType]) {
            acc[item.productType]++;
        } else {
            acc[item.productType] = 1;
        }
        return acc;
    }, {});
    const productTypes = Object.keys(productTypeCounts);

    return (
        <div className='container mx-auto px-2 sm:px-0 xl:px-44 mb-8 sm:mb-12 md:mb-24 mt-8 sm:mt-12 md:mt-24 flex flex-col items-center'>
            <h3 className='text-4xl text-[#333333] font-bold mb-10 text-center'>Collections</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                {productTypes.map((item, idx) => (
                    <div key={idx} className="product-type-item">
                        <img src={`https://source.unsplash.com/800x1026/?${item}`} alt={item} className="h-72" />
                        <h2 className="text-[#333333] text-xl font-bold text-center flex flex-col mt-3">{item}</h2>
                        <p className="text-[#777777] text-center">{productTypeCounts[item]} products</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Collection1;