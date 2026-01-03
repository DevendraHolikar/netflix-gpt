import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  // const upcomingMovies = useSelector((store) => store.movies.upcomingMovies );


    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        API_OPTION
      );
      const json = await data.json();
      // console.log(json.results)
      dispatch(addUpcomingMovies(json.results));
    };
  useEffect(() => {
    // !upcomingMovies && 
    getPopularMovies();
  }, []);
};

export default useUpcomingMovies;
