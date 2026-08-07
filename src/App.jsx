import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Trainers from './Components/Trainers.jsx'
import Schedule from './Components/Schedule.jsx'
import Contact from './Components/Contact.jsx'
import Gallery from './Components/Gallery.jsx'
import Highlights from './Components/Highlights.jsx'
import News from './Components/News.jsx'
import Reviews from './Components/Reviews.jsx'
import Footer from './Components/Footer.jsx'
import WhatsAppButton from './Components/WhatsAppButton.jsx'

function App() {
  const [activePage, setActivePage] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  return (
    <div className="app-container">
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {activePage === 'home' && (
        <div className="page">
          <Hero onViewSchedule={() => setActivePage('classes')} />
            <Highlights />
            <Gallery />
            <News />
            <Reviews />
        </div>
      )}

      {activePage === 'classes' && (
        <div className="page">
          <Schedule />
        </div>
      )}
      {activePage === 'trainers' && (
  <div className="page">
    <Trainers />
  </div>
)}


      {activePage === 'about' && (
        <div className="page">
          <About />
        </div>
      )}

      {activePage === 'contact' && (
        <div className="page">
          <Contact />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
