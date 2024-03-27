import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'

const ManagerAdmins = () => {
  const navigate = useNavigate()
  const [admins,setAdmins] = useState([])
  const [reqAdmins,setReqAdmins] = useState([])

  const getAdminNames = async ()=>{
    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/admin/fetch`,{
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      }
    })
    const parsedData = await data.json()
    setAdmins(parsedData)
  }

  const getReqAdminNames = async ()=>{
    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/admin/fetch/request`,{
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      }
    })
    const parsedData = await data.json()
    setReqAdmins(parsedData)
  }

  const onDelete = async (admin) =>{
    console.log(admin)
    const confirm = window.confirm(`Do you really want to remove ${admin.name} as an admin?`)
    if(!confirm)return 
    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/manager/admin/delete`,{
      method: "DELETE",
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({adminID : admin.adminID, token: sessionStorage.getItem("MTK")})
    })
    const parsedData = await data.json()
    console.log(parsedData)
    getAdminNames()
    getReqAdminNames()
  }

  const approveAdmin = async (admin) =>{
    const confirm = window.confirm(`Do you really want to make ${admin.name} an admin`)
    if(!confirm) return 
    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/manager/approve`,{
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify({adminID : admin.adminID, token: sessionStorage.getItem("MTK")})
    })
    const parsedData = await data.json()
    getAdminNames()
    getReqAdminNames()
  }

  useEffect(()=>{
    const token = sessionStorage.getItem("MTK")
    if(!token){
      navigate("/manager/login")
    }
    getAdminNames()
    getReqAdminNames()
  },[])

  return (
    <>
    <div className="hero__wrapper admin">
        <div className="hero-main__wrapper manager-main__wrapper admin">
          <h4>Admins of Aeronotes</h4>
          <div className="admin-name__wrapper">
            {admins.map((e)=>{
              return <><div className="admin-name__card">
                <div className="admin-profile"><h6>{e.name.slice(0,1).toUpperCase()}</h6></div>
                <div className='admin-card__content'>
                  <h6 className='name'>{e.name}</h6>
                  <span className="p p-normal email">{e.email.slice(0,18)}</span>
                </div>
                <div className="admin-options" >
                    <div className="remove-admin__button"onClick={()=>{onDelete(e)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#36396f" className="bi bi-trash-fill" viewBox="0 0 16 16">
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                    </div>
                </div>
                </div></>
            })}
          </div>

          <h4>Requests for Admin.</h4>
          <div className="admin-name__wrapper">
          {reqAdmins.length == 0 ? <p>No Request yet</p> :  reqAdmins.map((e)=>{
            return<><div className="admin-name__card req">
            <div className="admin-profile"><h6>{e.name.slice(0,1).toUpperCase()}</h6></div>
            <div className='admin-card__content'>
              <h6 className='name'>{e.name}</h6>
              <span className="p p-normal email">{e.email.slice(0,20)}</span>
            </div>
            <div className="admin-options" >
                <div className="approve-admin__button" onClick={()=>{approveAdmin(e)}}> 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.9375 6.15241C20.1297 6.6702 19.8657 7.2457 19.3479 7.43782C18.289 7.83068 17.1274 8.64841 15.9514 9.72885C14.7866 10.799 13.6641 12.074 12.6793 13.3107C11.6965 14.5449 10.8631 15.7254 10.2751 16.5981C9.98143 17.0339 9.74984 17.3917 9.59237 17.6394C9.51365 17.7632 9.45351 17.8594 9.41344 17.924L9.36861 17.9966L9.35785 18.0142L9.35545 18.0182C9.17177 18.3209 8.84114 18.5048 8.48701 18.5002C8.13282 18.4956 7.8075 18.304 7.63176 17.9964C6.68252 16.3352 5.89836 15.5873 5.42654 15.257C5.19208 15.0929 5.03257 15.0302 4.96242 15.0079C4.94586 15.0026 4.93369 14.9994 4.92605 14.9976C4.4083 14.9597 4 14.5277 4 14.0003C4 13.448 4.44772 13.0003 5 13.0003C5.118 13.0082 5.39696 13.0397 5.56883 13.102C5.84243 13.1891 6.18292 13.3452 6.57346 13.6185C7.13325 14.0104 7.79014 14.6389 8.5059 15.6453C8.54176 15.5916 8.57862 15.5367 8.61646 15.4805C9.22514 14.5772 10.0902 13.3515 11.1148 12.0648C12.1374 10.7807 13.3311 9.42028 14.5983 8.25607C15.8543 7.10213 17.2404 6.08653 18.6521 5.56272C19.1699 5.37061 19.7454 5.63462 19.9375 6.15241Z" fill="#141B34"/>
                  </svg>
                </div>
                <div className="remove-admin__button" onClick={()=>{onDelete(e.name)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#36396f" className="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg>
                </div>
            </div>
            </div></>
          })}
          </div>
        </div>
    </div>    
    </>
  )
}

export default ManagerAdmins
