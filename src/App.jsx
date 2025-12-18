import { Route, Router, Routes } from 'react-router-dom'
import About from './About/about'
import './App.css'
import Navbar from './component/header'
import HeroSlider from './component/heroslider'
import Home from './pages/Home'
import Footer from './component/Footer'
import Contact from './pages/Contact-us'
import AboutUs from './pages/About-us'
import Service from './pages/Service'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
