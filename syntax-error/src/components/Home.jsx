import backgroundImage from '../assets/images/BackgroundImg.svg'
import NavBar from './NavBar'
import homePlanet from '../assets/images/homeplanet.png'
import earth from '../assets/images/earth.png' 
import moon from '../assets/images/moon.svg'
import { Element } from 'react-scroll'
const Home = () => {
 
  return (
    <Element name="Home" className='relative flex flex-col items-center justify-center h-screen bg-center bg-cover'> 
      <NavBar/>
      <img src={homePlanet} alt="homeplanet"  className='absolute -bottom-2/4 lg:-bottom-[90%] '/>
      <img src={earth} alt="homeplanet"  className='absolute left-10 top-1/2 '/>
      <img src={moon} alt="homeplanet"  className='absolute right-10 lg:right-16 top-1/2 '/>
      <div className='absolute p-2 text-4xl uppercase cursor-default border-white  lg:text-8xl lg:p-4 text-white font-Kanit border-[10px] bottom-72 font-bold'>
        Syntax Erreur
      </div>
    </Element>
  )
}

export default Home