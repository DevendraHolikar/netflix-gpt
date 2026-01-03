import { IMG_CND_URL } from "../utils/constants"

const GptMovieCard = ({ posterPath, title, overview, release_date, backdrop_path }) => {
    

    // console.log(posterPath)
    return (
        <div className="w-56">
            <img src={IMG_CND_URL + posterPath} />
            {/* <h2>{title}</h2>
            <h4>{overview}</h4>
            <h5>{release_date}</h5>
            <h5>{backdrop_path}</h5> */}
        </div>
    )
}

export default GptMovieCard