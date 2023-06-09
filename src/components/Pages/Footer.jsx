import React from 'react'
import SElogo from '../../assets/images/SElogo.svg'

const Footer = () => {
  return (
    <div>
         <div className="relative z-10 flex flex-col px-4 md:flex-row justify-start  gap-5 bg-[#24272D] bg-opacity-90 pt-4 pb-4 pr-5">
        <div className="mt-1 ml-5">
          <h1 className="whitespace-nowrap font-extrabold font-Kanit uppercase flex justify-center text-[31px] ">
          <img src={SElogo} width="150px"
          />
           </h1>

        </div>
        <div>
          <p className="text-lg font-light text-left font-Kanit ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum .
          </p>

        </div>
      </div>
    </div>
  )
}

export default Footer