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
                    <p className="founder-role">Founder & Chairman, Siva Shakti Dhyana Yoga Charitable Trust</p>
                    <p className="vision-intro">
                        A Yoga Guru, Yoga Therapist, Meditation Teacher, and Spiritual Educator with 25+ years of yoga practice and 20+ years of teaching experience. He has trained MLAs, MLCs, and other distinguished individuals, integrating Yoga Therapy, Acupuncture & Acupressure, Counselling, and Bhagavad Gita teachings to promote physical wellbeing, mental clarity, and spiritual growth.
                    </p>
                    <ul className="vision-list">
                        <li>Yoga Guru, Yoga Teacher & Yoga Therapist</li>
                        <li>Master Diploma in Acupuncture & Acupressure; Diploma in Acupressure</li>
                        <li>Meditation Teacher & Counsellor</li>
                        <li>Bhagavad Gita Pracharak & Spiritualist</li>
                    </ul>
                </div>

                <div className="vision-card">
                    <img src={purnaPhoto} alt="Kowda Purna Sai" className="founder-photo" />
                    <h3>Kowda Purna Sai</h3>
                    <p className="founder-role">Founder & CEO, SSD Yogashala & Kalakshetra</p>
                    <p className="vision-intro">
                        A Yoga Teacher, World Yogasana Coach, National Yogasana Sports Judge, and Corporate Wellness Consultant with 19+ years of yoga practice and 8+ years of teaching experience. He has trained students for State & National-Level Yogasana competitions — including Khelo India participants — guiding them to merit positions and medals, and has served as a specialized trainer for MLAs, MLCs, and Government Officials across colleges, orphanages, and corporate organizations.
                    </p>
                    <ul className="vision-list">
                        <li>Level 5 Yoga Teacher & World Yogasana Coach</li>
                        <li>National Yogasana Sports Judge – Level 1</li>
                        <li>M.Sc. in Yoga & MBA; Diploma in Psychology & Holistic Wellness</li>
                        <li>Master Diploma in Hijama / Cupping Therapy</li>
                        <li>Aerial Yoga, Zumba, Aerobics, Sound Healing & Meditation Instructor</li>
                        <li>Corporate Yoga & Wellness Consultant</li>
                    </ul>
                    <p className="vision-intro">
                        <strong>Core Expertise:</strong> Yoga • Yogasana Sports • Corporate Wellness • Meditation • Sound Healing • Aerial Yoga • Zumba • Aerobics • Holistic Wellness
                    </p>
                </div>

                <div className="vision-card">
                    <img src={vijayPhoto} alt="Vijay Kumar Kowda" className="founder-photo" />
                    <h3>Vijay Kumar Kowda</h3>
                    <p className="founder-role">Co-Founder & 500-Hour Certified Yoga Teacher</p>
                    <p className="vision-intro">
                        A BBA graduate with 14+ years of yoga practice and 4+ years of teaching experience, specializing in Ashtanga, Hatha, Iyengar, and Vinyasa yoga with a strong focus on anatomy and alignment. He also serves as a State-Level Yogasana Judge for the Telangana Yogasana Sports Association, upholding traditional yoga methodology and practice.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About
