
const Discover1 = () => {
    return (
        <div className='flex flex-col md:flex-row gap-2 w-full mt-8 sm:mt-12 md:mt-24 px-4 sm:px-0'>
            <div className="relative overflow-hidden group">
                <img src="./image/14.webp" alt="" className="transform transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-8" />
                <div className='absolute top-6 left-8'>
                    <p className='text-2xl font-semibold mt-1 flex flex-col text-[#333333]'>Complete your look</p>
                    <h2 className='text-4xl font-bold mt-1 flex flex-col text-[#333333]'>{`Women's`}<span className="mt-[2px] h-[2px] w-[0px] rounded-full bg-[#333333] transition-all duration-300 group-hover:w-full"></span>
                    </h2>
                    <p className="text-lg text-[#777777] font-light text-start mb-7">Here to bring your life style to the new level</p>
                    <button className="bg-[#48CAB2] px-4 py-2 hover:bg-[#333333] text-[#FFFFFF] text-sm font-semibold duration-300">
                        DISCOVER NOW!
                    </button>
                </div>
            </div>
            <div className="relative overflow-hidden group">
                <img src="./image/15.webp" alt="" className="transform transition-transform duration-700 group-hover:scale-110" />
                <div className='absolute top-6 left-8'>
                    <p className='text-2xl font-semibold mt-1 flex flex-col text-[#FFFFFF]'>Complete your look</p>
                    <h2 className='text-4xl font-bold mt-1 flex flex-col text-[#FFFFFF]'>{`Men's`}<span className="mt-[2px] h-[2px] w-[0px] rounded-full bg-[#FFFFFF] transition-all duration-300 group-hover:w-full"></span>
                    </h2>
                    <p className="text-lg text-[#FFFFFF] font-light text-start mb-7">Distinguished. Individual. Character.</p>
                    <button className="bg-[#48CAB2] px-4 py-2 hover:bg-[#333333] text-[#FFFFFF] text-sm font-semibold duration-300">
                        DISCOVER NOW!
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Discover1;