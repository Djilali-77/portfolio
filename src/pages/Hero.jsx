import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const skills = [
    "React JS", "Tailwind CSS", "Framer Motion", "Python", 
    "FastAPI", "Playwright", "Scikit-Learn", "C", 
    "Algorithms", "Machine Learning", "Web Scraping", 
    "Graphic Design", "UI/UX", "3D Printing"
  ];

  const projects = [
    { 
      id: 1, 
      title: "Web Portfolio", 
      desc: "A modern, responsive personal portfolio built with React and Tailwind CSS.", 
      cat: "Web Dev" ,
      githubLink: "https://github.com/Djilali-77/portfolio"
    },
    { 
      id: 2, 
      title: "3D Printing Project", 
      desc: "An upcoming hardware project exploring 3D modeling and printing (Coming Soon).", 
      cat: "3D/Hardware" ,
      link: "https://morvox-lab.vercel.app"
    },
    { 
      id: 3, 
      title: "Car Market Intelligence", 
      desc: "An end-to-end pipeline featuring a web scraper, ML anomaly detection, price prediction model, FastAPI backend, and an interactive React dashboard.", 
      cat: "Full-Stack / ML",
      link: "https://car-market-md.vercel.app/"
    },
    { 
      id: 4, 
      title: "CLI Stock Management System", 
      desc: "A high-performance, memory-safe CLI application written in pure C for inventory and POS management.", 
      cat: "C / Data Structures",
      link: "https://github.com/Djilali-77/c-stock-management-cli"
    },
    { 
      id: 5, 
      title: "Design Collection", 
      desc: "A collection of logos and business cards created using Adobe Illustrator and Photoshop.", 
      cat: "Design" 
    },
    { 
      id: 6, 
      title: "Python POS System", 
      desc: "A full-stack desktop checkout application built with CustomTkinter and SQLite.", 
      cat: "Desktop App",
      githubLink: "https://github.com/Djilali-77/Caisse-POS-"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-blue-400 font-bold tracking-widest text-sm mb-4 uppercase">
            Software Engineering Student
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Djillali FARAOUN</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Student at ENSTTIC. Passionate about Web Development, Python, Design, and Artificial Intelligence. Always building and learning.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer">
              View My Work
            </a>
            <a 
              href="/portfolio.html"
              target="_blank"
              className="border border-gray-600 hover:border-gray-400 text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">About <span className="text-blue-500">Me</span></h2>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a student at the National Higher School of Telecommunications and ICT (ENSTTIC). 
              Deeply passionate about technology and self-learning, my journey started with fundamentals like C and Python, 
              and later expanded into Web Development (React, Tailwind) and Artificial Intelligence.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I speak three languages (Arabic, French, English) and I'm always eager to learn new skills. 
              Currently, I'm diving into the world of 3D printing and working on exciting new hardware projects.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-bold mb-10 text-center">My <span className="text-blue-500">Skills</span></h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-800 border border-gray-700 rounded-full px-6 py-3 text-sm font-semibold hover:border-blue-500 hover:text-blue-400 cursor-pointer transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured <span className="text-purple-500">Projects</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((projet) => (
              <motion.div 
                key={projet.id}
                whileHover={{ y: -5 }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {projet.cat}
                  </span>
                  <h3 className="text-2xl font-bold mt-4 mb-2">{projet.title}</h3>
                  <p className="text-gray-400 mb-6">{projet.desc}</p>
                </div>
                
                {projet.link ? (
                  <a 
                    href={projet.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-2 self-start cursor-pointer transition-colors"
                  >
                    Project Details →
                  </a>
                ) : projet.githubLink ? (
                  <a 
                    href={projet.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-2 self-start cursor-pointer transition-colors"
                  >
                    View Source Code →
                  </a>
                ) : (
                  <button className="text-gray-500 font-medium text-sm flex items-center gap-2 self-start cursor-not-allowed">
                    Coming Soon →
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FOOTER ================= */}
      <footer id="contact" className="py-12 text-center border-t border-gray-800 mt-20 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-500 mb-8">I'm currently open for new projects and internship opportunities. Feel free to reach out!</p>
        
        <div className="flex justify-center gap-8 mb-10">
          <a href="https://github.com/Djilali-77" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-3xl transition-transform hover:scale-110 cursor-pointer">
            <FaGithub />
          </a>
          
          <a href="https://www.linkedin.com/in/faraoun-djillali-51217b326/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500 text-3xl transition-transform hover:scale-110 cursor-pointer">
            <FaLinkedin />
          </a>
          
          <a href="https://www.instagram.com/morvoxlab/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500 text-3xl transition-transform hover:scale-110 cursor-pointer">
            <FaInstagram />
          </a>
          
          <a href="mailto:faraoundjilali.fd@gmail.com" className="text-gray-400 hover:text-red-500 text-3xl transition-transform hover:scale-110 cursor-pointer">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-gray-600 mt-10 text-sm">
          Built with ♥ and React JS by DJILLALI.
        </p>
      </footer>

    </div>
  );
};

export default Hero;