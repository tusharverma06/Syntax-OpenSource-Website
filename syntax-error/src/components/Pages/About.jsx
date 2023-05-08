import React from "react";


import aboutprofile from "../../assets/images/aboutprofile.png";
import aboutprofile2 from "../../assets/images/aboutprofile2.png";
import aboutprofile3 from "../../assets/images/aboutprofile3.png";
import abouthr from '../../assets/images/abouthr.svg'
import abouthr2 from '../../assets/images/abouthr2.svg'
import {motion} from 'framer-motion'
import { Element } from "react-scroll";
// import Navbar2 from "./Navbar2";
const About = () => {
// used for rotation of planet in framer motion instead of uing state
    //   const [rotate, cycleRotate] = useCycle(0,360);

  return (
    <>
      <Element name="About" className="" >
        <motion.div className="">
          {/* <motion.img
            src={aboutplanet}
            alt=""
            style={{maxWidth:'900px'}}
            animate={{ rotate }}
            transition={{ ease: "linear", duration: "130", repeat: "Infinity" }}
            onLoad={cycleRotate}
            className="absolute top-[-375px] left-[-247px]"
          />
          <img src={aboutearth} alt="" className="absolute top-36" /> */}
          <motion.div className="container flex flex-col items-center justify-around gap-10 p-4 mx-auto">
          {/* <Navbar  /> */}
<br />
<br />

            <section className="flex flex-col justify-center sm:flex sm:flex-row sm:justify-center  pt-10 pl-12 text-white rounded-lg backdrop-blur-sm gap-24 sm:gap-60 bg-opacity-80 sm:w-[85%] w-full  ">
              <div className= " h-0 w-0 sm:w-[500px] sm:h-[212px]">
                {" "}
                <h1 className="mt-5 text-5xl font-Kanit">About</h1>
              </div>
              <div className="bg-[#101010] pt-5 sm:pr-0 " >
                <p className=" leading-7 pl-10 pr-2  sm:pr-[40px] sm:pl-[40px] text-lg">
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
            <section className="backdrop-blur-sm text-white flex flex-col justify-center sm:flex sm:flex-row sm:justify-center gap-32 bg-opacity-80 pl-12 pt-[10px] sm:w-[85%] w-full pb-[20px] rounded-lg  ">
              <div className="h-0 w-[200px] sm:w-[500px] sm:h-[212px]">
                <h1 className="mt-5 text-5xl font-Kanit whitespace-nowrap">
                  What we do
                </h1>
              </div>

              <div className="bg-[#101010] pt-5 pr-3 ">
                <p className=" leading-7 pl-[40px] pr-[40px] text-lg">
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
        <div className="flex flex-col gap-4 mb bg-[#0B0B0B] bg-fixed ">
          <div className="flex gap-10 pt-10 pl-32 mt-8 ml-5 text-white rounded-lg ">
            <div>
              <img src={aboutprofile} className="w-[100vw]" alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-Kanit text-[55px] font-semibold">
                ROHIT GHOSH
              </h1>
              <p className="text-xl leading-6">FOUNDER & CEO</p>
              <p className="w-4/5 mt-10 text-xl leading-8 font-Montserrat">
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
          <div className="flex gap-10 pt-10 pl-32 mt-8 ml-5 text-white rounded-lg ">
            <div>
              <img src={aboutprofile2} className="w-[100vw]" alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-Kanit text-[55px] font-semibold">
              VASUDHA SINGH
              </h1>
              <p className="text-xl leading-6">FOUNDER & CEO</p>
              <p className="w-4/5 mt-10 text-xl leading-8 font-Montserrat">
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

          <div className="flex gap-10 pt-10 pl-32 mt-8 mb-8 ml-5 text-white rounded-lg ">
            <div>
              <img src={aboutprofile3} className="w-[100vw]" alt="" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-Kanit text-[55px] font-semibold">
             ARYA SAWANT
              </h1>
              <p className="text-xl leading-6">FOUNDER & CEO</p>
              <p className="w-4/5 mt-10 text-xl leading-8 font-Montserrat">
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
