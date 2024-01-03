import React from "react"
import Hero from "./Hero"
import Recommendations from "./Recommendations"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Copyrights from "../../components/Copyrights"
const Home = () => {
    return (
        <>
         <Navbar isLoggedIn={false}/>
            <Hero/>
            <Recommendations/>
            <Footer/>
            <Copyrights/>
        </>

    )
}

export default Home