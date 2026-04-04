"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {  Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* --- BRAND SECTION --- */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-black tracking-tighter">
              BILAL<span className="text-blue-500">.</span>
            </Link>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Crafting premium digital experiences. We turn your vision into high-performance websites.
            </p>
            <div className="flex gap-4 mt-8">
              <SocialIcon icon={<BsInstagram size={20} />} href="https://instagram.com" />
              <SocialIcon icon={<BsLinkedin size={20} />} href="https://linkedin.com" />
              <SocialIcon icon={<BsTwitter size={20} />} href="https://twitter.com" />
            </div>
          </div>

          {/* --- QUICK LINKS --- */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* --- CONTACT INFO --- */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <span>Malappuram, Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>hello@bilalagency.com</span>
              </li>
            </ul>
          </div>

          {/* --- MAP PREVIEW --- */}
          <div className="rounded-2xl overflow-hidden border border-white/10 h-48 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.5134185703!2d75.9922119!3d11.0481079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64e900f63901b%3A0x6a2c3329f6356499!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1712123456789!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) opacity(0.6)' }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-4 pointer-events-none group-hover:opacity-0 transition-opacity">
               <span className="text-xs font-bold uppercase tracking-widest">Our Location</span>
            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Bilal Digital Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <motion.a 
      whileHover={{ y: -5, backgroundColor: '#3b82f6' }}
      href={href} 
      target="_blank"
      className="p-3 rounded-full bg-white/5 border border-white/10 transition-colors"
    >
      {icon}
    </motion.a>
  );
}