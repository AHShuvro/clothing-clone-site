
const Footer1 = () => {
    return (

        <div className=" bg-[#F7F8FA] pt-8 sm:pt-12 md:pt-24">
            <div className="container mx-auto px-20 xl:px-44">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-[#333333] font-bold mb-2">About Us</p>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>Shipping and Returns</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>Contact Us</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>404 Page</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>Maintenance</a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-[#333333] font-bold mb-2">Our Policies</p>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>FAQs</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>Privacy Policy</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>Cookie Policy</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>Terms and Conditions</a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-[#333333] font-bold mb-2">Order</p>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>My Account</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>View Cart</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>Wishlist</a>
                        <a className='text-sm text-[#888888] hover:text-[#48cab2] cursor-pointer duration-300'>Compare</a>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-[#333333] font-bold mb-2">Store</p>
                        <a className='text-sm text-[#888888] mb-2'>2548 Broaddus Maple Court <br /> Avenue, Madisonville KY 4783, <br /> United States of America</a>

                        <a className='text-sm text-[#888888]'>Call Us: <span className="text-sm text-[#333333] font-bold">1–234–5678901</span> <br /> Mon-Sun: 9:00am - 9:00pm</a>
                    </div>
                </div>
                <div className="py-16">
                    <p>© 2021 Yanka Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Shopify Theme by p-themes</p>
                </div>
            </div>
        </div>
    );
};

export default Footer1;