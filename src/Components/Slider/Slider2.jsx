import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Slider2 = () => {
    return (
        <div className='px-2'>
            <h3 className="text-4xl text-[#333333] font-bold text-center">Popular Collections</h3>
            <p className="text-lg text-[#777777] font-light text-center mt-2 mb-10">Visit our shop to see amazing creations from our designers.</p>
            <div className='px-0 xl:px-44'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        420: {
                            slidesPerView: 2,
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
                    <SwiperSlide className='overflow-hidden group relative'>
                        <div className='w-full sm:max-w-[22.5rem] relative'>
                            <img className='group-hover:opacity-0 transition-opacity duration-300' src="/image/9.webp" alt="" />
                            <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' src="/image/8.webp" alt="" />
                            <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE 13%</p>
                            <div className='absolute bottom-2 left-2 right-2'>
                                <div className='bg-slate-50 opacity-80 w-full h-full absolute top-0 left-0'></div>
                                <div className='relative flex flex-col items-center'>
                                    <p className="text-lg text-[#777777] font-light text-center">Offer will end through</p>
                                    <div className='flex gap-7'>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>day</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>hrs</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>min</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <div>
                                <p className='text-xs text-[#777777] font-normal'>{`LEVI'S`}</p>
                                <p className='text-base text-[#333333] font-medium'>T-shirt with pearly sleeves</p>
                            </div>
                            <div className='flex items-center gap-6 mt-4'>
                                icon
                                <div>
                                    <p className='text-lg '>450.00$</p>
                                    <p className='text-lg font-bold text-red-600'>300.00$</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='overflow-hidden group relative'>
                        <div className='w-full sm:max-w-[22.5rem] relative'>
                            <img className='group-hover:opacity-0 transition-opacity duration-300' src="/image/11.webp" alt="" />
                            <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' src="/image/10.webp" alt="" />
                            <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE 13%</p>
                            <div className='absolute bottom-2 left-2 right-2'>
                                <div className='bg-slate-50 opacity-80 w-full h-full absolute top-0 left-0'></div>
                                <div className='relative flex flex-col items-center'>
                                    <p className="text-lg text-[#777777] font-light text-center">Offer will end through</p>
                                    <div className='flex gap-7'>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>day</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>hrs</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>min</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <div>
                                <p className='text-xs text-[#777777] font-normal'>{`LEVI'S`}</p>
                                <p className='text-base text-[#333333] font-medium'>T-shirt with pearly sleeves</p>
                            </div>
                            <div className='flex items-center gap-6 mt-4'>
                                icon
                                <div>
                                    <p className='text-lg '>450.00$</p>
                                    <p className='text-lg font-bold text-red-600'>300.00$</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='overflow-hidden group relative'>
                        <div className='w-full sm:max-w-[22.5rem] relative'>
                            <img className='group-hover:opacity-0 transition-opacity duration-300' src="/image/13.webp" alt="" />
                            <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' src="/image/12.webp" alt="" />
                            <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE 13%</p>
                            <div className='absolute bottom-2 left-2 right-2'>
                                <div className='bg-slate-50 opacity-80 w-full h-full absolute top-0 left-0'></div>
                                <div className='relative flex flex-col items-center'>
                                    <p className="text-lg text-[#777777] font-light text-center">Offer will end through</p>
                                    <div className='flex gap-7'>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>day</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>hrs</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>min</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <div>
                                <p className='text-xs text-[#777777] font-normal'>{`LEVI'S`}</p>
                                <p className='text-base text-[#333333] font-medium'>T-shirt with pearly sleeves</p>
                            </div>
                            <div className='flex items-center gap-6 mt-4'>
                                icon
                                <div>
                                    <p className='text-lg '>450.00$</p>
                                    <p className='text-lg font-bold text-red-600'>300.00$</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='overflow-hidden group relative'>
                        <div className='w-full sm:max-w-[22.5rem] relative'>
                            <img className='group-hover:opacity-0 transition-opacity duration-300' src="/image/9.webp" alt="" />
                            <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' src="/image/8.webp" alt="" />
                            <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE 13%</p>
                            <div className='absolute bottom-2 left-2 right-2'>
                                <div className='bg-slate-50 opacity-80 w-full h-full absolute top-0 left-0'></div>
                                <div className='relative flex flex-col items-center'>
                                    <p className="text-lg text-[#777777] font-light text-center">Offer will end through</p>
                                    <div className='flex gap-7'>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>day</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>hrs</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>min</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <div>
                                <p className='text-xs text-[#777777] font-normal'>{`LEVI'S`}</p>
                                <p className='text-base text-[#333333] font-medium'>T-shirt with pearly sleeves</p>
                            </div>
                            <div className='flex items-center gap-6 mt-4'>
                                icon
                                <div>
                                    <p className='text-lg '>450.00$</p>
                                    <p className='text-lg font-bold text-red-600'>300.00$</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='overflow-hidden group relative'>
                        <div className='w-full sm:max-w-[22.5rem] relative'>
                            <img className='group-hover:opacity-0 transition-opacity duration-300' src="/image/11.webp" alt="" />
                            <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' src="/image/10.webp" alt="" />
                            <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE 13%</p>
                            <div className='absolute bottom-2 left-2 right-2'>
                                <div className='bg-slate-50 opacity-80 w-full h-full absolute top-0 left-0'></div>
                                <div className='relative flex flex-col items-center'>
                                    <p className="text-lg text-[#777777] font-light text-center">Offer will end through</p>
                                    <div className='flex gap-7'>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>day</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>hrs</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>min</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <div>
                                <p className='text-xs text-[#777777] font-normal'>{`LEVI'S`}</p>
                                <p className='text-base text-[#333333] font-medium'>T-shirt with pearly sleeves</p>
                            </div>
                            <div className='flex items-center gap-6 mt-4'>
                                icon
                                <div>
                                    <p className='text-lg '>450.00$</p>
                                    <p className='text-lg font-bold text-red-600'>300.00$</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='overflow-hidden group relative'>
                        <div className='w-full sm:max-w-[22.5rem] relative'>
                            <img className='group-hover:opacity-0 transition-opacity duration-300' src="/image/13.webp" alt="" />
                            <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' src="/image/12.webp" alt="" />
                            <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE 13%</p>
                            <div className='absolute bottom-2 left-2 right-2'>
                                <div className='bg-slate-50 opacity-80 w-full h-full absolute top-0 left-0'></div>
                                <div className='relative flex flex-col items-center'>
                                    <p className="text-lg text-[#777777] font-light text-center">Offer will end through</p>
                                    <div className='flex gap-7'>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>day</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>hrs</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>min</p>
                                        </div>
                                        <div className=''>
                                            <p className='text-[22px] font-extrabold'>0</p>
                                            <p className='text-base text-[#333333] font-light'>sec</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col mt-4'>
                            <div>
                                <p className='text-xs text-[#777777] font-normal'>{`LEVI'S`}</p>
                                <p className='text-base text-[#333333] font-medium'>T-shirt with pearly sleeves</p>
                            </div>
                            <div className='flex items-center gap-6 mt-4'>
                                icon
                                <div>
                                    <p className='text-lg '>450.00$</p>
                                    <p className='text-lg font-bold text-red-600'>300.00$</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Slider2;