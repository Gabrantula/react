import styles from './details.module.css'

import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

import { useService } from '../../hooks/useService'
import { CardServiceFactory } from '../../services/CardService'
import { useAuthContext } from "../../contexts/AuthContext"
import { useCardContext } from "../../contexts/CardContext"

//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
//import LikeButton from "../Like/LikedBtn"

export default function Details() {
    const { userId, isAuth } = useAuthContext()
    const { cardId } = useParams()
    const { delCard } = useCardContext()
    const [card, setCard] = useState({})
    const CardService = useService(CardServiceFactory)
    const navigate = useNavigate()

    useEffect(() => {
        CardService.getOne(cardId)
            .then(result => {
                setCard(result)
            })
    }, [cardId])

    const isOwner = card._ownerId === userId

    const onDeleteClick = async () => {
        //s tozi comentar pravq da raboti confirma samo na dadeniq red

        //eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${card.title} `)
        if (result) {
            await CardService.deleteCard(card._id)

            delCard(card._id)
            navigate('/all-cards')
        }
    }

    return (
            <section id={styles["details-page"]}>
                <div id={styles["details-wrapper"]}>

                    <img src={card.imageUrl} alt="" />

                    <div id={styles["info-wrapper"]}>

                        <h2>{card.title}</h2>

                        <p>{card.description}</p>
                        {isOwner && (<>
                            <Link className={styles["action"]} to={`/all-cards/${card._id}/edit`}>Edit</Link>

                            <button className={styles["action"]} onClick={onDeleteClick}>Delete</button>
                        </>
                        )}
                        {isAuth && <Link className={styles["action"]} to={`/all-cards/${card._id}/comments`}>Comments</Link>}

{/** {isAuth  && <LikeButton />} */}
                       

                    </div>
                </div>
            </section>
        
    )
}
