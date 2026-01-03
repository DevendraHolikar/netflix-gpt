import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMoviesFetch"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopRated from "../hooks/useTopRated"
import GPTSearch from "./GPTSearch"
import { useSelector } from "react-redux"
import Details from "./Details"

const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRated()
  return (
    <div>
      <Header></Header>
 
      {
        showGptSearch ? <GPTSearch></GPTSearch> :
          <>
            <MainContainer></MainContainer>
            <SecondaryContainer></SecondaryContainer>

          </>
      }


    </div>
  )
}

export default Browse