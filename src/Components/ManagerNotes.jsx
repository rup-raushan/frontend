import React, { useEffect, useState } from 'react'
import NotesCard from './NotesCard'
import Alert from './Alert'
import { useNavigate } from 'react-router-dom'

const ManagerNotes = () => {
    const [alert, setAlert] = useState({status: false, msg: ""})
    const [notes, setNotes] = useState([])
    const [editNotes, setEditNotes] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
      const token = sessionStorage.getItem("MTK")
      if(!token){
        navigate("/manager/login")
      }
    },[])

    const fetchNotes = async()=>{
        const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/notes/fetch?subject=all`,{
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

    
    const toggleAlert= ()=>{
        setAlert({...alert, status: !alert.status})
    }

    useEffect(()=>{
        fetchNotes()
        //eslint
    },[])

    return (
        <>
        {alert.status&& <Alert toggleFunction={toggleAlert} msg={alert.msg} head={alert.head}/>}
        <div className="hero__wrapper">
            <div className="hero-main__wrapper manager-main__wrapper">
                <div className="uploads-full-scr__wrapper flex flex-center">
                    <div className="uploads-main-content__wrapper flex flex-col">
                        <div className="uploads-heading__wrapper">
                            <h5 className="uploads-heading__text">Notes</h5>
                        </div>
                        <div className="uploads-card-whole__wrapper flex">
                        {notes.map(note=>{
                                return <NotesCard verified={note.verified} _id={note._id} contentEditable={true}  key={note._id} subject={note.subject} title={note.title} by={note.by} description={note.description} note={note.note} isEdit={setEditNotes}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
}

export default ManagerNotes
