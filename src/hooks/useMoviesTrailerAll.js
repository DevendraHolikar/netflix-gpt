import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import {
    addTrailerVideoAll,
    clearTrailerVideoAll,
} from "../utils/moviesSlice";

const useMoviesTrailerAll = (movieID) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movieID) return;

        dispatch(clearTrailerVideoAll());

        const getMoviesTrailerAll = async () => {
            try {
                const data = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
                    API_OPTION
                );
                const json = await data.json();

                const trailer =
                    json.results?.find(
                        (video) => video.type === "Trailer"
                    ) || json.results?.[0];

                dispatch(addTrailerVideoAll(trailer || null));
            } catch (error) {
                console.error("Trailer fetch error:", error);
            }
        };

        getMoviesTrailerAll();
    }, [movieID, dispatch]);
};

export default useMoviesTrailerAll;
