import { Element } from 'react-scroll'
import { useRef } from 'react'
import { useScroll, useTransform ,motion} from 'framer-motion'
const Home = () => {
  const targetRef1 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef1,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20],
    [1, 0.5, 0, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20],
    ["0vh", "-10vh", "-25vh", "-25vh"]
  );
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20],
    ["0vw", "-5vw", "-30vw", "-45vw"]
  );
  const scale = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.15, 0.20],
    [1, 0.8, 0.6, 0.4]
  );


  return (
    <Element name="Home"  > 
      <div className='relative flex flex-col items-center justify-center h-screen bg-center bg-cover' ref={targetRef1}>        
       <motion.div className='absolute '  >
        <motion.div className='gradient-text hover:bg-black hover:transition hover:border-none p-2 text-4xl uppercase cursor-default border-white  lg:text-8xl lg:p-4 text-white font-Kanit border-[10px] bottom-72 font-bold'
        style={{y,x,scale,opacity}}
        >
            Syntax Erreur
          </motion.div>
       </motion.div>
      </div>
    </Element>
  )
}

export default Home