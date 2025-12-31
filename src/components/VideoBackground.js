
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer"


const VideoBackground = ({ movieID }) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo)

    useMoviesTrailer(movieID)

    return (
        <div className="w-full overflow-x-hidden">
            {/* &autoplay=1&mute=1 */}
            <iframe 
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=ACtsYfrIFnCGELw_"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
        </div>
    )
}

export default VideoBackground