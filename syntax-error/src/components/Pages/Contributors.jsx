import React from 'react'
import Earth from '../../assets/images/earth.png'
import Background from '../../assets/images/BackgroundImg.svg'
import ContributorBG from '../../assets/images/contributorBG.svg'
import { Element } from 'react-scroll'
import Participant from '../Contributors/Participant'
import { motion } from 'framer-motion'
const Contributors = () => {
  const contributors = [
    {
      icon: 'https://avatars.githubusercontent.com/u/117444846?v=4',
      title: '@tusharverma06',
      link: 'https://github.com/tusharverma06'
    },
    {
      icon: 'https://avatars.githubusercontent.com/u/73684596?v=4',
      title: '@sahil-develops',
      link: 'https://github.com/sahil-develops'
    },
    {
      icon: 'https://avatars.githubusercontent.com/u/106579572?v=4',
      title: '@MudassirKhan2',
      link: 'https://github.com/MudassirKhan2'
    },
    {
      icon: 'https://avatars.githubusercontent.com/u/76222238?v=4',
      title: '@itsApex',
      link: 'https://github.com/itsApex'
    },
    {
      icon: 'https://avatars.githubusercontent.com/u/102750772?v=4',
      title: '@RohitGhosh7703',
      link: 'https://github.com/RohitGhosh7703'
    }
  ]
  return (
    <Element name='Contributors'>
      <div className='relative flex items-center justify-center w-full min-h-screen overflow-y-hidden' style={{ background: `url(${Background})`, backgroundSize: 'cover' }}>

        {/* White line */}
        <div className='w-0 border-[0.375rem] h-[16%] border-solid border-white  absolute top-0 z-[1]  mx-auto  sm:left-[50%]'>
        </div>

        {/* Main circle containing ids */}
        <div
          className="w-[31.5rem] h-[31rem] border-[0.25rem] px-20 py-20 border-solid border-white mx-auto rounded-full z-[12] flex flex-wrap items-center justify-center gap-6 relative"
        >
          {contributors.map(contributor => <Participant
            link={contributor.link}
            icon={contributor.icon}
            title={contributor.title}
          />)}
        </div>
      </div>

      {/* Earth */}
      {/* <div>
        <img src={Earth} alt="" className="absolute w-[66.625rem] h-[56.4375rem] -left-[29.125rem] -bottom-[300px] rotate-6" />
      </div> */}

      {/* White line */}
      {/* <div className='w-0 border-[0.375rem] h-[16%] border-solid border-white  absolute top-10 z-[1]  mx-auto  sm:left-[50%]'>
        </div> */}

    </Element>
  )
}

export default Contributors