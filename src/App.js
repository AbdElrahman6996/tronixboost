import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Team from './components/Team'
import Weeklyoffers from './components/Weeklyoffers'
import Logos from './components/Logos'
import Footer from './components/Footer'
function App() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Team/>
            <Weeklyoffers/>
            <Logos/>
            <Footer/>
        </>
    )
}

export default App