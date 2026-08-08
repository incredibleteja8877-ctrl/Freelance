import { useState, useEffect } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase.js'

function ApproveReview({ reviewId, onDone }) {
  const [review, setReview] = useState(null)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const snap = await getDoc(doc(db, 'reviews', reviewId))
        if (snap.exists()) {
          setReview(snap.data())
          setStatus('ready')
        } else {
          setStatus('notfound')
        }
      } catch (error) {
        console.error(error)
        setStatus('error')
      }
    }
    fetchReview()
  }, [reviewId])

  const handleApprove = async () => {
    setStatus('approving')
    try {
      await updateDoc(doc(db, 'reviews', reviewId), { approved: true })
      setStatus('approved')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <div className="modal-overlay" onClick={onDone}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onDone}>×</button>

        {status === 'loading' && <p>Loading review...</p>}
        {status === 'notfound' && <p>This review couldn't be found — it may already be approved.</p>}
        {status === 'error' && <p className="error-msg">Something went wrong. Please try again.</p>}

        {status === 'ready' && review && (
          <>
            <h3>Approve this review?</h3>
            <div className="review-stars">
              {'★'.repeat(review.rating)}
              {'☆'.repeat(5 - review.rating)}
            </div>
            <p className="review-comment">"{review.comment}"</p>
            <p className="review-name">— {review.name}</p>
            <button className="write-review-btn" onClick={handleApprove}>
              Approve & Publish
            </button>
          </>
        )}

        {status === 'approving' && <p>Approving...</p>}

        {status === 'approved' && (
          <>
            <h3>Approved!</h3>
            <p>This review is now live on the website.</p>
            <button className="modal-done-btn" onClick={onDone}>Close</button>
          </>
        )}
      </div>
    </div>
  )
}

export default ApproveReview
