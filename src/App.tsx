import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import BrowseCars from './pages/Car'
import Booking from './pages/Booking'
import CarDetails from './pages/CarDetails'
import About_Contact from './pages/About_Contact'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/Car' element={<BrowseCars/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/CarDetails' element={<CarDetails/>}/>
        <Route path='/About_Contact' element={<About_Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}