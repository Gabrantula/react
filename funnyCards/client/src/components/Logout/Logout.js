import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Logout() {
    const { onLogout } = useContext(AuthContext)

    useEffect(() => {
        onLogout()
        //?
        sessionStorage.clear()
        
    },[onLogout])
    return (
        <Navigate to="/" />
    )
}
