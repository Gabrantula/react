import { Navigate, Outlet, useParams } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useCardContext } from "../../contexts/CardContext";

export default function CardOwner({
    children
}) {
        //tova se kazva kato '/catalog/:cardId/edit'
        const {cardId} = useParams()
        const {getCard} = useCardContext()
        const {userId} = useAuthContext()
    
        const currentCard = getCard(cardId)
    
        if(currentCard && currentCard._ownerId !== userId) {
            //ako ne e owner go prepashtam na details stranicata `/catalog/:cardId`
            // s replace v historito nqma otnovo da go vyrne v edit page
            return <Navigate to={`/catalog/${cardId}`} replace />
        }
        return children ? children : <Outlet/>
}
