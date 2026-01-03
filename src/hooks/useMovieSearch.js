import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { addMovieSearchFetchData } from "../utils/moviesSlice"
import { useDispatch } from "react-redux";

const useMovieSearch = (showMoviesSearch) => {

  // const movieSearch = useSelector((store) => store.movies.movieSearch);
  const disPatch = useDispatch()
  const getMovieSearch = async () => {

    if (!showMoviesSearch) return;
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + showMoviesSearch + "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    const finedMovieSearch = json.results
    disPatch(addMovieSearchFetchData(finedMovieSearch))
  };
  useEffect(() => {
    getMovieSearch();
  }, [showMoviesSearch]);
};

export default useMovieSearch;
