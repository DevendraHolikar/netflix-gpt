import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice"


const useMoviesTrailer = (movieID) => {

    const disPatch = useDispatch()
    const getMovieVideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",
            API_OPTION
        );
        const json = await data.json();

        const filterData = json.results.filter(video => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0]

        disPatch(addTrailerVideo(trailer))
    };

    useEffect(() => {
        getMovieVideo()
    }, [])

}

export default useMoviesTrailer