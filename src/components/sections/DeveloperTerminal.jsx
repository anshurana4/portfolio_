import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../../data/profile';
import { Terminal as TerminalIcon } from 'lucide-react';

const DeveloperTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', content: 'Welcome to Anshu Rana\'s Dev Terminal v1.0.0' },
    { type: 'output', content: 'Type "help" to see available commands.' },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd) => {
    const command = cmd.trim();
    const normalizedCommand = command.toLowerCase();

    if (!command) return;

    if (normalizedCommand === 'clear') {
      setHistory([]);
      return;
    }

    let output;
    let outputType = 'output';

    switch (normalizedCommand) {
      case 'help':
        output = [
          'Available commands:',
          '  about     - Learn more about me',
          '  skills    - View my technical stack',
          '  projects  - List my featured projects',
          '  education - Academic background',
          '  focus     - Current learning priorities',
          '  contact   - Get in touch',
          '  whoami    - Developer identity',
          '  clear     - Reset terminal',
          '  help      - Show this menu',
        ];
        break;

      case 'about':
        output = profile.about.description;
        break;

      case 'skills':
        output = Object.entries(profile.skills)
          .map(([cat, skills]) => `${cat}: ${skills.join(', ')}`)
          .join('\n');
        break;

      case 'projects':
        output = profile.projects.map(p => `${p.name} - ${p.tagline}`).join('\n');
        break;

      case 'education':
        output = `${profile.education.degree}\n${profile.education.college}\n${profile.education.period}`;
        break;

      case 'focus':
        output = profile.about.currentlyExploring.join('\n');
        break;

      case 'contact':
        output = `Email: ${profile.contact.email}\nLinkedIn: ${profile.contact.linkedin}\nGitHub: ${profile.contact.github}`;
        break;

      case 'whoami':
        output = `${profile.name} - ${profile.role}\nFocus: Full-Stack Development & AI`;
        break;

      default:
        outputType = 'error';
        output = `Command not found: ${command}. Type "help" for assistance.`;
    }

    setHistory((currentHistory) => [
      ...currentHistory,
      { type: 'command', content: command },
      { type: outputType, content: output },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  return (
    <section id="terminal" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4"
          >
            Interactive Workspace
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            className="text-4xl md:text-6xl font-black leading-tight"
          >
            Curious about how I think? <span className="text-gradient">Open a terminal.</span>
          </motion.h2>
          <p className="text-text-secondary mt-6 text-lg">
            A small interactive window into my developer profile. Explore my interests and projects using simple commands.
          </p>
        </div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.18 }}
          className="glass rounded-2xl overflow-hidden shadow-2xl border border-primary/20"
        >
          {/* Title Bar */}
          <div className="bg-surface px-4 py-3 flex items-center justify-between border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 text-text-secondary/50 text-xs font-mono">
              <TerminalIcon size={14} />
              anshu@portfolio: ~
            </div>
            <div className="w-12" />
          </div>

          {/* Terminal Content */}
          <div
            ref={scrollRef}
            className="bg-background/90 p-6 h-[450px] overflow-y-auto font-mono text-sm leading-relaxed"
            role="log"
            aria-live="polite"
            aria-label="Interactive developer terminal output"
          >
            <div className="flex flex-col gap-2">
              <AnimatePresence mode="popLayout">
                {history.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col"
                  >
                    {entry.type === 'command' ? (
                      <div className="flex gap-3 items-center text-text-primary">
                        <span className="text-primary font-bold">➜</span>
                        <span className="text-primary/70">~</span>
                        <span>{entry.content}</span>
                      </div>
                    ) : (
                      <div className={`pl-7 ${entry.type === 'error' ? 'text-red-400' : 'text-text-secondary'}`}>
                        {Array.isArray(entry.content) ? (
                          entry.content.map((line, li) => <div key={li}>{line}</div>)
                        ) : (
                          <div>{entry.content}</div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="flex gap-3 items-center text-text-primary mt-2">
                <span className="text-primary font-bold">➜</span>
                <span className="text-primary/70">~</span>
                <input
                  type="text"
                  aria-label="Enter a terminal command"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border-none outline-none flex-1 text-text-primary placeholder:text-text-secondary/30"
                  placeholder="Type 'help'..."
                />
              </form>
            </div>
          </div>
        </motion.div>

        {/* Example Commands */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {['help', 'about', 'skills', 'projects', 'whoami'].map(cmd => (
            <button
              key={cmd}
              onClick={() => {
                setInput(cmd);
              }}
              className="px-3 py-1 glass text-xs font-mono text-text-secondary hover:text-primary rounded transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperTerminal;
