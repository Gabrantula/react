import styles from './NotFound.module.css'
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
            <section id={styles["not-found"]}>
            
           {/**<Link to="https://codepen.io/uiswarup/full/yLzypyY" target="_blank">
            *  <header className={styles["top-header"]}>
          </header> */}
           
          
       
          <div>
            <div className={styles["starsec"]}></div>
            <div className={styles["starthird"]}></div>
            <div className={styles["starfourth"]}></div>
            <div className={styles["starfifth"]}></div>
          </div>
         
          
          
          <div className={styles["lamp__wrap"]}>
            <div className={styles["lamp"]}>
              <div className={styles["cable"]}></div>
              <div className={styles["cover"]}></div>
              <div className={styles["in-cover"]}>
                <div className={styles["bulb"]}></div>
              </div>
              <div className={styles["light"]}></div>
            </div>
          </div>
         
          <section className={styles["error"]}>
           
            <div className={styles["error__content"]}>
              <div className={styles["error__message message"]}>
                  <h1 className={styles["message_page"]}>404</h1>
                <h1 className={styles["message__title"]}>Page Not Found</h1>
                {/**   <p className={styles["message__text"]}>We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our.</p>*/}
              
              </div>
              {/**<div className={styles["error__nav e-nav"]}>
                <Link to="" target="_blanck" className={styles["e-nav__link"]}></Link>
              </div> */}
              
            </div>
           
          
          </section>
          {/** </Link>*/}
            
              {/**
             *   <div id={styles["not-found"]}>
            <h1>404</h1>
            <h2>Oops! Page not found.</h2>
             * </div> */}

{/**<div className={styles["links"]}>
 * <p>Here some helpful links:</p>
                <Link to='/'>Home</Link>
                <Link to='/all-cards'>Catalog</Link>
            </div> */}
            </section>
    )
}
