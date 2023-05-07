import About from './components/Pages/About'
import { motion } from 'framer-motion'
import Project from './components/Pages/Project'
import Home from './components/Pages/Home'
import Marquee from './components/Marquee/Marquee'
import { useEffect } from 'react'
import Contactus from './components/Pages/Contactus'
import Projectandabout from './components/Project/Projectandabout'
import Contributors from './components/Pages/Contributors'
import Contactusdiv from './components/Pages/Contactusdiv'

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
      <Projectandabout />
      <div >
        {/* White Line */}
        <div className='line w-0 border-[4px] border-solid border-white h-screen -z-10 sticky mx-auto top-0 sm:left-[50%]'>
        </div>
        <Project />
        <About />
        <Contributors />
        <Contactusdiv/>
        <Contactus/>
      </div>
      <Marquee />
      
    </div>
  )
}

export default App
