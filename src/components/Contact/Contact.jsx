import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiMapPin } from 'react-icons/fi';
import SectionTitle from '../common/SectionTitle';
import AnimatedWrapper from '../common/AnimatedWrapper';
import { portfolioData } from '../../data/portfolioData';

const Contact = () => {
  const { email, phone, linkedin, github } = portfolioData;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire to your backend / EmailJS / Formspree here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', message: '' });
  };

  const contactLinks = [
    { icon: <FiMail size={20} />, label: 'Email', value: email, href: `mailto:${email}`, color: 'blue' },
    { icon: <FiPhone size={20} />, label: 'Phone', value: phone, href: `tel:${phone}`, color: 'cyan' },
    { icon: <FiLinkedin size={20} />, label: 'LinkedIn', value: 'vignes-madeshwaran', href: linkedin, color: 'indigo' },
    { icon: <FiGithub size={20} />, label: 'GitHub', value: 'vignes-vm', href: github, color: 'emerald' },
  ];

  const colorMap = {
    violet: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
    cyan: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
    indigo: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400',
    emerald: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400',
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle title="Contact" subtitle="Let's build something amazing together." />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <AnimatedWrapper delay={0}>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
              </p>
            </AnimatedWrapper>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <AnimatedWrapper key={link.label} delay={i + 1}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${colorMap[link.color]}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-medium">{link.label}</p>
                      <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">{link.value}</p>
                    </div>
                  </a>
                </AnimatedWrapper>
              ))}
            </div>

            <AnimatedWrapper delay={5} className="mt-6">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
                <FiMapPin className="text-rose-400" size={20} />
                <div>
                  <p className="text-slate-500 text-xs font-medium">Location</p>
                  <p className="text-slate-200 text-sm font-medium">Tamil Nadu, India</p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right: Form */}
          <AnimatedWrapper delay={2}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 space-y-5"
            >
              <div>
                <label htmlFor="contact-name" className="block text-slate-400 text-sm mb-2 font-medium">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-slate-400 text-sm mb-2 font-medium">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-slate-400 text-sm mb-2 font-medium">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                />
              </div>
              <motion.button
                id="contact-submit-btn"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg cursor-pointer"
              >
                {submitted ? (
                  <span>Message Sent! ✓</span>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
