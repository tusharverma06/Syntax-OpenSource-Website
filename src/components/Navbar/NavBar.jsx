import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion'
import { useScroll, useTransform } from 'framer-motion'
import { forwardRef } from 'react';


const NavBar = forwardRef((props, ref, windowWidth) => {
  const [showMediaIcons, setShowMediaIcons] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }, [sidebarOpen]);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // const handleToggle = () => {
  //   setShowMediaIcons(!showMediaIcons)

  // }
  const handleLinkClick = () => {
    setSidebarOpen(true)
  };
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.10],
    [0, 10, 2]
  );


  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    setSidebarOpen(false)
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";


    } else {


      document.getElementById("navbar").style.top = "-300px";
      document.getElementById("navbar").style.transition = "0.8s ease-in-out";
    }
    prevScrollpos = currentScrollPos;
  }
  return (
    <div className={`${sidebarOpen ? 'touch-none' : ''} w-full`}>
      <div id='navbar'
        className='flex justify-between lg:justify- items-center w-full py-3 sm:py-8 px-8 lg:w-[90%] xl:w-[70%] lg:mt-12 fixed top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 text-white font-Kanit lg:bg-[rgba(43,43,43,0.26)] lg:bg-opacity-20 backdrop-blur-md rounded-lg h-20 sm:h-32 z-50 2xl:max-w-7xl'        >
        <div>
          <Link activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}>
            <motion.p className=' w-44 h-10 flex items-center justify-center sm:h-12 pt-1 mr-8 text-xl text-center uppercase border-[3.16px] border-white cursor-pointer lg:text-3xl lg:w-64 max-w-none text-white font-Kanit font-bold tracking-wide' style={{ opacity: windowWidth > 700 ? opacity : '1' }}   >
              <span className='gradient-text whitespace-nowrap'
              >Syntax erreur</span>
            </motion.p>
          </Link>
        </div>
        {
          showMediaIcons ? <img src="https://img.icons8.com/ios/28/ffffff/menu--v1.png" className='block w-6 mb-2 cursor-pointer lg:hidden' onClick={handleToggle} alt="" /> : " "
        }

        <div id='linkSpacing'
          className={`space-x-7 text-xl flex flex-col lg:items-center justify-center lg:justify-evenly gap-5 absolute bg-slate-800 backdrop-blur-xl lg:bg-none lg:bg-opacity-0 lg:backdrop-blur-none lg:relative lg:flex lg:p-4 lg:rounded-md top-0 right-0 w-9/12 h-screen z-40 lg:flex-row lg:h-full ${sidebarOpen ? 'block' : 'hidden'
            }`}
        >

          <img width="30" height="30" src="https://img.icons8.com/ios/30/FFFFFF/multiply-2.png" className='absolute block text-white cursor-pointer right-8 top-12 Cross lg:hidden' onClick={() => handleToggle()} />
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
            to="Team"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000} className={`tracking-wider  cursor-pointer group`} onClick={handleLinkClick}>
            Team
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
            duration={500} className={`tracking-wider  cursor-pointer gradient-link px-4 py-2 border-2 hover:text-black hover:bg-white transition-all duration-700 border-white rounded-md w-36 whitespace-nowrap `} onClick={handleLinkClick}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>

  )
}
)

export default NavBar