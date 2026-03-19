import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code2, Lightbulb, Heart } from 'lucide-react';

function DeveloperPhoto() {
  return (
    <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 mx-auto">
      {/* Outer glow ring */}
      <div
        className="absolute -inset-1 rounded-full opacity-50"
        style={{
          background: 'conic-gradient(from 0deg, #8b5cf6, #c084fc, #8b5cf6)',
          animation: 'spin-slow 6s linear infinite',
          filter: 'blur(4px)',
        }}
      />
      {/* Photo */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden"
        style={{
          border: '3px solid rgba(139,92,246,0.6)',
          boxShadow: '0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(139,92,246,0.15)',
        }}
      >
        <img
          src="/developer.png"
          alt="Aiswarya Amrithraj – Full Stack Developer"
          className="w-full h-full object-cover object-top"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
      </div>
      {/* Floating dots */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-purple-400 opacity-70 animate-pulse" />
      <div className="absolute bottom-4 left-2 w-2 h-2 rounded-full bg-pink-400 opacity-70 animate-pulse" />
    </div>
  );
}

const stats = [
  { icon: <GraduationCap size={18} />, label: 'B.Tech CSE', sub: 'LPU' },
  { icon: <Code2 size={18} />, label: '10+ Tech', sub: 'Full Stack' },
  { icon: <Lightbulb size={18} />, label: '2 Projects', sub: 'Real Work' },
  { icon: <Heart size={18} />, label: '3rd Year', sub: 'Student' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-24 px-4 md:px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-xs font-mono uppercase tracking-widest mb-2">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-purple-400">Me</span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <DeveloperPhoto />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-lg mx-auto lg:mx-0"
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Hey, I'm <span className="text-purple-400 font-semibold">Aiswarya</span>, a 3rd-year CSE student at LPU.
              </p>

              <p className="text-gray-400 text-sm md:text-base">
                Backend-focused developer building scalable APIs and full-stack applications.
              </p>

              <p className="text-gray-400 text-sm md:text-base">
                I blend <span className="text-purple-400">engineering + design</span> to create meaningful software.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Backend', 'API', 'UI/UX', 'AI', 'Cloud'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-xs rounded-full text-purple-300"
                    style={{
                      background: 'rgba(139,92,246,0.12)',
                      border: '1px solid rgba(139,92,246,0.3)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="rounded-xl p-5 text-center backdrop-blur-md"
              style={{ border: '1px solid rgba(139,92,246,0.2)' }}
            >
              <div className="mb-2 text-purple-400 flex justify-center">
                {s.icon}
              </div>
              <p className="text-sm font-semibold text-white">{s.label}</p>
              <p className="text-xs text-gray-500">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}