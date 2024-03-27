import React, { useEffect, useState } from 'react'

const AdminStatus = () => {
  const [response,setResponse] = useState({status: ''})


  const fetchStatus = async ()=>{
    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/admin/status`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ADT': localStorage.getItem('ADT')
      }
    })
    const parsedData = await data.json()
    setResponse(parsedData)
  }

  useEffect(()=>{
    fetchStatus()
  },[])

  return (
    <>
      <div className="admin-status-whole-container-wrapper main-bg flex flex-center" style={{height: "100vh"}}>
        <div className={`admin-status-main-container-wrapper flex flex-center flex-col ${response.status}`}>
          <div className="admin-status-heading__wrapper">
            <div className="admin-status-head-text__wrapper">
              <h4 className="admin-status-head__text">Your request for admin ID <b>{response.id}</b> is</h4>
            </div>
          </div>
          <div className="admin-status-main-content__wrapper">
            <div className={`admin-status__box ${response.status}`}>
              <h5 className={`admin-status__text ${response.status}`}>{response.status}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminStatus
