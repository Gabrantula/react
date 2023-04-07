import { RequestFactory } from "./Requester"

const baseUrl = 'http://localhost:3030/data/cards'


//export const CardServiceFactory = () => {
   // const Request = RequestFactory()
export const CardServiceFactory = (token) => {
    const Request = RequestFactory(token)
   
    const getAll = async () => {

        const result = await Request.get(baseUrl)
        const cards = Object.values(result)

        return cards
    }
    let getOne = async (cardId) => {
        let result = await Request.get(`${baseUrl}/${cardId}`)
        return result
    }
    const create = async (cardData) => {
        const result = await Request.post(baseUrl, cardData)

        return result
    }
   
    const edit = async(cardId, data) => {
       const result= await Request.put(`${baseUrl}/${cardId}`, data)
       return result
    }
    const deleteCard = (cardId) => {
      const result=  Request.del(`${baseUrl}/${cardId}`)
      return result
    }
   
    return {
        getAll,
        getOne,
        create,
        edit,
        deleteCard, 
    }
}
