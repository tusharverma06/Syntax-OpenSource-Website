import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Icon from '../assets/images/Icon.svg'
const Carousel = () => {

    const items = [
        {
            id: 1,
            title: 'THE WEB APP',
            description: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            image: `${Icon}`            
        },
        {
            id: 2,
            title: 'REVOLUTIONARY',
            description: 'lotren n njn jnfkjn kjnkjnkfj lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            image: `${Icon}`            

        },
        {
            id: 3,
            title: 'HELOO 3',
            description: 'lotren n njn jnfkjn kjnkjnkfj lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
            image: `${Icon}`            

        },
    ];
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex + 1) % items.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [activeIndex, items]);

    const nextItem = () => {
        setActiveIndex((activeIndex + 1) % items.length);
    };

    const prevItem = () => {
        setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
    };

    return (
        <div className="flex flex-col items-center justify-center" >
            <div className="w-[1000px] mx-auto flex items-center justify-between ">
                <button
                    className="w-8 h-8 text-[100px] font-extrabold text-center flex items-center justify-center bg-none p-16"
                    onClick={prevItem}
                >
                    &lt;
                </button>

                <div className="w-[90%] mx-auto" >
                    <div className="relative h-[600px] w-[900px] rounded-lg overflow-hidden">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`${index === activeIndex ? "" : "hidden"
                                    } absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
                            >
                                <div className="w-[898px] h-[488px] bg-[rgba(43,43,43,0.26)] mx-auto rounded-[14px]  backdrop-blur-[10px]  flex items-center justify-between" >
                                    <div className="w-[48%] h-full text-white">
                                        <div className="w-[70%] h-[90%] pt-24 flex flex-col items-start justify-between mx-auto">
                                            <div className='flex items items-start justify-center gap-8 flex-col '>
                                                <h1 className='font-Kanit font-medium text-[24px] leading-9 w-44 h-9 tracking-wider'>{item.title}</h1>
                                                <p className='w-64 h-9 font-light text-[14px] leading-4 tracking-wider'>
                                                    {item.description}                    </p>
                                            </div>
                                            <div className='flex items items-start justify-center gap-2 flex-col '>
                                                <p className='w-28 h-5 font-Kanit font-light text-[14px] leading-5 '>Software Used :</p>
                                                <div className="w-[222px] h-[75.58px] bg-[rgba(0,0,0,0.15)] rounded-md" style={{ boxShadow: `inset 0px 0px 3.2px #292929` }}></div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="w-[52%] bg-black h-full flex items-center justify-center relative">
                                        <img src={item.image} alt="" className="absolute -left-8 bottom-0" />
                                        <img src={item.image} alt="" className="absolute left-16 top-0" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="w-8 h-8 text-[100px] font-extrabold text-center flex items-center justify-center bg-none p-16"
                    onClick={nextItem}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;