import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import CommonNav from './Components/CommonNav'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Footer from './Components/Footer'
import Portfolio from './Pages/PortFolio'
import Careers from './Pages/Careers'
import Contact from './Pages/Contact'

function App() {

  return (
    <Router>
      <CommonNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App