function PrivacyPolicy({ onBack }) {
    return (
        <section className="about">
            <h2>Privacy Policy</h2>
            <p>Last updated: August 2026</p>

            <div className="about-story">
                <h3>What We Collect</h3>
                <p>
                    When you use our Contact form, Booking form, or submit a review, we collect the information you provide directly — your name, email address, phone number, and message or comment. We do not collect this information through any other means.
                </p>
            </div>

            <div className="about-story">
                <h3>How We Use It</h3>
                <p>
                    We use this information only to respond to your inquiry, confirm class bookings, and — if you submit a review — to consider it for publication on our website. Approved reviews display your name, star rating, and comment publicly; they are never published without our team's review.
                </p>
            </div>

            <div className="about-story">
                <h3>Third-Party Services</h3>
                <p>
                    Your submissions are stored securely using Google Firebase (Firestore), and email notifications are sent using EmailJS. Our forms are protected by Google reCAPTCHA to prevent spam and abuse, which operates under <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>. We do not sell, rent, or share your personal information with any other third party.
                </p>
            </div>

            <div className="about-story">
                <h3>Cookies & Local Storage</h3>
                <p>
                    We use your browser's session storage only to avoid showing the same review pop-up twice in one visit. We do not use tracking or advertising cookies.
                </p>
            </div>

            <div className="about-story">
                <h3>Contact Us</h3>
                <p>
                    If you have any questions about this policy or would like your submitted information removed, email us at <a href="mailto:ssdyct25@gmail.com">ssdyct25@gmail.com</a>.
                </p>
            </div>

            {onBack && (
                <button
                    className="directions-btn"
                    onClick={onBack}
                    style={{ marginTop: '16px', border: 'none', cursor: 'pointer', font: 'inherit' }}
                >
                    Back to Home
                </button>
            )}
        </section>
    )
}

export default PrivacyPolicy
