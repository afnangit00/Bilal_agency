"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Star, ShieldCheck, Truck, ArrowLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ShirtProductPage() {
  const [selectedSize, setSelectedSize] = useState('M');
  
  // സാമ്പിൾ ഷർട്ട് ഡാറ്റ
  const shirt = {
    name: "Classic Italian Linen Shirt",
    price: "2,499",
    description: "Experience ultimate comfort with our hand-stitched Italian linen shirt. Perfect for summer weddings and professional meetings alike. Features a slim-fit silhouette and premium pearl buttons.",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=1000",
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Navigation Help */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors text-sm uppercase tracking-widest font-bold">
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* --- LEFT: IMAGE GALLERY --- */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-4/5 bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200"
          >
            <img src={shirt.images[0]} alt="Main Product" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden">
                <img src={shirt.images[1]} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-zinc-900 rounded-2xl flex items-center justify-center p-6 text-white text-center">
                <p className="text-xs uppercase tracking-widest leading-loose">100% Organic <br/> Italian Linen</p>
            </div>
          </div>
        </div>

        {/* --- RIGHT: PRODUCT DETAILS --- */}
        <div className="flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
                <div className="flex text-orange-500"><Star className="w-4 h-4 fill-current"/> <Star className="w-4 h-4 fill-current"/> <Star className="w-4 h-4 fill-current"/> <Star className="w-4 h-4 fill-current"/> <Star className="w-4 h-4 fill-current"/></div>
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-tighter">(128 Reviews)</span>
            </div>

            <h1 className="text-5xl font-serif italic mb-2">{shirt.name}</h1>
            <p className="text-2xl font-bold text-zinc-900 mb-8">₹{shirt.price}</p>
            
            <p className="text-zinc-500 leading-relaxed mb-10 text-lg">
              {shirt.description}
            </p>

            {/* Size Selection */}
            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Select Size</h4>
              <div className="flex gap-3">
                {shirt.sizes.map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all ${selectedSize === size ? 'border-zinc-900 bg-zinc-900 text-white shadow-lg' : 'border-zinc-200 text-zinc-400 hover:border-zinc-400'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <a 
                href={`https://wa.me/919876543210?text=I would like to order the ${shirt.name} in size ${selectedSize}`}
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-xl shadow-green-900/20"
              >
                <MessageCircle className="w-5 h-5" /> Order via WhatsApp
              </a>
              <button className="border-2 border-zinc-900 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all">
                Add to Bag
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-zinc-100">
                <div className="flex items-center gap-3">
                    <div className="bg-zinc-100 p-3 rounded-xl text-zinc-900"><ShieldCheck className="w-5 h-5"/></div>
                    <p className="text-[10px] font-bold uppercase tracking-widest">Quality <br/> Guaranteed</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-zinc-100 p-3 rounded-xl text-zinc-900"><Truck className="w-5 h-5"/></div>
                    <p className="text-[10px] font-bold uppercase tracking-widest">Free Kerala <br/> Delivery</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}