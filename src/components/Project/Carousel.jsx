import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import LeftArrowIcon from '../../assets/images/leftArrowIcon.svg';
import RightArrowIcon from '../../assets/images/rightArrowIcon.svg';
import { motion, AnimatePresence, animate } from "framer-motion";
import CarbonCoin1 from '../../assets/projectImages/carbonCoin1.svg'
import CarbonCoin2 from '../../assets/projectImages/carbonCoin2.svg'
import CarbonCoin3 from '../../assets/projectImages/carbonCoin3.svg'
import CarbonCoin4 from '../../assets/projectImages/carbonCoin4.svg'
import Khabar1 from '../../assets/projectImages/khabar1.svg'
import Khabar2 from '../../assets/projectImages/khabar2.svg'
import Khabar3 from '../../assets/projectImages/khabar3.svg'
import Khabar4 from '../../assets/projectImages/khabar4.svg'
import Kodiac1 from '../../assets/projectImages/kodiac1.svg'
import Kodiac2 from '../../assets/projectImages/kodiac2.svg'
import Kodiac3 from '../../assets/projectImages/kodiac3.svg'
import Kodiac4 from '../../assets/projectImages/kodiac4.svg'
import Kodiac5 from '../../assets/projectImages/kodiac5.svg'

const Carousel = () => {

    const items = [
        {
            id: 1,
            title: 'KODIAC LABS',
            description: 'Our development team created a revolutionary website that seamlessly integerate discord bots with non fungible tokens(NFTS). The client Provided a visually-stunning design, and our team expertly utilized the react framework to bring it to life in just three weeks',
            image: [`${Kodiac2}`, `${Kodiac1}`, `${Kodiac3}`, `${Kodiac4}`, `${Kodiac5}`],
            softwareUsed: [
                {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
                    title: 'React JS'
                },
                {
                    url: `https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png`,
                    title: 'CSS'
                },
                {
                    url: `https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png`,
                    title: 'HTML'
                }
            ]
        },
        {
            id: 2,
            title: 'Carbon Coins',
            description: 'We developed the innovative Carbon Coins mobile app, utilizing flutter technology and utilizing firebase as its database, to efficiently track and reduce carbon emissions from vehicles. Our team successfully delivered this solution in just two months.',
            image: [`${CarbonCoin1}`, `${CarbonCoin2}`, `${CarbonCoin3}`, `${CarbonCoin4}`],
            softwareUsed: [
                {
                    url: `https://cdn.iconscout.com/icon/free/png-256/free-flutter-2038877-1720090.png`,
                    title: 'Flutter'
                },
                {
                    url: `https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-logomark.png`,
                    title: 'Firebase'
                }
            ]

        },
        {
            id: 3,
            title: 'News App',
            description: 'The news app notify you when a news is released instantly. Our flutter team successfully completed the app for an agency within 3 months of a time period. The project contained the app, the backend panel and rest api with AWS servers.',
            image: [`${Khabar2}`, `${Khabar1}`, `${Khabar3}`, `${Khabar4}`],
            softwareUsed: [
                {
                    url: `https://cdn.iconscout.com/icon/free/png-256/free-flutter-2038877-1720090.png`,
                    title: 'Flutter'
                },
                {
                    url: `https://static-00.iconduck.com/assets.00/aws-icon-512x512-hniukvcn.png`,
                    title: 'AWS'
                },
                {
                    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4MSNDS6m3kMsNnerP9jlQj0i9J9XmXz4eoKLDYc&s',
                    title: 'Rest API'
                }
            ]

        },
    ];
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((activeIndex + 1) % items.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [activeIndex, items]);

    const nextItem = () => {
        setActiveIndex((activeIndex + 1) % items.length);
    };

    const prevItem = () => {
        setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
    };

    const [isOpen, setIsOpen] = useState(false)

    return (

        <div className="relative w-[90%] lg:w-[80%] xl:w-[60rem] mx-auto flex items-center flex-col sm:flex-row sm:justify-between ">

            {/* Mapping the projects */}
            <div className="w-full mx-auto sm:flex sm:items-center sm:justify-center" >
                <div className="relative sm:w-[87%] lg:w-[97%] h-[800px] sm:h-[600px] xl:w-[900px] rounded-lg overflow-visible sm:overflow-hidden">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`${index === activeIndex ? "" : "hidden"
                                } absolute top-0 left-0 w-full h-full transition-opacity duration-500`}
                        >
                            {/* Layout of projects container */}
                            <div className="w-full xl:w-[56.125rem] h-[50.5rem] sm:h-[38rem] md:h-[35rem] bg-[rgba(43,43,43,0.26)] mx-auto rounded-[14px]  backdrop-blur-[10px]  flex flex-col-reverse sm:flex-row items-center justify-evenly sm:justify-between">
                                <div className="h-1/2 w-[80%] sm:w-1/2 sm:h-full text-white">
                                    <div className="w-[90%] sm:w-[90%] h-[90%] pt-8 sm:pt-1 flex flex-col items-start justify-between sm:justify-center mx-auto">
                                        <div className="flex flex-col items-start justify-center gap-2 sm:gap-4 items">
                                            {/* Project Title */}
                                            <h1 className="font-Kanit uppercase font-medium text-[20px] sm:text-[24px] xl:text-3xl leading-9 w-44 h-9 tracking-wider whitespace-nowrap">
                                                {item.title}
                                            </h1>
                                            {/* Project Description */}
                                            <p className="w-full capitalize  font-light text-[12px] sm:text-[18px] text-left leading-6 py-4 tracking-wider">
                                                {item.description}
                                            </p>
                                        </div>
                                        {/* Software Used */}
                                        <div className="flex flex-col items-start justify-center gap-2 mt-12 items">
                                            <p className="w-28 h-5 font-Kanit font-light text-[14px] leading-5">
                                                Software Used
                                            </p>
                                            <div
                                                className="w-[10rem] h-[3rem] sm:w-[13.875rem] sm:h-[4.6875rem] bg-[rgba(0,0,0,0.15)] rounded-md flex items-center overflow-y-auto justify-evenly gap-1"
                                                style={{ boxShadow: `inset 0px 0px 3.2px #292929` }}
                                            >
                                                {item.softwareUsed.map((software) => (
                                                    <img
                                                        src={software.url}
                                                        alt=""
                                                        className="w-8 h-8 sm:w-10 sm:h-10"
                                                        title={software.title}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* Project Images */}
                                <div className="relative flex flex-wrap items-start w-full gap-5 py-20 overflow-auto transition-all duration-1000 rounded-l-lg rounded-r-lg sm:rounded-l-none bg-black/75 justify-evenly sm:w-1/2 h-1/2 sm:h-full">
                                    {item.image.map((image) => {
                                        return <div className="flex items-center transition-all ease-in-out duration-1000  justify-center hover:w-[55%] sm:w-[35%] rounded-xl">
                                            <motion.img
                                                src={image}
                                                alt=""
                                                className="object-cover transition-all duration-700 ease-in-out cursor-pointer sm:object-cover rounded-xl hover:scale-110 w-28 sm:w-full"
                                                onClick={() => setIsOpen(!isOpen)}
                                            />
                                        </div>
                                    })}

                                    {/* <Modal images={item.image} isOpen={isOpen} setIsOpen={setIsOpen}/> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrow Buttons */}
            <div className="absolute -bottom-24 sm:-right-7  lg:-right-10  sm:top-20 flex flex-row sm:flex-col items-center justify-center xl:gap-12 gap-10 pl-[6px] w-[62%] sm:px-2 md:px-0 md:w-[10%] lg:px-0 sm:w-[10%] lg:w-[4%]  xl:px-0 h-12 sm:h-96">

                <button
                    className="text-[50px] sm:text-[70px]  lg:text-[100px] xl:text-[120px] h-20 2xl:h-32 2xl:text-[180px] font-extralight text-center flex items-center justify-center bg-none p-2 sm:p-0"
                    onClick={prevItem}
                >
                    <img src={LeftArrowIcon} alt="" className="w-8 h-8 sm:w-9 lg:w-10 sm:h-16" />
                </button>
                <button
                    className="text-[50px] sm:text-[70px]  lg:text-[100px] xl:text-[120px] h-20 2xl:h-32 2xl:text-[180px] font-extralight text-center flex items-center justify-center bg-none p-2  sm:p-0"
                    onClick={nextItem}
                >
                    <img src={RightArrowIcon} alt="" className="w-8 h-8 sm:w-9 lg:w-10 sm:h-20" />
                </button>
            </div>
        </div>

          

 
        );
};

export default Carousel;