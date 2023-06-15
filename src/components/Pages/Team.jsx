import React, { useRef } from 'react'
import abouthr from '../../assets/images/abouthr.svg'
import abouthr2 from '../../assets/images/abouthr2.svg'
import Card from "../Card/Card";
import { Element } from 'react-scroll';
const Team = () => {


  // For Left and Right in Card Section

  const contentRef = useRef()


  const scrollLeft = () => {

    if (contentRef.current) {

      contentRef.current.scrollLeft -= 300

    }

  }


  const scrollRight = () => {

    if (contentRef.current) {

      contentRef.current.scrollLeft += 300

    }

  }

  return (
    <div >
      <div  className="flex flex-col  gap-4 mb justify-center bg-[#0B0B0B] bg-fixed bg-center bg-no-repeat bg-cover sm:min-h-[104vh] max-h-[120vh] 3xl:min-h-[50vh]   min-h-[100vh]  z-10 relative">
        <p className="flex items-center justify-center pt-8 text-5xl font-bold font-Kanit ">THE TEAM</p>
       <Element name='Team'>
        <img src={abouthr} className="w-full mt-8" alt="" />

       </Element>



        <div ref={contentRef}
          className="flex flex-row items-center justify-start p-8 overflow-x-auto scrollbar-hide scroll-smooth ">
          <div >
            <Card />
          </div>
        </div>

        <div className="relative flex items-center justify-center gap-8 p-2 overflow-x-auto">
          <button onClick={scrollLeft} className="text-2xl opacity-60 hover:opacity-100 duration-150 hover:scale-110"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/sort-left.png" alt="" /></button>
          <button onClick={scrollRight} className="text-2xl opacity-60  hover:opacity-100 duration-150 hover:scale-110"><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/sort-right.png" alt="" /></button>
        </div>

        <img src={abouthr2} className="w-full mt-8 mb-10" alt="" />


      </div>
    </div>
  )
}

export default Team