"use client";
import { motion } from 'framer-motion';
import { User, Briefcase, GraduationCap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: "01",
    title: "Personal Branding",
    subtitle: "For Creators & Influencers",
    icon: <User size={32} />,
    desc: "We build digital identities that command authority. Perfect for speakers, influencers, and thought leaders.",
    features: ["Custom Domain", "Bio-Link Integration", "SEO Optimized"],
    color: "from-blue-500/20"
  },
  {
    id: "02",
    title: "Elite Portfolios",
    subtitle: "For Designers & Devs",
    icon: <Briefcase size={32} />,
    desc: "Showcase your work with a premium aesthetic that wins high-ticket clients. Fast, responsive, and bold.",
    features: ["Framer Motion", "Case Study Layouts", "Dark/Light Mode"],
    color: "from-purple-500/20"
  },
  {
    id: "03",
    title: "Educational Hubs",
    subtitle: "For Tuition & Coaching",
    icon: <GraduationCap size={32} />,
    desc: "Complete platforms for local tuition centers. Connect with students through professional landing pages.",
    features: ["Course Listing", "Contact Forms", "Google Maps"],
    color: "from-emerald-500/20"
  },
  {
    id: "04",
    title: "Service Business",
    subtitle: "For Local Agencies",
    icon: <Globe size={32} />,
    desc: "Turn visitors into leads. High-converting landing pages for lawyers, real estate, and service providers.",
    features: ["Lead Gen Forms", "WhatsApp Integration", "Fast Speed"],
    color: "from-orange-500/20"
  }
];

export default function Services() {
  return (
    <main id='services' className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24"
        >
          <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-xs">Our Expertise</span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mt-4 uppercase">
            Premium <span className="text-gray-500 italic">Solutions.</span>
          </h1>
        </motion.div>

        {/* Services Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-1 rounded-[2.5rem] bg-linear-to-br ${s.color} to-transparent border border-white/5 hover:border-white/20 transition-all duration-500`}
            >
              <div className="bg-[#080808] rounded-[2.3rem] p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-4 bg-white/5 rounded-2xl text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                      {s.icon}
                    </div>
                    <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors font-mono">{s.id}</span>
                  </div>
                  
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-bold">{s.subtitle}</h3>
                  <h2 className="text-3xl font-bold mb-6 tracking-tight group-hover:text-blue-400 transition-colors">{s.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                    {s.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-gray-500">
                        <CheckCircle2 size={12} className="text-blue-500" /> {f}
                      </div>
                    ))}
                  </div>
                </div>

                <a
                 className="your-button-styles inline-flex items-center gap-4 text-sm font-black uppercase tracking-widest group/btn"
                 onClick={() => {
                 document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                 }}
                 >
                  Launch Project 
                  <span className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                    <ArrowRight  size={16} />
                  </span>
                </a>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 p-12 rounded-[3rem] bg-white text-black text-center relative overflow-hidden"
        >
           <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
             Ready to build your <br /> digital empire?
           </h2>
           <Link href="#contact" className="mt-10 inline-block px-12 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
             Start a Project Now
           </Link>
        </motion.div>
      </div>
    </main>
  );
}