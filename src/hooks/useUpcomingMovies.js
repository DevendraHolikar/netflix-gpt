import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTION
      );
      const json = await data.json();
      // console.log(json.results)
      dispatch(addUpcomingMovies(json.results));
    };

    getPopularMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
