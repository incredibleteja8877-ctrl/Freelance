import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase.js'
import emailjs from '@emailjs/browser'


function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        phone,
        message,
        createdAt: new Date(),
      })
      await emailjs.send(
        'service_7pn5rm7',
        'template_d20nbt3',
        { name, email, phone, message },
        '4NpBq4MX04_CNeeXp'

      )
      setStatus('sent')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have a question? Send us a message and we'll get back to you.</p>

      <div className="visit-us">
        <h3>Visit Us</h3>
        <div className="branches-grid">
          <div className="branch-card">
            <h4>Shapur Branch</h4>
            <p className="visit-address">
              H.No: 32-396, SSD Yoga Shala & Kalakshethra, near Vivekananda High School, Shapur Nagar, Jeedimetla, Hyderabad, Telangana 500055
            </p>
            <div className="map-embed">
              <iframe
                title="SSD Yogashala Shapur Branch Location"
                src="https://www.google.com/maps?q=SSD+Yoga+Shala+%26+Kalakshethra,+Shapur+Nagar,+Jeedimetla,+Hyderabad,+Telangana+500055&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/dSq5ebTc93xCuVRN8"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions
            </a>
          </div>

          <div className="branch-card">
            <h4>Suraram Branch</h4>
            <p className="visit-address">
              SSD Yoga Shala & Kalakshethra, Suraram, Hyderabad, Telangana
            </p>
            <div className="map-embed">
              <iframe
                title="SSD Yogashala Suraram Branch Location"
                src="https://www.google.com/maps?q=17.5424742,78.4252753&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <a
              href="https://maps.app.goo.gl/K9eQ2QZ9oxtJQcnG7"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="phone-input">
         <span className="country-code">+91</span>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
            pattern="[6-9][0-9]{9}"
            title="Enter a valid 10-digit mobile number"
            maxLength="10"
            required
          />
        </div>

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>

      {status === 'sending' && <p>Sending...</p>}
      {status === 'sent' && <p className="success-msg">Message sent! We'll get back to you soon.</p>}
      {status === 'error' && <p className="error-msg">Something went wrong. Please try again.</p>}

      <p>Or email us directly at <a href="mailto:ssdyct25@gmail.com">ssdyct25@gmail.com</a></p>
    </section>
  )
}

export default Contact
