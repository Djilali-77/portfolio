// src/pages/Contact.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profile } from '../data/portfolio';

const Contact = () => {
  return (
    <footer id="contact" className="py-16 text-center border-t border-gray-800 scroll-mt-24 px-4">
      <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
      <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
        I'm open to research collaborations, internships and technical discussions.
        If you want to talk about AI, networks, or an idea you're working on, write to me.
      </p>

      {/* Social icons */}
      <div className="flex justify-center gap-8 mb-10">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
           className="text-gray-400 hover:text-[#cd7f32] text-3xl transition-transform hover:scale-110">
          <FaGithub />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
           className="text-gray-400 hover:text-[#cd7f32] text-3xl transition-transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email"
           className="text-gray-400 hover:text-[#cd7f32] text-3xl transition-transform hover:scale-110">
          <FaEnvelope />
        </a>
      </div>

      <p className="text-gray-600 text-sm">
        © {new Date().getFullYear()} {profile.name} · Built with React & Tailwind
      </p>
    </footer>
  );
};

export default Contact;