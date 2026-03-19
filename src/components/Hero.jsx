import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { ArrowDown, Download, Eye, Mail, Sparkles } from 'lucide-react';

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '#8b5cf6' : '#c084fc';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    // Connect particles
    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = '#8b5cf6';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connect();
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(109,40,217,0.12) 0%, #050508 60%)' }}
    >
      <ParticleField />

      {/* Blob decorations */}
      <div
        className="absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #8b5cf6, #4c1d95)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-40 left-10 w-60 h-60 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c084fc, #7c3aed)',
          animation: 'floatReverse 10s ease-in-out infinite',
        }}
      />

      {/* Floating icons */}
      <div className="absolute top-32 left-16 opacity-40 hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite' }}>
        <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl">⚛️</div>
      </div>
      <div className="absolute top-48 right-32 opacity-40 hidden lg:block" style={{ animation: 'floatReverse 7s ease-in-out infinite' }}>
        <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl">🚀</div>
      </div>
      <div className="absolute bottom-48 right-20 opacity-40 hidden lg:block" style={{ animation: 'float 9s ease-in-out infinite' }}>
        <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-2xl">💎</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass mb-10 text-sm"
          style={{ border: '1px solid rgba(139,92,246,0.4)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-300">Available for New Projects</span>
          <Sparkles size={14} className="text-purple-400" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hero-title font-black mb-8 leading-tight"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          }}
        >
          <span className="text-white">Hey! I'm </span>
          <span className="gradient-text glow-text">Aiswarya</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-10 text-2xl md:text-3xl font-semibold text-gray-300"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          <TypeAnimation
            sequence={[
              'Full-Stack Developer', 2000,
              'Backend Engineer', 2000,
              'API Architect', 2000,
              'Problem Solver', 2000,
              'CSE Student @ LPU', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: '#a78bfa' }}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-16 leading-loose"
        >
          3rd-year CSE student passionate about backend systems, scalable APIs, and data-driven applications.
          Proficient in Java, Python, and JavaScript — building the future, one commit at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          <Link
            to="/resume"
            className="btn-glow flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              boxShadow: '0 0 30px rgba(139,92,246,0.5)',
            }}
          >
            <Eye size={18} />
            View CV
          </Link>

          <a
            href="/resume.pdf"
            download="Aiswarya_Resume.pdf"
            className="btn-glow flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
            style={{
              background: 'transparent',
              border: '2px solid #8b5cf6',
              color: '#a78bfa',
            }}
          >
            <Download size={18} />
            Download CV
          </a>

          <button
            onClick={scrollToContact}
            className="btn-glow flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white"
            style={{
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.3)',
            }}
          >
            <Mail size={18} />
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-32 flex flex-col items-center gap-4"
        >
          <span className="text-gray-600 text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-purple-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
