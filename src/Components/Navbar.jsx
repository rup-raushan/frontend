import React,{ useContext, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import brandLogo from "../aeronotesSvg.svg"
import UserList from './UserList'
import userContext from '../context/user/UserContext'
import Sidebar from './Sidebar'
import BottomBar from './BottomBar'

export default function Navbar(props) {
  const {isUserLoggedIn} = useContext(userContext)
  const location = useLocation()
  const [userList,setUserList] = useState(false)
  const [isHamActive,setIsHamActive] = useState(false)

  const onUserClick= ()=>{
    setUserList(!userList)
  }

  return (
    <>
      <div className='navbar__wrapper'>
        {/* <div className="hamburger-logo__wrapper">
          <div className="hamburger__logo cur-poi" onClick={()=>{setIsHamActive(!isHamActive)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </div>
        </div> */}
        <div className='brand-logo-name__wrapper flex flex-center' >
          <img src={brandLogo} alt="..."  height={"48"} style={{borderRadius: '4px'}}/>
          {/* <h5 className="brand-name">Aeronotes</h5> */}
        </div>
          <div className="navigation__wrapper">
          <ul className="nav-list">
              {props.list.map((e)=>{
                return  <li  key={e.path}  className={`p-normal nav-list__items ${location.pathname===`/${e.path}`?"active": ""}`}><Link to={`/${e.path}`}><span className={`${location.pathname===`/${e.path}`?"active": ""}`}>{e.name}</span></Link></li>
              })}
          </ul>
        </div>
        <div className="navbar-button__wrapper">
          {!isUserLoggedIn ?  <Link to="/auth" className="primary-btn login__button"><span>Login</span></Link>:
                              <><h6 onClick={onUserClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="#001a75" class="bi bi-person-fill" viewBox="0 0 16 16">
                                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                </svg></h6></>}
          {userList && <UserList/>}
        </div>
      </div>
      {isHamActive && <Sidebar list={props.list} status={isHamActive} setStatus={setIsHamActive}/>}

      <BottomBar list={props.list}/>
      </>
  )
}
