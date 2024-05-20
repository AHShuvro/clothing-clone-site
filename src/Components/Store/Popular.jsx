

const Popular = () => {
    return (
        <div>
            <h3 className="text-4xl text-[#333333] font-bold text-center">Popular Collections</h3>
            <p className="text-lg text-[#777777] font-light text-center mt-2 mb-10">Visit our shop to see amazing creations from our designers.</p>
            <div className='flex flex-col md:flex-row gap-2 w-full'>
                <div className='w-full md:w-1/2 relative group'>
                    <img src="./image/4.webp" alt="" />
                    <div className='absolute top-6 left-8'>
                        <div><h2 className='text-2xl font-bold mt-1 flex flex-col text-[#333333]'> Complete Your Look <span className="mt-[2px] h-[2px] w-[0px] rounded-full bg-[#333333] transition-all duration-300 group-hover:w-full"></span>
                        </h2></div>
                        <p className="text-lg text-[#777777] font-light text-start mb-7">Visit our shop to see amazing <br /> creations from our designers.</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full md:w-1/2'>
                    <div className='flex gap-2'>
                        <div className="relative overflow-hidden group">
                            <img src="./image/5.jpg" alt="" className="transform transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute top-6 left-8" />
                            <div className='absolute top-6 left-8'>
                                <div><h2 className='text-2xl font-bold mt-1 flex flex-col text-[#333333]'> New in<span className="mt-[2px] h-[2px] w-[0px] rounded-full bg-[#333333] transition-all duration-300 group-hover:w-full"></span>
                                </h2></div>
                                <p className="text-lg text-[#777777] font-light text-start mb-7">shoes & Accessories</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden group">
                            <img src="./image/6.webp" alt="" className="transform transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute top-6 left-8">
                                <div>
                                    <h2 className="text-2xl font-bold mt-1 flex flex-col text-[#FFFFFF]">
                                        Top tranding
                                        <span className="mt-[2px] h-[2px] w-0 rounded-full bg-[#FFFFFF] transition-all duration-300 group-hover:w-full"></span>
                                    </h2>
                                </div>
                                <p className="text-lg text-[#FFFFFF] font-light text-start mb-7">Collection 23/24</p>
                            </div>
                        </div>

                    </div>
                    <div className="overflow-hidden relative group">
                        <img src="./image/7.webp" alt="" className="transform transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute top-6 left-8">
                            <div>
                                <h2 className="text-2xl font-bold mt-1 flex flex-col text-[#333333]">
                                    The All-in-One
                                    <span className="mt-[2px] h-[2px] w-0 rounded-full bg-[#333333] transition-all duration-300 group-hover:w-full"></span>
                                </h2>
                            </div>
                            <p className="text-lg text-[#777777] font-light text-start mb-7">Get up to 50% off</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Popular;