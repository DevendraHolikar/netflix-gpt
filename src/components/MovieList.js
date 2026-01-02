import MovieCard from "./MovieCard"

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="font-bold text-2xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="card_slider flex overflow-x-scroll ">
        <div className="flex" >
         { movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path}></MovieCard> 
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList