import { createContext, useContext } from "react"
import { useNavigate } from 'react-router-dom'

import { authServiceFactory } from '../services/AuthService'
import { useSessionStorage } from "../hooks/useSessionStorage"

// tova e context
export const AuthContext = createContext()

// tova e rapper component koito izpolzva children
export const AuthProvider = ({
    children,
}) => {
    //az
    //const [formErrors, setFormErrors] = useState({})

    const [auth, setAuth] = useSessionStorage('auth', {})
    const AuthService = authServiceFactory(auth.accessToken)
    const navigate = useNavigate()

    const onLogout = async () => {
        await AuthService.logout()
        //?
        sessionStorage.clear()
        // sessionStorage.removeItem()
        setAuth({})

    }

    const onRegisterSubmit = async (values) => {

        const { rePass, ...registerData } = values

        if (rePass !== registerData.password) {
            return
        }

        try {
            const result = await AuthService.register(registerData)
            setAuth(result);
            navigate('/all-cards')
        }
        catch (err) {
            // console.log('There is a problem');
            alert(err.message)
            throw err
        }
    }

    const onLoginSubmit = async (data) => {

        try {
            const result = await AuthService.login(data)
            setAuth(result);
            navigate('/all-cards')
        }
        catch (err) {
           // console.log('There is a problem');
           alert(err.message)
           throw err
        }
    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userName: auth.username,
        userEmail: auth.email,
        //!! obrushta vsqka truti stoinost v true i vs folsi stoinost vyv false
        isAuth: !!auth.accessToken
    }
    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
export const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}
