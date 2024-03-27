import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = (props) => {
  const location = useLocation()
  return (
    <>
      <div className={`sidebar-whole__wrapper ${props.status?"active" :""}`}>
        <div className="sidebar-main__wrapper flex flex-center flex-col">
            <div className="sidebar-main-list-container__wrapper">
                <ul className="sidebar__list flex flex-center flex-col">
                    {props.list.map(list=>{
                      return  <li  key={list.path}  className={`cur-poi p-normal sidebar-list-items ${location.pathname===`/${list.path}`?"active": ""}`}>
                                <Link to={`/${list.path}`}>
                                  <h5 className={`sidebar-list__text`}>
                                    {list.name}
                                    </h5>
                                  </Link>
                                </li>
                    })}
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
