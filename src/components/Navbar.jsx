import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0,0)} className="text-xl font-bold text-white tracking-widest">
          PORT<span className="text-blue-500">FOLIO.</span>
        </Link>
        
        {/* Les liens ta3 navbar */}
        <div className="hidden md:flex space-x-25 text-xl">
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projets</a>
        </div>

        {/* Bouton Contact - drwk ydik l footer */}
        <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition-all">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;