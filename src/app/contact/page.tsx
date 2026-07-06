"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
    <div className="flex flex-col w-full min-h-screen pt-20 bg-slate-50">
      
      {/* 1. MATCHING HERO HEADER */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-javlin-blue/80 mix-blend-multiply"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase"
          >
            CONTACT <br />
            <span className="text-javlin-green-light capitalize">Get In Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-javlin-blue-light font-bold tracking-widest text-sm uppercase"
          >
            HOME <span className="mx-2 text-white/50">•</span> CONTACT
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Side: Extracted Contact Info */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="w-full lg:w-1/3 flex flex-col space-y-12"
            >
              <div>
                <h2 className="text-4xl font-bold text-javlin-blue mb-4">Get in Touch <br/>with us</h2>
                <div className="w-12 h-1 bg-javlin-green rounded-full"></div>
              </div>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-javlin-blue transition-colors">
                    <MapPin className="w-6 h-6 text-javlin-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Address</h4>
                    <p className="text-lg font-bold text-slate-800">Lusail, Qatar</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-javlin-blue transition-colors">
                    <Mail className="w-6 h-6 text-javlin-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:info@javlin.qa" className="text-lg font-bold text-slate-800 hover:text-javlin-green transition-colors">
                      info@javlin.qa
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 items-start group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-javlin-blue transition-colors">
                    <Phone className="w-6 h-6 text-javlin-blue group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                    <div className="flex flex-col">
                      <a href="tel:+97431009917" className="text-lg font-bold text-slate-800 hover:text-javlin-green transition-colors">+(974) 3100 9917</a>
                      <a href="tel:+97433277657" className="text-lg font-bold text-slate-800 hover:text-javlin-green transition-colors"> (974) 3327 7657</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-javlin-blue text-white flex items-center justify-center hover:bg-javlin-green hover:-translate-y-1 transition-all shadow-md">
                  <FaFacebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-javlin-blue text-white flex items-center justify-center hover:bg-javlin-green hover:-translate-y-1 transition-all shadow-md">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-javlin-blue text-white flex items-center justify-center hover:bg-javlin-green hover:-translate-y-1 transition-all shadow-md">
                  <FaTwitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Side: Contact Form (Matched to Screenshot) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-javlin-blue/20 focus:border-javlin-blue transition-colors text-slate-700 bg-slate-50 focus:bg-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="tel" 
                      placeholder="Contact No." 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-javlin-blue/20 focus:border-javlin-blue transition-colors text-slate-700 bg-slate-50 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-javlin-blue/20 focus:border-javlin-blue transition-colors text-slate-700 bg-slate-50 focus:bg-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <textarea 
                    rows={6}
                    placeholder="Message" 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-javlin-blue/20 focus:border-javlin-blue transition-colors resize-none text-slate-700 bg-slate-50 focus:bg-white"
                    required
                  ></textarea>
                </div>

                {/* Simulated reCAPTCHA styling for aesthetic accuracy */}
                <div className="w-full sm:w-72 bg-slate-50 border border-slate-200 p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-6 h-6 rounded border-slate-300 text-javlin-blue focus:ring-javlin-blue cursor-pointer" />
                    <span className="text-sm font-medium text-slate-700">I'm not a robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png" alt="reCAPTCHA" width={30} height={30} className="opacity-70" />
                    <span className="text-[10px] text-slate-500 mt-1">reCAPTCHA</span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-javlin-blue hover:bg-javlin-blue-dark text-white font-bold py-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-javlin-blue/50 text-sm tracking-widest uppercase"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FULL WIDTH LUSAIL MAP (As seen in screenshot) */}
      <section className="w-full h-[500px] relative bg-slate-200 border-t border-slate-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28836.856379949782!2d51.522732!3d25.384483!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIzJzA0LjEiTiA1McKwMzEnMjEuOCJF!5e0!3m2!1sen!2sus!4v1783312269638!5m2!1sen!2sus" 
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