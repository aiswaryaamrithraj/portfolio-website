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
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setErrors({});
    setStatus('sending');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-xs font-mono uppercase tracking-widest mb-2">
            Let's collaborate
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Work <span className="text-purple-400">Together</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-sm mx-auto text-sm">
            Open to projects, ideas, and collaborations.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl p-7 md:p-8 backdrop-blur-md border border-purple-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">
                Send a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => handleChange('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-white/5 border border-white/10 focus:border-purple-400 outline-none"
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}

                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-white/5 border border-white/10 focus:border-purple-400 outline-none"
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}

                <textarea
                  rows={4}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={e => handleChange('message', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-white/5 border border-white/10 focus:border-purple-400 outline-none resize-none"
                />
                {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg text-sm font-medium text-white flex items-center justify-center gap-2"
                  style={{
                    background: status === 'success'
                      ? 'linear-gradient(135deg, #10b981, #059669)'
                      : 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                  }}
                >
                  {status === 'sending' && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
                  {status === 'success' && <Check size={16} />}
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : (<><Send size={16}/> Send</>)}
                </button>
              </form>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >

            {/* SERVICES */}
            <div>
              <h3 className="text-white text-base font-semibold mb-4">Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-purple-500/20 bg-white/5 text-sm"
                  >
                    <span className="text-purple-400">{s.icon}</span>
                    {s.label}
                  </div>
                ))}
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <h3 className="text-white text-base font-semibold mb-4">Socials</h3>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}30`,
                      color: s.color,
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CONTACT CARD */}
            <div className="rounded-xl p-5 border border-purple-500/20 bg-white/5">
              <p className="text-sm text-gray-300">
                📧 <span className="text-purple-400">aiswaryaamrithraj@gmail.com</span>
              </p>
              <p className="text-sm text-gray-300 mt-2">
                📱 <span className="text-purple-400">+91 7560959959</span>
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
