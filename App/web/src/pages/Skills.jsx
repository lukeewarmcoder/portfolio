import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'JavaScript', 'TypeScript'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      category: 'Frontend',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Next.js'],
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      category: 'Backend',
      skills: ['Supabase', 'REST APIs'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL'],
      gradient: 'from-pink-500 to-red-500',
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Vercel'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      category: 'Concepts',
      skills: ['DSA', 'Authentication', 'API Integration', 'Responsive UI', 'Production Deployments'],
      gradient: 'from-orange-500 to-cyan-500',
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1.5 bg-gradient-to-r ${category.gradient} bg-opacity-10 border border-current text-sm rounded-full cursor-default transition-all`}
                    style={{
                      borderColor: `rgba(${categoryIndex * 40}, ${100 + categoryIndex * 20}, ${200 - categoryIndex * 20}, 0.3)`,
                      color: `rgba(${categoryIndex * 40 + 100}, ${150 + categoryIndex * 20}, ${255 - categoryIndex * 20}, 1)`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-lg">
            Always learning, always growing. Currently exploring{' '}
            <span className="text-cyan-400 font-semibold">AI integrations</span> and{' '}
            <span className="text-purple-400 font-semibold">advanced React patterns</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;