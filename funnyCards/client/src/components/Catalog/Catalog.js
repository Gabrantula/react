import { Link } from "react-router-dom"
import {CatalogItem} from "./CatalogItem";
import { useCardContext } from "../../contexts/CardContext";
import styles from './all-items.module.css'


export default function Catalog() {

    const { cards } = useCardContext()
//console.log(cards);
    return (
        <section id={styles["catalog-page"]}>
            <h1>All funny cards</h1>

           <div className={styles["card-container"]}> 
          
                {cards.map(x => <CatalogItem key={x._id} {...x} />)}

           </div>  
            {cards.length === 0 && (
                <>
                    <h1>No funny cards in database.</h1>
                    <div className={styles["no-cards-view"]}>
                        <Link id={styles['logo']} to='/'>
                            <img src="/pictures/home-pic.png" alt="home-pic" />
                        </Link>
                    </div>
                </>
            )}


        </section>
    )
}
