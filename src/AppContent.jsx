
import { AnimatePresence, motion } from "motion/react";
import { useMovies } from "./context/MovieContext";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import MovieRow from "./components/MovieRow";
import MovieDetailModal from "./components/MovieDetailModal";
import Footer from "./components/Footer";


import { Film, Star, Users, TrendingUp, Search } from "lucide-react";

const AppContent = () => {
  const {
    darkMode,
    setDarkMode,
    heroMovie,
    trendingMovies,
    actionMovies,
    comedyMovies,
    dramaMovies,
    searchResults,
    selectedMovie,
    setSelectedMovie,
    loading,
    scrolled,
    handleSearch,
    handleMovieClick,
  } = useMovies();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        onSearch={handleSearch}
        scrolled={scrolled}
      />

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <Film className="w-16 h-16 text-red-600" />
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-red-600 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      ) : (
        <>
          <Hero movie={heroMovie} onShowDetails={handleMovieClick} />

          <div className="py-8 sm:py-12">
            {searchResults.length > 0 && (
              <MovieRow
                title="Search Results"
                movies={searchResults}
                onMovieClick={handleMovieClick}
                icon={Search}
              />
            )}
            <MovieRow
              title="Trending Now"
              movies={trendingMovies}
              onMovieClick={handleMovieClick}
              icon={TrendingUp}
            />
            <MovieRow
              title="Action & Adventure"
              movies={actionMovies}
              onMovieClick={handleMovieClick}
              icon={Film}
            />
            <MovieRow
              title="Comedy Collection"
              movies={comedyMovies}
              onMovieClick={handleMovieClick}
              icon={Star}
            />
            <MovieRow
              title="Drama Highlights"
              movies={dramaMovies}
              onMovieClick={handleMovieClick}
              icon={Users}
            />
          </div>
        </>
      )}
      <Footer />

      
      <AnimatePresence>
        {selectedMovie && (
          <MovieDetailModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AppContent;
