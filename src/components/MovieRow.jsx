import MovieCard from './MovieCard';

const MovieRow = ({ title, movies, onMovieClick, icon: Icon }) => {
  return (
    <div className="mb-6 sm:mb-8 lg:mb-12 relative">
      {/* Title */}
      <div className="px-4 sm:px-6 lg:px-8 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
        {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{title}</h2>
      </div>

    
      <div className="relative group">
       
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-black/80 to-transparent pointer-events-none z-10" />
      
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-black/80 to-transparent pointer-events-none z-10" />

        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 scrollbar-hide scroll-smooth">
          {movies.map((movie, index) => (
            <MovieCard key={`${movie.imdbID}-${index}`} movie={movie} onClick={onMovieClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
