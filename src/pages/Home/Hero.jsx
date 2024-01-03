import SearchBar from "../../components/SearchBar"

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content wrapper">
                <div className="hero-text">
                    <h1 className="hero-title">Explore Your Way</h1>

                    <p className="hero-description">Discover Your Journey: Plan, Explore, Thrive!</p>
                </div>

                <SearchBar position="top"/>
             
            </div>
        </section>
    )
}

export default Hero