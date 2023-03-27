
import * as Request from "./Requester"
const baseUrl = 'http://localhost:3030/data/cards'

export const getAll = async () => {

    const result = await Request.get(baseUrl)
    const cards = Object.values(result)

    return cards
}
export let getOne = async ( cardId) => {
    let result = await Request.get(`${baseUrl}/${cardId}`)
    return result
}
export const create = async (cardData) => {
    const result = await Request.post(baseUrl, cardData)
   // console.log(result);
    return result
}
