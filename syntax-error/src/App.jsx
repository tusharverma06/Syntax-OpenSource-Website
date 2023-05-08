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
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import homePlanet from './assets/images/homeplanet.png'
import earth from './assets/images/earth.png'
import moon from './assets/images/moon.svg'

function App() {
  // note 0 to 0.20 is the range of scrollYProgress for first two pages
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  
  // scale animation for moon
  const scale = useTransform(
    scrollYProgress,
    [0.1,0.12,0.15, 0.20],
    [1,2, 5.2, 8]
  );
  // animate x for moon
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30],
    ["0vw", "-55vw", "-70vw", "-85vw","-75vw","-70vw"]
  );

  // animate y for moon
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30],
    ["0vh", "80vh", "110vh", "160vh","250vh","260vh"]
  );
  // animation for homeplanet
  const yHomeplanet = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30],
    ["0vh", "-10vh", "-30vh", "-40vh","50vh","40vh" ]
  );
  // rotate animation for homeplanet
  const rotate = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30 ],
    ["0deg", "90deg", "100deg", "180deg","270deg","360deg"]
  );
  // y animation for earth
  const yEarth = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20 ,0.25,0.30],
    ["0vh", "10vh", "30vh", "80vh","150vh","220vh"]
  );
  // x animation for earth
  const xEarth = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20,0.25,0.30 ],
    ["0vw", "-1vw", "-2.5vw", "-4vw","-4vw","-4vw" ]
  );

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
    <div className='text-white ' ref={targetRef}>
      <Home />
      <motion.img src={homePlanet} alt="homeplanet"  className='absolute -bottom-1/3 lg:-bottom-[90%] lg:w-2/3 -z-10 lg:left-[20%]' style={{rotate,y:yHomeplanet}}/>
      <motion.img src={earth} alt="earth"  className='absolute left-14 top-1/2 -z-10' style={{
        y:yEarth,
        x:xEarth,
      }}/>
      <motion.img src={moon} alt="moon"  className='absolute right-10 lg:right-16 top-1/2 -z-10' style={{scale,x,y}}/>
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
