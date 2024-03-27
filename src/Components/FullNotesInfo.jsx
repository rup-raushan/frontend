import React, { useEffect } from 'react'

const FullNotesInfo = (props) => {

  
  useEffect(()=>{
    document.body.style.overflowY = "hidden"
    document.body.style.overflowX = "hidden"
    return () =>{
        document.body.style.overflowY = "scroll"
        document.body.style.overflowX = "scroll"   
    }
},[])

  return (
    <div className="notes-info-full-screen__wrapper">
      <div className="notes-info__container">
        <div className="notes-info-head">
          <div className="info-profile">
            <h5>{props.by.slice(0,1).toUpperCase()}</h5>
          </div>
            <h5>{props.by} {props.verified && <>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#ffd700"></path>

                  </svg>
          </>}</h5>
        </div>
            <h5 className='notes-info title'> {props.title}</h5>
            <h6>{props.description}</h6>

            <button className="hero-buttns__second secondary-btn" onClick={()=>{props.setActive(false)}}><span>Close</span></button>
      </div>
    </div>
  )
}

export default FullNotesInfo
