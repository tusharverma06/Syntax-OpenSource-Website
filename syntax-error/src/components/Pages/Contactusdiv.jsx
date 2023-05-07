import React from 'react'
import { Element } from "react-scroll";

const Contactusdiv = () => {
  return (
    <Element name="Contact">
      <div className='relative flex items-center justify-center h-screen '>
              {/* White line */}
              <div className='w-0 border-[0.375rem] h-[45%] border-solid border-white  absolute top-0 z-[-1]  mx-auto  sm:left-[50%]'>
              </div>
              {/* Contact us div */}
              <div className='px-10 text-lg tracking-wider bg-white bg-opacity-25 rounded-md backdrop-blur-sm py-7 lg:text-4xl font-Kanit'>
                  CONTACT US 
              </div>
              {/* White line */}
              <div className='w-0 border-[0.375rem] h-[45%] border-solid border-white  absolute bottom-0 z-[-1]  mx-auto  sm:left-[50%]'>
              </div>
      </div>
    </Element>
  )
}

export default Contactusdiv
