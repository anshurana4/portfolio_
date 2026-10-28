import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

export const LiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial Glow following cursor */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 150 }}
      />

      {/* Subtle static glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/5 blur-[150px]" />
    </div>
  );
};

export const DeveloperPanel = () => {
  const code = `const developer = {
  name: "${profile.name}",
  focus: ["Full-Stack", "AI", "Backend"],
  goal: "${profile.goal}"
};

developer.build();
developer.learn();
developer.repeat();`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-md aspect-video glass rounded-2xl overflow-hidden shadow-2xl group"
    >
      {/* Terminal Header */}
      <div className="bg-white/10 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-xs text-text-secondary font-mono flex items-center gap-2">
          <span className="opacity-50">terminal</span>
          bash — profile.js
        </div>
        <div className="w-10" />
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm leading-relaxed">
        <pre className="text-text-secondary">
          {code.split('\n').map((line, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-text-secondary/30 w-4 text-right">{i + 1}</span>
              <span className={line.includes('primary') ? 'text-primary' : 'text-text-primary'}>
                {line}
              </span>
            </div>
          ))}
        </pre>
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="inline-block w-2 h-5 bg-primary ml-1 align-middle"
        />
      </div>

      {/* Floating Tags */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {['React', 'Node.js', 'FastAPI'].map(tag => (
          <motion.span
            key={tag}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() }}
            className="px-2 py-1 text-[10px] font-mono bg-primary/20 text-primary border border-primary/30 rounded"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
