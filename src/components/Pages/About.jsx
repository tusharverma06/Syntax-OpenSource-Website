import React, { memo, useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion'
import { Element } from "react-scroll";


// import Navbar2 from "./Navbar2";
const About = memo(() => {
  // used for rotation of planet in framer motion instead of uing state
  //   const [rotate, cycleRotate] = useCycle(0,360);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.8], ["0vh", "120vh"])

// TRansition to make it better(Line)
  const transitionWhiteLine = useTransform(
    scrollYProgress,
    [0, 0.12, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40],
    ["3s", "3s", "3s", "3s", "3s", "3s", "3s", "3s"]
  );



  return (
    <>
      <Element name="About" className="relative" >
        {/* White line */}
          {/* White line */}
          {/* <motion.div className='w-0 border-[2px] h-[30%] xl:h-[17.5%]   border-solid border-white  absolute top-0 z-[1]  mx-auto  left-[50%]' style={{ height: height, transition: transitionWhiteLine,animationDelay:"10000ms" }}>
        </motion.div> */}
        <motion.div className="">
          <motion.div className="container flex flex-col items-center justify-around gap-10 p-4 mx-auto">
            <br />
            <br />

            <section className="flex flex-col justify-center sm:flex sm:flex-row sm:justify-between  pt-10 sm:pt-0   text-white rounded-lg backdrop-blur-sm gap-8 sm:gap-0  bg-opacity-80 bg-[rgba(43,43,43,0.26)] sm:w-[85%] w-full z-10 ">
              <div className=" sm:w-[500px] sm:h-[212px] sm:flex sm:items-center sm:justify-start sm:px-16">
                {" "}
                <h1 className="px-6 mt-2 text-5xl text-center sm:text-5xl sm:mt-5 font-Kanit sm:text-left">About</h1>
              </div>
              <div className="bg-[#101010] px-6 pb-2  pt-5 sm:pr-0 sm:w-[720px]" >
                <p className=" leading-7  sm:px-[40px] text-lg">
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium ut incidunt aliquam tempora iste nisi illo?
                  Dignissimos dolorem et earum culpa beatae possimus neque odit
                  voluptatum, nobis aliquam saepe vitae recusandae consectetur
                  pariatur obcaecati, necessitatibus quod alias eligendi iste
                  mollitia. Reprehenderit quaerat icabo in amet saepe ut
                  aliquam ab corporis!
                </p>
              </div>
            </section>
            <section className="backdrop-blur-sm text-white flex flex-col justify-center sm:flex sm:flex-row sm:justify-between gap-8  bg-opacity-80  pt-[10px] sm:w-[85%] w-full pb-[20px] sm:py-0 rounded-lg  bg-[rgba(43,43,43,0.26)] z-10">
              <div className=" sm:w-[500px] sm:h-[212px] sm:flex sm:items-center sm:justify-start sm:px-16">
                <h1 className="px-6 mt-5 text-5xl text-center sm:text-left sm:text-5xl font-Kanit whitespace-nowrap">
                  What we do
                </h1>
              </div>

              <div className="bg-[#101010] w-full pt-5 sm:pr-3 sm:w-[720px] ">
                <p className=" leading-7 px-6 sm:px-[40px] lg:pl-16 lg:pb-4 text-lg">
                  {" "}
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Praesentium ut incidunt aliquam tempora iste nisi illo?
                  Dignissimos dolorem et earum culpa beatae possimus neque odit
                  voluptatum, nobis aliquam saepe vitae recusandae consectetur
                  pariatur obcaecati, necessitatibus quod alias eligendi iste
                  mollitia. Reprehenderit quaerat explicabo in amet saepe ut
                  aliquam ab corporis!
                </p>
              </div>
            </section>
          </motion.div>
        </motion.div>
        
      </Element>
    </>
  );
});

export default About;
