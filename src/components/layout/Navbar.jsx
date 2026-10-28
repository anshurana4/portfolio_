import React from 'react';
import { profile } from '../../data/profile';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, FileText, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section tracking
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (href) => {
    const targetId = href.substring(1);
    const scrollToSection = () => {
      const element = document.getElementById(targetId);
      if (!element) return;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      window.setTimeout(scrollToSection, 120);
    } else {
      scrollToSection();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 rounded-3xl border backdrop-blur-xl shadow-[0_14px_42px_rgba(0,0,0,0.48),0_0_26px_rgba(0,180,255,0.08)] transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-background/90 border-white/15 shadow-[0_16px_48px_rgba(0,0,0,0.55),0_0_28px_rgba(0,180,255,0.10)]'
          : 'py-3 bg-background/70 border-white/10'
      }`}
    >
      <div className="w-full px-4 sm:px-5 lg:px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavLinkClick('#home')}
        >
          <div className="relative grid w-11 h-11 shrink-0 place-items-center overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary via-cyan-400 to-blue-500 text-background shadow-[0_0_22px_rgba(0,240,255,0.25)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
            <span className="absolute inset-0 bg-gradient-to-br from-white/35 to-transparent" />
            <span className="relative z-10 text-lg font-black italic tracking-tight">{profile.monogram}</span>
          </div>
          <span className="hidden sm:flex flex-col gap-1 leading-none">
            <span className="text-gradient text-lg font-extrabold tracking-tight transition-colors group-hover:brightness-125">
              {profile.name}
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-text-secondary">
              Full-Stack Developer
            </span>
          </span>
        </div>

        {/* Center: Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative group ${
                activeSection === link.href.substring(1)
                ? 'text-primary'
                : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right: CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.contact.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            <FileText size={16} />
            Resume
          </a>
          <button
            onClick={() => handleNavLinkClick('#contact')}
            className="px-5 py-2 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary-muted transition-all active:scale-95 flex items-center gap-2"
          >
            Let's Connect
            <Send size={16} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 mt-3 rounded-3xl border border-white/10 bg-surface/95 backdrop-blur-xl shadow-[0_18px_45px_rgba(0,0,0,0.5)] p-6 lg:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavLinkClick(link.href);
                }}
                className="text-text-secondary hover:text-text-primary text-lg font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <hr className="border-white/10 my-2" />
            <div className="flex flex-col gap-4">
              <a
                href={profile.contact.resume}
                className="flex items-center gap-2 text-text-secondary hover:text-text-primary font-medium"
              >
                <FileText size={18} />
                Resume
              </a>
              <button
                onClick={() => handleNavLinkClick('#contact')}
                className="w-full py-3 bg-primary text-background font-bold rounded-xl"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
