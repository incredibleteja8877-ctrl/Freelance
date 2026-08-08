import { useState } from 'react'
import yogaUtsav1 from '../assets/International Yoga day/yoga (1).jpeg'
import yogaUtsav2 from '../assets/International Yoga day/yoga (2).jpeg'
import yogaUtsav3 from '../assets/International Yoga day/yoga (3).jpeg'
import yogaUtsav4 from '../assets/International Yoga day/yoga (4).jpeg'
import womensDay1 from "../assets/women's day.jpeg"
import womensDay2 from "../assets/women's day1.jpeg"
import ghmc1 from '../assets/Ghmc.jpeg'
import ghmc2 from '../assets/Ghmc 2.jpeg'
import ghmc3 from '../assets/Ghmc 3.jpeg'
import corporate1 from '../assets/Corparete  and colleges/corporate (1).jpeg'
import corporate2 from '../assets/Corparete  and colleges/corporate (3).jpeg'
import corporate3 from '../assets/Corparete  and colleges/corporate (4).jpeg'
import corporate4 from '../assets/Corparete  and colleges/corporate (5).jpeg'
import corporate5 from '../assets/Corparete  and colleges/corporate (6).jpeg'
import pic1 from '../assets/pic1.jpeg'
import pic4 from '../assets/pic4.jpeg'
import pic8 from '../assets/pic8.jpeg'
import bramo1 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (1).jpeg'
import bramo4 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (4).jpeg'
import bramo12 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (12).jpeg'
import bramo3 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (3).jpeg'
import bramo6 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (6).jpeg'
import bramo8 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (8).jpeg'
import bramo11 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (11).jpeg'
import bramo13 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (13).jpeg'
import bramo14 from '../assets/Bonthapally veerabhadraswamy temple bramostavalu/Bonthapally veerabhadraswamy temple bramostavalu (14).jpeg'
import gutta1 from '../assets/yadirgutta/gutta (1).jpeg'
import gutta2 from '../assets/yadirgutta/gutta (2).jpeg'
import gutta3 from '../assets/yadirgutta/gutta (3).jpeg'
import gutta4 from '../assets/yadirgutta/gutta (4).jpeg'
import gutta5 from '../assets/yadirgutta/gutta (5).jpeg'
import gutta6 from '../assets/yadirgutta/gutta (6).jpeg'
import gutta7 from '../assets/yadirgutta/gutta (7).jpeg'
import gutta8 from '../assets/yadirgutta/gutta (8).jpeg'

const categories = [
  {
    category: 'Wellness Sessions',
    events: [
      {
        title: 'International Yoga Day',
        description: 'SSD Yogashala & Kalakshetra celebrated International Yoga Day with a special assembly and yoga session, guided by Yoga Guru Kowda Mallesh.',
        photos: [yogaUtsav1, yogaUtsav2, yogaUtsav3, yogaUtsav4],
        photoPositions: { 0: '50% 40%', 2: '50% 55%', 3: '50% 42%' },
        featured: true,
      },
      {
        title: 'GHMC Community Wellness Session',
        description: 'SSD Yogashala & Kalakshetra conducted a community yoga and meditation session for GHMC staff, taking wellness beyond the studio.',
        photos: [ghmc1, ghmc2, ghmc3],
      },
      {
        title: 'Corporate & College Wellness Programs',
        description: 'SSD Yogashala & Kalakshetra extends yoga, wellness, and personality development sessions beyond the studio, conducting programs for corporate teams and college students across Hyderabad.',
        photos: [corporate1, corporate2, corporate3, corporate4, corporate5],
        asymmetric: true,
      },
    ],
  },
  {
    category: 'Celebrations',
    events: [
      {
        title: "Women's Day Celebrations",
        description: 'Our Western Dance students performed at a Women\'s Day Celebrations event, in collaboration with NextGen Foundation.',
        photos: [womensDay1, womensDay2],
      },
    ],
  },
  {
    category: 'Cultural & Festival Performances',
    events: [
      {
        title: 'Yadagirigutta Brahmotsavam',
        description: 'Our biggest annual event — SSD Yogashala & Kalakshetra\'s Kuchipudi students performed at the grand 11-day Brahmotsavam of the Sri Lakshmi Narasimha Swamy Temple in Yadagirigutta (Yadadri), one of Telangana\'s most revered pilgrimage sites, held every year during the auspicious Hindu month of Phalguna.',
        photos: [gutta1, gutta2, gutta3, gutta4, gutta5, gutta6, gutta7, gutta8],
      },
      {
        title: 'Local Cultural Performances',
        description: 'Our Kuchipudi students performing at local cultural and religious festivals throughout the year.',
        photos: [pic1, pic4, pic8],
      },
      {
        title: 'Bonthapally Veerabhadraswamy Temple Brahmotsavam',
        description: 'Our Kuchipudi students led a traditional procession performance at the Brahmotsavam celebrations of Bonthapally Veerabhadraswamy Temple — a grand annual festival attended by local dignitaries and officials.',
        photos: [bramo1, bramo4, bramo12, bramo3, bramo6, bramo8, bramo11, bramo13, bramo14],
      },
    ],
  },
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="gallery">
      <h2>Events & Moments</h2>
      {categories.map((cat) => (
        <div key={cat.category} className="category-block">
          <h3 className="category-heading">{cat.category}</h3>
          {cat.events.map((event) => (
            <div key={event.title} className="event-block">
              <h4>{event.title}</h4>
              <p className="event-description">{event.description}</p>
              <div className={`gallery-grid ${event.featured ? 'featured-grid' : ''} ${event.asymmetric ? 'asymmetric-grid' : ''}`}>
                {event.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={event.title}
                    className="gallery-photo"
                    loading="lazy"
                    style={event.photoPositions?.[index] ? { objectPosition: event.photoPositions[index] } : undefined}
                    onClick={() => setSelectedImage(photo)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
          <img src={selectedImage} alt="Full size" className="lightbox-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}

export default Gallery
