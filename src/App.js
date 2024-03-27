import React,{useContext} from 'react'

import "./Assets/App.css"
import "./Assets/Media.css"

import Navbar from './Components/Navbar'
import Hero from "./Components/Hero"
import About from './Components/About'
import NotesHome from './Components/NotesHome'
import AdminReq from './Components/AdminReq'
import AdminStatus from './Components/AdminStatus'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Admin from './Components/Admin'
import AdminLogin from './Components/AdminLogin'
import AdminDash from './Components/AdminDash'
import MyUploads from './Components/MyUploads'

import userContext from "./context/user/UserContext";
import Manager from './Components/Manager'
import ManagerAdmins from './Components/ManagerAdmins'
import ManagerNotes from './Components/ManagerNotes'
import ManagerLogin from './Components/ManagerLogin'

export default function App() {
  const { setIsUserLoggedIn } = useContext(userContext)
  if(localStorage.getItem("UST")){
    setIsUserLoggedIn(true)
  }

  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={
        <> <Navbar list={[{path: "",name:"Home"},{path: "manager",name:"Manage"},{path: "admin",name:"Admin"},]}/><Hero/></>
        }/>
        <Route exact path='/about' element={
        <> <Navbar list={[{path: "",name:"Home"},{path: "about",name:"About"},{path: "admin",name:"Admin"},]}/><About/></>}
        />
        <Route exact path='/auth' element={
        <Login/>
        }/>
        <Route exact path='/notes' element={
        <><Navbar list={[{path: "",name:"Home"},{path: "notes",name:"Notes"},{path: "admin",name:"Admin"},]}/><NotesHome/></>
        }/>
        <Route exact path='/admin' element={
        <><Navbar list={[{path: "",name:"Home"},{path: "notes",name:"Notes"},{path: "admin",name:"Admin"},]}/><Admin/></>
        }/>
        <Route exact path='/admin-req' element={
        <><AdminReq/></>
        }/>
        <Route exact path='/admin-login' element={
        <><AdminLogin/></>
        }/>
        <Route exact path="/admin-dash" element={
        <><Navbar list={[{path: "admin-dash", name:"Home"},{path: "admin-setting",name:"Setting"}]}/><AdminDash/></>
        }/>
        <Route exact path="/admin-status" element={
        <><Navbar list={[{path: "", name:"Home"}]}/><AdminStatus/></>
        }/>
        <Route exact path="/admin/my-uploads" element={
        <><Navbar list={[{path: "admin-dash", name:"Home"}]}/><MyUploads/></>
        }/>
        <Route exact path='/manager' element={
          <><Navbar list={[{path: "manager", name:"Home"},{path: "manager/notes",name:"Notes"},{path: "manager/admins",name:"Admins"}]}/><Manager/></>
        }/>
        <Route exact path='/manager/admins' element={
          <><Navbar list={[{path: "manager", name:"Home"},{path: "manager/notes",name:"Notes"},{path: "manager/admins",name:"Admins"}]}/><ManagerAdmins/></>
        }/>
        <Route exact path='/manager/notes' element={
          <><Navbar list={[{path: "manager", name:"Home"},{path: "manager/notes",name:"Notes"},{path: "manager/admins",name:"Admins"}]}/><ManagerNotes/></>
        }/>
        <Route exact path='/manager/login' element={
          <><ManagerLogin/></>
        }/>
      </Routes>
    </Router>
    </>
  )
}