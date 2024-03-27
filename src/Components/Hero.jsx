import React from 'react'
import coverImg from "../boy.png"
import {Link} from "react-router-dom"

export default function Hero() {

  return (
    <div className='hero__wrapper'>
        <div className='hero-main__wrappper'>
            <div className="hero-text__wrapper">
                <div className="hero-text__static">
                    <h3><b>The most</b></h3>
                </div>
                <div className="hero-text__slidable">
                    <h1>Reliable</h1>
                </div>
                <div className="hero-paragraph__wrapper p-normal">
                    <p className="hero-paragraph p-normal">Notes sharing app, It's <b>Aeronotes</b>.</p>
                </div>
                <div className="hero-buttons__wrapper">
                    <Link to="/notes" className="hero-buttons__first primary-btn"><span>Get Started</span></Link>
                    <Link className="hero-buttns__second secondary-btn"><span>Know More</span></Link>
                </div>
            </div>
            <div className="hero-cover__wrapper">
                <img width="500" src={coverImg} alt="III" />
            </div>
        </div>
    </div>
  )
}
