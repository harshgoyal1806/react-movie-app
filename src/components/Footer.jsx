import { Github, Twitter, Instagram, Film } from "lucide-react";
import { motion } from "motion/react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, url: "https://github.com/harshgoyal1806" },
    { icon: Twitter, url: "https://twitter.com/#" },
    { icon: Instagram, url: "https://instagram.com/g0yal_harsh" },
  ];

  return (
    <footer className="bg-black/90 text-gray-400 py-12 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-white font-bold text-lg"
        >
          <Film className="w-6 h-6 text-red-600" />
          Movlet
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex gap-4 sm:gap-6 text-sm sm:text-base"
        >
          <a href="#trending" className="hover:text-white transition-colors">Trending</a>
          <a href="#action" className="hover:text-white transition-colors">Action</a>
          <a href="#comedy" className="hover:text-white transition-colors">Comedy</a>
          <a href="#drama" className="hover:text-white transition-colors">Drama</a>
        </motion.div>

   
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4"
        >
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#f87171" }}
              className="transition-colors"
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

    
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 text-center text-gray-500 text-xs sm:text-sm"
      >
        &copy; {new Date().getFullYear()} Movlet. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
