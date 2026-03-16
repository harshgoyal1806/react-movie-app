import { motion } from 'framer-motion';
import { Play, Star } from 'lucide-react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(movie)}
      className="relative flex-shrink-0 w-32 sm:w-40 md:w-48 cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
          alt={movie.Title}
          className="w-full h-48 sm:h-60 md:h-72 object-cover transition-transform duration-300 group-hover:scale-110"
        />

    
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 p-3 sm:p-4 w-full">
            <h3 className="font-bold text-xs sm:text-sm mb-1 line-clamp-2">{movie.Title}</h3>
            <p className="text-xs text-gray-300">{movie.Year}</p>
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white" />
          </div>
        </motion.div>

     
        {movie.imdbRating && movie.imdbRating !== 'N/A' && (
          <div className="absolute top-2 right-2 bg-yellow-500/90 text-black text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
            <Star className="w-3 h-3 fill-yellow-500" />
            {movie.imdbRating}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MovieCard;
