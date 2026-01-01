import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMoviesFetch"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopRated from "../hooks/useTopRated"

const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRated()
  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browse