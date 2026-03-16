import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Moon, Sun, Film, X, Menu, ChevronDown } from 'lucide-react';

const categories = ['Action', 'Comedy', 'Horror', 'Sci-Fi', 'Drama', 'Romance'];

const Navbar = ({ onSearch, darkMode, toggleDarkMode, scrolled }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm('');
      setIsSearchOpen(false);
    }
  };

  const handleCategoryClick = (category) => {
    onSearch(category);
    setIsDropdownOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl'
            : 'bg-white/95 backdrop-blur-lg shadow-xl'
          : darkMode
          ? 'bg-gradient-to-b from-gray-900/80 via-gray-800/50 to-transparent'
          : 'bg-gradient-to-b from-orange-100/70 via-orange-50/50 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        >
          <div className="relative">
            <Film className={`w-7 h-7 sm:w-9 sm:h-9 ${darkMode ? 'text-purple-500' : 'text-red-600'}`} />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-red-600/20 rounded-full blur-xl"
            />
          </div>
          <span
            className={`text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent ${
              darkMode
                ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400'
                : 'bg-gradient-to-r from-red-600 via-red-500 to-orange-500'
            }`}
          >
            Movlet
          </span>
        </motion.div>

        <div className="hidden sm:flex items-center gap-4">
          {/* Category Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              aria-label="Select Category"
            >
              Categories <ChevronDown className="w-4 h-4" />
            </motion.button>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-0 bg-gray-800/90 rounded-lg shadow-lg py-2 w-40 text-white flex flex-col gap-1"
                >
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className="px-4 py-2 hover:bg-red-600/70 cursor-pointer rounded"
                    >
                      {cat}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          
          <AnimatePresence>
            {isSearchOpen && (
              <motion.form
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                onSubmit={handleSearch}
                className="relative"
              >
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search movies..."
                  className={`px-4 py-2 pr-10 rounded-full w-64 focus:outline-none focus:ring-2 transition-colors ${
                    darkMode
                      ? 'bg-gray-800/50 placeholder-gray-300 text-white focus:ring-purple-500'
                      : 'bg-white/10 placeholder-gray-700 text-black focus:ring-red-600'
                  }`}
                  autoFocus
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-white/70 hover:text-white" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>

      
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: '0 0 8px rgba(255,0,0,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Search"
          >
            {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          </motion.button>

          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                >
                  <Sun className="w-5 h-5 text-yellow-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                >
                  <Moon className="w-5 h-5 text-indigo-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

   
        <div className="sm:hidden flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-white/10"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className='w-6 h-6'/> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

  
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`sm:hidden px-4 pb-4 flex flex-col gap-2 ${
              darkMode ? 'bg-gray-900/95' : 'bg-white/95'
            }`}
          >
            <div className="flex flex-col gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    handleCategoryClick(cat);
                    setIsMobileMenuOpen(false);

                  }}
                  className={`text-left px-3 py-2 rounded hover:bg-red-600/70 transition-colors ${
                    darkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <form onSubmit={handleSearch} className="relative mt-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search movies..."
                className={`w-full px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 transition-colors ${
                  darkMode
                    ? 'bg-gray-800/50 placeholder-gray-300 text-white focus:ring-purple-500'
                    : 'bg-white/10 placeholder-gray-700 text-black focus:ring-red-600'
                }`}
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5 text-white/70 hover:text-white" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
