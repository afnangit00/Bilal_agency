"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll aakumbol background change aakan
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-100 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${scrolled ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
          
          {/* --- LOGO --- */}
          <Link href="/" className="text-2xl font-black tracking-tighter text-white group">
            BILAL<span className="text-blue-500 group-hover:animate-pulse">.</span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-blue-400 ${pathname === link.href ? 'text-white' : 'text-gray-500'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* --- CTA BUTTON (Desktop) --- */}
          <div className="hidden md:block">
            <a
             onClick={() => {
                 document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                 }}
            className="px-6 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center gap-2 group">
              Hire Us <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform" />
            </a>
          </div>

          {/* --- MOBILE HAMBURGER --- */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 h-screen bg-black z-[-1] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black tracking-tighter uppercase hover:text-blue-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-10 py-4 bg-blue-600 text-white font-bold rounded-full uppercase tracking-widest"
            >
              Start a Project
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}