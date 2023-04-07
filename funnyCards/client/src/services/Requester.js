
const Request = async (method, url, data) => {
    const options = {}

    if (method !== 'GET') {
        options.method = method
        if (data) {
            options.headers = {
                'Content-Type': 'Application/json'
            };
            options.body = JSON.stringify(data)
        }
    }
 
    const serializedAuth = sessionStorage.getItem('auth')

    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth)

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken
            }
        }
    }
    try {
        const response = await fetch(url, options)

        if (response.ok !== true) {
           /* if (response.status === 403) {
                const auth = JSON.parse(serializedAuth)
                //sega go slojih
                console.log(auth);
               // alert('Invalid email')
                return auth
                
                //?
                // sessionStorage.removeItem(auth.accessToken)
            }*/
            const error = await response.json();
            throw new Error(error.message);
            
        }
        if (response.status === 204) {
            return response
        } else {
            return response.json()
        }
    } catch (err) {
        alert(err.message)
        throw err
    }
}

export const RequestFactory = () => {

    return {
        get: Request.bind(null, 'GET'),
        post: Request.bind(null, 'POST'),
        put: Request.bind(null, 'PUT'),
        del: Request.bind(null, 'DELETE')
    }
}

