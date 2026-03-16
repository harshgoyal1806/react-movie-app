import {motion} from "motion/react"
import { X, Play, Calendar, Star, Clock, Info } from "lucide-react";

const MovieDetailModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10 my-8"
      >

        <div className="relative h-48 sm:h-64 md:h-60">
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200'}
            alt={movie.Title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-colors"
          >
            <X className="w-6 h-6" />
          </motion.button>
        </div>

    
        <div className="p-6 sm:p-8 lg:p-10 -mt-1 sm:-mt-20 relative">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gray-200"
          >
            {movie.Title}
          </motion.h1>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
            {movie.Year && (
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-white/20">
                <Calendar className="w-4 h-4" />
                {movie.Year}
              </span>
            )}
            {movie.imdbRating && (
              <span className="flex items-center gap-1.5 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-yellow-500/50">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="font-semibold text-yellow-500">{movie.imdbRating}</span>
              </span>
            )}
            {movie.Genre && movie.Genre.split(', ').map((genre, idx) => (
              <span key={idx} className="bg-red-600/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-red-600/50 text-red-500 font-medium">
                {genre}
              </span>
            ))}
            {movie.Runtime && (
              <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-white/20">
                <Clock className="w-4 h-4" />
                {movie.Runtime}
              </span>
            )}
          </div>

          {movie.Plot && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-1 flex items-center gap-2 text-white">
                <Info className="w-5 h-5 text-red-600" />
                Synopsis
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{movie.Plot}</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {movie.Director && movie.Director !== 'N/A' && (
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h3 className="font-semibold mb-2 text-gray-400 text-sm">Director</h3>
                <p className="text-white">{movie.Director}</p>
              </div>
            )}
            {movie.Actors && movie.Actors !== 'N/A' && (
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <h3 className="font-semibold mb-2 text-gray-400 text-sm">Cast</h3>
                <p className="text-white">{movie.Actors}</p>
              </div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 sm:mt-8 flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl shadow-red-600/30 transition-all"
          >
            <Play className="w-6 h-6 fill-white" />
            Watch Now
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MovieDetailModal