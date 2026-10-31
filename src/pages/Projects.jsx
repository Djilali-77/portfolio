// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { featuredProjects, otherProjects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0a1f44]/40 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Featured <span className="text-[#cd7f32]">Projects</span>
        </h2>

        {/* Big cards: the two main projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -5 }}
              className={`bg-[#0f172a] border border-gray-700 rounded-xl p-6 hover:shadow-xl hover:shadow-[#cd7f32]/10 hover:border-[#cd7f32]/50 transition-all flex flex-col justify-between ${
                // if the number of cards is odd, the last one gets the whole row
                index === featuredProjects.length - 1 && featuredProjects.length % 2 === 1
                  ? 'lg:col-span-2'
                  : ''
              }`}
            >
              <div>
                <span className="text-xs font-bold text-[#cd7f32] bg-[#cd7f32]/10 px-3 py-1 rounded-full border border-[#cd7f32]/20">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.summary}</p>

                {/* Key results */}
                <ul className="space-y-2 mb-5">
                  {project.highlights.map((item) => (
                    <li key={item} className="text-gray-300 text-sm flex gap-2">
                      <span className="text-[#cd7f32]">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#0a1f44] border border-gray-600 rounded-full px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links: the demo button only appears if a demo exists */}
              <div className="flex gap-4 items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white font-medium text-sm py-2 px-4 rounded-full transition-all"
                >
                  <FaGithub /> Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-[#cd7f32] hover:bg-[#b8702c] text-white font-medium text-sm py-2 px-4 rounded-full transition-all"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Smaller cards: other projects */}
        <h3 className="text-xl font-bold mb-6 text-center text-gray-300">More Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              className="bg-[#0f172a] border border-gray-700 rounded-xl p-5 hover:border-[#cd7f32]/50 transition-all"
            >
              <span className="text-xs font-bold text-[#cd7f32]">{project.category}</span>
              <h4 className="text-lg font-bold mt-2 mb-2">{project.title}</h4>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.summary}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#cd7f32] hover:text-[#b8702c] text-sm font-medium flex items-center gap-2"
              >
                <FaGithub /> View repository →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;