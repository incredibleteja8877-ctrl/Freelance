import purnaPhoto from '../assets/Purna.jpeg'

const trainers = [
    {
        id: 1,
        category: 'Yoga',
        name: 'Purna Sai',
        role: 'Founder & Senior Yoga Instructor',
        photo: purnaPhoto,
        initials: 'PS',
        bio: 'A dedicated yoga educator committed to preserving the authentic traditions of yoga. He specializes in Hatha Yoga, restorative yoga, and competition-oriented yoga training, guiding students with a focus on alignment, breath awareness, discipline, and holistic well-being.',
    },
    {
        id: 2,
        category: 'Yoga',
        name: 'Hari Krishna',
        role: 'Certified 200-Hour YTTC Instructor',
        initials: 'HK',
        bio: 'An experienced yoga teacher specializing in Hatha Yoga. He helps students improve flexibility, strength, balance, and mindfulness through safe and traditional yoga practices.',
    },
    {
        id: 3,
        category: 'Yoga',
        name: 'Santhoshi Kumari',
        role: 'Certified 200-Hour YTTC Instructor',
        initials: 'SK',
        bio: 'Passionate about helping students achieve physical fitness and mental wellness through yoga. Her classes emphasize proper technique, breathing, and relaxation.',
    },
    {
        id: 4,
        category: 'Yoga',
        name: 'Pavithra',
        role: 'Certified 200-Hour YTTC Instructor',
        initials: 'P',
        bio: 'Dedicated to creating a positive and supportive learning environment. She guides students of all levels toward better health, confidence, and inner peace through authentic yoga.',
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
                                    <img src={t.photo} alt={t.name} className="trainer-photo" />
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
