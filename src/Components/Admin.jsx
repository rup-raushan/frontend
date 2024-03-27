import React from 'react'
import { Link } from 'react-router-dom'
import Computer from '../computer.png'

export default function Admin() {
  return (
    <>
      <div className="whole-admin-container__wrapper main-bg" style={{height: '100%'}}>
        <div className="admin-hero-container__wrapper">
        <div className='hero-main__wrappper admin'>
            <div className="hero-text__wrapper">
                <div className="hero-text__static">
                    <h3>aerontes'</h3>
                </div>
                <div className="hero-text__slidable">
                    <h1>Admin </h1>
                </div>
                <div className="hero-paragraph__wrapper p-normal">
                    <p className="hero-paragraph p-normal">Welcome to admin panel of Aeronotes</p>
                </div>
                <div className="hero-buttons__wrapper">
                    <Link to="/admin-login" className="hero-buttons__first primary-btn"><span>Login</span></Link>
                    <Link className="hero-buttns__second secondary-btn"><span>Register</span></Link>
                </div>
            </div>
            <div className="hero-cover__wrapper">
                <img width="500" src={Computer} alt="III" />
            </div>
        </div>
            <div className="whole-admin-services__wrapper flex flex-center text-center">
                <div className="admin-services__wrapper flex flex-center flex-col">
                    <div className="admin-services-title__wrapper">
                        <h5 className='admin-services-title__text'>Administrator Login.</h5>
                    </div>
                    <div className="admin-services-description__wrapper">
                        <p className='admin-services-description__text'>Came here for uploading notes click below to upload.If you have an approved admin account Log In here.</p>
                    </div>
                    <div className="admin-services-buttons__wrapper flex flex-center f">
                        <Link to="/admin-login" className="primary-btn"><span>Log in</span></Link>
                    </div>
                </div>
                <div className="admin-services__wrapper flex flex-center flex-col">
                    <div className="admin-services-title__wrapper">
                        <h5 className='admin-services-title__text'>Register for a Admin.</h5>
                    </div>
                    <div className="admin-services-description__wrapper">
                        <p className='admin-services-description__text'>Want to be the admin of Aeronotes, you can just click below for that and after few verifications your account will be approved.</p>
                    </div>
                    <div className="admin-services-buttons__wrapper flex flex-center">
                        <Link className="secondary-btn"><span>Register</span></Link>
                    </div>
                </div>
                <div className="admin-services__wrapper flex flex-center flex-col">
                    <div className="admin-services-title__wrapper">
                        <h5 className='admin-services-title__text'> Check admin Status.</h5>
                    </div>
                    <div className="admin-services-description__wrapper">
                        <p className='admin-services-description__text'>If you have requested for a admin account and now you want to check status of you request then you can do it from here.</p>
                    </div>
                    <div className="admin-services-buttons__wrapper flex flex-center">
                        <Link className="secondary-btn"><span>Check Status</span></Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
