import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.18 }}
          className="glass p-8 md:p-12 rounded-[40px] max-w-4xl w-full relative overflow-hidden border-primary/20"
        >
          {/* Decorative backdrop */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32" />

          <div className="relative z-10 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1 flex flex-col items-center text-center gap-6">
              <div className="w-24 h-24 rounded-3xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-lg">
                <GraduationCap size={48} />
              </div>
              <div>
                <h3 className="text-text-primary font-bold text-xl">{profile.education.college}</h3>
                <p className="text-text-secondary text-sm mt-2">{profile.education.university}</p>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-8">
              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-2">Degree</h4>
                <p className="text-2xl font-bold text-text-primary leading-tight">
                  {profile.education.degree}
                </p>
                <p className="text-text-secondary font-mono text-sm mt-2">{profile.education.period}</p>
              </div>

              <div>
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Relevant Learning Areas</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Data Structures & Algorithms in C++', 'Full-Stack Development', 'Database Management Systems', 'Artificial Intelligence & Deep Learning', 'Software Engineering'].map(subject => (
                    <div key={subject} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-white/10 text-text-secondary text-sm">
                      <BookOpen size={14} className="text-primary" />
                      {subject}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
