import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Github } from '../ui/BrandIcons';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index, isFeatured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 + index * 0.08 }}
      className={`group relative ${isFeatured ? 'lg:col-span-2' : 'col-span-1'} glass rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500`}
    >
      <div className="grid lg:grid-cols-2 h-full">
        {/* Visual Preview */}
        <div className="relative aspect-video lg:aspect-square overflow-hidden bg-surface">
          {project.preview ? (
            <img
              src={project.preview}
              alt={`${project.name} screenshot`}
              className={`w-full h-full ${
                ['resume-analyzer', 'image-gallery', 'doggle'].includes(project.id)
                  ? 'object-contain object-center p-3'
                  : 'object-cover object-top'
              }`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-12">
              <div className="w-full h-full rounded-xl border border-white/10 bg-background shadow-2xl p-4 overflow-hidden font-mono text-[10px] text-text-secondary">
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-3/4 bg-white/5 rounded" />
                  <div className="h-3 w-1/2 bg-white/5 rounded" />
                  <div className="h-3 w-2/3 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          )}
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                {project.status}
              </span>
              <div className="flex gap-2">
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source code`} className="p-2 rounded-full bg-white/5 hover:bg-primary/20 transition-colors text-text-secondary hover:text-primary">
                    <Github size={18} />
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`} className="p-2 rounded-full bg-white/5 hover:bg-primary/20 transition-colors text-text-secondary hover:text-primary">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map(s => (
                <span key={s} className="px-2 py-1 text-[10px] font-mono bg-surface border border-white/10 rounded text-text-secondary">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-2 text-primary font-bold text-sm group/link"
          >
            View Project Details
            <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-tight"
          >
            Selected work. <span className="text-gradient">Real things I've built.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: 0.2 }}
            className="text-text-secondary mt-6 max-w-2xl mx-auto text-lg"
          >
            Projects that help me explore full-stack engineering, backend systems, AI, and practical problem-solving.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profile.projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isFeatured={project.featured && index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
