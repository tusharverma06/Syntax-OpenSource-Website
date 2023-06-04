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
  const height = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"])
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40],
    ["1s", "3s", "3s", "3s", "3s", "3s", "3s", "3s"]
  );
  return (

    <Element name='Projects' className='relative w-full h-[125vh] sm:h-screen '>
      <div ref={targetRef}>
        {/* White Line */}
        <motion.div className='w-0 border-[4px] border-solid border-white h-[456px] absolute mx-auto top-0 left-[50%] 2xl:left-[50%]' style={{ height, transition: transitionWhiteLine }}>
        </motion.div>
      </div>
      <div className="max-w-[1260px] flex items-center justify-center mx-auto absolute sm:overflow-hidden w-full top-28 sm:top-16 md:top-20 left-1/2 -translate-x-1/2 " >
        <Carousel />
      </div>
    </Element >
  )
}

export default Project