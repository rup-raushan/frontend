import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from "./Alert";

export default function AdminReq() {
    const [reqBody,setReqBody]= useState({name:"",adminID:"",email:"",password:"",confirmPassword:"",})
    const [alert, setAlert] = useState({status: false, msg: ""})
    const navigate = useNavigate()

    const toggleAlert= ()=>{
        setAlert({...alert, status: !alert.status})
    }

    const onRequest = async (e)=>{
        e.preventDefault()
        // For Development
        const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/admin/request`,{
            // For production
        // const data = await fetch(`https://alert-wasp-sunbonnet.cyclic.app/api/admin/request`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(reqBody)
        })
        const parsedData = await data.json()
        if(parsedData.error){return setAlert({status: true, head: "Can not Sing in",  msg: parsedData.error})} 

        if(parsedData.errors){return  setAlert({status: true, head: "Can not Sing in",  msg: parsedData.errors[0].msg}) }

        if(parsedData.authToken){
            localStorage.setItem("ADT", parsedData.authToken)
        }else{
            return setAlert({status: true, head: "Can not Request",  msg: parsedData.error})
        }
        setAlert({status: true, head: "Success",  msg: "Thanks for Requesting"})

        setTimeout(() => {
            navigate('/admin')
        }, 500);
    }

    const onChange = (e)=>{
        e.preventDefault()
        setReqBody({...reqBody,[e.target.name]: e.target.value})
    }

  return (
    <>
    {alert.status&& <Alert toggleFunction={toggleAlert} msg={alert.msg} head={alert.head}/>}
      <div className="req admin-req-whole-container__wrappper flex flex-center">
        <div className="req admin-req-container__wrapper flex flex-col">
            <Link to="/admin" className="req back-button__wrapper flex flex-center">
                <h5 style={{fontSize: "20px", cursor: "pointer"}}>X</h5>
            </Link>
            <div className="req admin-req-container-head__wrapper gradient-text__wrapper">
                <h4 className="req admin-req-container-head__text text-center">Request for a admin</h4>
                <h6 className="req inst__text text-center my-4 my-4">Fill the following details.</h6>
            </div>
            <div className="req admin-req-content__wrapper flex flex-center">
                <form className="req admin-req__form flex flex-center flex-col"
                        onSubmit={onRequest}
                        >
                    <div className="req admin-req-whole-inputs__wrapper flex flex-center">
                        <div className="req admin-req-container__input__wrapper flex flex-center">
                            <label htmlFor="name" className="req admin-req-container__input__name p-normal">Name</label>
                            <input onChange={onChange}
                                type="text"
                                className="req admin-req-input__text"
                                required
                                name="name"
                                id="name"
                                placeholder="Enter Name"/>
                        </div>
                        <div className="req admin-req-container__input__wrapper flex">
                            <label htmlFor="adminID" className="req admin-req-container__input__name p-normal">Admin Id</label>
                            <input onChange={onChange}
                                type="text"
                                className="req admin-req-input__text"
                                required
                                name="adminID"
                                id="adminID"
                                pattern='[a-z]*'
                                placeholder="Enter Admin Id "/>
                        </div>
                        <div className="req admin-req-container__input__wrapper flex">
                            <label htmlFor="email" className="req admin-req-container__input__name p-normal">Email</label>
                            <input onChange={onChange}
                                type="email"
                                className="req admin-req-input__text"
                                required
                                name="email"
                                id="email"
                                placeholder="Enter Email"/>
                        </div>
                        <div className="req admin-req-container__input__wrapper flex">
                            <label htmlFor="code" className="req admin-req-container__input__name p-normal">Code</label>
                            <input onChange={onChange}
                                type="text"
                                className="req admin-req-input__text"
                                required
                                name="code"
                                id="code"
                                pattern='[0-9]*'
                                placeholder="Enter a private Code"/>
                        </div>
                        <div className="req admin-req-container__input__wrapper flex">
                            <label htmlFor="password" className="req admin-req-container__input__name p-normal">Password</label>
                            <input onChange={onChange}
                                type="password"
                                className="req admin-req-input__text"
                                required
                                name="password"
                                id="password"
                                placeholder="Enter Password"/>
                        </div>
                        <div className="req admin-req-container__input__wrapper flex">
                            <label htmlFor="confirmPassword" className="req admin-req-container__input__name p-normal">Confirm Password</label>
                            <input onChange={onChange}
                                type="password"
                                className="req admin-req-input__text"
                                required
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Renter Passoword"/>
                        </div>
                    </div>
                    <div className="req login-container-buttons__wrapper flex flex-center">
                        <button 
                            className="req req login-container-submit-button primary-btn" 
                            type="submit">

                                <span>Send Request</span>
                        </button>
                        <button 
                            className="req login-container-reset-button secondary-btn" 
                            type="reset">
                                <span>Reset</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}
