import React from 'react';
import { motion } from 'framer-motion';

const WORDS = [
  "BUILD", "CREATE", "DEBUG", "DEPLOY", "INNOVATE",
  "ENGINEER", "FULLSTACK", "AI", "SOLVE"
];

const WORD_LAYOUT = [
  { left: '2%', top: '4%', rotate: -12, size: 11 },
  { left: '30%', top: '12%', rotate: 8, size: 10 },
  { left: '67%', top: '2%', rotate: -8, size: 9 },
  { left: '10%', top: '35%', rotate: 7, size: 10 },
  { left: '42%', top: '32%', rotate: -6, size: 11 },
  { left: '69%', top: '39%', rotate: 10, size: 9 },
  { left: '20%', top: '69%', rotate: -8, size: 9 },
  { left: '54%', top: '70%', rotate: 7, size: 13 },
  { left: '76%', top: '75%', rotate: -10, size: 10 },
];

const AnimatedTypography = () => {
  return (
    <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {WORDS.map((word, index) => {
        const layout = WORD_LAYOUT[index];
        return (
          <motion.span
            key={word}
            className="absolute whitespace-nowrap font-black text-primary/[0.12]"
            style={{
              left: layout.left,
              top: layout.top,
              zIndex: index % 3,
              fontSize: `clamp(2.5rem, ${layout.size}vw, 9rem)`,
              lineHeight: 1,
            }}
            animate={{
              x: [0, index % 2 === 0 ? 18 : -18, 0],
              y: [0, index % 2 === 0 ? -14 : 14, 0],
              rotate: [layout.rotate, layout.rotate + (index % 2 === 0 ? 4 : -4), layout.rotate],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7 + (index % 4) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          >
            {word}
          </motion.span>
        );
      })}

      {/* Faint Grid Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default AnimatedTypography;
