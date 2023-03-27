import { Link } from "react-router-dom";


export default function Navigation () {
    return (
       <>
       
        <Link id='logo' to='/'>
        <img src="/pictures/home-pic.png" alt="home-pic" />
        </Link>
        <nav>
            <div className="long">
                <div>
                    <Link to="/all-cards">Catalog</Link>
                </div>
                <div id="user" className="user">
                    <span>Welcome {}</span>
                    <Link to="/create">Add Card</Link>
                    <Link to="/my-cards">My Cards</Link>
                    <Link id="logoutBtn" to="l">Logout</Link>
                    
                </div>
                <div id="guest" className="guest">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                </div>
            </div>
        </nav>
        {/*<input type="checkbox" id="hamburger-input" className="burger-shower" />
        <label htmlFor="hamburger-input" id="hamburger-menu" >
            <nav id="sidebar-menu"></nav>
            <h3>Menu</h3>
            <div className="user">
                <ul>
                    <li><a href="/all-cards">Catalog</a></li>
                    <li><a href="/create">Add Card</a></li>
                    <li><a href="/my-cards">My Cards</a></li>
                    <li><a id="logoutBtn" href="l">Logout</a></li>
                </ul>
            </div>
            <div className="guest">
                <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
            </div>
        </label>
        <div className="overlay"></div> */}
        
       
    </>
    )
}