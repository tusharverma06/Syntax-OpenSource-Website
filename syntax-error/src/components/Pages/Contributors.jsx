import React from 'react'
import Earth from '../../assets/images/earth.png'
import Background from '../../assets/images/BackgroundImg.svg'
import ContributorBG from '../../assets/images/contributorBG.svg'
import { Element } from 'react-scroll'
import Participant from '../Contributors/Participant'
import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform ,motion} from 'framer-motion'
const Contributors = () => {
  let width;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }
  const [windowWidth, setWindowWidth] = useState(width);

useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
  }, [windowWidth]);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.3], ["0%", `${windowWidth<600? '30%': '17.5%'}`])
  const height2 = useTransform(scrollYProgress, [0.2, 0.4], ["0%",  `${windowWidth<600? '30%': '17.5%'}`])
  const contributors = [
    {
      id: 1,
      icon: 'https://avatars.githubusercontent.com/u/117444846?v=4',
      title: '@tusharverma06',
      link: 'https://github.com/tusharverma06'
    },
    {
      id: 2,
      icon: 'https://avatars.githubusercontent.com/u/73684596?v=4',
      title: '@sahil-develops',
      link: 'https://github.com/sahil-develops'
    },
    {
      id: 3,
      icon: 'https://avatars.githubusercontent.com/u/106579572?v=4',
      title: '@MudassirKhan2',
      link: 'https://github.com/MudassirKhan2'
    },
    {
      id: 4,
      icon: 'https://avatars.githubusercontent.com/u/76222238?v=4',
      title: '@itsApex',
      link: 'https://github.com/itsApex'
    },
    {
      id: 5,
      icon: 'https://avatars.githubusercontent.com/u/102750772?v=4',
      title: '@RohitGhosh7703',
      link: 'https://github.com/RohitGhosh7703'
    }
  ]
  return (
    <Element name='Contributors'>
      <div ref={targetRef}  className='relative flex items-center justify-center w-full h-screen overflow-x-hidden overflow-y-hidden' style={{ background: `url(${Background})`, backgroundSize: 'cover' }}>

        {/* White line */}
        <motion.div className='w-0 border-[0.375rem] h-[30%] xl:h-[17.5%]   border-solid border-white  absolute top-0 z-10  mx-auto  sm:left-[50%]' style={{height: height}}>
        </motion.div>

        {/* Main circle containing ids */}
        <div
          className="w-[85vw] h-[40%] px-4 py-10 sm:w-[60vw] sm:px-14 xl:w-[30vw] xl:h-[65%] border-[0.25rem] xl:px-10 sm:py-20 border-solid border-white mx-auto rounded-full z-30 flex flex-wrap items-center justify-center gap-6 relative max-w-[25rem] sm:max-w-[40rem] "
        >
          {contributors.map(contributor => <Participant
            key={contributor.id}
            link={contributor.link}
            icon={contributor.icon}
            title={contributor.title}
          />)}
        </div>

      {/* Earth */}
      {/* <div>
        <img src={Earth} alt="" className="absolute w-[66.625rem] h-[56.4375rem] -left-[29.125rem] -bottom-[300px] rotate-6" />
      </div> */}

      {/* White line */}
      <motion.div className='w-0 border-[0.375rem] h-[30%] xl:h-[17.5%]  border-solid border-white  absolute bottom-0 z-10  mx-auto  sm:left-[50%]' style={{height: height2}}>
      </motion.div>
      </div>

    </Element>
  )
}

export default Contributors