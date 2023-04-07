import { Link } from "react-router-dom";
import styles from './all-items.module.css'

export const CatalogItem =({
    _id,
    title,
    imageUrl,
    
}) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["img"]}>
                
                <img src={imageUrl} alt="" />
            </div>
            <div className={styles["info"]}>
                
                <p>{title}</p>
                <Link className={styles["btn"]} to={`/all-cards/${_id}`}>Details</Link>
               
            </div>
        </div>
    )
}
