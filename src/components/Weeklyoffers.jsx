import React from 'react'
import Elbostat from './img/elbostat.png'
import threemonthtxt from './img/3moth.png'
import fortboostmonth from './img/14boost3month.png'
import eigboostmonth from './img/8boost3month.png'
import drip from './img/drop.svg'
import './Weeklyoffer.css'
function Weeklyoffers() {
  return (
    <section className='weeklyoffer'>
        <div className="title">
            <img src={Elbostat} alt="" />
        </div>
        <div className="weeklyoffer-component">
            <div className="threemonths">
                <div className="14boost flex-comp">
                    <img src={fortboostmonth} alt="" />
                    <a href="/">Add To Cart</a>
                </div>
                <div className="8boost flex-comp">
                    <img src={eigboostmonth} alt="" />
                    <a href="/">Add To Cart</a>
                </div>
                <div className="8boost flex-comp">
                    <img src={fortboostmonth} alt="" />
                    <a href="/">Add To Cart</a>
                </div>
            </div>
        </div>
        <a href="/" className='seemore'><img src={drip} alt="" />رؤية المزيد </a>
    </section>
  )
}

export default Weeklyoffers