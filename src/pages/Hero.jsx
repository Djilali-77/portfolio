import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const skillCategories = [
    {
      title: "💻 Core & Languages",
      skills: ["Python", "C", "Algorithms", "OOP", "Operating Systems", "Databases", "Data Networks"]
    },
    {
      title: "🤖 Data & AI",
      skills: ["Deep Learning (PyTorch)", "Reinforcement Learning", "Machine Learning", "Computer Vision", "Scikit-Learn", "Web Scraping"]
    },
    {
      title: "🌐 Web Development",
      skills: ["React JS", "Node.js", "FastAPI", "Tailwind CSS", "JavaScript (ES6+)", "RESTful APIs", "Git & GitHub"]
    },
    {
      title: "⚙️ MLOps & Generative AI",
      skills: ["Docker", "LangChain", "ChromaDB", "Weights & Biases", "RAG Architecture", "LLM APIs"]
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
       desc: "An Intrusion Detection System using Neural Networks to analyze network traffic and detect anomalies and cyber attacks.",
       cat: "Deep Learning & Security",
       githubLink: "https://github.com/Djilali-77/AI-Powered-IDS"
    },
    {
       id: 3,
       title: "Blindness Detection Dashboard",
       desc: "A CNN model using PyTorch and Transfer Learning for medical image analysis, integrated into an interactive web dashboard.",
       cat: "Computer Vision",
       githubLink: "https://github.com/Djilali-77/Blindness-Detection"
    },
    {
       id: 4,
       title: "Car Market Intelligence",
       desc: "An end-to-end pipeline featuring a web scraper, ML anomaly detection, price prediction model, and a FastAPI/React architecture.",
       cat: "Full-Stack / ML",
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
            Empowering Your Digital Vision
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
            Let's Build Something <br className="hidden md:block"/> 
            <span className="text-[#cd7f32]">Extraordinary</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Hi, I'm FARAOUN Djillali. I build high-performance web applications, integrate advanced AI (GenAI & Computer Vision), and automate complex data pipelines. Turning models into scalable products.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#projects" className="bg-[#cd7f32] hover:bg-[#b8702c] text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer shadow-lg shadow-[#cd7f32]/20">
              See How I Can Help
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
          <h2 className="text-3xl font-bold mb-8">How I Can <span className="text-[#cd7f32]">Add Value</span> to Your Work</h2>
          <div className="bg-[#0a1f44] p-8 rounded-2xl border border-gray-700 shadow-lg">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Instead of just writing code, I focus on delivering real value. Whether you need a scalable web application, automated data extraction, or an intelligent system driven by Deep Learning, I bridge the gap between technical complexity and your business needs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Backed by an engineering background at ENSTIC and a versatile skill set across modern web stacks, Artificial Intelligence, and MLOps, I bring a problem-solving mindset to every project.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Tools I Use to <span className="text-[#cd7f32]">Build Solutions</span></h2>
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
          <h2 className="text-3xl font-bold mb-10 text-center">Solutions & <span className="text-[#cd7f32]">Proven Results</span></h2>
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
                  View Source Code →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FOOTER ================= */}
      <footer id="contact" className="py-12 text-center border-t border-gray-800 mt-20 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6">Ready to Level Up Your Next Project?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Whether you're looking for a dedicated engineer, a reliable freelancer, or just want to discuss how AI can add value to your work, my inbox is always open.
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