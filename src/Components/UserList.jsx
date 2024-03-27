import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import userContext from '../context/user/UserContext'

const UserList = () => {
    const {setIsUserLoggedIn} = useContext(userContext)
    const navigate = useNavigate()
    const onLogout = ()=>{
        localStorage.clear()
        setIsUserLoggedIn(false)
        navigate('/auth')
    }

  return (
    <>
        <div className="user-list-whole__wrapper">
            <div className="user-list-content__wrapper">
                <ul className="user__list flex flex-col flex-gap-20">
                    <li className="user-list__items p-normal"><span>Profile</span></li>
                    <li className="user-list__items p-normal"><span>Settings</span></li>
                    <li className="user-list__items"><p className='logout__button p-normal' onClick={onLogout}><span>Logout</span></p></li>
                </ul>
            </div>
        </div> 
    </>
  )
}

export default UserList
