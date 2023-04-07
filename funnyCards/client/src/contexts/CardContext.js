import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CardServiceFactory } from "../services/CardService";


export const CardContext = createContext()
export const CardProvider = ({
    children,
}) => {

    const [cards, setCards] = useState([])
    const CardService = CardServiceFactory()
    const navigate = useNavigate()

    useEffect(() => {
        CardService.getAll()
            .then(result => {
//console.log(result);
                setCards(result)
            })
            .catch(err => {
                alert(err.message)
                throw err
            })
    },[])

    const onCreateCardSubmit = async (data) => {

        const newCard = await CardService.create(data)

        setCards(state => [...state, newCard])
        navigate('/all-cards')

    }

    const onCardEditSubmit = async(values) => {
       const result = await CardService.edit(values._id, values)

        // change state
         setCards(state => state.map(x => x._id === values._id ? result : x))
        
        navigate(`/all-cards/${values._id}`)
    }

    const getCard = (cardId) => {
        // tazi func q syzdavame za da vzemem dadeno neshto ot cartata koeto shte ni trqbva v cardOwnera
        return cards.find(card => card._id === cardId)
    }
    const delCard = (cardId) => {
        setCards(state => state.filter(card => card._id !== cardId))
    }

    const contextValues = {
        cards,
        onCreateCardSubmit,
        onCardEditSubmit,
        getCard,
        delCard
    }
    return (
        <CardContext.Provider value={contextValues} >
            {children}
        </CardContext.Provider>
    )
}
export const useCardContext = () => {
    const context = useContext(CardContext)

    return context
}