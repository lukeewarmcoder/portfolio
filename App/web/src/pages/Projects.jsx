import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard.jsx';

const Projects = () => {
  const projects = [
    {
      title: 'Monthly Budget Tracker',
      description: 'A comprehensive budget management application that helps users track income, expenses, and spending patterns. Built with modern web technologies and deployed on Vercel for seamless performance.',
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Vercel'],
      features: [
        'Income and expense tracking with category-based organization',
        'Interactive analytics dashboard with spend trend charts',
        'Secure data storage with Supabase authentication',
        'Real-time budget calculations and insights',
        'Responsive design for mobile and desktop',
      ],
      githubUrl: 'https://github.com/lukeewarmcoder',
      liveUrl: null,
    },
    {
      title: 'Personal AI Assistant (Jarvis)',
      description: 'An intelligent AI-powered assistant designed to enhance developer productivity. Provides coding assistance, debugging support, and automation capabilities for everyday development tasks.',
      techStack: ['Python', 'JavaScript', 'AI/ML', 'APIs'],
      features: [
        'Intelligent coding assistance and suggestions',
        'Automated debugging and error detection',
        'Task automation for repetitive workflows',
        'Natural language processing for command interpretation',
        'Developer productivity optimization',
      ],
      githubUrl: 'https://github.com/lukeewarmcoder',
      liveUrl: null,
    },
    {
      title: 'Academic & Personal Projects',
      description: 'A collection of diverse projects showcasing various technologies and problem-solving approaches. From web applications to automation scripts, each project represents a learning milestone and practical application of skills.',
      techStack: ['React', 'Python', 'JavaScript', 'TypeScript', 'PostgreSQL'],
      features: [
        'Full-stack web applications with modern frameworks',
        'Data structures and algorithms implementations',
        'API integrations and third-party service connections',
        'Responsive UI/UX designs',
        'Production-ready deployments',
      ],
      githubUrl: 'https://github.com/lukeewarmcoder',
      liveUrl: null,
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of my work, from full-stack applications to AI-powered tools
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              features={project.features}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 text-lg mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com/lukeewarmcoder"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/20"
          >
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;