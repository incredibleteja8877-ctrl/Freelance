import purnaPhoto from '../assets/Purna.jpeg'
import vijayPhoto from '../assets/Vijay.jpeg'
import hariKrishnaPhoto from '../assets/Instructors/Hari Krishna.jpeg'
import pavithraPhoto from '../assets/Instructors/pavitra.jpeg'
import durgaPhoto from '../assets/Instructors/Durga.jpeg'
import santhoshiPhoto from '../assets/Instructors/santoshi kumari.jpeg'

const trainers = [
    {
        id: 1,
        category: 'Yoga',
        name: 'Kowda Purna Sai',
        role: 'Founder & CEO, World Yogasana Coach',
        photo: purnaPhoto,
        initials: 'PS',
        bio: 'Founder & CEO of SSD Yogashala & Kalakshetra — a Level 5 Yoga Teacher, World Yogasana Coach, and National Yogasana Sports Judge with 19+ years of yoga practice and 8+ years of teaching experience in Yoga, Yogasana, Fitness, Meditation, and Holistic Wellness. He has trained students for State & National-Level Yogasana competitions and served as a specialized trainer for MLAs, MLCs, and Government Officials.',
    },
    {
        id: 8,
        category: 'Yoga',
        name: 'Vijay Kumar Kowda',
        role: 'Co-Founder & 500-Hour Certified Yoga Teacher',
        photo: vijayPhoto,
        initials: 'VK',
        bio: 'Co-founder of SSD Yogashala & Kalakshetra, a BBA graduate with 14+ years of yoga practice and 4+ years of teaching experience. A 500-Hour Certified Yoga Teacher specializing in Ashtanga, Hatha, Iyengar, and Vinyasa, with a strong focus on anatomy and alignment. He also serves as a State-Level Yogasana Judge for the Telangana Yogasana Sports Association, upholding traditional yoga methodology and practice.',
    },
    {
        id: 2,
        category: 'Yoga',
        name: 'A. Hari Krishna',
        role: 'Certified 200-Hour YTTC Instructor',
        photo: hariKrishnaPhoto,
        initials: 'HK',
        bio: 'A Polytechnic graduate and Certified 200-Hour YTTC instructor with 3 years of yoga practice and 1 year of teaching experience, specializing in Hatha Yoga. He helps students improve flexibility, strength, balance, and mindfulness through safe and traditional yoga practices.',
    },
    {
        id: 3,
        category: 'Yoga',
        name: 'Mannem Santhoshi Kumari',
        role: 'Certified 200-Hour YTTC Instructor',
        photo: santhoshiPhoto,
        photoPosition: 'top',
        initials: 'SK',
        bio: 'An MA English graduate and Certified 200-Hour YTTC instructor with 2 years of yoga practice and 1 year of teaching experience. Passionate about helping students achieve physical fitness and mental wellness through yoga, with classes that emphasize proper technique, breathing, and relaxation.',
    },
    {
        id: 4,
        category: 'Yoga',
        name: 'B. Pavithra',
        role: 'Certified 200-Hour YTTC Instructor',
        photo: pavithraPhoto,
        photoPosition: 'top',
        initials: 'P',
        bio: 'An MBA (HR) graduate and Certified 200-Hour YTTC instructor dedicated to creating a positive and supportive learning environment. She guides students of all levels toward better health, confidence, and inner peace through authentic yoga.',
    },
    {
        id: 5,
        category: 'Kuchipudi',
        name: 'Harika Garu',
        role: 'Kuchipudi Instructor - Shapur Branch',
        initials: 'HG',
        bio: 'A skilled Kuchipudi instructor dedicated to teaching the grace, rhythm, expressions, and traditional techniques of this classical dance form while inspiring discipline and confidence in every student.',
    },
    {
        id: 6,
        category: 'Kuchipudi',
        name: 'Durga Garu',
        role: 'Kuchipudi Instructor - Suraram Branch',
        photo: durgaPhoto,
        initials: 'DG',
        bio: 'An experienced Kuchipudi instructor passionate about preserving the rich heritage of Kuchipudi. She nurtures students with a focus on technique, expression, stage presence, and artistic excellence.',
    },
    {
        id: 7,
        category: 'Western Dance',
        name: 'Naveen Garu',
        role: 'Western Dance Instructor',
        initials: 'NG',
        bio: 'A dynamic Western Dance instructor who trains students of all age groups in rhythm, coordination, choreography, and stage performance. His energetic classes encourage creativity, confidence, teamwork, and a love for dance.',
    },
]

const categories = ['Yoga', 'Kuchipudi', 'Western Dance']

function Trainers() {
    return (
        <section className="trainers">
            <h2>Meet Our Instructors</h2>
            <p className="trainers-intro">
                Our certified instructors bring years of dedicated practice and teaching experience across yoga, classical dance, and western dance — guiding every student with authenticity, discipline, and care.
            </p>

            {categories.map((cat) => (
                <div key={cat} className="trainers-category">
                    <h3 className="category-title">{cat}</h3>
                    <div className="trainers-grid">
                        {trainers.filter((t) => t.category === cat).map((t) => (
                            <div className="trainer-card" key={t.id}>
                                {t.photo ? (
                                    <img
                                        src={t.photo}
                                        alt={t.name}
                                        className="trainer-photo"
                                        loading="lazy"
                                        style={t.photoPosition ? { objectPosition: t.photoPosition } : undefined}
                                    />
                                ) : (
                                    <div className="trainer-avatar">{t.initials}</div>
                                )}
                                <h3>{t.name}</h3>
                                <p className="trainer-role">{t.role}</p>
                                <p className="trainer-bio">{t.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}
export default Trainers
