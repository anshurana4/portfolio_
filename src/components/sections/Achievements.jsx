import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { Award, ExternalLink } from 'lucide-react';

const AchievementCard = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass p-6 rounded-3xl hover:border-primary/50 transition-all group"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors">
        <Award size={24} />
      </div>
      <div className="flex-1">
        <h4 className="text-text-primary font-bold text-lg mb-2">{achievement.title}</h4>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {achievement.description}
        </p>
        {achievement.link !== "#" && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-xs font-bold hover:underline"
          >
            Verify Achievement <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            Recognition
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-tight"
          >
            Milestones that <span className="text-gradient">shaped my journey.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
