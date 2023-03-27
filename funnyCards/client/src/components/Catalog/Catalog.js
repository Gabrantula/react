import { Link } from "react-router-dom"
import CatalogItem from "./CatalogItem";


export default function Catalog({
    cards,
}) {
    return ( 
    <section id="catalog-page">
    <h1>All funny cards</h1>
    
    <div className="card-container">
    {cards.map(x => <CatalogItem key={x._id} {...x} />)}
        {/* 
        <div className="card">
            <div className="img">
                <img src="/pictures/monkey-1.png" alt="monkey-1" />
            </div>
            <div className="info">
                <p>Monkey on the mirrow</p>
                <Link className='btn' to='/details'>Details</Link>
               
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src="/pictures/pierre-bamin.png" alt="pierre-bamin" />
            </div>
            <div className="info">
                <p>You don't see me</p>
                <Link className='btn' to='/details'>Details</Link>
            </div>
        </div>
        <div className="card">
            <div className="img">
                <img src="/pictures/monkey-2.png" alt="monkey-2" />
            </div>
            <div className="info">
                <p>Are you kidding me?</p>
                <Link className='btn' to='/details'>Details</Link>
            </div>
        </div>
        */}
    </div>
    {cards.length === 0 && (
        <>
        <h1>No funny cards in database.</h1>
        <div className="no-cards-view">
        <Link id='logo' to='/'>
        <img src="/pictures/home-pic.png" alt="home-pic" />
        </Link>
        </div>
        </>
    )}
        
    
</section>)
}
