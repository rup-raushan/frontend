import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UploadNotesCard from './UploadNotesCard'
import Loading from './Loading'
import MyUploads from './MyUploads'
import adminContext from '../context/admin/AdminContext';

export default function AdminDash() {

  const {adminData,setAdminData} = useContext(adminContext)
  const navigate = useNavigate()
  const [upload,setUpload] = useState(false)
  const [loading,setLoading] = useState(false)
  const [myUpload, setMyUpload] = useState(false)

  const token = localStorage.getItem("ADT")
  if(!token){
    navigate("/")
  }
  
  const getUserDetail = async ()=>{
    setLoading(true)
    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/admin/get`,{
      method: 'POST',
      headers: {
        'authToken' : token,
        "Content-type": "application/json"
      }
    })
    const parsedData = await data.json()

    if(parsedData.error)return navigate("/admin")

    setAdminData({...parsedData,isLoggedin: true})
    setLoading(false)
  }
  
  useEffect(()=>{
    getUserDetail()
    // eslint-disable-next-line
  },[])

  const uploadHandler = () =>{
      setUpload(true)
  }

  const toggleMyUpload = () =>{
      setMyUpload(!myUpload)
  }

  return (

    <>
    {myUpload && <MyUploads close={toggleMyUpload} adminName={adminData.name}/>}
    {upload && <UploadNotesCard cancel={setUpload}/>}
    {loading && <Loading/>}
      <div className="whole-admn-dash-container__wrapper main-bg" style={{height: "100vh"}}>
        <div className="whole-admin-dash-header__wrapper flex flex-center">
          <div className="header-content-wrapper flex flex-center flex-col">
            <div className="header-profile__wrapper">
              <div className="header-profile__main flex flex-center"><h1 className="profile-name__text">{adminData.name.charAt(0).toUpperCase()}</h1></div>
            </div>
            <div className="admin-dash-header-name__wrapper flex flex-center flex-col">
              <div className="admin-dash-name__wrapper main">
                <h4 className="admin-dash-header-name__text">{adminData.name}</h4>
              </div>
              <div className="admin-dash-name__wrapper sec">
                <p className="admin-dash-header-name__text email">{adminData.email}</p>
              </div>
            </div>
          </div>  
        </div>
        <div className="admin-dash-content__wrapper flex flex-center my-4">
          {/* For uploading Notes */}

          <div className="admin-dash-content-buttons__wrapper flex flex-center flex-col">
            <div className="admin-dash-main-button__wrapper">
              <button onClick={uploadHandler} className="primary-btn"><span>Upload Notes</span></button>
            </div>
            <div className="admin-dash-sec-button__wrapper">
             <Link to="/admin/my-uploads" ><button className="secondary-btn" onClick={toggleMyUpload}><span>My Uploads</span></button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
