import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumePage from './components/ResumePage';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function Portfolio() {
  return (
    <div className="relative">
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Portfolio />
            </motion.div>
          } />
          <Route path="/resume" element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ResumePage />
            </motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
