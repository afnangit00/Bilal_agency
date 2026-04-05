"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowUpRight,  } from 'lucide-react';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';


interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  name: string;  // Add this line
  // Add other props if needed, e.g., value, onChange
}

export default function Contact() {
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '' });

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      service: e.target.service.value,
    };

    // Validation
    let hasErrors = false;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      hasErrors = true;
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (hasErrors) {
      setStatus('');
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
      setErrors({ name: '', email: ''});
    } else {
      console.error("Error sending message.");
      setStatus("Error sending message.");
    }
  }
  
  return (
    <section id='contact' className="min-h-screen bg-[#030303] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 right-0 w-125 h-125 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* --- LEFT SIDE: INFO & TEXT --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-xs mb-4 block">Available for Work</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
              LET'S <br /> <span className="text-gray-500">BUILD IT.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md mb-12 leading-relaxed">
              Have a vision for your brand or tuition center? Reach out and let's create something extraordinary together.
            </p>

            {/* Contact Details
            <div className="space-y-8">
              <ContactDetail icon={<Mail className="text-blue-500" />} label="Email Us" value="" />
              <ContactDetail icon={<Phone className="text-blue-500" />} label="Call Us" value="+91 98765 43210" />
              <ContactDetail icon={<MapPin className="text-blue-500" />} label="Our Studio" value="Malappuram, Kerala, India" />
            </div> */}

            {/* Social Links */}
            <div className="flex gap-6 mt-16">
              <SocialLink icon={<BsInstagram size={20} />} href="https://www.instagram.com/_bilal.com_" />
              <SocialLink icon={<BsLinkedin size={20} />} href="https://www.linkedin.com/in/afnan-lux-32397431b" />
              <SocialLink icon={<BsTwitter size={20} />} href="https://x.com/afn4n_afi" />
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: PREMIUM FORM --- */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/3 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl"
          >
            <form onSubmit={handleSubmit} id='data' className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputField name="name" label="Your Name" placeholder="Afnan" type="text" error={errors.name} />
                <InputField name="email" label="Email Address" placeholder="hello@example.com" type="email" error={errors.email} />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Service Required</label>
                <select name="service" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500/50 transition appearance-none text-gray-300">
                  <option className="bg-[#111]">Personal Brand Website</option>
                  <option className="bg-[#111]">Portfolio Website</option>
                  <option className="bg-[#111]">Tuition Platform</option>
                  <option className="bg-[#111]">Business Landing Page</option>
                  <option className="bg-[#111]">E-commerse Business</option>
                  <option className="bg-[#111]">Marketing Business </option>
                  
                  
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">Message</label>
                <textarea 
                  name='message'
                  rows={4} 
                  placeholder="Tell us about your project goals..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-blue-500/50 transition resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              <motion.button 
                type='submit'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all duration-500 shadow-xl"
              >
                Send Inquiry <Send size={18} />
              </motion.button>
              {status && <p className="mt-2 text-sm">{status}</p>}

            </form>
          </motion.div>
          
          <Link href='/' className="justify-center flex gap-2 items-center">
      <div className="group h-10 w-10 md:h-10 md:w-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
      <ArrowUpRight size={25} className="group-hover:rotate-12 transition-transform"/>
      </div>
      <div className="flex flex-col justify-center items-start">
        <span className="text-lg font-bold">Back to home</span>
            </div>
            </Link>

        </div>
      </div>
    </section>
  );
}


// // Helper Components
// function ContactDetail({ icon, label, value }: { icon: any, label: string, value: string }) {
//   return (
//     <div className="flex items-center gap-5 group">
//       <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-blue-500/10 transition-colors">
//         {icon}
//       </div>
//       <div>
//         <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{label}</p>
//         <p className="text-lg font-medium">{value}</p>
//       </div>
//     </div>
//   );
// }

function InputField({ label, placeholder, type, name, error }: { label: string, placeholder: string, type: string, name: string, error?: string }) {
  return (
    <div className="space-y-2 flex flex-col">
      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder} 
        name={name}
        className={`bg-white/5 border rounded-2xl p-4 outline-none focus:border-blue-500/50 transition placeholder:text-gray-700 ${error ? 'border-red-500' : 'border-white/10'}`}
      />
      {error && <p className="text-red-500 text-sm ml-1">{error}</p>}
    </div>
  );
}

function SocialLink({ icon, href }: { icon: any, href: string }) {
  return (
    <motion.a 
      whileHover={{ y: -5 }}
      href={href} 
      className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-blue-500/50 transition-colors"
    >
      {icon}
    </motion.a>
  );
}