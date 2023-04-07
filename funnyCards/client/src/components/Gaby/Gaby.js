import styles from './gaby-page.module.css'

export default function Gaby() {
    return (
        <section id={styles["gaby-page"]}>
        <div className={styles["content"]}>
            <h1>Contact us</h1>
       
        <div className={styles["contacts"]}>
            <div className={styles["col"]}>
                <p><i className="fa-sharp fa-solid fa-phone"></i>0898 123 456</p>
                <p><i className="fa-sharp fa-solid fa-envelope"></i>gaby@abc.bg</p>
            </div>
            <div className={styles["col"]}>
                <p><i className="fa-brands fa-github"></i>Gabrantula Tsvetkova</p>
                <p><i className="fa-brands fa-facebook"></i>Gabrantula Tsvetkova</p>
            </div>
            <div className={styles["col"]}>
                <p><i className="fa-brands fa-linkedin"></i>Gabriela Tsvetkova</p>
                <p><i className="fa-brands fa-instagram"></i>Gabrantula Tsvetkova</p>
            </div>
        </div>
        </div>
        <div className={styles["box"]}>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </section>
    )
}
