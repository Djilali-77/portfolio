// src/pages/Skills.jsx
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Technical <span className="text-[#cd7f32]">Toolbox</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
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
              {category.skills.map((skill) => (
                <span
                  key={skill}
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
  );
};

export default Skills;