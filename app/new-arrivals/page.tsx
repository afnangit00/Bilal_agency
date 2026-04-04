"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Heart } from 'lucide-react';

const newItems = [
  {
    id: 1,
    name: "Summer Linen Shirt",
    category: "Shirts",
    price: "₹1,899",
    image: "https://images.unsplash.com/photo-1594932224010-75f430c8292c?auto=format&fit=crop&q=80&w=1000",
    tag: "New Season"
  },
  {
    id: 2,
    name: "Tailored Slim Trousers",
    category: "Pants",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1624373687551-424b357e5c74?auto=format&fit=crop&q=80&w=1000",
    tag: "Limited"
  },
  {
    id: 3,
    name: "Classic White Polo",
    category: "T-Shirts",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=1000",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Urban Cargo Pants",
    category: "Pants",
    price: "₹2,799",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=1000",
    tag: "New Arrival"
  }
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemAnim = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function NewArrivals() {
  return (
    <div className="bg-[#fafafa] min-h-screen pt-28 pb-20 px-6">
      
      {/* --- HEADER --- */}
      <header className="max-w-7xl mx-auto mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-bold mb-4 block"
        >
          Curated for You
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif italic mb-6"
        >
          New Arrivals
        </motion.h1>
        <motion.div 
          initial={{ width: 0 }} 
          animate={{ width: "100px" }} 
          className="h-px bg-zinc-300 mx-auto"
        />
      </header>

      {/* --- FILTER CHIPS (Simple Style) --- */}
      <div className="max-w-7xl mx-auto mb-12 flex justify-center gap-4 overflow-x-auto pb-4 no-scrollbar">
        {["All", "Shirts", "Pants", "Outerwear", "Accessories"].map((cat) => (
          <button key={cat} className="px-6 py-2 rounded-full border border-zinc-200 text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all whitespace-nowrap">
            {cat}
          </button>
        ))}
      </div>

      {/* --- PRODUCT GRID --- */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
      >
        {newItems.map((product) => (
          <motion.div key={product.id} className="group relative">
            
            {/* Image Container */}
            <div className="relative aspect-3/4 overflow-hidden bg-zinc-200 rounded-sm">
              {/* Tag Label */}
              <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                {product.tag}
              </span>
              
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors">
                <Heart className="w-4 h-4" />
              </button>

              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <button className="w-full bg-white text-zinc-900 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-zinc-100 transition-colors">
                   Add to Bag <ShoppingBag className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-6 space-y-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest">{product.category}</p>
                  <h3 className="text-lg font-serif italic text-zinc-800">{product.name}</h3>
                </div>
                <p className="font-bold text-sm">{product.price}</p>
              </div>
              <button className="text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 text-zinc-400 group-hover:text-zinc-900 transition-colors pt-2">
                Quick View <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </motion.div>
        ))}
      </motion.div>

      {/* --- FOOTER BANNER --- */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto mt-32 bg-zinc-900 text-white p-12 md:p-24 rounded-3xl overflow-hidden relative"
      >
        <div className="relative z-10 max-w-xl">
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">Join the Essence Club.</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Get 15% off on your first order and stay updated with our latest drops and sustainable fashion tips.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent border-b border-zinc-700 py-3 outline-none flex-1 text-xs tracking-widest" />
            <button className="bg-white text-zinc-900 px-10 py-3 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all">Subscribe</button>
          </div>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </motion.section>

    </div>
  );
}