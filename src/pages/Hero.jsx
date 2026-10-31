// src/pages/Hero.jsx
import { motion } from 'framer-motion';
import { profile, stats } from '../data/portfolio';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        {/* Small title above the headline */}
        <h2 className="text-[#cd7f32] font-bold tracking-widest text-sm mb-4 uppercase">
          {profile.role}
        </h2>

        {/* Main headline: two lines, the second one is colored */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
          {profile.headline[0]} <br className="hidden md:block" />
          <span className="text-[#cd7f32]">{profile.headline[1]}</span>
        </h1>

        {/* Short introduction, text comes from the data file */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Hi, I'm {profile.name}. {profile.intro}
        </p>

        {/* Call-to-action buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <a
            href="#projects"
            className="bg-[#cd7f32] hover:bg-[#b8702c] text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer shadow-lg shadow-[#cd7f32]/20"
          >
            View Projects
          </a>
          <a
            href="/portfolio.html"
            target="_blank"
            rel="noreferrer"
            className="border border-[#cd7f32] text-[#cd7f32] hover:bg-[#cd7f32] hover:text-white font-bold py-3 px-8 rounded-full transition-all cursor-pointer"
          >
            Download CV
          </a>
        </div>

        {/* Key numbers: one small card per item in the stats list */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.15 }}
              className="bg-[#0a1f44]/60 border border-gray-700 rounded-xl py-4 px-3"
            >
              <p className="text-3xl font-extrabold text-[#cd7f32]">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;