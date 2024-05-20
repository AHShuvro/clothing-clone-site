import { useEffect, useState } from 'react';

export const Banner1 = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: './image/16.webp', title: 'Escape 1', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },{ img: './image/17.webp', title: 'Escape 2', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' },{ img: './image/18.webp', title: 'Escape 3', des: 'A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.' }];

    useEffect(() => {
        const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
        return () => clearInterval(intervalId);
    }, [currentSlider]);

    return (
        <div className="flex flex-row-reverse justify-between">
            <div className="w-full h-72 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/20 before:inset-0 transform duration-1000 ease-linear overflow-hidden"
                style={{ backgroundImage: `url(${sliders[currentSlider].img})`}}>
                <div className="drop-shadow-lg text-white text-center px-5">
                    <h1 className="text-xl lg:text-3xl font-semibold mb-3">{sliders[currentSlider].title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{sliders[currentSlider].des}</p>
                </div>
            </div>
        </div>
    );
};
