import React from 'react'
import { useRef } from 'react'
import { useScroll, useTransform ,motion} from 'framer-motion'
const Projectandabout = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const border = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <div  className='h-screen' ref={targetRef}>
        <motion.div className='line w-0 border-[4px] border-solid border-white h-screen z-10 sticky mx-auto top-0 sm:left-[50%]' style={{height}}>
          <motion.div className='relative w-24 lg:w-64 border-t-8 border-l-8 rounded-t-lg h-28 top-1/4 left-[-6rem] lg:left-[-16rem]'  style={{border}}>
          </motion.div>
          <div className='relative w-24 lg:w-64 flex items-center justify-center text-2xl rounded-xl h-16 lg:h-28 top-1/4 left-[-9rem] lg:left-[-24rem] text-center font-Kanit bg-white  bg-opacity-25   backdrop-blur-sm'>
              Project
          </div>
          <div className='relative w-24 text-center flex items-center justify-center text-2xl rounded-xl h-16 lg:w-64 lg:h-28 top-1/3 left-[3rem] lg:left-[8rem] font-Kanit bg-white  bg-opacity-25   backdrop-blur-sm '>
              About
          </div>
          <div className='relative w-24 border-b-8 border-r-8 rounded-b-lg lg:w-64 h-28 top-1/3 left-1/2'>
          </div>
        </motion.div>
    </div>
  )
}

export default Projectandabout
