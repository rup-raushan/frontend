import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from "./Alert";


const ManagerLogin = () => {
    const [alert, setAlert] = useState({status: false, msg: ""})
    const [loginBody, setLoginbody] = useState({adminID: "",password: ""})
    const navigate = useNavigate()

    const toggleAlert= ()=>{
        setAlert({...alert, status: !alert.status})
    }

    const onChange =(e)=>{
        e.preventDefault()
        setLoginbody({...loginBody,[e.target.name]: e.target.value})
    }

    const onLogin = async (e)=>{
        e.preventDefault()
        const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/manager/login`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginBody)
        })
        const parsedData = await data.json()
        if(parsedData.error){
            return setAlert({status: true, head: "Can not Log in",  msg: parsedData.error})
        }
        if(parsedData.errors){return  setAlert({status: true, head: "Can not Log in",  msg: parsedData.errors[0].msg}) }

        if(parsedData.authToken){
        sessionStorage.setItem("MTK", parsedData.authToken)
        }else{
            return setAlert({status: true, head: "Can not Log in", msg: "Somthing went wrong"})
        }
         setAlert({status: true, head: "Success",  msg: "Logged in"})

         setTimeout(() => {
            navigate('/manager')
         }, 1000);
    }
    return (
        <>
        {alert.status&& <Alert toggleFunction={toggleAlert} msg={alert.msg} head={alert.head}/>}    
        <div className="admin-req-whole-container__wrappper flex flex-center">
            <div className="admin-req-container__wrapper flex flex-col">
                <Link to="/" className="back-button__wrapper flex flex-center">
                    <h5 style={{fontSize: "20px", cursor: "pointer"}}>X</h5>
                </Link>
                <div className="admin-req-container-head__wrapper gradient-text__wrapper">
                    <h4 className="admin-req-container-head__text text-center">Log in</h4>
                    <h6 className="inst__text text-center my-4 my-4">Fill the following details.</h6>
                </div>
                <div className="admin-login-content__wrapper flex flex-center">
                    <form className="admin-login__form flex flex-center flex-col"
                            onSubmit={onLogin}>
                        <div className="admin-login-whole-inputs__wrapper flex flex-center flex-col">
                            <div className="admin-login-input__wrapper flex flex-center flex-col">
                                    <label htmlFor="password" className="admin-login-container-input__name p-normal">Password</label>
                                    <input onChange={onChange}
                                        type="password"
                                        className="admin-req-input__text"
                                        required
                                        name="password"
                                        id="password"
                                        placeholder="Enter Password"/>
                            </div>
                            <div className="admin-login-input__wrapper flex flex-center flex-col">
                                    <label htmlFor="code" className="admin-login-container-input__name p-normal">Code</label>
                                    <input onChange={onChange}
                                        type="password"
                                        className="admin-req-input__text"
                                        required
                                        name="code"
                                        id="code"
                                        placeholder="Enter Code"/>
                            </div>
                        </div>
                        <div className="login-container-buttons__wrapper flex flex-center">
                            <button 
                                className="login-container-submit-button primary-btn" 
                                type="submit">
    
                                    <span>Login</span>
                            </button>
                            <button 
                                className="login-container-reset-button secondary-btn" 
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

export default ManagerLogin
