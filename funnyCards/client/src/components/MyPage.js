import { Link } from "react-router-dom"

export default function MyPage() {
    return (
        <section id="my-page">
            <p>My cards count: </p>
            <div className="all-my-cards">
                <div className="card">
                    <div className="img">
                        <img src="/pictures/monkey-2.png" alt="monkey-2" />
                    </div>
                    <div className="info">
                        <p>Are you kidding me?</p>
                        <Link className='btn' to='/details'>Details</Link>
                    </div>
                </div>
            </div>
            <h2>No cards in database.</h2>
        </section>
    )
}