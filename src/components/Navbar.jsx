import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-[#0f172a]/90 backdrop-blur-sm border-b border-[#0a1f44] z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => window.scrollTo(0,0)} className="text-xl font-bold text-white tracking-widest">
          PORT<span className="text-[#cd7f32]">FOLIO.</span>
        </Link>
        
        {/* Les liens */}
        <div className="hidden md:flex space-x-10 text-lg">
          <a href="#about" className="text-gray-300 hover:text-[#cd7f32] transition-colors">About</a>
          <a href="#skills" className="text-gray-300 hover:text-[#cd7f32] transition-colors">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-[#cd7f32] transition-colors">Projets</a>
        </div>
        
        {/* Bouton Contact */}
        <a href="#contact" className="bg-[#cd7f32] hover:bg-[#b8702c] text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-[#cd7f32]/20">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;