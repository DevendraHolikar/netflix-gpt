import { useParams } from "react-router"
import useMovieDetails from "../hooks/useMovieDetails"
import DetailsCard from "./DetailsCard";

const DetailsFetch = () => {

    const { movieId } = useParams();
    const detailsMovies = useMovieDetails(movieId)

    return (

        <div className="bg-black p-6 md:p-10 justify-center" >

            {
                detailsMovies.length === 0 ? (
                    <div className="w-full pt-10 text-2xl text-center text-white">No data found</div>
                ) : (

                    <DetailsCard key={detailsMovies.id}
                        movieId={detailsMovies.id}
                        movieTitle={detailsMovies.title}
                        movieOverview={detailsMovies.overview}
                        movieBackdrop_path={detailsMovies.backdrop_path}
                        moviePopularity={detailsMovies.popularity}
                        movieRelease_date={detailsMovies.release_date}
                        moviePoster_path={detailsMovies.poster_path}
                        movieVote_average={detailsMovies.vote_average}>
                    </DetailsCard>
                )
            }
        </div >
    )
}

export default DetailsFetch