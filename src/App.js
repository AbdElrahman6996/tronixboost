import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Team from './components/Team'
import Weeklyoffers from './components/Weeklyoffers'
function App() {
    return (
        <>
            <Navbar />
            <Hero/>
            <Team/>
            <Weeklyoffers/>
        </>
    )
}

export default App