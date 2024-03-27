import React, { useState , useContext} from "react";
import Loading from "./Loading"
import {useNavigate} from "react-router-dom"
import Alert from "./Alert";
import userContext from "../context/user/UserContext";

export default function Login() {
    const { setIsUserLoggedIn } = useContext(userContext)
    const [isLogin, setIsLogin] = useState(true);
    const [isLoding, setIsLoding] = useState(false);
    const [loginBody, setLoginBody]= useState({username: "", password: ""})
    const [singUpBody, setSingUpBody] = useState({name: "", username: "", email: "", password:"", confirmPassword: ""})
    const [alert, setAlert] = useState({status: false, msg: ""})

    const navigate = useNavigate()

    const onLoginChange = (e)=>{
        e.preventDefault()
        setLoginBody({...loginBody, [ e.target.name]: e.target.value})
    }

    const toggleAlert= ()=>{
        setAlert({...alert, status: !alert.status})
    }

    const onSingChange = (e)=>{
        e.preventDefault()
        setSingUpBody({...singUpBody, [ e.target.name]: e.target.value})
    }

    const toggleLogin = ()=>{
        setIsLogin(!isLogin)
    }

    const onSingIn = async (e)=>{
        e.preventDefault()
        setIsLoding(true)
        const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/auth/createUser`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(singUpBody)
        })
        const parsedData = await data.json()

        setIsLoding(false)
        if(parsedData.error){return setAlert({status: true, head: "Can not Sing in",  msg: parsedData.error})} 

        if(parsedData.errors){return  setAlert({status: true, head: "Can not Sing in",  msg: parsedData.errors[0].msg}) }

        if(parsedData.authToken){
            localStorage.setItem("UST", parsedData.authToken)
        }else{
            return setAlert({status: true, head: "Can not Log in",  msg: parsedData.error})
        }
         setAlert({status: true, head: "Success",  msg: "Account Created"})

         setIsUserLoggedIn(true)

         setTimeout(() => {
            navigate('/notes')
         }, 1000);

    }

    const onLogin = async (e)=>{
        e.preventDefault()
        setIsLoding(true)
        console.log(loginBody)
        const data = await fetch(`${process.env.REACT_APP_URL_HOST}api/auth/login`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginBody)
        })
        const parsedData = await data.json()
        setIsLoding(false)
        if(parsedData.error){
            return setAlert({status: true, head: "Can not Log in",  msg: parsedData.error})
        }
        if(parsedData.errors){return  setAlert({status: true, head: "Can not Log in",  msg: parsedData.errors[0].msg}) }

        localStorage.setItem("UST", parsedData.authToken)
        console.log(parsedData)
         setAlert({status: true, head: "Success",  msg: "Logged in"})

        setIsUserLoggedIn(true)
         setTimeout(() => {
            navigate('/notes')
         }, 1000);
    }

    return (
        <>{isLoding && <Loading/>}
            <div className="content">
                <div className={`login-container__wrapper ${!isLogin && "sing"}`}>
                    <div className="main-login-container__wrapper">
                        <div className="login-container flex flex-center flex-col">
                            <div className="login-container__heading">
                                <h4 className="login-container__heading__text">
                                    {isLogin ? "Login" : "Sing in"}
                                </h4>
                            </div>
                            <form className="login-container__form__wrapper"
                                  onSubmit={isLogin?onLogin:onSingIn}
                                  >
                                <div className={`login-container__inputs__wrapper ${!isLogin && "sing"}`} >
                                    {!isLogin && (
                                        <div className="login-container__input__wrapper">
                                            <label
                                                htmlFor="name"
                                                className="login-container__input__name p-normal"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="login-input__text"
                                                onChange={onSingChange}
                                                required
                                                name="name"
                                                id="name"
                                                placeholder="Enter Name"
                                                />
                                        </div>
                                    )}
                                    <div className="login-container__input__wrapper">
                                        <label
                                            htmlFor="username"
                                            className="login-container__input__name p-normal"
                                        >
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="login-input__text"    
                                            onChange={isLogin?onLoginChange:onSingChange}
                                            required
                                            name="username"
                                            id="username"
                                            placeholder="Enter Username"
                                        />
                                    </div>
                                    {!isLogin && (
                                        <div className="login-container__input__wrapper">
                                            <label
                                                htmlFor="email"
                                                className="login-container__input__name p-normal"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                className="login-input__text"
                                                onChange={onSingChange}
                                                required
                                                name="email"
                                                id="email"
                                                placeholder="Enter Email"
                                                />
                                        </div>
                                    )}
                                    <div className="login-container__input__wrapper">
                                        <label
                                            htmlFor="password"
                                            className="login-container__input__name p-normal"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="login-input__text"
                                            onChange={isLogin?onLoginChange:onSingChange}
                                            required
                                            name="password"
                                            id="password"
                                            placeholder="Enter Password"
                                            
                                        />
                                    </div>
                                    {!isLogin && (
                                        <div className="login-container__input__wrapper">
                                            <label
                                                htmlFor="confirmPassword"
                                                className="login-container__input__name p-normal"
                                            >
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                className="login-input__text"
                                                onChange={isLogin?onLoginChange:onSingChange}
                                                required
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                placeholder="Renter Password"
                                                />
                                        </div>
                                    )}
                                </div>
                                    {alert.status&& <Alert toggleFunction={toggleAlert} msg={alert.msg} head={alert.head}/>}
                                <div className="login-container-buttons__wrapper">
                                    <button 
                                        className="login-container-submit-button primary-btn" 
                                        type="submit"
                                        >

                                            <span>{isLogin?"Login":"Sing in"}</span>
                                    </button>
                                    <button 
                                        className="login-container-reset-button secondary-btn" 
                                        type="reset">
                                            <span>Reset</span>
                                    </button>
                                </div>
                            </form>
                            {isLogin && <p className="p-normal forgot-pass__text"> forgot password </p>}
                            <p className="p-normal bottom__text text-center">{isLogin? <p>New in Aeronotes <span onClick={toggleLogin}>Sign Up</span></p>:<p>Already in Aeronotes <span onClick={toggleLogin}>Log in</span></p>}</p>
                        </div>
                    </div>
                    {/* <div className="aside-login-container__wrapper">
                        <div className="aside-container__logo__wrapper flex flex-center">
                            <img src={brandLogo} alt=".." width={"90px"} style={{marginBottom: "20px",borderRadius: "16px"}}/>
                        </div>
                        <div className="aside-container__text__wrapper">
                            <h5>{isLogin? "New in Aeronotes":"Already in Aeronotes"}</h5>
                        </div>
                        <div className="aside-container-button__wrapper">
                            <button className="toggle-login-button primary-btn" onClick={toggleLogin}><span>{!isLogin?"Login":"Sing in"}</span></button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
