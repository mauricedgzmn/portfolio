'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isScrolled ? 1 : 0,
        y: isScrolled ? 0 : -20,
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 ${
        isScrolled ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      <div
        className={`flex items-center gap-8 px-8 py-4 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-lg border border-white/20'
            : 'bg-transparent'
        }`}
      >
        <a
          href="#home"
          className="text-white hover:text-gray-300 transition-colors font-medium"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-white hover:text-gray-300 transition-colors font-medium"
        >
          About
        </a>
         <a
          href="#journal"
          className="text-white hover:text-gray-300 transition-colors font-medium"
        >
          Journal
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-300 transition-colors font-medium"
        >
          Contact
        </a>
        
      </div>
    </motion.nav>
  );
}