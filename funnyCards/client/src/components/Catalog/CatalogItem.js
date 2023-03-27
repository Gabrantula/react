import { Link } from "react-router-dom";

export default function CatalogItem ({
    _id,
    title,
    imageUrl
}) {
    return (
        
        <div className="card">
            <div className="img">
                {/* <img src="/pictures/monkey-1.png" alt="monkey-1" />*/}
                <img src={imageUrl} alt="monkey-1" />
            </div>
            <div className="info">
                {/* <p>Monkey on the mirrow</p>*/}
                <p>{title}</p>
                <Link className='btn' to={`/details/${_id}`}>Details</Link>
               
            </div>
        </div>
    )
}