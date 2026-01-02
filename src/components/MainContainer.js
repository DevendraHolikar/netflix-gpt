import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    if (movies === null) return

    const mainMovie = movies[0]

    const { original_title, overview, id } = mainMovie
    return (
        <div className="w-full flex flex-col-reverse md:flex-row-reverse">
            <VideoTitle title={original_title} overview={overview}></VideoTitle>
            <VideoBackground movieID={id}></VideoBackground>
        </div>
    ) 
}

export default MainContainer