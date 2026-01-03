import { useSelector } from "react-redux";


const useMovieDetails = (props) => {

    const stringTonumber = parseInt(props)

    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies) || [];
    const popularMovies = useSelector((store) => store.movies.popularMovies) || [];
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies) || [];
    const toprated = useSelector((store) => store.movies.toprated) || [];
    const movieSearchFetchData = useSelector((store) => store.movies.movieSearchFetchData) || [];



    const allSection = [...nowPlayingMovies, ...popularMovies, ...upcomingMovies, ...toprated, ...movieSearchFetchData]


    const allSectionFilter = allSection
        .flat()
        .find(movie => movie.id === stringTonumber);


    return allSectionFilter
};

export default useMovieDetails;
