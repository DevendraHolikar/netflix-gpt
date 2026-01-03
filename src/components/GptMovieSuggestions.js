import { useSelector } from "react-redux"
import useMovieSearch from "../hooks/useMovieSearch"
import GptMovieCard from "./GptMovieCard";

const GptMovieSuggestions = () => {

  const showMoviesSearch = useSelector((store) => store.movies.movieSearch);
  useMovieSearch(showMoviesSearch)

  const movieData = useSelector((store) => store.movies.movieSearchFetchData) || [];

  const loading = useSelector(
    (store) => store.movies.movieSearchLoading
  );

  const filteredMovies = movieData.filter(
    (movie) => movie.poster_path
  );

  if (!showMoviesSearch) return null;

  return (
    <div className="bg-black flex gap-10 flex-wrap pl-10 pr-10 justify-center mt-4">
      {loading ? (
        <div className="w-full pt-10 text-2xl text-center text-white">
          Searching...
        </div>
      ) : filteredMovies.length === 0 ? (
        <div className="w-full pt-10 text-2xl text-center text-white">
          No data found
        </div>
      ) : (
        filteredMovies.map((movie) => (
          <GptMovieCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            release_date={movie.release_date}
            backdrop_path={movie.backdrop_path}
          />
        ))
      )}
    </div>

  )
}

export default GptMovieSuggestions