import React from 'react'

const Marquee = () => {
  return (
    <div className='fixed top-0 text-[#969B9F] h-full' >
     <marquee style={{height: "100%"}} direction="up" behavior="scroll" scrollamount="12" loop="infinite" >
        <p   style={{writingMode: "vertical-lr"}} className='text-2xl uppercase lg:text-4xl font-Kanit'>Web Development</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-4xl font-Kanit'>App Development</p>&nbsp;
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-4xl font-Kanit'>IT Consultant</p>&nbsp;
     </marquee>
    </div>
  )
}

export default Marquee
