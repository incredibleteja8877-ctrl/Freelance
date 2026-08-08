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
import PrivacyPolicy from './Components/PrivacyPolicy.jsx'
import WhatsAppButton from './Components/WhatsAppButton.jsx'
import ApproveReview from './Components/ApproveReview.jsx'
import ReviewPopup from './Components/ReviewPopup.jsx'
import FadeInSection from './Components/FadeInSection.jsx'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [approveReviewId, setApproveReviewId] = useState(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('approveReview')
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activePage])

  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault()
      }
    }
    document.addEventListener('contextmenu', handleContextMenu)
    return () => document.removeEventListener('contextmenu', handleContextMenu)
  }, [])

  return (
    <div className="app-container">
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {activePage === 'home' && (
        <div className="page">
          <Hero onViewSchedule={() => setActivePage('classes')} />
          <FadeInSection><Highlights /></FadeInSection>
          <FadeInSection><Reviews /></FadeInSection>
          <FadeInSection><Gallery /></FadeInSection>
          <FadeInSection><News /></FadeInSection>
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

      {activePage === 'privacy' && (
        <div className="page">
          <PrivacyPolicy onBack={() => setActivePage('home')} />
        </div>
      )}

      <Footer onNavigate={setActivePage} />
      <WhatsAppButton />
      <ReviewPopup />
      {approveReviewId && (
        <ApproveReview reviewId={approveReviewId} onDone={() => setApproveReviewId(null)} />
      )}
    </div>
  )
}

export default App
