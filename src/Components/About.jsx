import malleshPhoto from '../assets/chairman & founder.jpeg'
import purnaPhoto from '../assets/Purna.jpeg'
import vijayPhoto from '../assets/Vijay.jpeg'

function About(){
    return(
        <section className="about">
            <h2>About SSD Yogashala & Kalakshetra</h2>
            <p>Founded in January 2023 under the Siva Shakti Dyana Yoga Charitable Trust, SSD Yogashala & Kalakshetra is guided by Yoga Guru Kowda Mallesh, and founded by K Purna Sai and Vijay Kumar Kowda.
                We're committed to helping every student find a better way to balance their health.</p>

            <blockquote className="mission-quote">
                "To transform lives through yoga, education, arts, and Indian culture — creating healthy individuals, strong families, and a better society."
            </blockquote>

            <div className="about-story">
                <h3>Why We Started</h3>
                <p>
                    SSD Yogashala & Kalakshetra was established to create a place where health, education, arts, culture, and values come together under one roof. Our purpose is to help children, youth, and adults become physically fit, mentally strong, emotionally balanced, culturally rooted, and spiritually aware through authentic Indian traditions and modern education.
                </p>
                <p>
                    We believe that true education is not only about academic success but also about developing discipline, confidence, creativity, compassion, and character. Our institution is committed to preserving India's rich heritage while preparing students for the future.
                </p>
            </div>

            <div className="leaders-grid">
                <div className="vision-card">
                    <img src={malleshPhoto} alt="Kowda Mallesh" className="chairman-photo" />
                    <h3>Kowda Mallesh</h3>
                    <p className="founder-role">Chairman & Yoga Guru</p>
                    <p className="vision-intro">
                        Chairman Kowda Mallesh founded the organization with the vision of serving society through yoga, Indian culture, and value-based education. His focus is to:
                    </p>
                    <ul className="vision-list">
                        <li>Preserve and promote India's ancient traditions.</li>
                        <li>Make yoga and cultural education accessible to everyone.</li>
                        <li>Build a healthier, disciplined, and socially responsible community.</li>
                        <li>Inspire the next generation to live with integrity, service, and respect for Indian values.</li>
                    </ul>
                </div>

                <div className="vision-card">
                    <img src={purnaPhoto} alt="K Purna Sai" className="founder-photo" />
                    <h3>K. Purna Sai</h3>
                    <p className="founder-role">Founder & CEO</p>
                    <p className="vision-intro">
                        Founder & CEO K. Purna Sai leads the organization with the mission of creating a holistic learning ecosystem where every individual can grow in body, mind, and spirit. His major focus is to:
                    </p>
                    <ul className="vision-list">
                        <li>Deliver high-quality yoga education and teacher training.</li>
                        <li>Nurture talent in Kuchipudi, Western dance, Carnatic vocals, painting, and Vedic studies.</li>
                        <li>Develop confident, healthy, and value-driven children through after-school programs.</li>
                        <li>Empower youth with leadership, personality development, and lifelong wellness.</li>
                        <li>Establish SSD Yogashala & Kalakshetra as a trusted center of excellence for yoga, arts, education, and holistic development across India.</li>
                    </ul>
                </div>
            </div>

            <div className="founders-grid">
                <div className="founder-card">
                    <img src={vijayPhoto} alt="Vijay Kumar Kowda" className="founder-photo" />
                    <h3>Vijay Kumar Kowda</h3>
                    <p className="founder-role">Co-Founder</p>
                </div>
            </div>
        </section>
    )
}
export default About
