"use client";
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "The Minimalist Portfolio",
    category: "Personal Brand",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    year: "2026",
    layout: "col-span-2 md:col-span-1 h-[400px]",
    link: "https://vivid-forge.vercel.app"
  },
  {
    id: 2,
    title: "Lumina Learning Center",
    category: "Ed-Tech / Tuition",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop",
    year: "2025",
    layout: "col-span-2 md:col-span-1 h-[600px] md:-mt-20" // Staggered Effect
  },
  
  {
    id: 3,
    title: "Elite Barber Studio",
    category: "Service Based",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    year: "2026",
    layout: "col-span-2 md:col-span-1 h-[500px]"
  },
  {
    id: 4,
    title: "Aurora Digital Agency",
    category: "Corporate",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    year: "2024",
    layout: "col-span-2 md:col-span-1 h-[450px] md:-mt-10"
  }
];

export default function Projects() {
  return (
    <main id='projects' className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6 overflow-hidden">
      
      {/* --- HEADER SECTION --- */}
      <div className="max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-500 font-bold mb-4 block">Archive 2024-2026</span>
          <h1 className="text-7xl md:text-[9vw] font-black tracking-tighter leading-none uppercase italic">
            Selected <br /> <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Artifacts</span>
          </h1>
        </motion.div>
      </div>

      {/* --- STAGGERED PROJECT GRID --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8 md:gap-12 items-start">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className={`${project.layout} group relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/5`}
          >
            {/* Image Container */}
            <div className="w-full h-full relative overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-700 shadow-2xl"
              />
              
              {/* Overlay Content */}
              <div  className="absolute inset-0 p-8 flex flex-col justify-between bg-linear-to-t from-black via-transparent to-transparent opacity-100">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10">
                    {project.year}
                  </span>
                  <div className="  h-12 w-12 rounded-full bg-white text-black flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <div>
                  <p className="text-blue-400 text-xs font-mono mb-2 uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                      {project.title}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- CALL TO ACTION --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 text-center"
      >
        <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-6 font-bold">Have a Vision?</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-12">Let's create the next <br /> masterpiece together.</h2>
        <a href="#contact" className="px-12 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all">
          Start a Project
        </a>
      </motion.div>

    </main>
  );
}