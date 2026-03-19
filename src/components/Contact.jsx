import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Github, Linkedin, Globe, Check, AlertCircle, Code2, Palette, Phone } from 'lucide-react';

const services = [
  { icon: <Globe size={18} />, label: 'Web & Mobile Development' },
  { icon: <Code2 size={18} />, label: 'API Architecture & Backend' },
  { icon: <Palette size={18} />, label: 'UI/UX Design' },
  { icon: <Phone size={18} />, label: 'Technical Consulting' },
];

const socials = [
  { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0077b5' },
  { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com', color: '#8b5cf6' },
  { icon: <Mail size={20} />, label: 'Email', href: 'mailto:aiswaryaamrithraj@gmail.com', color: '#ea4335' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1800));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleChange = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-sm font-mono tracking-widest uppercase mb-3">Let's collaborate</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto leading-relaxed">
            I'm always open to discussing new opportunities or creative projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="glass rounded-3xl p-8"
              style={{ border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Send me a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className="form-input w-full px-4 py-3 rounded-xl text-sm"
                    style={{ outline: 'none' }}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>
                {/* Email */}
                <div>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className="form-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.email}
                    </p>
                  )}
                </div>
                {/* Message */}
                <div>
                  <textarea
                    id="contact-message"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    rows={5}
                    className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  id="contact-submit"
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="btn-glow w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all"
                  style={{
                    background: status === 'success'
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                    boxShadow: '0 0 30px rgba(139,92,246,0.4)',
                  }}
                >
                  {status === 'sending' && (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {status === 'success' && <Check size={18} />}
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent! 🎉' : (
                    <><Send size={18} /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>What I offer</h3>
              <div className="space-y-3">
                {services.map((s) => (
                  <div
                    key={s.label}
                    className="glass flex items-center gap-3 px-5 py-3.5 rounded-2xl hover:border-purple-500/40 transition-all duration-300 group"
                    style={{ border: '1px solid rgba(139,92,246,0.15)' }}
                  >
                    <div
                      className="text-purple-400 group-hover:scale-110 transition-transform"
                      style={{ color: '#a78bfa' }}
                    >
                      {s.icon}
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-5" style={{ fontFamily: 'Outfit, sans-serif' }}>My Socials</h3>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glow w-14 h-14 rounded-2xl flex items-center justify-center transition-all group"
                    style={{
                      background: `${s.color}12`,
                      border: `1px solid ${s.color}30`,
                      color: s.color,
                    }}
                    title={s.label}
                  >
                    <span className="group-hover:scale-110 transition-transform">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Direct contact info */}
            <div
              className="glass rounded-2xl p-5"
              style={{ border: '1px solid rgba(139,92,246,0.15)' }}
            >
              <p className="text-gray-400 text-sm leading-relaxed">
                📧 <span className="text-purple-300">aiswaryaamrithraj@gmail.com</span>
              </p>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                📱 <span className="text-purple-300">+91 7560959959</span>
              </p>
              <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                I typically respond within 24 hours. Looking forward to working with you! 🚀
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
