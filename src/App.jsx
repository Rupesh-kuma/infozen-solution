import { Route, Router, Routes } from 'react-router-dom'
import About from './About/about'
import './App.css'
import Navbar from './component/header'
import HeroSlider from './component/heroslider'
import Home from './pages/Home'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      
    </>
  )
}

export default App
