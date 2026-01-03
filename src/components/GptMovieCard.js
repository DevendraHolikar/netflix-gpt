import { IMG_CND_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const GptMovieCard = ({ id, posterPath }) => {
    
 
    return (
        <div className="w-56">
            <Link to={"/details/" + id} key={id} >
            <img src={IMG_CND_URL + posterPath} />
            </Link>
        </div>
    )
}

export default GptMovieCard