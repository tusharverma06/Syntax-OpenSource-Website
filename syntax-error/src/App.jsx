import About from './components/About'
import { motion } from 'framer-motion'
import Project from './components/Project'
import Home from './components/Home'
import Marquee from './components/Marquee'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    window.addEventListener("scroll", function() {
      const myDiv = document.querySelector(".line");
      const position = myDiv.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
    
      if (position < screenHeight - 100) {
        myDiv.classList.add("show");
      }
    });  

  },[window.innerHeight])
  return (
    <div className='text-white'>
      <Home />
      <div className='relative'>
        {/* White Line */}
        <div className='line w-0 border-[4px] border-solid border-white h-screen -z-10 sticky mx-auto top-0 sm:left-[50%]'>
        </div>
        <Project />
        <About />
      </div>
      <Marquee />
    </div>
  )
}

export default App
