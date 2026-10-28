import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { Cpu, Globe, Code2, BookOpen, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.12 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider w-fit uppercase">
            About Me
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            {profile.about.intro}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {profile.about.description}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-surface border border-white/10 text-primary">
                <Code2 size={20} />
              </div>
              <div>
                <h4 className="text-text-primary font-bold">Building for the Future</h4>
                <p className="text-sm text-text-secondary">I enjoy creating applications that solve real-world problems using AI and full-stack engineering.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-surface border border-white/10 text-primary">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-text-primary font-bold">Continuous Learning</h4>
                <p className="text-sm text-text-secondary">{profile.about.philosophy}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-8 relative overflow-hidden group"
        >
          {/* Decorative Background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />

          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-text-primary font-bold">{profile.education.degree}</h3>
                <p className="text-xs text-text-secondary">{profile.education.college} • {profile.education.period}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <ProfileItem icon={<Cpu size={18}/>} label="Current Focus" value="Full-Stack Development" />
              <ProfileItem icon={<Globe size={18}/>} label="Exploring" value="AI-powered apps" />
              <ProfileItem icon={<Code2 size={18}/>} label="Learning" value="Backend Architecture" />
              <ProfileItem icon={<BookOpen size={18}/>} label="Practicing" value="DSA & Problem Solving" />
            </div>
          </div>
        </motion.div>
      </div >
    </section>
  );
};

const ProfileItem = ({ icon, label, value }) => (
  <div className="flex flex-col gap-1">
    <div className="flex items-center gap-2 text-text-secondary/60 text-[10px] uppercase tracking-widest font-bold">
      {icon}
      {label}
    </div>
    <span className="text-text-primary font-medium text-sm">{value}</span>
  </div>
);

export default About;
