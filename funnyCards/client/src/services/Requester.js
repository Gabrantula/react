const Request = async (method, url, data) => {
    const options = {}

    if(method !== 'GET') {
        options.method= method
        if(data) {
            options.headers= {
                'content-type': 'application/json'
            };
            options.body= JSON.stringify(data)
        }
    }
  const response = await fetch(url,options)
  try{
  const result = await response.json()
  return result 
  } catch(err) {
      return {}
  }
}
export const get= Request.bind(null, 'GET')
export const post= Request.bind(null, 'POST')
export const put= Request.bind(null, 'PUT')
export const del= Request.bind(null, 'DELETE')