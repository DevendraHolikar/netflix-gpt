import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { addMovieSearchFetchData , setSearchLoading} from "../utils/moviesSlice"
import { useDispatch } from "react-redux";

const useMovieSearch = (showMoviesSearch) => {

  const disPatch = useDispatch()
  const getMovieSearch = async () => {

    if (!showMoviesSearch?.trim()) return;

     disPatch(setSearchLoading(true));

   try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          showMoviesSearch
        )}`,
        API_OPTION
      );
      const json = await res.json();
      disPatch(addMovieSearchFetchData(json.results || []));
    } catch (err) {
      disPatch(addMovieSearchFetchData([]));
    }
  };

  useEffect(() => {
    getMovieSearch();
  }, [showMoviesSearch]);
};

export default useMovieSearch;
