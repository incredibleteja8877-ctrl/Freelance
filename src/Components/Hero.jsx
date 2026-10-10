function Hero({ onViewSchedule }) {
    return (
        <section className="hero">
            <h1>Find Your Balance</h1>
            <p>Yoga classes for everybody, every level, every day.</p>
            <button onClick={onViewSchedule}>View Classes Schedule</button>
        </section>
    )
}
export default Hero