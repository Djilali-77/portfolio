// src/pages/About.jsx
import { motion } from 'framer-motion';
import { about } from '../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-24">
      <h2 className="text-3xl font-bold mb-10 text-center">
        How I <span className="text-[#cd7f32]">Work</span>
      </h2>

      {/* Story paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#0a1f44] p-8 rounded-2xl border border-gray-700 shadow-lg max-w-4xl mx-auto mb-10"
      >
        {about.paragraphs.map((text, index) => (
          <p key={index} className="text-gray-300 text-lg leading-relaxed mb-4 last:mb-0">
            {text}
          </p>
        ))}
      </motion.div>

      {/* Three principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {about.principles.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#0a1f44]/80 border border-gray-700 rounded-2xl p-6 hover:border-[#cd7f32]/50 transition-colors"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;