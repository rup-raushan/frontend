import React, { useEffect, useState } from 'react'
import Profile from "../profile.jpg"
import { Link,useNavigate } from 'react-router-dom'
import UploadNotesCard from './UploadNotesCard'

const Manager = () => {
  const [upload, setUpload] = useState(false)
  const navigate = useNavigate()


  useEffect(()=>{
    const token = sessionStorage.getItem("MTK")
    if(!token){
      navigate("/manager/login")
    }
  },[])

  const uploadHandler = () =>{
    setUpload(true)
  }

  return (
    <>
    {upload && <UploadNotesCard cancel={setUpload}/>}
      <div className="hero__wrapper">
        <div className="hero-main__wrapper manager-main__wrapper">
            <div className="manager-profile__wrapper">
              <div className="manager-profile-image__wrapper">
                <img src={Profile} alt="" />
              </div>
              <div className="manager-text__wrapper">
                <h4 className='manager__text'>Rup Raushan
                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#ffd700"></path>

                  </svg>
                </h4>
                <p className='p-normal'>management.aeronotes@gmail.com</p>
              </div>
            </div>
            <div className="manager-options__wrapper">
              <ul className='manager-option__list'>
                <li>
                <Link className='manager-options__box' onClick={uploadHandler}>
                  <div className="option__content">
                    <h4 className="option__heading">Upload</h4>
                    <p className="option__des p-normal">Add notes in aeronotes from here.</p>
                  </div>
                  <div className="optin-icon">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M9 14.5H13M9 9.5H17" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2H13.5C17.2712 2 19.1569 2 20.3284 3.17157C21.5 4.34315 21.5 6.22876 21.5 10V14C21.5 17.7712 21.5 19.6569 20.3284 20.8284C19.1569 22 17.2712 22 13.5 22H12C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z" stroke="#fff" stroke-width="1.5"/>
                  <path d="M5 6L2.5 6M5 12L2.5 12M5 18H2.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  </Link>
                </li>
                <li>
                  <Link to="/manager/notes" className='manager-options__box'>
                    <div className="option__content">
                      <h4 className="option__heading">Notes</h4>
                      <p className="option__des p-normal">Manage or delete notes from here.</p>
                    </div>
                    <div className="optin-icon">
                    <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2V4M11 2V4M6 2V4" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.5 12.5V10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H11.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.5 15L18 18.5M18 18.5L14.5 22M18 18.5L21.5 22M18 18.5L14.5 15" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M7 15H11M7 10H15" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    </div>
                  </Link>
                </li>
                <li>
                <Link to="/manager/admins" className='manager-options__box'>
                  <div className="option__content">
                    <h4 className="option__heading">Admins</h4>
                    <p className="option__des p-normal">Manage admins of Aeronotes here.</p>
                  </div>
                  <div className="optin-icon">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 22H6.59087C5.04549 22 3.81631 21.248 2.71266 20.1966C0.453365 18.0441 4.1628 16.324 5.57757 15.4816C8.12805 13.9629 11.2057 13.6118 14 14.4281" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="#fff" stroke-width="1.5"/>
                  <path d="M18.4332 13.8485C18.7685 13.4851 18.9362 13.3035 19.1143 13.1975C19.5442 12.9418 20.0736 12.9339 20.5107 13.1765C20.6918 13.2771 20.8646 13.4537 21.2103 13.8067C21.5559 14.1598 21.7287 14.3364 21.8272 14.5214C22.0647 14.9679 22.0569 15.5087 21.8066 15.9478C21.7029 16.1298 21.5251 16.3011 21.1694 16.6437L16.9378 20.7194C16.2638 21.3686 15.9268 21.6932 15.5056 21.8577C15.0845 22.0222 14.6214 22.0101 13.6954 21.9859L13.5694 21.9826C13.2875 21.9752 13.1466 21.9715 13.0646 21.8785C12.9827 21.7855 12.9939 21.6419 13.0162 21.3548L13.0284 21.1988C13.0914 20.3906 13.1228 19.9865 13.2807 19.6232C13.4385 19.2599 13.7107 18.965 14.2552 18.375L18.4332 13.8485Z" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
                  </svg>
                  </div>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Manager
