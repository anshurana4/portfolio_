import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { ArrowRight, FileText } from 'lucide-react';
import { LiveBackground } from './LiveBackground';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 pt-20 overflow-hidden">
      <LiveBackground />
      <AnimatedTypography />

      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider w-fit uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Full-Stack Developer
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            I build <span className="text-gradient">full-stack</span> web applications from idea to launch.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-text-secondary max-w-xl leading-relaxed">
            Hi, I'm Anshu Rana, a full-stack developer passionate about building seamless digital experiences from concept to deployment. I enjoy crafting responsive interfaces, scalable backend systems, and reliable database-driven applications that solve real-world problems with clean, efficient code.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-background font-bold rounded-full hover:bg-primary-muted transition-all active:scale-95 flex items-center gap-2 group"
            >
              Explore My Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={profile.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass rounded-full font-bold text-text-primary hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <FileText size={20} />
              Resume
            </a>
            <a
              href="#contact"
              className="ml-2 text-text-secondary hover:text-primary font-medium transition-colors flex items-center gap-1"
            >
              Let's Connect <ArrowRight size={16} />
            </a>
          </div >

          {/* Technical Identity Row */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-6 text-sm font-mono text-text-secondary/60">
            <span>Frontend Development</span>
            <span className="text-primary/30">•</span>
            <span>Backend & APIs</span>
            <span className="text-primary/30">•</span>
            <span>Databases</span>
          </div>
        </motion.div>
      </div >
    </section>
  );
};

import AnimatedTypography from './AnimatedTypography';

export default Hero;
