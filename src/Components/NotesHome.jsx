import React, { useState ,useEffect } from "react";
import NotesCard from './NotesCard'
import Loading from './Loading'
import Alert from "./Alert";
import Filter from "./Filter";


export default function NotesHome() {
    const [alert, setAlert] = useState({status: false, msg: ""})
    // const [userName, setUserName] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [notes, setNotes] = useState([]);
    const [isFilterActive, setIsFilterActive] = useState(false)

    // const navigate = useNavigate()

    // const token = localStorage.getItem("UST")

    // if(!token){
    //     navigate("/auth")
    // }

    const toggleAlert= ()=>{
        setAlert({...alert, status: !alert.status})
    }

    // const getUserDetails = async  ()=>{
    //     setIsLoading(true)
    //     const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/auth/getUser`,{
    //         method: "post",
    //         headers: {
    //             "auth-token": token,
    //             "Content-type": "application/json"
    //         }
    //     })
    //     const parsedData = await data.json()
    //     if(parsedData.error){
    //         navigate("/auth")
    //     }

    //     setUserName(parsedData.name)
    //     // setIsLoading(false)
    // }


    const fetchNotes = async ()=>{
        // setIsLoading(true)
        const notesData = await fetch(`${process.env.REACT_APP_URL_HOST}api/notes/fetch?subject=all`,{
            headers: {
                "Content-type": "application/json"
            }
        })
        let jsonNotes = await notesData.json()
        jsonNotes = jsonNotes.reverse()
        setNotes(jsonNotes)
        setIsLoading(false)
    }

    useEffect(()=>{
    // getUserDetails()
    fetchNotes()
    // eslint-disable-next-line
    },[])

    const onFilter = async(isAdminSelected,filterItem) =>{
        const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/notes/filter?${!isAdminSelected?"subject":"admin"}=${filterItem}`,{
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        })
        const parsedData = await data.json()
        if(!parsedData.error){
             setNotes(parsedData)
        }else{
            setAlert({status: true,msg: parsedData.error,head: "Can't Filter"})
        }
        document.body.style.overflow = isFilterActive?"scroll":"hidden"
        setIsFilterActive(!isFilterActive)
    }

    const onFilteBtnClick = ()=>{
        document.body.style.overflow = isFilterActive?"scroll":"hidden"
        setIsFilterActive(!isFilterActive)
    }

  return (
    <>
    {alert.status&& <Alert toggleFunction={toggleAlert} msg={alert.msg} head={alert.head}/>}    
    {isLoading && <Loading/>}
    {isFilterActive && <Filter close={onFilteBtnClick} onFilter={onFilter}/>}
      <div className="whole-notes-home__wrapper main-bg" >
        <div className="greeting__wrapper">
            {/* <h3 className='greeting__text'>Namastey, {userName.split(" ")[0].charAt(0).toUpperCase()+userName.split(" ")[0].slice(1,userName.length+1)}!</h3> */}
        </div>
        <div className="options-selectors-container__wrapper flex flex-center flex-col">
            <div className="option-selector-options__buttons flex flex-gap-20 primary-btn" onClick={onFilteBtnClick}>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                </svg>
                </span>
                <span>Filter</span>
            </div>
        </div>
        <div className="greeting__wrapper">
            <h4 className='greeting__text my-4'>Recently Uploaded</h4>
        </div>
        <div className="notes-card__wrapper flex flex-center">
            {notes.map(note=>{
                return <NotesCard contentEditabl={false}  key={note._id} subject={note.subject} title={note.title} by={note.by} description={note.description} note={note.note} verified={note.verified}/>
            })}
        </div>
      </div>
    </>
  )
}
