import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Award, Calendar } from 'lucide-react';

const timeline = [
  {
    id: 1,
    type: 'education',
    icon: <BookOpen size={18} />,
    title: 'B.Tech – Computer Science & Engineering',
    org: 'Lovely Professional University, Punjab',
    period: 'July 2023 – Present',
    desc: 'Specialization in Full-Stack Development | Minor in English Literature. Actively working on real-world projects and building industry-ready skill sets.',
    tags: ['Full-Stack', 'DSA', 'Software Engineering'],
    color: '#8b5cf6',
  },
  {
    id: 2,
    type: 'training',
    icon: <Award size={18} />,
    title: 'Data Structures & Algorithms Training',
    org: 'CSE Pathshala',
    period: 'June 2025 – July 2025',
    desc: 'Intensive hands-on training in DSA using Python. Strengthened problem-solving and algorithmic thinking. Implemented Breadth-First Search (BFS) to compute shortest paths in a 2D grid. Participated in guided code review sessions.',
    tags: ['Python', 'DSA', 'BFS', 'Problem Solving'],
    color: '#10b981',
  },
  {
    id: 3,
    type: 'course',
    icon: <Award size={18} />,
    title: 'MongoDB Developer Skills',
    org: 'MongoDB University',
    period: '2024',
    desc: 'Comprehensive training on MongoDB operations, aggregation pipelines, indexing strategies, and Atlas cloud deployment.',
    tags: ['MongoDB', 'NoSQL', 'Database'],
    color: '#f59e0b',
  },
  {
    id: 4,
    type: 'course',
    icon: <Award size={18} />,
    title: 'AWS Cloud Practitioner Essentials',
    org: 'Amazon Web Services',
    period: '2024',
    desc: 'Foundational understanding of AWS cloud services, core infrastructure, and cloud deployment best practices.',
    tags: ['AWS', 'Cloud', 'Infrastructure'],
    color: '#ef4444',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-sm font-mono tracking-widest uppercase mb-3">My journey</p>
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Experience & <span className="gradient-text">Training</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line"
            style={{ transform: 'translateX(-50%)' }}
          />

          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row pl-14 pr-4 md:pl-0 md:pr-0`}
              >
                {/* Connector dot */}
                <div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-gray-900 flex items-center justify-center z-10"
                  style={{
                    background: item.color,
                    boxShadow: `0 0 15px ${item.color}`,
                    top: '8px',
                  }}
                />

                {/* Card */}
                <div className={`w-full md:w-[46%] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div
                    className="glass rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 group project-card"
                    style={{ border: '1px solid rgba(139,92,246,0.15)' }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}20`, color: item.color }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm leading-tight">{item.title}</h3>
                        <p style={{ color: item.color }} className="text-xs font-medium mt-0.5">{item.org}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-4">
                      <Calendar size={12} className="text-gray-500" />
                      <span className="text-gray-500 text-xs">{item.period}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-loose mb-5">{item.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs font-mono"
                          style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
