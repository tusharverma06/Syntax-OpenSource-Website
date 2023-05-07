import About from './components/About'
import {motion} from 'framer-motion'
import Project from './components/Project'
import Home from './components/Home'
import Marquee from './components/Marquee'
import { useEffect } from 'react'
import Contactus from './components/Contactus'

function App() {
  return (
    <div className='text-white'>
      <Home />
      <div className='relative'>
        {/* White Line */}
        <div className='line w-0 border-[4px] border-solid border-white h-screen -z-10 sticky mx-auto top-0 sm:left-[50%]'>
        </div>
        <Project />
        <About />
        <Contactus/>
      </div>
      <Marquee />
    </div>
  )
}

export default App
