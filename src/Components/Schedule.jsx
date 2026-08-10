import { useState } from 'react'
import BookingForm from './BookingForm.jsx'

const classes=[
    { id: 1, category:"Yoga", name: 'Hatha Yoga', time: '6:00 AM - 7:00 AM', branchSelectable: true },
    { id: 2, category:"Yoga", name: 'Hatha Yoga', time: '9:00 AM - 10:00 AM', branchSelectable: true },
    {id: 3, category:"Yoga", name: 'Restorative Yoga & Hatha Yoga', time: '5:00 PM - 6:00 PM', branchSelectable: true },
    {id: 4, category:"Yoga", name: 'Ashtanga + Iyengar + Hatha (Competition Preparatory)', time: '7:30 PM - 9:00 PM', branchSelectable: true },

    {id: 5, category:"Classical Dance-Drama", name: 'Kuchipudi - Shapur Branch', days: "Mon,Wed,Fri", time: '6:00 PM - 7:00 PM' },
    {id: 6, category:"Classical Dance-Drama", name: 'Kuchipudi - Shapur Branch', days: "Mon,Wed,Fri", time: '7:00 PM - 8:00 PM' },
    {id: 7, category:"Classical Dance-Drama", name: 'Kuchipudi - Suraram Branch', days: "Tue,Thu,Fri", time: '6:00 PM - 7:00 PM' },
    {id: 8, category:"Classical Dance-Drama", name: 'Kuchipudi - Suraram Branch', days: "Tue,Thu,Fri", time: '7:00 PM - 8:00 PM' },
    {id: 9, category:"Classical Dance-Drama", name: 'Kuchipudi - Weekend Branch', days: "Thu,Sat", time: '6:00 PM - 7:30 PM' },

    {id: 10, category:"Dance", name: 'Western Dance', days: "Mon-Fri", time: '6:00 PM - 7:00 PM', branchSelectable: true },

    {id: 11, category:"Aerial Yoga", name: 'Aerial Yoga - suraram Branch', days: "Sun", time: '9:00 AM - 11:00 AM' },
]
const categories = ["Yoga", "Classical Dance-Drama", "Dance", "Aerial Yoga"]
function Schedule() {
    const [selectedClass, setSelectedClass] = useState(null)

    return (
        <section className="schedule">
            <h2>Class Schedule</h2>
            <p>Explore our diverse range of classes designed to enhance your physical and mental well-being. Our schedule offers a variety of options to suit every level and interest.</p>
            {categories.map((cat) => (
                <div key={cat}>
                    <h3>{cat}</h3>
                    <ul>
                        {classes.filter((c) => c.category === cat).map((c) => (
                            <li key={c.id}>
                                <div>
                                <strong>{c.name}</strong> 
                                {c.days ? `- ${c.days} ` : ''}, {c.time}
                                </div>
                                <button className="book-btn" onClick={() => setSelectedClass(c)}>Book Now</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            {selectedClass && (
    <BookingForm classInfo={selectedClass} onClose={() => setSelectedClass(null)} />
)}

        </section>
    )
}
export default Schedule
