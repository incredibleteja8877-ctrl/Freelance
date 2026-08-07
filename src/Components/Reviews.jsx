import { useState, useEffect } from 'react'
import { collection, addDoc, query, where, orderBy, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState('')

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(
        collection(db, 'reviews'),
        where('approved', '==', true),
        orderBy('createdAt', 'desc')
      )
      const snapshot = await getDocs(q)
      setReviews(snapshot.docs.map((doc) => doc.data()))
    }
    fetchReviews()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (rating === 0) {
      setStatus('norating')
      return
    }
    setStatus('sending')
    try {
      await addDoc(collection(db, 'reviews'), {
        name,
        rating,
        comment,
        approved: false,
        createdAt: new Date(),
      })
      setStatus('sent')
      setName('')
      setRating(0)
      setComment('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section className="reviews">
      <h2>What Our Students Say</h2>

      {reviews.length > 0 ? (
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-stars">
                {'★'.repeat(review.rating)}
                {'☆'.repeat(5 - review.rating)}
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <p className="review-name">— {review.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="reviews-empty">Be the first to share your experience with us!</p>
      )}

      <button className="write-review-btn" onClick={() => setShowForm(true)}>
        Write a Review
      </button>

      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowForm(false)}>×</button>

            {status === 'sent' ? (
              <>
                <h3>Thank you!</h3>
                <p>Your review has been submitted and will appear here once approved.</p>
                <button
                  className="modal-done-btn"
                  onClick={() => {
                    setShowForm(false)
                    setStatus('')
                  }}
                >
                  Close
                </button>
              </>
            ) : (
              <>
                <h3>Write a Review</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <div className="star-picker">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`star ${star <= (hoverRating || rating) ? 'filled' : ''}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  <textarea
                    placeholder="Share your experience..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                  />

                  <button type="submit">
                    {status === 'sending' ? 'Submitting...' : 'Submit Review'}
                  </button>

                  {status === 'norating' && (
                    <p className="error-msg">Please select a star rating.</p>
                  )}
                  {status === 'error' && (
                    <p className="error-msg">Something went wrong. Please try again.</p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Reviews
