import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { Mail, FileText } from 'lucide-react';
import { Github, Linkedin } from '../ui/BrandIcons';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-white/10 bg-surface/50">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-background font-bold text-sm">
              {profile.monogram}
            </div>
            <span className="text-text-primary font-bold text-xl">{profile.name}</span>
          </div>
          <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
            Building thoughtful software at the intersection of web and AI. focused on full-stack development and backend engineering.
          </p>
          <p className="text-text-secondary/40 text-[10px] font-mono uppercase tracking-widest">
            Designed with curiosity. Built with code.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-text-primary font-bold text-sm uppercase tracking-wider">Navigation</h4>
          <nav className="flex flex-col gap-2">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-text-secondary text-sm hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-text-primary font-bold text-sm uppercase tracking-wider">Connect</h4>
          <div className="flex flex-col gap-3">
            <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary text-sm hover:text-primary transition-colors">
              <Github size={16} /> GitHub
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary text-sm hover:text-primary transition-colors">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-3 text-text-secondary text-sm hover:text-primary transition-colors">
              <Mail size={16} /> Email
            </a>
            <a href={profile.contact.resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text-secondary text-sm hover:text-primary transition-colors">
              <FileText size={16} /> Resume
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary/50 text-xs">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex gap-6 text-text-secondary/50 text-xs">
          <span>Built with React & Tailwind</span>
          <span>Hosted on Vercel</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
