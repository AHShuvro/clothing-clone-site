import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Slider2 = () => {
    const items = [
        {
            sale: '20%',
            brand: 'Nike',
            title: 'Men\'s Running Shoes',
            currentPrice: '120.00',
            prevPrice: '150.00',
            img1: '/image/8.webp',
            img2: '/image/9.webp',
        },
        {
            sale: '15%',
            brand: 'Adidas',
            title: 'Women\'s Track Jacket',
            currentPrice: '85.00',
            prevPrice: '100.00',
            img1: '/image/10.webp',
            img2: '/image/11.webp',
        },
        {
            sale: '25%',
            brand: 'Under Armour',
            title: 'Men\'s Gym Shorts',
            currentPrice: '45.00',
            prevPrice: '60.00',
            img1: '/image/12.webp',
            img2: '/image/13.webp',
        },
        {
            sale: '30%',
            brand: 'Puma',
            title: 'Women\'s T-Shirt',
            currentPrice: '28.00',
            prevPrice: '40.00',
            img1: '/image/8.webp',
            img2: '/image/9.webp',
        },
        {
            sale: '10%',
            brand: 'Reebok',
            title: 'Men\'s Hoodie',
            currentPrice: '90.00',
            prevPrice: '100.00',
            img1: '/image/10.webp',
            img2: '/image/11.webp',
        },
        {
            sale: '40%',
            brand: 'Champion',
            title: 'Women\'s Sweatpants',
            currentPrice: '30.00',
            prevPrice: '50.00',
            img1: '/image/12.webp',
            img2: '/image/13.webp',
        },
    ];

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

                    {
                        items.map((item, idx) => (
                            <SwiperSlide key={idx} className='overflow-hidden group relative cursor-pointer'>
                                <Link to={'/womencollections/women'}>


                                    <div className='w-full sm:max-w-[22.5rem] relative'>
                                        <img className='group-hover:opacity-0 transition-opacity duration-300' src={item.img2} alt="" />
                                        <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' src={item.img1} alt="" />
                                        <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE {item.sale}</p>
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
                                            <p className='text-base text-[#333333] font-medium'>{item.title}</p>
                                        </div>
                                        <div className='flex items-center gap-6 mt-4'>
                                            icon
                                            <div>
                                                <p className='text-lg '>{item.prevPrice}$</p>
                                                <p className='text-lg font-bold text-red-600'>{item.currentPrice}$</p>
                                            </div>
                                        </div>
                                    </div>



                                </Link>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Slider2;