// src/components/Navbar.jsx
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/portfolio';

const Navbar = () => {
  // Controls the mobile menu (open or closed)
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-extrabold tracking-widest text-white">
          DJILLALI<span className="text-[#cd7f32]">.</span>
        </a>

        {/* Desktop links (hidden on small screens) */}
        <div className="hidden md:flex gap-24 text-gray-300 text-lg tracking-widest">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-[#cd7f32] transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop contact button */}
        <a
          href="#contact"
          className="hidden md:block bg-[#cd7f32] hover:bg-[#b8702c] text-white font-bold py-2 px-6 rounded-full transition-all"
        >
          Contact
        </a>

        {/* Mobile menu button (hidden on large screens) */}
        <button
          className="md:hidden text-2xl text-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-6 text-gray-300 bg-[#0f172a]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-[#cd7f32] font-bold">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;