import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTopRated } from "../utils/moviesSlice";

const useTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTopRated = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated",
        API_OPTION
      );
      const json = await data.json();
      // console.log(json.results)
      dispatch(addTopRated(json.results));
    };

    getTopRated();
  }, [dispatch]);
};

export default useTopRated;
