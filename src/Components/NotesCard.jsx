import React, { useState } from 'react'
import FullNotesInfo from './FullNotesInfo'

export default function NotesCard(props) {

  const [notesInfo, setNotesInfo] = useState(false)

  const deleteNotes = async ()=>{
    const confirmDelete = window.confirm("Are you sure? You want to delete the note.")

    if(!confirmDelete){
      return 0
    }

    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/notes/delete`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "_id": props._id
      }
    })

    const parsedData = await data.json()
    if(parsedData.error){
      window.alert(parsedData.error)
    }
  }

  const onNotesClick = () =>{
    setNotesInfo(!notesInfo)
    console.log(props)
  }

  return (
    <>
    {notesInfo && <FullNotesInfo {...props} setActive={setNotesInfo}/>}
      <div className="notes-card-container__wrapper" >
        <div className="notes-card-content__wrapper flex flex-col" style={{gap: '5px'}} onClick={onNotesClick}>
          {props.contentEditable && <div className="notes-card-options__wrapper flex ">
            <div className="edit-notes-option__wrapper notes-card__option" onClick={()=>{props.isEdit(true)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#36396f" className="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
              </svg>
            </div>
            <div onClick={deleteNotes} className="delete-notes-option__wrapper notes-card__option">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#36396f" className="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
            </div>
          </div> }
          <h5 className='notes-card-title'>{props.title.slice(0,18)+"..."}</h5>
          <p className="notes-card-info__text des">{props.description.slice(0,30)+"..."}</p>
          {/* <h6>Subject: </h6> */}
          <p className='notes-card-info__text'>{props.subject} : {props.by} {props.verified && <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" fill="#ffd700"></path>

                  </svg>
          </>} </p>
        </div>
        <div className="notes-card-buttons__wrapper flex flex-center flex-gap-20">
          <a rel="noreferrer" target='_blank' href={props.note}><button className="primary-btn" ><span>Read</span></button></a>
        </div>
      </div>
    </>
  )
}
