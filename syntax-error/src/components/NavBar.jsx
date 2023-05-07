import React, { useState } from 'react'
import { RiMenuFoldLine } from 'react-icons/ri'
import { GiCrossedBones } from 'react-icons/gi'
import { Link } from 'react-scroll';

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true)
  const handleToggle = () => {
    setShowMediaIcons(!showMediaIcons)

  }
  const handleLinkClick = () => {
    setShowMediaIcons(true)
  };
  return (
    <header className='flex justify-between lg:justify-around items-center w-[100%]  pt-8 pb-8 p-20 lg:w-[70%]  lg:mt-12   fixed top-0 left-0 lg:left-64 text-white font-Kanit lg:bg-black  lg:bg-opacity-20    backdrop-blur-md rounded-lg  z-[20]'>
      <div >
        <Link activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}>
          <p className='gradient-text w-56 h-12 pt-1 mr-8 text-xl text-center uppercase border-2 border-white cursor-pointer lg:text-3xl lg:w-64 max-w-none text-white font-Kanit font-bold tracking-wide' > <span className='hover:gradient-text '>Syntax erreur</span>
          </p>
        </Link>
      </div>
      {
        showMediaIcons ? <RiMenuFoldLine className='block text-2xl lg:hidden animate-bounce' onClick={handleToggle} /> : " "
      }

      <div className={`space-x-7  text-xl  flex flex-col lg:items-center justify-center lg:justify-evenly gap-5 absolute bg-white  bg-opacity-5  backdrop-blur-lg  lg:bg-none lg:bg-opacity-0 lg:backdrop-blur-none lg:relative  lg:flex lg:p-4 lg:rounded-md top-0 right-0 w-9/12   h-screen  z-40 lg:flex-row lg:h-fit   ${showMediaIcons ? "hidden" : "block"}`}>

        <GiCrossedBones className='absolute block text-white right-4 top-10 Cross lg:hidden' onClick={() => handleToggle()} />
        <Link activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className={`tracking-wider cursor-pointer`} onClick={handleLinkClick}>About</Link>
        <Link activeClass="active"
          to="Projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className={`tracking-wider  cursor-pointer`} onClick={handleLinkClick}>Projects</Link>
        <Link activeClass="active"
          to="Contributors"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className={`tracking-wider cursor-pointer `} onClick={handleLinkClick}>Contributors</Link>
        <Link activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} className={`tracking-wider  cursor-pointer`} onClick={handleLinkClick}>
          <span className='whitespace-nowrap pl-8 pr-8 rounded-md pt-2 pb-2 border-2 border-white '> Contact Us </span>
        </Link>

      </div>
    </header>
  )
}

export default NavBar
