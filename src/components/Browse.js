import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMoviesFetch"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
useNowPlayingMovies()

  return (
    <div>
      <Header></Header>
      <MainContainer></MainContainer>
      <SecondaryContainer></SecondaryContainer>
    </div>
  )
}

export default Browse