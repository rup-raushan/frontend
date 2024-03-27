import React, { useState } from 'react'

const Filter = (props) => {

  const token = localStorage.getItem('UST')
  const subjects = ['English',"Hindi","Science","Social Science","Mathematics"]
  const [isAdminSelected,setIsAdminSelected] = useState(false)
  const [admins,setAdmins] = useState([])
  const [filterItem, setFilterItem] = useState("")

  const getAdminNames = async ()=>{
    const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/admin/get/names?token=${token}`,{
      headers:{
        'Content-type': 'application/json'
      }
    })
    const parsedData = await data.json()
    setAdmins(parsedData.names)
  }

  const formChange = (e) =>{
    setFilterItem(e.target.value)
  }

  const subSelect = () =>{
    setIsAdminSelected(false)
    return
  }

  const adminSelect = () =>{
    getAdminNames()
    setIsAdminSelected(true)
    return
  }

  return (
    <div className='filter-full-scr__wrapper flex flex-center'>
        <div className="filter-main-box__wrapper flex flex-col">
            <div className="filter-head__wrapper flex">
              <h5>Filter notes</h5>
            </div>
                <form className="filter-form" onChange={formChange}>
            <div className="filter-main-content__wrapper flex">
              <div className="filter-sidebar__wrapper">
                <div className="filter-sidebar__list">
                  <ul>
                    <li onClick={subSelect} key="sub"><h6>Subjects</h6></li>
                    <li onClick={adminSelect} key="admin"><h6>Admins</h6></li>
                  </ul>
                </div>
              </div>
              <div className="filter-options__wrapper">
                  <ul>
                    {(isAdminSelected?admins:subjects).map(e=>{
                      return  <li className='filter__option' key={e}>
                                <input type="radio" value={e} id={`${e}-check`} name={isAdminSelected?'admin':"subject"} />
                                <label htmlFor={`${e}-check`}><h6>{e}</h6></label>
                              </li>
                    })}
                  </ul>
              </div>
            </div>
            <div className="filter-box-buttons__wrapper flex flex-gap-20" style={{marginTop: "10px"}}>
              <button className="secondary-btn cancel-filter__button" onClick={props.close}><span>Cancel</span></button>
              <button className="primary-btn apply-filter__button" onClick={(e)=>{
                e.preventDefault()
                props.onFilter(isAdminSelected,filterItem)}
              }><span>&nbsp;Apply&nbsp;</span></button>
            </div>
                </form>
        </div>
    </div>
  )
}

export default Filter
