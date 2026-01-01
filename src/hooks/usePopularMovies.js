import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        API_OPTION
      );
      const json = await data.json();
      // console.log(json.results)
      dispatch(addPopularMovies(json.results));
    };

    getPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
