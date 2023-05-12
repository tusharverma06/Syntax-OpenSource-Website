import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Icon from '../../assets/images/Icon.svg'
import LeftArrowIcon from '../../assets/images/leftArrowIcon.svg';
import RightArrowIcon from '../../assets/images/rightArrowIcon.svg'
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
        <div className="flex flex-col items-center justify-center w-11/12 sm:w-full" >
            <div className="w-[90%]  sm:w-[90%] lg:w-[80%] xl:w-[60rem] mx-auto flex items-center sm:justify-between ">

                {/* Mapping the projects */}
                <div className="w-full mx-auto" >
                    <div className="relative sm:w-full lg:w-[97%] h-[600px] xl:w-[900px] rounded-lg overflow-hidden">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`${index === activeIndex ? "" : "hidden"
                                    } absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
                            >
                                {/* Layout of projects container */}
                                <div className="w-full xl:w-[56.125rem] h-[30.5rem] bg-[rgba(43,43,43,0.26)] mx-auto rounded-[14px]  backdrop-blur-[10px]  flex flex-col-reverse sm:flex-row items-center justify-evenly sm:justify-between" >
                                    <div className="h-1/2 w-[80%] sm:w-[48%] sm:h-full text-white">
                                        <div className="w-[90%] sm:w-[70%] h-[90%] pt-8 sm:pt-24 flex flex-col items-start justify-between mx-auto">
                                            <div className='flex flex-col items-start justify-center gap-2 sm:gap-8 items '>
                                                {/* Project Title */}
                                                <h1 className='font-Kanit font-medium text-[20px] sm:text-[24px] leading-9 w-44 h-9 tracking-wider'>{item.title}</h1>
                                                {/* Project Description */}
                                                <p className='w-[90%] max-w-64 h-9 font-light text-[12px] sm:text-[14px] leading-4 tracking-wider'>
                                                    {item.description}
                                                </p>
                                            </div>
                                            {/* Software Used */}
                                            <div className='flex flex-col items-start justify-center gap-2 mt-12 items'>
                                                <p className='w-28 h-5 font-Kanit font-light text-[14px] leading-5 '>Software Used :</p>
                                                <div className="w-[10rem] h-[3rem] sm:w-[13.875rem] sm:h-[4.6875rem] bg-[rgba(0,0,0,0.15)] rounded-md" style={{ boxShadow: `inset 0px 0px 3.2px #292929` }}>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* Project Images */}
                                    <div className="relative flex items-center justify-center w-full bg-black sm:w-1/2 h-1/2 sm:h-full">
                                        <img src={item.image} alt="" className="absolute bottom-0 sm:w-auto left-8 w-52 sm:-left-2 sm:bottom-32 lg:-left-12 lg:bottom-0 md:bottom-20 md:-left-4" />
                                        <img src={item.image} alt="" className="absolute top-0 left-16 sm:left-8 sm:top-28 w-52 sm:w-auto lg:top-2 lg:left-16 md:top-28 md:left-8" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Arrow Buttons */}
                <div className="flex flex-col items-center justify-start xl:gap-12 gap-2 pl-[6px] w-[12%] sm:px-2 md:px-0 md:w-[10%] lg:px-0 sm:w-[10%] lg:w-[4%]  xl:px-0  h-96">

                    <button
                        className="text-[50px] sm:text-[70px]  lg:text-[100px] xl:text-[120px] h-20 2xl:h-32 2xl:text-[180px] font-extralight text-center flex items-center justify-center bg-none p-2 sm:p-0"
                        onClick={prevItem}
                    >
                        <img src={LeftArrowIcon} alt="" className="w-10 h-16" />
                    </button>
                    <button
                        className="text-[50px] sm:text-[70px]  lg:text-[100px] xl:text-[120px] h-20 2xl:h-32 2xl:text-[180px] font-extralight text-center flex items-center justify-center bg-none p-2  sm:p-0"
                        onClick={nextItem}
                    >
                        <img src={RightArrowIcon} alt="" className="w-12 h-20" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;