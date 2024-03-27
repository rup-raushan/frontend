import { useState } from "react";
import AdminContext from "./AdminContext"

const AdminState = (props) =>{
    const [adminData, setAdminData] = useState({name:"",email: "", isLoggedin : false})

    return (
        <AdminContext.Provider value={{adminData, setAdminData}}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminState;