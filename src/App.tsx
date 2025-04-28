import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
