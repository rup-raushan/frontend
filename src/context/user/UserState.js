import { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) =>{
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    return (
        <UserContext.Provider value={{isUserLoggedIn,setIsUserLoggedIn}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;