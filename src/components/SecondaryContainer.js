import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return movies.nowPlayingMovies && (
    <div className="bg-black">
    <div className="mt-0 md:-mt-52 pl-4  relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} ></MovieList>
        <MovieList title={"Popular"} movies={movies.popularMovies} ></MovieList>
        <MovieList title={"Upcoming movies"} movies={movies.upcomingMovies} ></MovieList>
        <MovieList title={"Top Rated Movies"} movies={movies.toprated} ></MovieList>
      </div>
    </div>
  )
}

export default SecondaryContainer