import {Outlet, Route, Routes} from 'react-router-dom'
import Directory from "./utilities/Directory"
import TopCountries from "./pages/TopCountries"
import Home from "./pages/Home/Home"
import TopDestinations from "./pages/TopDestinations"
import Error from "./pages/Error"
import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Copyrights from "./components/Copyrights"
import TripSearch from "./pages/Search/TripSearch"
import TripDetails from "./pages/TripDetails";
import Privacy from './components/privacy'
import Login from './components/login'
import Signup from './components/signup'
import './App.css';

function App() {
    return (
        <>
           
            <Routes>
                <Route path={Directory.EMPTY_CHILD} element={<Outlet/>}>
                    <Route exact path={Directory.EMPTY_CHILD} element={<Home/>}/>
                    <Route path={Directory.TOP_COUNTRIES} element={<TopCountries/>}/>
                    <Route path={Directory.TOP_DESTINATIONS} element={<TopDestinations/>}/>
                    <Route path={Directory.TRIPS} element={<TripDetails/>}/>
                    <Route path={Directory.SEARCH_TRIP} element={<TripSearch/>}/>
                </Route>
                <Route path={Directory.ERROR} element={<Error/>}/>
                    <Route path='/Login' element={<Login/>}/>
                <Route path='/Privacy' element={<Privacy/>}/>
                <Route path='/Signup' element={<Signup/>}/>
            </Routes>
            
            
        </>

    )
}

export default App
