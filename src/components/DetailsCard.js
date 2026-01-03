import { IMG_CND_URL } from '../utils/constants'
import useMoviesTrailerAll from "../hooks/useMoviesTrailerAll";
import { useSelector } from 'react-redux';

const DetailsCard = ({ movieId, movieBackdrop_path, movieOverview, moviePopularity, moviePoster_path, movieRelease_date, movieTitle, movieVote_average }) => {

    const trailerVideoAll = useSelector(store => store.movies?.trailerVideoAll)

    useMoviesTrailerAll(movieId)



    return (
        <div className="text-white flex gap-6 flex-wrap md:flex-nowrap">
            <div className='w-full md:w-[30%]'>
                {/* <img alt={movieTitle} src={IMG_CND_URL + movieBackdrop_path} /> */}
                <img alt={movieTitle} src={IMG_CND_URL + moviePoster_path} />

            </div>
            <div className='w-full md:w-[70%]'>

                <h1 className='text-white font-bold text-3xl lg:text-3xl xl:text-6xl'>{movieTitle}</h1>
                <h2 className='text-white text-sm xl:text-lg pt-3'>{movieOverview}</h2>
                <h3 className='text-white text-sm xl:text-lg pt-3'>Popularity: {moviePopularity}</h3>
                <h3 className='text-white text-sm xl:text-lg pt-3'>Vote Average: {movieVote_average}</h3>
                <h3 className='text-white text-sm xl:text-lg pt-3'>Release date: {movieRelease_date}</h3>


                {!trailerVideoAll || !trailerVideoAll.key ? (<div className="bg-black pt-28 text-white text-center">
                Loading trailer...
            </div>) :
                (<div className="bg-black w-full overflow-x-hidden mt-10">
                    {/* &autoplay=1&mute=1 */}
                    <iframe
                        className="w-full h-full md:w-[560px]  md:h-[300px] "
                        src={"https://www.youtube.com/embed/" + trailerVideoAll?.key + "?si=ACtsYfrIFnCGELw_"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                    </iframe>
                </div>)
            }
            </div>

        </div>
    )
}

export default DetailsCard