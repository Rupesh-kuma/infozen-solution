import About from './About/about'
import './App.css'
import Navbar from './component/header'
import HeroSlider from './component/heroslider'


function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <About/>
      <h1 className='fs-3 border'>home page</h1>
      
    </>
  )
}

export default App
