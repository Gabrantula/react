import styles from './user-profile.module.css'
import { Link } from "react-router-dom"
import { useAuthContext } from '../../contexts/AuthContext'
import { useCardContext } from '../../contexts/CardContext'

export default function MyPage() {
    const { userId } = useAuthContext()
    const { cards } = useCardContext()
    const myCards = cards.filter(card => card._ownerId === userId)
    return (
        <section id={styles["my-page"]}>
            <p>My cards count: <span>{myCards.length}</span> </p>
            <div className={styles["all-my-cards"]}>
                {myCards.map(card => {
                    return (

                        <div key={card._id} className={styles["card"]}>
                            <div className={styles["img"]}>
                                <img src={card.imageUrl} alt={card.title} />
                            </div>
                            <div className={styles["info"]}>
                                <p>{card.title}</p>
                                <Link className={styles["btn"]} to={`/all-cards/${card._id}`}>Details</Link>
                            </div>
                        </div>

                    )
                })}
            </div>
            {myCards.length === 0 && (
                <h2>No cards in database.</h2>
            )}

        </section>
    )
}
