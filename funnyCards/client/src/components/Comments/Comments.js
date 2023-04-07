import styles from './comments.module.css'

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import * as CommentService from '../../services/CommentService'
import { useAuthContext } from "../../contexts/AuthContext"
import AddComment from '../Comments/AddComment'
import { CardServiceFactory } from "../../services/CardService"
import { useService } from "../../hooks/useService"

export default function Comments() {

    const { cardId } = useParams()
    const [card, setCard] = useState({})
    const { isAuth, userName } = useAuthContext()
    const CardService = useService(CardServiceFactory)

    useEffect(() => {
        Promise.all([
            CardService.getOne(cardId),
            CommentService.getCardComments(cardId)
        ])
            .then(([cardData, commentsData]) => {
                
                const cardState = {
                    ...cardData,
                    comments: commentsData
                   // comments: commentsData ? commentsData.length >0 : []
                }
            
                setCard(cardState)
            
            })
            .catch(err => {
                alert('Details error', err)
                throw err
            })
    }, [])//[cardId])

    const onCommentSubmit = async (values) => {

        const response = await CommentService.create(cardId, values.comment)
        setCard(state => ({
            ...state,
            comments: [
                ...state.comments,
                {
                    ...response,
                    author: {
                        username: userName
                    }
                }
            ]
        }))
    }
    return (


        <section id={styles["comments-page"]}>
            <div className={styles["details-comments"]}>

                <h2>Comments:</h2>
                <ul className={styles["comments-all"]}>

                    {card.comments && card.comments.map(x => (<li key={x._id} className="comment">
                        <p>{x.author.username}: {x.comment}</p>
                    </li>))}
                </ul>

                {!card.comments?.length && (<p className={styles["no-comment"]}>No comments.</p>
                )}

            </div>
            <div className={styles["create-comment"]}>
                {isAuth && <AddComment onCommentSubmit={onCommentSubmit} />}
            </div>



        </section>
    )
}