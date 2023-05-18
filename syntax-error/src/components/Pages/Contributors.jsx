import React from 'react'
import Earth from '../../assets/images/earth.png'
import Background from '../../assets/images/BackgroundImg.svg'
import ContributorBG from '../../assets/images/contributorBG.svg'
import { Element } from 'react-scroll'
import Participant from '../Contributors/Participant'
import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform ,motion} from 'framer-motion'
import { contributors } from '../Contributors/contributorsData'
const Contributors = () => {
  let width;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }
  const [windowWidth, setWindowWidth] = useState(width);

useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
  }, [windowWidth]);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
   const height = useTransform(scrollYProgress, [0, 0.4], ["0%", `${windowWidth<600? '25%': '12.5%'}`])
  const height2 = useTransform(scrollYProgress, [0.2, 0.4], ["0%",  `${windowWidth<600? '25%': '13.5%'}`])
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30 ,0.35,0.40],
    ["0.5s", "0.5s", "0.5s", "0.5s","0.5s","0.5s" ,"0.5s","0.5s"]
  );
 
  return (
    <Element name='Contributors'>
      <div ref={targetRef}  className='relative flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-hidden' >

        {/* White line */}
        <motion.div className='w-0 border-[0.375rem] h-[30%] xl:h-[17.5%]   border-solid border-white  absolute top-0 z-10  mx-auto  sm:left-[50%]' style={{height: height, transition: transitionWhiteLine}}>
        </motion.div>

        {/* Main circle containing ids */}
        <div
          className="w-[21rem] h-[21rem] sm:w-[30.375rem] sm:h-[30rem] sm:px-8 px-8 py-10  border-[0.25rem] xl:px-14 sm:py-16 2xl:px-10 2xl:py-28 border-solid border-white mx-auto rounded-full z-30 flex flex-wrap items-center justify-center gap-4 sm:gap-10 relative sm:max-w-[40rem] "
        >
          {contributors.map(contributor => <Participant
            key={contributor.id}
            link={contributor.link}
            icon={contributor.icon}
            title={contributor.title}
          />)}
        </div>

      {/* Earth */}
      {/* <div>
        <img src={Earth} alt="" className="absolute w-[66.625rem] h-[56.4375rem] -left-[29.125rem] -bottom-[300px] rotate-6" />
      </div> */}

      {/* White line */}
      <motion.div className='w-0 border-[0.375rem] h-[30%] xl:h-[17.5%]  border-solid border-white  absolute bottom-0 z-10  mx-auto  sm:left-[50%]' style={{height: height2, transition: transitionWhiteLine}}>
      </motion.div>
      </div>

    </Element>
  )
}

export default Contributors