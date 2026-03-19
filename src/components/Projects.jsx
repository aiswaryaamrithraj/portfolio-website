import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Zap, Shield, Search, ShoppingBag, FileText } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Sustainable Thrift Store',
    subtitle: 'E-Commerce Platform',
    emoji: '🛍️',
    desc: 'A revenue-generating MERN e-commerce platform for a student-run thrift business, delivering 10+ core features including authentication, wishlist, cart, and time-based product drops.',
    longDesc: `Built a full-featured MERN stack e-commerce platform for sustainable thrifting. Implemented:
• 15+ RESTful APIs with JWT authentication and role-based access
• Time-based product drops and live countdown timers
• Heart-based wishlists and sophisticated cart workflows
• Scalable Node.js/Express backend with MVC architecture
• MongoDB for flexible product catalog management`,
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Tailwind CSS', 'REST APIs'],
    period: 'Nov 2025 – Dec 2025',
    highlights: ['15+ APIs', 'JWT Auth', 'MVC', 'Live Drops'],
    color: '#8b5cf6',
    icon: <ShoppingBag size={24} />,
    github: 'https://github.com/aiswarya',
    demo: '#',
  },
  {
    id: 2,
    title: 'PDF Review & AI Extraction',
    subtitle: 'Dashboard',
    emoji: '📄',
    desc: 'A scalable full-stack app for automated PDF invoice data extraction, reducing manual review time by 60%. Built with Python, React, Node.js, and MongoDB.',
    longDesc: `Engineered an intelligent PDF management platform with:
• AI-powered invoice data extraction reducing manual work by 60%
• In-browser PDF viewer using pdf.js for seamless document handling
• REST APIs and MongoDB Atlas for sub-second search across 50+ documents
• Increased productivity by 30% through streamlined UI/UX
• Fast search by vendor or invoice ID with persistent storage`,
    tech: ['Python', 'React.js', 'Node.js', 'MongoDB', 'PDF.js', 'REST APIs', 'OpenAI'],
    period: 'Aug 2025 – Sep 2025',
    highlights: ['60% Time Saved', 'AI Extraction', '50+ Docs', 'Fast Search'],
    color: '#06b6d4',
    icon: <FileText size={24} />,
    github: 'https://github.com/aiswarya',
    demo: '#',
  },
];

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.85, y: 30 }}
        transition={{ type: 'spring', damping: 20 }}
        className="glass rounded-3xl p-8 max-w-2xl w-full relative"
        style={{ border: `1px solid ${project.color}40` }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white transition-colors"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `${project.color}20`, color: project.color }}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
              {project.title}
            </h3>
            <p style={{ color: project.color }} className="font-medium">{project.subtitle}</p>
          </div>
        </div>

        <pre className="text-gray-300 text-sm leading-relaxed mb-6 whitespace-pre-wrap font-sans">
          {project.longDesc}
        </pre>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-mono"
              style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.demo}
            className="btn-glow flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)` }}
          >
            <ExternalLink size={16} /> Live Demo
          </a>
          <a
            href={project.github}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-gray-300 hover:text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-sm font-mono tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto leading-relaxed">
            Real-world applications built with modern technologies, focused on performance and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="project-card glass rounded-3xl overflow-hidden"
              style={{ border: `1px solid ${project.color}20` }}
            >
              {/* Card header */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`,
                }}
              >
                {/* Decorative bg */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent)`,
                  }}
                />
                <div
                  className="relative text-7xl"
                  style={{ animation: 'float 6s ease-in-out infinite', filter: 'drop-shadow(0 0 30px ' + project.color + ')' }}
                >
                  {project.emoji}
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono text-gray-400"
                    style={{ background: 'rgba(0,0,0,0.4)' }}
                  >
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <h3 className="text-xl font-black text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  {project.title}
                </h3>
                <p style={{ color: project.color }} className="text-sm font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-400 text-sm leading-7 mb-6">{project.desc}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${project.color}15`, color: project.color }}
                    >
                      <Zap size={10} /> {h}
                    </span>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-xs font-mono text-gray-400"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2.5 py-1 rounded text-xs font-mono text-gray-500">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.demo}
                    className="btn-glow flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)` }}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-400 hover:text-white transition-colors"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Github size={14} /> GitHub
                  </a>
                  <button
                    onClick={() => setSelected(project)}
                    className="ml-auto flex items-center gap-2 px-4 py-2 rounded-full text-sm text-gray-400 hover:text-purple-400 transition-colors"
                    style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.15)' }}
                  >
                    <Search size={14} /> Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
