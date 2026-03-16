import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Info, Plus, Check, Star, Calendar, Clock, Users, TrendingUp } from 'lucide-react';

const Hero = ({ movie, onShowDetails }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  if (!movie) return null;

  return (
    <div className="relative w-full min-h-[85vh] flex items-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/1920x1080?text=No+Poster'})`,
          }}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Movie Info */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Trending Badge */}
            {movie.imdbRating && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 rounded-full px-4 py-2 backdrop-blur-sm"
              >
                <TrendingUp className="w-4 h-4 text-red-500" />
                <span className="text-sm font-semibold text-red-500">Trending</span>
              </motion.div>
            )}

            {/* Movie Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              {movie.Title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base">
              {movie.Year && (
                <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <Calendar className="w-4 h-4" />
                  {movie.Year}
                </motion.span>
              )}
              {movie.imdbRating && (
                <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 bg-yellow-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-yellow-500/50">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold text-yellow-500">{movie.imdbRating}</span>
                </motion.span>
              )}
              {movie.Runtime && (
                <motion.span whileHover={{ scale: 1.05 }} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  <Clock className="w-4 h-4" />
                  {movie.Runtime}
                </motion.span>
              )}
              {movie.Rated && (
                <motion.span whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 font-semibold">
                  {movie.Rated}
                </motion.span>
              )}
            </div>

            {/* Genre Tags */}
            {movie.Genre && (
              <div className="flex flex-wrap gap-2">
                {movie.Genre.split(', ').map((genre, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(239, 68, 68, 0.2)' }}
                    className="text-xs sm:text-sm bg-white/5 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
                  >
                    {genre}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Plot */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl line-clamp-3 sm:line-clamp-4">
              {movie.Plot || "Explore this cinematic experience."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239,68,68,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onShowDetails(movie)}
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-6 py-3 rounded-full text-base sm:text-lg font-semibold shadow-xl shadow-red-600/30 transition-all"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
                Watch Now
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onShowDetails(movie)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-base sm:text-lg font-semibold transition-all"
              >
                <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                More Info
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-full transition-all"
              >
                <AnimatePresence mode="wait">
                  {isFavorite ? (
                    <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} exit={{ scale: 0 }}>
                      <Check className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div key="plus" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column - Poster */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'}
                alt={movie.Title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.div>

            {/* Neon Glow Effect */}
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-3xl blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
