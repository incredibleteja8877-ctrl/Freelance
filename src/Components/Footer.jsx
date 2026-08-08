function Footer({ onNavigate }){
    return(
        <footer className="footer">
            <h3>SSD Yogashala & Kalakshetra</h3>
            <p> Contact us: <a href="mailto:ssdyct25@gmail.com">ssdyct25@gmail.com</a> &nbsp;|&nbsp; <a href="tel:+919030405476">+91 90304 05476</a></p>
            <p className="footer-socials">
                <a href="https://www.instagram.com/ssd.yogashala?igsh=emtyMmp2YW1sZmNw" target="_blank" rel="noopener noreferrer">Instagram</a>
                <span className="footer-social-divider">|</span>
                <a href="https://youtube.com/@ssdyogaandkalakshetra?si=dZYgLuTtTxlpjItp" target="_blank" rel="noopener noreferrer">YouTube</a>
            </p>
            <p>&copy; 2023 SSD Yogashala & Kalakshetra. All rights reserved.
                {onNavigate && (
                    <> &nbsp;|&nbsp; <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('privacy') }}>Privacy Policy</a></>
                )}
            </p>

        </footer>

    )
}
export default Footer