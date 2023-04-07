import { RequestFactory } from './Requester'

const baseUrl = 'http://localhost:3030/data/comments';
const Request = RequestFactory()

export const create = async (cardId, comment) => {

  const result = await Request.post(baseUrl, { cardId, comment })
  return result
}
export const getCardComments = async (cardId) => {

  //const result = await Request.get(`${baseUrl}?where=cardId%3D%22${cardId}%22`)
  const searchQuery = encodeURIComponent(`cardId="${cardId}"`)
  const relationQuery = encodeURIComponent(`author=_ownerId:users`)

  const result = await Request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`)
  
 const comments = Object.values(result)
 return comments
}
