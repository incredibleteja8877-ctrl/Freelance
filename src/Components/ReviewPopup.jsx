import { useState, useEffect } from 'react'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'
import { db } from '../firebase.js'

function ReviewPopup() {
  const [review, setReview] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('reviewPopupShown')
    if (alreadyShown) return

    const fetchAndShow = async () => {
      try {
        const q = query(
          collection(db, 'reviews'),
          where('approved', '==', true),
          orderBy('createdAt', 'desc')
        )
        const snapshot = await getDocs(q)
        if (snapshot.empty) return

        const reviewsList = snapshot.docs.map((doc) => doc.data())
        const randomReview = reviewsList[Math.floor(Math.random() * reviewsList.length)]

        setTimeout(() => {
          setReview(randomReview)
          setVisible(true)
          sessionStorage.setItem('reviewPopupShown', 'true')

          setTimeout(() => {
            setVisible(false)
          }, 6000)
        }, 3000)
      } catch (error) {
        // Popup is a nice-to-have, fail silently (but still log for debugging)
        console.error(error)
      }
    }

    fetchAndShow()
  }, [])

  if (!review || !visible) return null

  return (
    <div className="review-popup">
      <button className="review-popup-close" onClick={() => setVisible(false)}>×</button>
      <div className="review-popup-stars">
        {'★'.repeat(review.rating)}
        {'☆'.repeat(5 - review.rating)}
      </div>
      <p className="review-popup-comment">"{review.comment}"</p>
      <p className="review-popup-name">— {review.name}</p>
    </div>
  )
}

export default ReviewPopup
