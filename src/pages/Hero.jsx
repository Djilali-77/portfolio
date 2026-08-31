import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const skillCategories = [
    {
      title: "💻 Core Engineering",
      skills: ["Python", "C", "Algorithms", "Operating Systems", "Network Protocols (OSPF/BGP)", "Linux"]
    },
    {
      title: "🤖 Data & AI",
      skills: ["Deep Learning (PyTorch)", "Reinforcement Learning", "Machine Learning", "Computer Vision", "Scikit-Learn"]
    },
    {
      title: "🌐 Full-Stack Architecture",
      skills: ["React JS", "FastAPI", "Node.js", "Tailwind CSS", "RESTful APIs", "Web Scraping"]
    },
    {
      title: "⚙️ MLOps & Infrastructure",
      skills: ["Docker", "LangChain", "ChromaDB", "Weights & Biases", "Network Automation (Netmiko)"]
    }
  ];

  const projects = [
    {
       id: 1,
       title: "Enterprise RAG Assistant",
       desc: "A cloud-powered Q&A system using LangChain, ChromaDB, and FastAPI to extract precise answers from custom PDFs via LLMs.",
       cat: "GenAI & Full-Stack",
       githubLink: "https://github.com/Djilali-77/Enterprise-RAG-Assistant"
    },
    {
       id: 2,
       title: "AI-Powered IDS",
       desc: "An Intrusion Detection System using Neural Networks to analyze network traffic and detect zero-day anomalies.",
       cat: "Deep Learning & Security",
       githubLink: "https://github.com/Djilali-77/AI-Powered-IDS"
    },
    {
       id: 3,
       title: "BannerHound Network Scanner",
       desc: "A high-performance, concurrent network auditing tool built with Python, SSE, and React for real-time OS fingerprinting.",
       cat: "Networking & Backend",
       githubLink: "https://github.com/Djilali-77/BannerHound"
    },
    {
       id: 4,
       title: "DzAuto-Radar Data Pipeline",
       desc: "An end-to-end pipeline featuring a Playwright scraper, ML anomaly detection, and a FastAPI/React architecture for market insights.",
       cat: "Data Engineering / ML",
       githubLink: "https://github.com/Djilali-77/car-market-pipeline"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100 font-sans selection:bg-[#cd7f32] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#cd7f32] font-bold tracking-widest text-sm mb-4 uppercase">
            Systems & AI Engineering
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
            Bridging Network Infrastructure <br className="hidden md:block"/> 
            <span className="text-[#cd7f32]">& Artificial Intelligence</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, I'm FARAOUN Djillali, an Engineering Student at ENSTTIC. I build scalable applications that bring Deep Learning models and Network Automation scripts out of the terminal and into production environments.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-[#cd7f32] hover:bg-[#b8702c] text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer shadow-lg shadow-[#cd7f32]/20">
              View Architecture & Code
            </a>
            <a
              href="/portfolio.html"
              target="_blank"
              className="border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer"
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
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">Engineering <span className="text-[#cd7f32]">Philosophy</span></h2>
          <div className="bg-[#0a1f44] p-8 rounded-2xl border border-gray-700 shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I don't just train models in a notebook. My focus is on the entire lifecycle: building robust data pipelines, training optimized machine learning models, and deploying them via containerized full-stack architectures.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Combining my academic foundation in Telecommunications and Networking with my passion for AI, I approach problems holistically—whether it's detecting network intrusions with Autoencoders or optimizing energy grids with Reinforcement Learning.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Technical <span className="text-[#cd7f32]">Arsenal</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0a1f44]/80 border border-gray-700 rounded-2xl p-6 hover:border-[#cd7f32]/50 transition-colors shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-100 mb-6 border-b border-gray-700 pb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#0f172a] border border-gray-600 rounded-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#cd7f32] hover:border-[#cd7f32] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="py-20 px-4 bg-[#0a1f44]/40 scroll-mt-24 mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Featured <span className="text-[#cd7f32]">Deployments</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((projet) => (
              <motion.div
                 key={projet.id}
                whileHover={{ y: -5 }}
                className="bg-[#0f172a] border border-gray-700 rounded-xl p-6 hover:shadow-xl hover:shadow-[#cd7f32]/10 hover:border-[#cd7f32]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#cd7f32] bg-[#cd7f32]/10 px-3 py-1 rounded-full border border-[#cd7f32]/20">
                    {projet.cat}
                  </span>
                  <h3 className="text-2xl font-bold mt-4 mb-2">{projet.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{projet.desc}</p>
                </div>
                <a
                   href={projet.githubLink}
                   target="_blank"
                   rel="noreferrer"
                  className="text-[#cd7f32] hover:text-[#b8702c] font-medium text-sm flex items-center gap-2 self-start cursor-pointer transition-colors"
                >
                  View Repository & Architecture →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FOOTER ================= */}
      <footer id="contact" className="py-12 text-center border-t border-gray-800 mt-20 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Currently seeking opportunities for Master's studies (Campus France), internships, or academic collaborations. Let's discuss AI, networks, or your next big project.
        </p>
        <div className="flex justify-center gap-8 mb-10">
          <a href="https://github.com/Djilali-77" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#cd7f32] text-3xl transition-transform hover:scale-110 cursor-pointer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/faraoun-djillali-51217b326/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#cd7f32] text-3xl transition-transform hover:scale-110 cursor-pointer">
            <FaLinkedin />
          </a>
          <a href="mailto:faraoundjilali.fd@gmail.com" className="text-gray-400 hover:text-[#cd7f32] text-3xl transition-transform hover:scale-110 cursor-pointer">
            <FaEnvelope />
          </a>
        </div>
        <p className="text-gray-600 mt-10 text-sm">
          Engineered with precision and React JS.
        </p>
      </footer>
    </div>
  );
};

export default Hero;