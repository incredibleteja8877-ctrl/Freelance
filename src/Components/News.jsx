import { useState } from 'react'
import news1 from '../assets/News/news (1).jpeg'
import news2 from '../assets/News/news (2).jpeg'
import news3 from '../assets/News/news (3).jpeg'
import news4 from '../assets/News/news (4).jpeg'
import news5 from '../assets/News/news (5).jpeg'
import news6 from '../assets/News/news (6).jpeg'

const clippings = [news1, news2, news3, news4, news5, news6]

function News() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="news">
      <h2>In the News</h2>
      <p className="news-intro">
        SSD Yogashala & Kalakshetra's International Yoga Day celebrations and student achievements have been featured in leading Telugu newspapers, including Sakshi, Navajyothi, and Telangana Kesari.
      </p>
      <div className="news-grid">
        {clippings.map((clip, index) => (
          <img
            key={index}
            src={clip}
            alt="Press coverage of SSD Yogashala"
            className="news-clipping"
            loading="lazy"
            onClick={() => setSelectedImage(clip)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
          <img src={selectedImage} alt="Full size press coverage" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

export default News
