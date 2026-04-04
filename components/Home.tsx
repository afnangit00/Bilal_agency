"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Layout, Zap, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-[#100f0f] text-white overflow-hidden flex flex-col justify-center items-center px-6">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <div className="z-10 max-w-6xl w-full text-center">
        
        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-[10px] uppercase tracking-[0.3em] text-blue-400 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Now accepting Q2 Projects
        </motion.div>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase italic"
        >
          BILAL <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>STUDIO</span>
        </motion.h1>

        {/* Value Proposition */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <p className="max-w-xs text-sm text-gray-400 leading-relaxed text-center md:text-left">
            We build high-end digital identities for personal brands & tuition centers with a focus on premium aesthetics.
          </p>
          
          <div className="flex gap-4">
            <Link href="#contact" className="group h-16 w-16 md:h-20 md:w-20 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <ArrowUpRight size={32} className="group-hover:rotate-12 transition-transform" />
            </Link>
            <div className="flex flex-col justify-center items-start">
               <span className="text-xs text-gray-500 uppercase tracking-widest">Start a project</span>
               <span className="text-lg font-bold">Get in touch</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- FOOTER-STYLE INFO (STILL ON HERO) --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-12 w-full max-w-7xl px-10 flex flex-wrap justify-between items-end gap-6"
      >
        <div className="flex gap-10">
          <Stat label="Experience" value="3+ Years" />
          <Stat label="Location" value="Kerala, IN" />
          <Stat label="Strategy" value="Clean UI/UX" />
        </div>

        <div className="hidden lg:flex gap-4">
          <div className="h-10 px-4 flex items-center gap-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <Layout size={14} className="text-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Next.js Specialists</span>
          </div>
          <div className="h-10 px-4 flex items-center gap-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <Zap size={14} className="text-orange-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Fast Performance</span>
          </div>
        </div>
      </motion.div>

      {/* Side Decorative Text */}
      <div className="absolute right-25 top-1/2 -rotate-90 hidden xl:block">
        <span className="text-[10px] tracking-[1em] text-gray-700 uppercase font-bold">Minimalism is the ultimate sophistication</span>
      </div>

    </main>
  );
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}