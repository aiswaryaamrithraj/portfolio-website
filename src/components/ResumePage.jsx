import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Code2, BookOpen, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function ResumePage() {
  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{ background: '#050508' }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft size={18} />
          <span className="text-sm">Back to Portfolio</span>
        </a>
        <a
          href="/resume.pdf"
          download="Aiswarya_Resume.pdf"
          className="btn-glow flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #a855f7)', boxShadow: '0 0 20px rgba(139,92,246,0.4)' }}
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      {/* Resume card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden"
        style={{ border: '1px solid rgba(139,92,246,0.2)' }}
      >
        {/* Name header */}
        <div
          className="p-10 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(192,132,252,0.08))' }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{ background: 'radial-gradient(ellipse at 50% 50%, #8b5cf6, transparent)' }}
          />
          <div
            className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #c084fc)', boxShadow: '0 0 30px rgba(139,92,246,0.5)' }}
          >
            👩‍💻
          </div>
          <h1 className="text-4xl font-black text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Aiswarya Amrithraj E
          </h1>
          <p className="text-purple-300 text-lg font-medium mb-4">Full-Stack Developer · CSE Student</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>📱 +91 7560959959</span>
            <span>📧 aiswaryaamrithraj@gmail.com</span>
            <span>🔗 LinkedIn</span>
            <span>💻 GitHub</span>
          </div>
        </div>

        <div className="p-10 space-y-10">
          {/* Summary */}
          <Section icon={<BookOpen size={18} />} title="Summary">
            <p className="text-gray-300 leading-relaxed">
              3rd-year Computer Science Engineering student at LPU, Punjab with hands-on experience in backend-focused software development, scalable APIs, and data-driven systems. Proficient in Java, Python, and JavaScript with a strong foundation in software engineering best practices, debugging, and collaborative development. Experienced in building and optimizing real-world applications using modern frameworks and databases, and eager to grow in a high-performance, AI-driven product environment.
            </p>
          </Section>

          {/* Skills */}
          <Section icon={<Code2 size={18} />} title="Skills">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Languages', value: 'Java, C++, Python, PHP, JavaScript (ES6+)' },
                { label: 'Frontend', value: 'HTML5, CSS3, React.js, Tailwind CSS' },
                { label: 'Backend / Frameworks', value: 'Node.js, Django, Laravel, Flask, Express.js' },
                { label: 'Database & APIs', value: 'MySQL, MongoDB, FastAPI, OpenAI, REST APIs' },
                { label: 'Cloud & OS', value: 'AWS, Unix/Linux, Git' },
                { label: 'Design Tools', value: 'Canva, Figma, Photoshop, Illustrator' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl p-4" style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)' }}>
                  <p className="text-purple-300 text-xs font-mono uppercase tracking-wider mb-1">{label}</p>
                  <p className="text-gray-300 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section icon={<Briefcase size={18} />} title="Projects">
            <div className="space-y-6">
              <ProjectEntry
                title="Sustainable Thrift Store E-Commerce Platform"
                tech="React.js, Node.js, MongoDB, Tailwind CSS, APIs"
                period="Nov 2025 – Dec 2025"
                bullets={[
                  'Launched a revenue-generating MERN e-commerce platform for a student-run thrift business, delivering 10+ core features including authentication, wishlist, cart, and product drops.',
                  'Configured a scalable backend using Node.js, Express, and MongoDB, structuring 15+ RESTful APIs with JWT authentication, role-based access, and MVC architecture.',
                  'Evaluated & Customized end-to-end UX with time-based drops, live countdown timers, and heart-based wishlists.',
                ]}
              />
              <ProjectEntry
                title="PDF Review & AI Extraction Dashboard"
                tech="Python, React.js, Node.js, MongoDB, REST APIs"
                period="Aug 2025 – Sep 2025"
                bullets={[
                  'Engineered a scalable full-stack application for automated PDF invoice data extraction, reducing manual review time by 60% across 100+ documents.',
                  'Built an in-browser PDF viewer using pdf.js, enhancing accessibility and document handling efficiency for end users, improving productivity by 30%.',
                  'Implemented REST APIs and MongoDB Atlas for persistent storage, enabling sub-second search queries by vendor or invoice ID across 50+ documents.',
                ]}
              />
            </div>
          </Section>

          {/* Training */}
          <Section icon={<Award size={18} />} title="Training & Courses">
            <div className="space-y-4">
              <TrainingEntry
                title="Data Structures and Algorithm Training"
                org="CSE Pathshala"
                period="June 2025 – July 2025"
                bullets={[
                  'Intensive hands-on training in DSA using Python, strengthening problem-solving, debugging, and algorithmic thinking.',
                  'Implemented Breadth-First Search (BFS) to compute shortest paths in a 2D grid.',
                  'Participated in guided problem-solving and code review sessions.',
                ]}
              />
              <div className="grid md:grid-cols-2 gap-3 pt-2">
                {['MongoDB Developer Skills', 'AWS Cloud Practitioner Essentials', 'Coursera Certificates', 'Udemy Certificates'].map(c => (
                  <div key={c} className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-400" style={{ background: 'rgba(139,92,246,0.06)' }}>
                    <span className="text-purple-400">🔗</span> {c}
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Education */}
          <Section icon={<GraduationCap size={18} />} title="Education">
            <div className="glass rounded-2xl p-5" style={{ border: '1px solid rgba(139,92,246,0.2)' }}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-white">Lovely Professional University, Punjab, India</h4>
                  <p className="text-purple-300 text-sm mt-1">Bachelor of Technology — Computer Science & Engineering</p>
                  <p className="text-gray-500 text-sm">Specialization in Full-Stack Development | Minor in English Literature</p>
                </div>
                <span className="text-gray-500 text-sm shrink-0 ml-4">July 2023 – Present</span>
              </div>
            </div>
          </Section>
        </div>
      </motion.div>
    </div>
  );
}

function Section({ icon, title, children }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <div className="text-purple-400">{icon}</div>
        <h2 className="text-xl font-black text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{title}</h2>
        <div className="flex-1 h-px ml-3" style={{ background: 'rgba(139,92,246,0.2)' }} />
      </div>
      {children}
    </div>
  );
}

function ProjectEntry({ title, tech, period, bullets }) {
  return (
    <div className="glass rounded-2xl p-5" style={{ border: '1px solid rgba(139,92,246,0.15)' }}>
      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
        <h4 className="font-bold text-white">{title}</h4>
        <span className="text-gray-500 text-xs">{period}</span>
      </div>
      <p className="text-purple-400 text-xs font-mono mb-3">{tech}</p>
      <ul className="space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
            <span className="text-purple-500 mt-1 shrink-0">–</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrainingEntry({ title, org, period, bullets }) {
  return (
    <div className="glass rounded-2xl p-5" style={{ border: '1px solid rgba(139,92,246,0.15)' }}>
      <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
        <h4 className="font-bold text-white">{title}</h4>
        <span className="text-gray-500 text-xs">{period}</span>
      </div>
      <p className="text-purple-400 text-xs font-mono mb-3">{org}</p>
      <ul className="space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
            <span className="text-purple-500 mt-1 shrink-0">–</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
