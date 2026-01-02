import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  const toprated = useSelector((store) => store.movies.toprated );


    const getTopRated = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTION
      );
      const json = await data.json();
      // console.log(json.results)
      dispatch(addTopRated(json.results));
    };
  useEffect(() => {
    !toprated && getTopRated();
  }, []);
};

export default useTopRated;
