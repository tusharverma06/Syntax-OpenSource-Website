import React, { useRef } from "react";
import aboutprofile from "../../assets/images/aboutprofile.png";
import aboutprofile2 from "../../assets/images/aboutprofile2.png";
import aboutprofile3 from "../../assets/images/aboutprofile3.png";
import abouthr from '../../assets/images/abouthr.svg'
import abouthr2 from '../../assets/images/abouthr2.svg'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Element } from "react-scroll";
// import Navbar2 from "./Navbar2";
const About = () => {
  // used for rotation of planet in framer motion instead of uing state
  //   const [rotate, cycleRotate] = useCycle(0,360);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  // const height = useTransform(scrollYProgress, [0, 0.4], ["0%", `30%`])
  return (
    <>
      <Element name="About" className="relative" >
        {/* White line */}
        {/* <motion.div className='w-0 border-[0.375rem] h-[30%] xl:h-[17.5%]   border-solid border-white  absolute top-0 z-10  mx-auto  sm:left-[50%]'>
        </motion.div> */}
        <motion.div className="">
          <motion.div className="container flex flex-col items-center justify-around gap-10 p-4 mx-auto">
            <br />
            <br />

            <section className="flex flex-col justify-center sm:flex sm:flex-row sm:justify-between  pt-10 sm:pt-0   text-white rounded-lg backdrop-blur-sm gap-24 sm:gap-0  bg-opacity-80 bg-[rgba(43,43,43,0.26)] sm:w-[85%] w-full z-10 ">
              <div className=" h-0 w-0 sm:w-[500px] sm:h-[212px] sm:flex sm:items-center sm:justify-center">
                {" "}
                <h1 className="px-6 mt-2 text-6xl sm:mt-5 font-Kanit">About</h1>
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
            <section className="backdrop-blur-sm text-white flex flex-col justify-center sm:flex sm:flex-row sm:justify-between gap-0  bg-opacity-80 pl-0 pt-[10px] sm:w-[85%] w-full pb-[20px] sm:py-0 rounded-lg  bg-[rgba(43,43,43,0.26)] z-10">
              <div className=" h-28 w-44 sm:w-[500px] sm:h-[212px] sm:flex sm:items-center sm:justify-center">
                <h1 className="px-6 mt-5 text-5xl font-Kanit whitespace-nowrap">
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
        <div className="flex flex-col gap-4 mb bg-[#0B0B0B] bg-fixed bg-center bg-no-repeat bg-cover min-h-[100vh]">
          <div className="z-10 flex flex-col gap-10 pt-10 pl-12 mt-8 ml-5 text-white rounded-lg sm:pl-32 sm:flex-row">
            <div>
              <img src={aboutprofile} className="w-[60vw] sm:w-[100vw]" alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-Kanit text-[40px] sm:text-[55px] font-semibold">
                ROHIT GHOSH
              </h1>
              <p className="text-xl leading-6">FOUNDER & CEO</p>
              <p className="w-4/5 mt-10 leading-8 text-md sm:text-xl font-Montserrat">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                blanditiis deserunt exercitationem totam laudantium cum
                consequuntur veritatis saepe consectetur nam error mollitia
                perferendis esse, reprehenderit hic soluta suscipit amet
                possimus corporis officia facilis impedit velit. Iusto
                cupiditate veniam est, soluta dolorem, dolores nisi animi unde
                ex amet possimus sed? Tempore.
              </p>
            </div>
          </div>
          <img src={abouthr} className="w-full mt-8" alt="" />
          <div className="flex flex-col gap-10 pt-10 pl-12 mt-8 ml-5 text-white rounded-lg sm:pl-32 sm:flex-row ">
            <div>
              <img src={aboutprofile2} className="w-[60vw] sm:w-[100vw]" alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-Kanit text-[36px] sm:text-[55px] font-semibold">
                VASUDHA SINGH
              </h1>
              <p className="text-xl leading-6">FOUNDER & CEO</p>
              <p className="w-4/5 mt-10 leading-8 text-md sm:text-xl font-Montserrat">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                blanditiis deserunt exercitationem totam laudantium cum
                consequuntur veritatis saepe consectetur nam error mollitia
                perferendis esse, reprehenderit hic soluta suscipit amet
                possimus corporis officia facilis impedit velit. Iusto
                cupiditate veniam est, soluta dolorem, dolores nisi animi unde
                ex amet possimus sed? Tempore.
              </p>
            </div>
          </div>
          <img src={abouthr2} className="w-full mt-8" alt="" />

          <div className="flex flex-col gap-10 pt-10 pb-4 pl-12 mt-8 ml-5 text-white rounded-lg sm:pl-32 sm:flex-row ">
            <div>
              <img src={aboutprofile3} className="w-[60vw] sm:w-[100vw]" alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-Kanit text-[40px] sm:text-[55px] font-semibold">
                ARYA SAWANT
              </h1>
              <p className="text-xl leading-6">FOUNDER & CEO</p>
              <p className="w-4/5 mt-10 leading-8 text-md sm:text-xl font-Montserrat">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                blanditiis deserunt exercitationem totam laudantium cum
                consequuntur veritatis saepe consectetur nam error mollitia
                perferendis esse, reprehenderit hic soluta suscipit amet
                possimus corporis officia facilis impedit velit. Iusto
                cupiditate veniam est, soluta dolorem, dolores nisi animi unde
                ex amet possimus sed? Tempore.
              </p>
            </div>
          </div>
        </div>

        {/* <motion.div className=" h-[70vh] flex justify-end overflow-x-hidden">
<motion.img 
src={aboutplanet2} 
alt=""

className="relative  top-[-120px] left-[170px] "

   />
        </motion.div> */}
      </Element>
    </>
  );
};

export default About;
