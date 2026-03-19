import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '60px';
        ringRef.current.style.height = '60px';
        ringRef.current.style.borderColor = '#c084fc';
        ringRef.current.style.opacity = '0.8';
      }
    };

    const onMouseLeaveLink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '36px';
        ringRef.current.style.height = '36px';
        ringRef.current.style.borderColor = '#8b5cf6';
        ringRef.current.style.opacity = '0.5';
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    const links = document.querySelectorAll('a, button, [role="button"], input, textarea');
    links.forEach(l => {
      l.addEventListener('mouseenter', onMouseEnterLink);
      l.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="cursor">
      <div ref={dotRef} className="cursor-dot fixed" style={{ zIndex: 99999 }} />
      <div ref={ringRef} className="cursor-ring fixed transition-all duration-150" style={{ zIndex: 99998 }} />
    </div>
  );
}
