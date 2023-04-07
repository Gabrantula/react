import styles from './footer.module.css'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
        <p><span>Created by</span> <Link to="/Gaby-page">Gabrantula Tsvetkova</Link> </p>
    </footer>
    )
}
