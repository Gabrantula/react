
import Slider from './Slider'
import { Link } from 'react-router-dom'
    
export default function Home() {
    
  
    return (
    
        <section id="home-page">
            <div id="slider">
                <Slider />
               
            </div>
               
                <h1>Welcome to our site for funny animals!</h1>
                <h3>Create funny cards and enjoy width us!</h3>
                <div>
                <Link className="dashboard" to='/all-cards'>See All Cards</Link>
                    
                </div>
    </section>
    
    )
}