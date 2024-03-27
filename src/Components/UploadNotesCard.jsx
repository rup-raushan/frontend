import React, { useEffect } from 'react'
import { useState } from 'react'
import Alert from './Alert'

const UploadNotesCard = (props) => {
    const [alert, setAlert] = useState({status: false, msg: ""})
    const [notesBody, setNotesBody] = useState({title:'',description:"",code:""})
    
    const token = sessionStorage.getItem("MTK")?sessionStorage.getItem("MTK"):localStorage.getItem("ADT")
    
    const onUpload = async (e) => {
        e.preventDefault()
        const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/notes/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "authToken":token
            },
            body: JSON.stringify(notesBody)
        })
        const parsedData = await data.json()

        if(parsedData.status){
            setAlert({status: true, head: "Success",  msg: "Uploaded"})
        }

        if(parsedData.error){return setAlert({status: true, head: "Can not upload",  msg: parsedData.error})} 

        if(parsedData.errors){return  setAlert({status: true, head: "Can not upload",  msg: parsedData.errors[0].msg}) }

    }
    
    const onChange = (e) =>{
        e.preventDefault()
        setNotesBody({...notesBody, [ e.target.name]: e.target.value})
    }
    
    const toggleAlert= ()=>{
        setAlert({...alert, status: !alert.status})
    }

    useEffect(()=>{
        document.body.style.overflowY = "scroll"
        document.body.style.overflowX = "hidden"
        return () =>{
            document.body.style.overflowY = "auto"
            document.body.style.overflowX = "auto"   
        }
    },[])
    
  return (
    <div className='upload-contaier-full-scr__wrapper '>
        {alert.status&& <Alert toggleFunction={toggleAlert} msg={alert.msg} head={alert.head}/>}
        <div className="upload-container-whole__wrapper">
            <div className="upload-container-head__wrapper">
                <div className="head-name__wrapper">
                    <h5 className="head-name__text text-center">Aeronotes</h5>
                </div>
            </div>
            <div className="upload-container-content__wrapper">
                <form className="upload-container__form flex flex-center flex-col flex-gap-20" onSubmit={onUpload} encType='multipart/form-data'>
                    <div className="upload-container-whole-input__wrapper">
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="title" className="upload-contaier__label p-normal">Title</label>
                            </div>
                            <input 
                            id='title'
                            name='title'
                            type="text"
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter Title'/>
                        </div>
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="description" className="upload-contaier__label p-normal">Description</label>
                            </div>
                            <input 
                            id='description'
                            name='description'
                            type="text"
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter Description'/>
                        </div>
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="subject" className="upload-contaier__label p-normal">Subject</label>
                            </div>
                            <select
                            id='subject' 
                            name='subject'
                            type="text"
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter Title'>
                                <option value="other">Other</option>
                                <option value="Science">Science</option>
                                <option value="Social Science">Social Science</option>
                                <option value="Hindi">Hindi</option>
                                <option value="English">English</option>
                                <option value="Computer">Computer</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="General Knowledge">General Knowledge</option>
                            </select>
                        </div>
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="note" className="upload-contaier__label p-normal">File URL</label>
                            </div>
                            <input 
                            id='note'
                            name='note'
                            type="url"
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter URL'/>
                        </div>
                        <div className="input-container__wrapper">
                            <div className="input-container-label__wrapper">
                                <label htmlFor="code" className="upload-contaier__label p-normal">Code</label>
                            </div>
                            <input 
                            id='code'
                            name='code'
                            type="password"
                            pattern='[0-9]*'
                            onChange={onChange}
                            className="upload-contaier-input__text"  required
                            placeholder='Enter Your Code'/>
                        </div>
                    </div>
                    <div className="upload-container-buttons__wrappper flex flex-gap-20">
                        <div className="upload-container-submit-btn-wrapper">
                            <button type="submit" className="primary-btn"><span>Upload</span></button>
                        </div>
                        <div className="upload-container-sec-btn-wrapper">
                            <button 
                            type="reset" 
                            className="secondary-btn"
                            onClick={()=>{props.cancel(false)}}><span>Cancel</span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UploadNotesCard
