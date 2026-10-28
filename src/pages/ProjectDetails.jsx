import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Github } from '../components/ui/BrandIcons';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = profile.projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <p className="text-text-secondary mb-8">Project not found</p>
        <Link to="/" className="px-6 py-3 bg-primary text-background font-bold rounded-full">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <Link
          to="/"
          className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl overflow-hidden mb-12 bg-surface shadow-2xl"
        >
          {project.preview ? (
            <img
              src={project.preview}
              alt={`${project.name} screenshot`}
              className="block w-full max-h-[620px] object-contain object-top"
            />
          ) : (
            <div className="min-h-[320px] flex items-center justify-center p-8 font-mono text-text-secondary/30 bg-surface">
              <div className="text-center">
                <p className="text-lg">Project Screenshot for {project.name}</p>
                <p className="text-sm">Visual assets / mockups go here</p>
              </div>
            </div>
          )}
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
              {project.status}
            </span>
            <h1 className="text-5xl md:text-7xl font-black mt-4 mb-2">{project.name}</h1>
            <p className="text-xl text-text-secondary">{project.tagline}</p>
          </div>
          <div className="flex gap-4">
            {project.github && project.github !== '#' && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source code`} className="p-4 glass rounded-2xl hover:text-primary transition-colors">
                <Github size={24} />
              </a>
            )}
            {project.demo && project.demo !== '#' && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live demo`} className="p-4 glass rounded-2xl hover:text-primary transition-colors">
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-4">Overview</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {project.description}
              </p>
            </section>

            <section className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                <p className="text-text-secondary leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">My Contribution</h3>
                <p className="text-text-secondary leading-relaxed">{project.contribution}</p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((f, i) => (
                  <div key={i} className="flex gap-3 items-start p-4 glass rounded-xl">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span className="text-text-secondary text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="glass rounded-2xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="px-2 py-1 text-[10px] font-mono bg-surface border border-white/10 rounded text-text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h4 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4">Project Status</h4>
              <div className="flex items-center gap-2 text-primary font-bold">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {project.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
