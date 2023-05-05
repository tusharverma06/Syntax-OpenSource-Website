import About from './components/About'
import {motion} from 'framer-motion'
import Project from './components/Project'
import Home from './components/Home'
import Marquee from './components/Marquee'
function App() {
  return (
    <div className='text-white'>
      <Home />
      <Project />
      <About/>
      <Marquee/>
    </div>
  )
}

export default App
