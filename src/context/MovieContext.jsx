import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovies = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [heroMovie, setHeroMovie] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [dramaMovies, setDramaMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const OMDB_API_KEY ="4df58e14"

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchMovies = async (searchTerm) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${OMDB_API_KEY}`);
      const data = await res.json();
      return data.Search || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    try {
      const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${OMDB_API_KEY}`);
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const loadInitialMovies = async () => {
    setLoading(true);
    const [trending, action, comedy, drama] = await Promise.all([
      fetchMovies("Marvel"),
      fetchMovies("Batman"),
      fetchMovies("Comedy"),
      fetchMovies("Drama"),
    ]);

    setTrendingMovies(trending.slice(0, 10));
    setActionMovies(action.slice(0, 10));
    setComedyMovies(comedy.slice(0, 10));
    setDramaMovies(drama.slice(0, 10));

    if (trending[0]) {
      const details = await fetchMovieDetails(trending[0].imdbID);
      setHeroMovie(details);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadInitialMovies();
  }, []);

  const handleSearch = async (searchTerm) => {
    const results = await fetchMovies(searchTerm);
    setSearchResults(results.slice(0, 10));
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleMovieClick = async (movie) => {
    const details = await fetchMovieDetails(movie.imdbID);
    setSelectedMovie(details);
  };

  return (
    <MovieContext.Provider
      value={{
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
