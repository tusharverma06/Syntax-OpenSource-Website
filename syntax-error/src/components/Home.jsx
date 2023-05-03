import backgroundImage from '../assets/images/BackgroundImg.svg'
import NavBar from './NavBar'
import homePlanet from '../assets/images/homeplanet.png'
import earth from '../assets/images/earth.png' 
import moon from '../assets/images/moon.png'
import { Element } from 'react-scroll'
const Home = () => {
 
  return (
    <Element name="Home" className='relative flex flex-col items-center justify-center h-screen bg-center bg-cover'
    style={{backgroundImage: `url(${backgroundImage})`}}> 
      <NavBar/>
      <img src={homePlanet} alt="homeplanet"  className='absolute -bottom-1/4 lg:-bottom-3/4 '/>
      <img src={earth} alt="homeplanet"  className='absolute left-10 top-1/2 '/>
      <img src={moon} alt="homeplanet"  className='absolute right-10 lg:right-16 top-1/2 '/>
      <div className='absolute p-2 text-4xl uppercase border-4 border-white lg:text-8xl lg:p-4'>
        Syntax Erreur
      </div>
    </Element>
  )
}

export default Home