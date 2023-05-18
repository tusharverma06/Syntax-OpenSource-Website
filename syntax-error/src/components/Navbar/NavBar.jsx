import React, { useState } from 'react'
import { RiMenuFoldLine } from 'react-icons/ri'
import { GiCrossedBones } from 'react-icons/gi'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { forwardRef } from 'react';


const NavBar = forwardRef((props, ref) => {
  const [showMediaIcons, setShowMediaIcons] = useState(true)
  const handleToggle = () => {
    setShowMediaIcons(!showMediaIcons)

  }
  const handleLinkClick = () => {
    setShowMediaIcons(true)
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(
    scrollYProgress,
    [0,0.5,0.10],
    [0,10,2 ]
  );
  


  return (
    <div className="w-full" ref={ref}>
      <div className='flex justify-between lg:justify-around items-center w-full  py-8 px-2 lg:w-[90%] xl:w-[70%]  lg:mt-12   fixed top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 text-white font-Kanit lg:bg-[rgba(43,43,43,0.26)]  lg:bg-opacity-20    backdrop-blur-md rounded-lg  z-50 '>
        <div>
          <Link activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <motion.p className='gradient-text w-56 h-12 pt-1 mr-8 text-xl text-center uppercase border-[3.16px] border-white cursor-pointer lg:text-3xl lg:w-64 max-w-none text-white font-Kanit font-bold tracking-wide' style={{ opacity } } > <span className='hover:gradient-text ' 
            >Syntax erreur</span>
            </motion.p>
          </Link>
        </div>
        {
          showMediaIcons ? <RiMenuFoldLine className='block text-2xl lg:hidden animate-bounce' onClick={handleToggle} /> : " "
        }

        <div className={`space-x-7  text-xl  flex flex-col lg:items-center justify-center lg:justify-evenly gap-5 absolute bg-white  bg-opacity-5  backdrop-blur-lg  lg:bg-none lg:bg-opacity-0 lg:backdrop-blur-none lg:relative  lg:flex lg:p-4 lg:rounded-md top-0 right-0 w-9/12   h-screen  z-40 lg:flex-row lg:h-fit   ${showMediaIcons ? "hidden" : "block"}`}>

          <GiCrossedBones className='absolute block text-white right-4 top-10 Cross lg:hidden' onClick={() => handleToggle()} />
          <Link activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={2000}
            className={`tracking-wider cursor-pointer bg-transparent group`} onClick={handleLinkClick}>
            Projects
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 navLink"></span>
          </Link>
          <Link activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} className={`tracking-wider  cursor-pointer group`} onClick={handleLinkClick}>
            About
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 navLink"></span>
          </Link>
          <Link activeClass="active"
            to="Contributors"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} className={`tracking-wider cursor-pointer group `} onClick={handleLinkClick}>
            Contributors
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 navLink"></span>
          </Link>
          <Link activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500} className={`tracking-wider  cursor-pointer group h-12 px-4 py-2 border-2 border-white rounded-md w-36 whitespace-nowrap `} onClick={handleLinkClick}>
            Contact Us
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 navLink"></span>
          </Link>
        </div>
      </div>
    </div>

  )
}
)

export default NavBar
