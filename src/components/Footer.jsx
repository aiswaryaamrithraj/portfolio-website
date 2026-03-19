import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="py-10 px-6 relative"
      style={{
        borderTop: '1px solid rgba(139,92,246,0.15)',
        background: 'linear-gradient(to top, rgba(109,40,217,0.05), transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #e879f9)' }}
            >
              <Code2 size={16} color="white" />
            </div>
            <span className="font-bold text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
              <span className="text-white">Aiswarya</span>
              <span style={{ color: '#8b5cf6' }}>.</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-purple-400 mx-1" fill="#8b5cf6" /> by Aiswarya Amrithraj
            &nbsp;·&nbsp;© {new Date().getFullYear()}
          </p>

          {/* Social + Back-to-top */}
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:aiswaryaamrithraj@gmail.com" className="text-gray-500 hover:text-purple-400 transition-colors">
              <Mail size={20} />
            </a>
            <button
              onClick={scrollToTop}
              className="btn-glow w-9 h-9 rounded-full flex items-center justify-center text-white ml-2"
              style={{ background: 'linear-gradient(135deg, #8b5cf6, #a855f7)' }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
