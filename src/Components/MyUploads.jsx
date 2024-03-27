import React, { useContext, useEffect, useState } from 'react'
import Alert from './Alert'
import NotesCard from "./NotesCard"
import adminContext from "../context/admin/AdminContext"
import { useNavigate } from 'react-router-dom'
import EditNotes from './EditNotes'

const MyUPloads = (props) => {
  const {adminData} = useContext(adminContext)
  const [notes, setNotes] = useState([])
  const [alert, setAlert] = useState({status: false, msg: ""})
  const [editNotes, setEditNotes] = useState(false)
  const navigate = useNavigate()

  if(!localStorage.getItem("ADT")) navigate("/admin-login")

  if(adminData.name) sessionStorage.setItem('admin-name',adminData.name)
  
  const fetchNotes = async()=>{
    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/notes/filter?admin=${adminData.name|| sessionStorage.getItem('admin-name')}`,{
      method: "GET",
      headers: {
          "Content-type": "application/json"
      },
    })
    const parsedData = await data.json()
    if(!parsedData.error){
        setNotes(parsedData)
    }else{
        return setAlert({status: true,msg: parsedData.error,head: "Can't Filter"})
    }
    setNotes(parsedData.reverse())
  }

  useEffect(()=>{
    fetchNotes()
    // eslint-disable-next-line
  },[])

  const toggleAlert= ()=>{
    setAlert({...alert, status: !alert.status})
  }

  return (
    <>
    {editNotes && <EditNotes/>}
    {alert.status && <Alert toggleFunction={toggleAlert} msg={alert.msg} head={alert.head}/>}
    <div className="uploads-full-scr__wrapper flex flex-center main-bg">
        <div className="uploads-main-content__wrapper flex flex-col">
          <div className="uploads-heading__wrapper">
            <h5 className="uploads-heading__text">Your Uploads</h5>
          </div>
          <div className="uploads-card-whole__wrapper flex">
          {notes.map(note=>{
                return <NotesCard verified={note.verified} _id={note._id} contentEditable={true}  key={note._id} subject={note.subject} title={note.title} by={note.by} description={note.description} note={note.note} isEdit={setEditNotes}/>
            })}
          </div>
        </div>
    </div>
    </>
  )
}

export default MyUPloads