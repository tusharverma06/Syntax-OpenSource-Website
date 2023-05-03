import React from 'react'

const Marquee = () => {
  return (
    <div className='absolute top-0'>
     <marquee style={{height: "100vh"}} direction="up" behavior="scroll" scrollamount="12" loop="infinite" >
        <p   style={{writingMode: "vertical-lr"}} className='text-2xl uppercase lg:text-6xl font-Kanit'>Web Development</p>
        <p   style={{writingMode: "vertical-lr"}}  className='mt-3 text-2xl uppercase lg:text-6xl font-Kanit'>App Development</p>
     </marquee>
    </div>
  )
}

export default Marquee
