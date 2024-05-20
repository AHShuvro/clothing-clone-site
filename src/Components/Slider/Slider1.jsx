import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Slider1 = () => {
    return (
        <>


            <div className='px-0 -z-10'>

                <div className='flex justify-between  mt-[-40px] p-2 sm:p-0'>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        speed={2000}
                        modules={[Autoplay]}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 3
                            }
                        }}
                    >
                        <SwiperSlide className=' group'>
                            <div className=' w-full translate-y-10 group-hover:translate-y-0 left-0 bottom-0 right-0 duration-300 -z-10 flex flex-col items-center'>
                                <img src="./image/1.webp" alt="" />
                                <h3 className='text-lg font-semibold mt-6'>NEW PERSONALIZABLE COLLECTION</h3>
                                <h2 className='text-4xl font-bold mt-1 flex flex-col text-[#333333] hover:text-[#48CAB2] duration-200'>
                                    Need-it-Now <span className="mt-[2px] h-[2px] w-[0px] rounded-full bg-[#333333] hover:text-[#48CAB2] transition-all duration-300 group-hover:w-full"></span>
                                </h2>
                                <p className='text-lg mt-1 text-[#777777] font-light'>Contemporary. sophisticated. Versatile. Captivating</p>
                                <div className="group mt-4">
                                    <div className="parent-div hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-[#48CAB2] px-4 py-2 hover:bg-[#333333] text-[#FFFFFF] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            DISCOVER NOW!
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' group'>
                            <div className=' w-full translate-y-10 group-hover:translate-y-0 left-0 bottom-0 right-0 duration-300 -z-10 flex flex-col items-center'>
                                <img src="./image/2.webp" alt="" />
                                <h3 className='text-lg font-semibold mt-6'>NEW PERSONALIZABLE COLLECTION</h3>
                                <h2 className='text-4xl font-bold mt-1 flex flex-col text-[#333333] hover:text-[#48CAB2] duration-200'>
                                    Need-it-Now <span className="mt-[2px] h-[2px] w-[0px] rounded-full bg-[#333333] hover:text-[#48CAB2] transition-all duration-300 group-hover:w-full"></span>
                                </h2>
                                <p className='text-lg mt-1 text-[#777777] font-light'>Contemporary. sophisticated. Versatile. Captivating</p>
                                <div className="group mt-4">
                                    <div className="parent-div hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-[#48CAB2] px-4 py-2 hover:bg-[#333333] text-[#FFFFFF] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            DISCOVER NOW!
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' group'>
                            <div className=' w-full translate-y-10 group-hover:translate-y-0 left-0 bottom-0 right-0 duration-300 -z-10 flex flex-col items-center'>
                                <img src="./image/3.webp" alt="" />
                                <h3 className='text-lg font-semibold mt-6'>NEW PERSONALIZABLE COLLECTION</h3>
                                <h2 className='text-4xl font-bold mt-1 flex flex-col text-[#333333] hover:text-[#48CAB2] duration-200'>
                                    Need-it-Now <span className="mt-[2px] h-[2px] w-[0px] rounded-full bg-[#333333] hover:text-[#48CAB2] transition-all duration-300 group-hover:w-full"></span>
                                </h2>
                                <p className='text-lg mt-1 text-[#777777] font-light'>Contemporary. sophisticated. Versatile. Captivating</p>
                                <div className="group mt-4">
                                    <div className="parent-div hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-[#48CAB2] px-4 py-2 hover:bg-[#333333] text-[#FFFFFF] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            DISCOVER NOW!
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide className=' group'>
                            <div className=' w-full translate-y-10 group-hover:translate-y-0 left-0 bottom-0 right-0 duration-300 -z-10 flex flex-col items-center'>
                                <img src="./image/1.webp" alt="" />
                                <h3 className='text-lg font-semibold mt-6'>NEW PERSONALIZABLE COLLECTION</h3>
                                <h2 className='text-4xl font-bold mt-1 flex flex-col text-[#333333] hover:text-[#48CAB2] duration-200'>
                                    Need-it-Now <span className="mt-[2px] h-[2px] w-[0px] rounded-full bg-[#333333] hover:text-[#48CAB2] transition-all duration-300 group-hover:w-full"></span>
                                </h2>
                                <p className='text-lg mt-1 text-[#777777] font-light'>Contemporary. sophisticated. Versatile. Captivating</p>
                                <div className="group mt-4">
                                    <div className="parent-div hover:opacity-100 transition-opacity duration-300">
                                        <button className="bg-[#48CAB2] px-4 py-2 hover:bg-[#333333] text-[#FFFFFF] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            DISCOVER NOW!
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>


        </>
    );
};

export default Slider1;

