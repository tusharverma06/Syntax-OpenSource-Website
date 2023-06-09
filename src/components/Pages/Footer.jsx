import React from 'react'
import SElogo from '../../assets/images/SElogo.svg'
import uparrow from '../../assets/images/uparrow.svg'
const Footer = () => {
  return (
    <div>
         <div className="relative z-10 flex flex-col px-4 md:flex-row justify-center items-center gap-16 bg-[#161616]  pt-4 pb-4 pr-5">
     <div className='sm:block hidden'>
     <img src={uparrow} />
     </div>
        <div className='flex items-center '>
     
          <p className="text-lg font-light text-left font-Kanit ">
           Based in Mumbai, India
          </p>

        </div>
        <div className="mt-1 ml-5">
          <h1 className="whitespace-nowrap font-extrabold font-Kanit uppercase flex justify-center text-[28px] ">
        SYNTAX  <img src={SElogo} width="50px" /> ERREUR
            </h1>

        </div>
        
        <div>
          <p className="text-lg font-light text-left font-Kanit ">
         Software Development Company © 2023
          </p>

        </div>
      </div>
    </div>
  )
}

export default Footer