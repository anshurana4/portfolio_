import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../../data/profile';
import { Layout, Server, Database, Sparkles, Globe, Code2 } from 'lucide-react';

const CATEGORIES = [
  { id: 'All', label: 'All', icon: <Globe size={16}/> },
  { id: 'Core', label: 'Core', icon: <Code2 size={16}/> },
  { id: 'Languages', label: 'Languages', icon: <Globe size={16}/> },
  { id: 'Frontend', label: 'Frontend', icon: <Layout size={16}/> },
  { id: 'Backend', label: 'Backend', icon: <Server size={16}/> },
  { id: 'Databases', label: 'Databases', icon: <Database size={16}/> },
  { id: 'AI & Data', label: 'AI & Data', icon: <Sparkles size={16}/> },
  { id: 'Tools', label: 'Tools', icon: <Globe size={16}/> },
];

const categoryMap = {
  'Core': 'core',
  'Languages': 'programmingLanguages',
  'Frontend': 'frontend',
  'Backend': 'backend',
  'Databases': 'databases',
  'AI & Data': 'aiAndData',
  'Tools': 'tools',
};

const Code2Icon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? Object.values(profile.skills).flat()
    : profile.skills[categoryMap[activeCategory]] || [];

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            Technical Toolkit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-tight"
          >
            Tools I use to turn <span className="text-gradient">ideas into software.</span>
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                ? 'bg-primary text-background shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                : 'glass text-text-secondary hover:text-text-primary'
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="glass p-4 rounded-2xl flex items-center gap-3 hover:border-primary/50 transition-colors group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Code2Icon size={14} />
                </div>
                <span className="text-text-primary font-medium text-sm">{skill}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
