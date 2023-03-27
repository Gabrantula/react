import { useEffect, useState } from "react"
import { useParams } from "react-router"
import * as CardService from '../services/CardService'

import { Link } from "react-router-dom"
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import LikeButton from "./Like/LikedBtn"

export default function Details() {
    const { cardId } = useParams()
    const [card, setCard] = useState({})

    useEffect(() => {
        CardService.getOne(cardId)
            .then(result => {
                setCard(result)
            })
    }, [cardId])
    //console.log(cardId);
    return (
        <section id="details-page">
            <div id="details-wrapper">
                {/* <img src="/pictures/monkey-2.png" alt="monkey-2" />*/}
                <img src={card.imageUrl} alt="monkey-2" />

                <div id="info-wrapper">
                    {/*<h2>Are you kidding me?</h2> */}
                    <h2>{card.title}</h2>
                    {/* <p>There are two main types of monkeys: New World monkeys live in the Americas (North America,
                    Central America, and South America). Old World monkeys live in Asia and Africa. One difference
                    between the two types is that Old World monkeys don’t have prehensile (gripping) tails; New
                    World monkeys do.</p> */}
                    <p>{card.description}</p>

                    <Link className='action' to='/edit'>Edit</Link>
                    {/*  <button><FontAwesomeIcon icon={faThumbsUp} /> Like</button>*/}
                    <a className="action" href="d">Delete</a>
                    <LikeButton />
                </div>
            </div>
        </section>
    )
}