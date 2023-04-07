
import Slider from '../Slider/Slider'
import { Link } from 'react-router-dom'
import styles from './home-page.module.css'
    
export default function Home() {
    
    return (
      <section id={styles["home-page"]}>
            <div id={styles["slider"]}>
                <Slider />
               
            </div>
               
                <h1>Welcome to our site for funny animals!</h1>
                <h3>Create funny cards and enjoy width us!</h3>
                <div>
                <Link className={styles["dashboard"]} to='/all-cards'>See All Cards</Link>
                    
                </div>
    </section> 
   
    )
}
