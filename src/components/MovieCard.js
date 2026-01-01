import {IMG_CND_URL} from "../utils/constants"


const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movies Card" src={IMG_CND_URL+posterPath}/>
    </div>
  )
}

export default MovieCard