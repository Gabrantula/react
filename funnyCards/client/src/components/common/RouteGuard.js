import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const RouteGuard = ({
    children
}) => {

    const { isAuth } = useAuthContext()

    if (!isAuth) {
        return <Navigate to='/login' />
    }
    //outlet shte doide na mqstoto na edit page , zashtoto tuk ne podavame children
    return children ? children : <Outlet />

}