import React from 'react'
import HomePlanet from '../../assets/images/homeplanet.png';
import Moon from '../../assets/images/moon.svg'
import Earth from '../../assets/images/earth.png'
import Icon from '../../assets/images/Icon.svg'
import { Element } from 'react-scroll'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay, EffectFade, Virtual } from 'swiper'
import "swiper/css/bundle";
import Carousel from '../Project/Carousel';
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react';

SwiperCore.use([Autoplay, Navigation]);
const Project = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.8], ["0%", "50%"])
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30 ,0.35,0.40],
    ["0.5s", "0.5s", "0.5s", "0.5s","0.5s","0.5s" ,"0.5s","0.5s"]
  );
  return (

    <Element name='Projects' className='relative w-full h-screen '>
      <div ref={targetRef}>
        {/* White Line */}
        <motion.div className='w-0 border-[4px] border-solid border-white h-[456px] absolute mx-auto top-0 left-[50%] 2xl:left-[50%]' style={{ height, transition: transitionWhiteLine }}>
        </motion.div>
      </div>

      {/* Planet top */}
      {/* <div className='flex items-center justify-center w-full mx-auto h-72'>
        <img src={HomePlanet} alt="" className='w-[1041px] h-[1081px]  block mx-auto ' />
      </div> */}

      <div className="max-w-[1260px] flex items-center justify-center mx-auto absolute overflow-hidden w-full top-32 left-1/2 -translate-x-1/2" >
        <Carousel />

        {/* <Swiper
          slidesPerView={1}
          navigation
          // effect="fade"
          // modules={[EffectFade]}
          modules={[Virtual]}
          Virtual
        >
          <SwiperSlide className='w-auto'>
            <div className="w-[898px] h-[488px] bg-[rgba(43,43,43,0.26)] mx-auto rounded-[14px]  backdrop-blur-[10px]  flex items-center justify-between" style={{ left: `calc(50% - 897.76px/2 - 2.12px)`, top: '108px' }}>
              <div className="w-[48%] h-full text-white">
                <div className="w-[70%] h-[90%] pt-24 flex flex-col items-start justify-between mx-auto">
                  <div className='flex flex-col items-start justify-center gap-8 items '>
                    <h1 className='font-Kanit font-medium text-[24px] leading-9 w-44 h-9 tracking-wider'>The WEb CAT</h1>
                    <p className='w-64 h-9 font-light text-[14px] leading-4 tracking-wider'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum repudiandae eos, vitae facere quidem ex deserunt quod ipsam expedita voluptates voluptas itaque error iure? Alias harum incidunt doloremque repellat officiis.
                    </p>
                  </div>
                  <div className='flex flex-col items-start justify-center gap-2 items '>
                    <p className='w-28 h-5 font-Kanit font-light text-[14px] leading-5 '>Software Used :</p>
                    <div className="w-[222px] h-[75.58px] bg-[rgba(0,0,0,0.15)] rounded-md" style={{ boxShadow: `inset 0px 0px 3.2px #292929` }}></div>
                  </div>

                </div>
              </div>
              <div className="w-[52%] bg-black h-full flex items-center justify-center relative">
                <img src={Icon} alt="" className="absolute bottom-0 -left-8" />
                <img src={Icon} alt="" className="absolute top-0 left-16" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='w-auto'>
            <div className="w-[898px] h-[488px] bg-[rgba(43,43,43,0.26)] mx-auto rounded-[14px]  backdrop-blur-[10px]  flex items-center justify-between" style={{ left: `calc(50% - 897.76px/2 - 2.12px)`, top: '108px' }}>
              <div className="w-[48%] h-full text-white">
                <div className="w-[70%] h-[90%] pt-24 flex flex-col items-start justify-between mx-auto">
                  <div className='flex flex-col items-start justify-center gap-8 items '>
                    <h1 className='font-Kanit font-medium text-[24px] leading-9 w-44 h-9 tracking-wider'>REVOLUTIONARY WEB</h1>
                    <p className='w-64 h-9 font-light text-[14px] leading-4 tracking-wider'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ea minima possimus ullam officia quibusdam consequuntur officiis soluta totam, quo nostrum aliquid culpa rerum quos, voluptates voluptas. Totam, voluptates? Minus?
                    </p>
                  </div>
                  <div className='flex flex-col items-start justify-center gap-2 items '>
                    <p className='w-28 h-5 font-Kanit font-light text-[14px] leading-5 '>Software Used :</p>
                    <div className="w-[222px] h-[75.58px] bg-[rgba(0,0,0,0.15)] rounded-md" style={{ boxShadow: `inset 0px 0px 3.2px #292929` }}></div>
                  </div>

                </div>
              </div>
              <div className="w-[52%] bg-black h-full flex items-center justify-center relative">
                <img src={Icon} alt="" className="absolute bottom-0 -left-8" />
                <img src={Icon} alt="" className="absolute top-0 left-16" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='w-auto'>
            <div className="w-[898px] h-[488px] bg-[rgba(43,43,43,0.26)] mx-auto rounded-[14px]  backdrop-blur-[10px]  flex items-center justify-between" style={{ left: `calc(50% - 897.76px/2 - 2.12px)`, top: '108px' }}>
              <div className="w-[48%] h-full text-white">
                <div className="w-[70%] h-[90%] pt-24 flex flex-col items-start justify-between mx-auto">
                  <div className='flex flex-col items-start justify-center gap-8 items '>
                    <h1 className='font-Kanit font-medium text-[24px] leading-9 w-44 h-9 tracking-wider'>LESS GOOO</h1>
                    <p className='w-64 h-9 font-light text-[14px] leading-4 tracking-wider'>
                      {'projectDesc 3'}
                    </p>
                  </div>
                  <div className='flex flex-col items-start justify-center gap-2 items '>
                    <p className='w-28 h-5 font-Kanit font-light text-[14px] leading-5 '>Software Used :</p>
                    <div className="w-[222px] h-[75.58px] bg-[rgba(0,0,0,0.15)] rounded-md" style={{ boxShadow: `inset 0px 0px 3.2px #292929` }}></div>
                  </div>

                </div>
              </div>
              <div className="w-[52%] bg-black h-full flex items-center justify-center relative">
                <img src={Icon} alt="" className="absolute bottom-0 -left-8" />
                <img src={Icon} alt="" className="absolute top-0 left-16" />
              </div>
            </div>
          </SwiperSlide>

        </Swiper> */}
      </div>

      {/* Moon planet */}
      {/* <div className='w-full h-[44rem] flex items-center justify-start mx-auto'>
        <img src={Moon} alt="bottom planet" className='w-[1411px] h-[1306px]' />
      </div> */}
    </Element >
  )
}

export default Project