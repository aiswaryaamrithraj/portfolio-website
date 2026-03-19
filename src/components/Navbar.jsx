import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg' : 'py-5'
      }`}
      style={{ borderBottom: scrolled ? '1px solid rgba(139,92,246,0.15)' : 'none' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo('#home')} className="flex items-center gap-2 group">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #e879f9)',
              boxShadow: '0 0 20px rgba(139,92,246,0.5)',
            }}
          >
            <Code2 size={18} color="white" />
          </div>
          <span
            className="font-bold text-xl tracking-tight"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            <span className="text-white">Aiswarya</span>
            <span style={{ color: '#8b5cf6' }}>.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className={`nav-link text-sm font-medium transition-colors duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'nav-link-active'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/resume"
            className="btn-glow px-5 py-2 rounded-full text-sm font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              boxShadow: '0 0 20px rgba(139,92,246,0.4)',
            }}
          >
            Resume
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mobile-menu mt-2 px-6 pb-6"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left text-base py-2 border-b border-purple-900/30 ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-purple-400'
                      : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/resume"
                onClick={() => setMenuOpen(false)}
                className="btn-glow mt-2 py-3 rounded-full text-center text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #8b5cf6, #a855f7)' }}
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
