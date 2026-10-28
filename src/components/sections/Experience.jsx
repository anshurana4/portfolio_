import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../../data/profile';
import { Calendar, Briefcase, GraduationCap, Award, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const ExperienceItem = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 + index * 0.08 }}
      className={`relative flex items-center justify-between w-full mb-12 ${
        index % 2 === 0 ? 'lg:flex-row-reverse' : 'flex-row'
      }`}
    >
      {/* Content Card */}
      <div className="w-full lg:w-5/12">
        <div className="glass p-6 rounded-3xl hover:border-primary/30 transition-colors group relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-text-primary font-bold text-lg group-hover:text-primary transition-colors">
                {item.title}
              </h4>
              <p className="text-primary text-sm font-medium">{item.company}</p>
            </div>
            <span className="text-text-secondary text-xs font-mono bg-surface px-2 py-1 rounded border border-white/10">
              {item.period}
            </span>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {item.stack?.map((s) => (
              <span key={s} className="px-2 py-1 text-[10px] font-mono bg-surface border border-white/10 rounded text-text-secondary">
                {s}
              </span>
            ))}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-xs text-primary font-bold hover:underline"
          >
            {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {isExpanded ? 'Show Less' : 'View Details'}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pt-4 mt-4 border-t border-white/10"
              >
                {item.details?.length > 0 && (
                  <ul className="space-y-2 text-text-secondary text-xs leading-relaxed">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {item.credentialLink && (
                  <a
                    href={item.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-primary text-xs font-bold hover:underline"
                  >
                    {item.credential}
                    <ExternalLink size={14} />
                  </a>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Timeline Center Line / Marker */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,240,255,0.5)] z-10" />
        <div className="w-px h-full bg-gradient-to-b from-primary/50 via-white/10 to-transparent absolute top-2" />
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden lg:block lg:w-5/12" />
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-tight"
          >
            Learning, building, and <span className="text-gradient">moving forward.</span>
          </motion.h2>
          <p className="text-text-secondary mt-6 max-w-2xl mx-auto text-lg">
            My journey so far has been shaped by hands-on development, internships, collaborative projects, and continuous learning.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line for mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 lg:hidden" />

          <div className="flex flex-col gap-0">
            {profile.experience.map((item, index) => (
              <ExperienceItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
