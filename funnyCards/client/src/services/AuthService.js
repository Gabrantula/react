import {RequestFactory} from './Requester'

const baseUrl =`http://localhost:3030/users`


export const authServiceFactory = (token) => {
    const Request = RequestFactory(token)
   // export const authServiceFactory = () => {
        //const Request = RequestFactory()
    return{
        login:(data) => Request.post(`${baseUrl}/login`, data),
        register: (data) =>  Request.post(`${baseUrl}/register`, data),
        logout: () => Request.get(`${baseUrl}/logout`)
    }
}
