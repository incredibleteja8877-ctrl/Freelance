import logo from '../assets/SSD yogashala_logo_.png'
function Navbar({ activePage, onNavigate }) {
    return(
        <nav>
            <div className="logo-wrap">
                <img src={logo} alt="SSD Yogashala & Kalakshetra Logo  " />
                </div>
                <h2>SSD Yogashala & Kalakshetra</h2>
                <ul>
                    <li className={activePage === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</li>
                    <li className={activePage === 'classes' ? 'active' : ''} onClick={() => onNavigate('classes')}>Classes</li>
                    <li className={activePage === 'trainers' ? 'active' : ''} onClick={() => onNavigate('trainers')}>Instructors</li>
                    <li className={activePage === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>About</li>
                    <li className={activePage === 'contact' ? 'active' : ''} onClick={() => onNavigate('contact')}>Contact</li>
                </ul>
        </nav>
    )
}
export default Navbar