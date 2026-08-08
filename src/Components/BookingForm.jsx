import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase.js'


function BookingForm({ classInfo, onClose }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    try {
      await addDoc(collection(db, 'bookings'), {
        className: classInfo.name,
        category: classInfo.category,
        time: classInfo.time,
        days: classInfo.days || '',
        name,
        phone,
        email,
        createdAt: new Date(),
      })
      await emailjs.send(
    'service_7pn5rm7',
    'template_3js2e7z',
    {
      name,
      phone,
      email,
      class_name: classInfo.name,
      class_days: classInfo.days || '',
      class_time: classInfo.time,
    },
    '4NpBq4MX04_CNeeXp'
  )

      setStatus('booked')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        {status === 'booked' ? (
          <>
            <h3>You're booked!</h3>
            <p>We've reserved your spot in <strong>{classInfo.name}</strong>. See you there!</p>
            <button className="modal-done-btn" onClick={onClose}>Close</button>
          </>
        ) : (
          <>
            <h3>Book {classInfo.name}</h3>
            <p className="modal-subtitle">{classInfo.days ? `${classInfo.days}, ` : ''}{classInfo.time}</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Booking...' : 'Confirm Booking'}
              </button>
              {status === 'error' && <p className="error-msg">Something went wrong. Please try again.</p>}
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default BookingForm
