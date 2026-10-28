import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { Mail, FileText, Send } from 'lucide-react';
import { Github, Linkedin } from '../ui/BrandIcons';

const Contact = () => {
  const [formState, setFormState] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${profile.contact.email}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`)}`;
    setFormState('opening');
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase w-fit">
              Contact Me
            </span>
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Let's build something <span className="text-gradient">meaningful.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              I'm open to full-stack development internships, collaborative projects, and conversations about building useful web applications. Send me a message or connect with me on LinkedIn.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${profile.contact.email}`}
              className="flex min-w-0 items-center gap-4 p-4 glass rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="shrink-0 p-3 rounded-xl bg-surface text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <Mail size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-text-secondary uppercase font-bold">Email Me</p>
                <p className="break-all text-sm font-medium leading-snug text-text-primary">{profile.contact.email}</p>
              </div>
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="p-3 rounded-xl bg-surface text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase font-bold">LinkedIn</p>
                <p className="text-sm font-medium text-text-primary">Connect with me</p>
              </div>
            </a>
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="p-3 rounded-xl bg-surface text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <Github size={20} />
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase font-bold">GitHub</p>
                <p className="text-sm font-medium text-text-primary">View my code</p>
              </div>
            </a>
            <a
              href={profile.contact.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="p-3 rounded-xl bg-surface text-primary group-hover:bg-primary group-hover:text-background transition-colors">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-xs text-text-secondary uppercase font-bold">Resume</p>
                <p className="text-sm font-medium text-text-primary">Download CV</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          className="glass p-8 rounded-3xl relative"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Full Name</label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-3 bg-surface border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-3 bg-surface border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-subject" className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                required
                type="text"
                maxLength={150}
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                className="px-4 py-3 bg-surface border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary transition-colors"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-xs font-bold text-text-secondary uppercase tracking-widest ml-1">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                maxLength={5000}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="px-4 py-3 bg-surface border border-white/10 rounded-xl text-text-primary focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Write your message..."
              />
            </div>

            <button
              className="py-4 bg-primary text-background font-bold rounded-xl hover:bg-primary-muted transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Prepare Email
              <Send size={18} />
            </button>

            {formState === 'opening' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-primary text-sm font-medium"
                role="status"
                aria-live="polite"
              >
                Your email app should open with a draft. If it doesn't, email me at{' '}
                <a className="underline underline-offset-2" href={`mailto:${profile.contact.email}`}>
                  {profile.contact.email}
                </a>.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
