"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"; // Updated to include FaTiktok

export default function ContactPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      {/* 1. CENTERED IMMERSIVE HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center bg-slate-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070" alt="Contact Javlin" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-slate-950/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-javlin-green/20 text-javlin-green-light border border-javlin-green/30 px-5 py-2 rounded-full text-xs font-bold mb-6 tracking-widest uppercase backdrop-blur-sm">
              Reach Out
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]"
            >
              Get In <br />
              <span className="text-javlin-green">Touch With Us.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Connect with Javlin for premium facility and hospitality solutions in Qatar. We’re ready to answer your questions and start your project.
            </motion.p>
          </div>
        </div>
      </section>

      

      {/* 3. CONTACT BENTO & FORM SECTION */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -left-40 top-40 w-96 h-96 bg-javlin-green/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Side: Dark Info Bento Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="lg:col-span-5 bg-slate-900 rounded-[32px] p-10 md:p-12 text-white relative overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Decorative Card Graphics */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-javlin-blue/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-javlin-green/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

              <div className="relative z-10 flex-1">
                <h2 className="text-3xl md:text-4xl font-black mb-2 tracking-tight">Contact Info</h2>
                <p className="text-slate-400 mb-12 text-lg">We typically reply within 24 hours.</p>

                <div className="space-y-10">
                  {/* Address */}
                  <div className="flex gap-6 items-start group cursor-pointer">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-javlin-green group-hover:border-javlin-green transition-all duration-300">
                      <MapPin className="w-6 h-6 text-javlin-green group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Address</h4>
                      <p className="text-xl font-bold text-white">Al-Rayyan, Qatar</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6 items-start group cursor-pointer">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-javlin-green group-hover:border-javlin-green transition-all duration-300">
                      <Mail className="w-6 h-6 text-javlin-green group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                      <a href="mailto:info@javlin.qa" className="text-xl font-bold text-white hover:text-javlin-green-light transition-colors">
                        info@javlin.qa
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6 items-start group cursor-pointer">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-javlin-green group-hover:border-javlin-green transition-all duration-300">
                      <Phone className="w-6 h-6 text-javlin-green group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                      <div className="flex flex-col space-y-1">
                        <a href="tel:+97433277657" className="text-xl font-bold text-white hover:text-javlin-green-light transition-colors">+(974) 3327 7657</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons at bottom of card */}
              <div className="relative z-10 flex gap-4 pt-12 mt-8 border-t border-white/10">
                <a href="https://www.facebook.com/javlin.qa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-javlin-green hover:border-javlin-green hover:-translate-y-1 transition-all">
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/javlincleaning?igsh=eHNiYnZ4enN3c2Jp" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-javlin-green hover:border-javlin-green hover:-translate-y-1 transition-all">
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a href="https://vt.tiktok.com/ZSX8jVDoa/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-javlin-green hover:border-javlin-green hover:-translate-y-1 transition-all">
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right Side: Contact Form Bento */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[32px] shadow-xl shadow-slate-900/5 border border-slate-100 flex flex-col justify-center"
            >
              <div className="mb-8">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Send a Message</h3>
                <p className="text-slate-500">Fill out the form below to inquire about our services.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-javlin-green/50 focus:border-javlin-green transition-colors text-slate-700 bg-slate-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="tel" 
                      placeholder="Contact No." 
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-javlin-green/50 focus:border-javlin-green transition-colors text-slate-700 bg-slate-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-javlin-green/50 focus:border-javlin-green transition-colors text-slate-700 bg-slate-50 focus:bg-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <textarea 
                    rows={5}
                    placeholder="How can we help you?" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-javlin-green/50 focus:border-javlin-green transition-colors resize-none text-slate-700 bg-slate-50 focus:bg-white"
                    required
                  ></textarea>
                </div>

                {/* Simulated reCAPTCHA */}
                <div className="w-full sm:w-72 bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-6 h-6 rounded border-slate-300 text-javlin-blue focus:ring-javlin-blue cursor-pointer" />
                    <span className="text-sm font-bold text-slate-700">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png" alt="reCAPTCHA" width={30} height={30} className="opacity-70" />
                    <span className="text-[10px] font-bold text-slate-400 mt-1">reCAPTCHA</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-slate-900 hover:bg-black text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-slate-900/30 tracking-widest uppercase text-sm"
                >
                  Send Message <Send className="w-4 h-4 text-javlin-green" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. FULL WIDTH LUSAIL MAP */}
      <section className="w-full h-[500px] relative bg-slate-200 border-t border-slate-200">
        {/* Blending map top with page flow */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28836.856379949782!2d51.522732!3d25.384483!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIzJzA0LjEiTiA1McKwMzEnMjEuOCJF!5e0!3m2!1sen!2slk!4v1783499204727!5m2!1sen!2slk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </div>
  );
}