import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap size={24} />,
      title: 'Education',
      description: 'BTech in Computer Science - 1st Year, 2nd Semester',
    },
    {
      icon: <Code2 size={24} />,
      title: 'Clean Code',
      description: 'Passionate about writing maintainable, efficient code',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges with creative solutions',
    },
    {
      icon: <Target size={24} />,
      title: 'Learning Focus',
      description: 'Continuously expanding skills in full-stack development',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 sm:p-8 mb-12"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Hi! I'm <span className="text-cyan-400 font-semibold">Ayushman Dixit</span>, a passionate full-stack developer currently pursuing my BTech in Computer Science. I'm in my 1st year, 2nd semester, and every day brings new opportunities to learn and grow.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              My journey into programming started with a simple curiosity about how things work behind the scenes. That curiosity quickly evolved into a deep passion for creating clean, efficient, and user-friendly applications. I believe that great code isn't just about making things work—it's about making them work beautifully.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm driven by a problem-solving mindset and a commitment to continuous learning. Whether it's building a budget tracker, exploring AI integrations, or diving into new frameworks, I approach every project as an opportunity to push my boundaries and deliver smart solutions.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Developer Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <blockquote className="text-xl sm:text-2xl text-slate-300 italic">
              "Code is like humor. When you have to explain it, it's bad."
            </blockquote>
            <p className="text-cyan-400 mt-4">— My development philosophy</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;