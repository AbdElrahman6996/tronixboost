import React from 'react'
import './Hero.css'
import Diamonds from './img/Diamonds.svg'
import Herospans from './img/hero-spans.svg'
function Hero() {
    return (
        <main className='main-container'>
            <div className="main-img-div">
                <img src={Diamonds} alt="" />
            </div>
            <div className="main-text-div">
                <h1>ترونكس <span>بوست</span></h1>
                <p><img src={Herospans} alt="" /> مكانك المناسب<br></br>
                    لجميع خدمات الديسكورد </p>
                    <a href="/">معرفه المزيد</a>
            </div>
        </main>
    )
}

export default Hero