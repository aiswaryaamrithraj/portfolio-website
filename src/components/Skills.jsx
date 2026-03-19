import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    id: 'all',
    label: 'All'
  },
  {
    id: 'languages',
    label: 'Languages',
    color: '#8b5cf6',
    skills: [
      { name: 'Java', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'C++', level: 70 },
      { name: 'PHP', level: 65 },
      { name: 'JavaScript', level: 88 },
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#06b6d4',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#10b981',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'Node.js', level: 80 },
      { name: 'Django', level: 72 },
      { name: 'Laravel', level: 65 },
      { name: 'Flask', level: 70 },
    ]
  },
  {
    id: 'database',
    label: 'Database',
    color: '#f59e0b',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 78 },
      { name: 'Postgre SQL', level: 88 },
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & Tools',
    color: '#ef4444',
    skills: [
      { name: 'AWS', level: 60 },
      { name: 'Linux', level: 68 },
      { name: 'Git', level: 85 },
    ]
  },
];

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: `0 0 8px ${color}66`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('all');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = skillCategories.filter(c => c.id !== 'all');
  const displayed = active === 'all' ? categories : categories.filter(c => c.id === active);

  return (
    <section id="skills" className="py-24 px-6 relative" ref={ref}>
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-sm font-mono tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${active === cat.id
                  ? 'text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
                }`}
              style={
                active === cat.id
                  ? {
                    background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
                    boxShadow: '0 0 20px rgba(139,92,246,0.5)',
                  }
                  : { background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }
              }
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {displayed.map((cat, ci) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: ci * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 group"
                style={{ border: '1px solid rgba(139,92,246,0.15)' }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
                  />
                  <h3 className="font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {cat.label}
                  </h3>
                </div>
                {cat.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={cat.color}
                    inView={inView}
                  />
                ))}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Glowing tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm mb-5">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Express.js', 'MERN Stack', 'MVC Pattern', 'JWT Auth', 'BFS/DFS', 'Data Structures', 'REST APIs', 'MongoDB Atlas', 'PDF.js'].map((tag) => (
              <span
                key={tag}
                className="skill-tag px-4 py-1.5 rounded-full text-xs font-mono text-purple-300"
                style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
