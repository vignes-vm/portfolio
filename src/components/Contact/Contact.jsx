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
    { icon: <FiMail size={20} />, label: 'Email', value: email, href: `mailto:${email}` },
    { icon: <FiPhone size={20} />, label: 'Phone', value: phone, href: `tel:${phone}` },
    { icon: <FiLinkedin size={20} />, label: 'LinkedIn', value: 'vignes-madeshwaran', href: linkedin },
    { icon: <FiGithub size={20} />, label: 'GitHub', value: 'vignes-vm', href: github },
  ];

  return (
    <section id="contact" className="py-24 relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, var(--accent)/5, transparent)' }} />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, var(--accent-secondary)/5, transparent)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title="Contact" subtitle="Let's build something amazing together." />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div>
            <AnimatedWrapper delay={0}>
              <p style={{ color: 'var(--text-secondary)' }} className="text-lg leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
              </p>
            </AnimatedWrapper>

            <div className="space-y-4">
              {contactLinks.map((link, i) => (
                <AnimatedWrapper key={link.label} delay={i * 0.1}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 group"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                  >
                    <div 
                      className="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: 'var(--accent)',
                        opacity: 0.15,
                        borderColor: 'var(--accent)',
                        color: 'var(--accent)',
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <p style={{ color: 'var(--text-muted)' }} className="text-xs font-medium">{link.label}</p>
                      <p style={{ color: 'var(--text-primary)' }} className="text-sm font-medium group-hover:translate-x-1 transition-transform">{link.value}</p>
                    </div>
                  </a>
                </AnimatedWrapper>
              ))}
            </div>

            <AnimatedWrapper delay={5} className="mt-6">
              <div 
                className="flex items-center gap-3 p-4 rounded-xl border"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border)',
                }}
              >
                <FiMapPin size={20} style={{ color: 'var(--accent-tertiary)' }} />
                <div>
                  <p style={{ color: 'var(--text-muted)' }} className="text-xs font-medium">Location</p>
                  <p style={{ color: 'var(--text-primary)' }} className="text-sm font-medium">Tamil Nadu, India</p>
                </div>
              </div>
            </AnimatedWrapper>
          </div>

          {/* Right: Form */}
          <AnimatedWrapper delay={2}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border space-y-5"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border)',
              }}
            >
              <div>
                <label htmlFor="contact-name" style={{ color: 'var(--text-secondary)' }} className="block text-sm mb-2 font-medium">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                />
              </div>
              <div>
                <label htmlFor="contact-email" style={{ color: 'var(--text-secondary)' }} className="block text-sm mb-2 font-medium">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                />
              </div>
              <div>
                <label htmlFor="contact-message" style={{ color: 'var(--text-secondary)' }} className="block text-sm mb-2 font-medium">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none resize-none"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                />
              </div>
              <motion.button
                id="contact-submit-btn"
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))',
                  boxShadow: 'var(--glow-accent)',
                }}
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
