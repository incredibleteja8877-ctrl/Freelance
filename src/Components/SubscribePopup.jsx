import { useState, useEffect } from 'react'
import logo from '../assets/SSD yogashala_logo_.png'

const YOUTUBE_URL = 'https://youtube.com/@ssdyogaandkalakshetra?si=dZYgLuTtTxlpjItp'
const SITE_URL = 'https://ssd-yogashala.web.app'

function SubscribePopup() {
  const [visible, setVisible] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('subscribePopupShown')
    if (alreadyShown) return

    const showTimer = setTimeout(() => {
      setVisible(true)
      sessionStorage.setItem('subscribePopupShown', 'true')
    }, 10000)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!visible) return

    const subscribeTimer = setTimeout(() => setSubscribed(true), 1200)
    const hideTimer = setTimeout(() => setVisible(false), 3000)

    return () => {
      clearTimeout(subscribeTimer)
      clearTimeout(hideTimer)
    }
  }, [visible])

  if (!visible) return null

  const openYoutube = () => window.open(YOUTUBE_URL, '_blank', 'noopener,noreferrer')

  const shareMessage = `I've been attending classes at SSD Yogashala and Kalakshetra — thought you might like it too! ${SITE_URL}`
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`

  return (
    <div className="subscribe-popup">
      <button className="subscribe-popup-close" onClick={() => setVisible(false)}>×</button>

      <p className="subscribe-popup-headline">If You Are Blessed By Our Classes</p>
      <p className="subscribe-popup-subtext">Share This Link With Your Family & Friends</p>

      <div className="subscribe-popup-card" onClick={openYoutube}>
        <div className="subscribe-popup-avatar">
          <img src={logo} alt="SSD Yogashala & Kalakshetra" />
        </div>
        <div className="subscribe-popup-info">
          <span className="subscribe-popup-name">SSD Yogashala & Kalakshetra</span>
          <div className="subscribe-popup-icons">
            <svg className="spi-icon spi-like" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
            <svg className="spi-icon spi-comment" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <svg className="spi-icon spi-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </div>
        </div>
        <button
          className={`subscribe-popup-btn ${subscribed ? 'is-subscribed' : ''}`}
          onClick={(e) => { e.stopPropagation(); openYoutube() }}
        >
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>

      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="subscribe-popup-share">
        Share on WhatsApp
      </a>
    </div>
  )
}

export default SubscribePopup
