"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Users, Leaf, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Full 8 Services Array with updated Unsplash links
  const services = [
    { title: "Deep Cleaning", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", desc: "Cleaning your place on a macro detailed level." },
    { title: "Domestic Cleaning", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800", desc: "Daily, weekly, monthly, and yearly house cleaning." },
    { title: "Commercial Cleaning", img: "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?q=80&w=1025", desc: "High-level care for client facilities and external façades." },
    { title: "Hospitality", img: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?q=80&w=1169", desc: "Providing waiters, cashiers, receptionists, and cleaners." },
    { title: "Disinfection Service", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800", desc: "Complete sanitization destroying 100% of germs and viruses." },
    { title: "Pest Control", img: "https://images.unsplash.com/photo-1628267138997-2bd92e89aaf7?q=80&w=1202", desc: "Commercial, residential, and industrial pest control services." },
    { title: "Stadium Cleaning", img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800", desc: "Pre-match and post-event cleaning for arenas and stadiums." },
    { title: "General Cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800", desc: "Routine sweeping, vacuuming, dusting, and mopping." },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen pt-20">
      
      {/* 1. UNIFIED PREMIUM HERO (With Green Element) */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-javlin-blue/80 mix-blend-multiply"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            ABOUT <br />
            <span className="text-javlin-green-light">Javlin Cleaning & Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-javlin-blue-light font-bold tracking-widest text-sm uppercase"
          >
            HOME <span className="mx-2 text-white/50">•</span> ABOUT US
          </motion.p>
        </div>
      </section>

      {/* 2. CLEAN INTRODUCTION */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight"
          >
            Javlin Cleaning And Services is a fully <span className="text-javlin-blue">Qatari-owned</span> company.
          </motion.h2>
          <motion.p 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
            className="text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            The founders of Javlin Cleaning and Services have been helping a vast range of company owners and operators with all of their industrial cleaning and hospitality requirements. Whether you are large or small business owners searching for frequent or regular cleaning or hospitality services, our team can help with tasks of all sizes and scopes. We are professionals in all fields and have been providing clean, secure, and stable workplaces.
          </motion.p>
        </div>
      </section>

      {/* 3. VISION & VALUES CARDS */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            
            {/* Vision Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="flex-1 bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-javlin-blue mb-6 text-center">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-center">
                One of our primary Visions is to establish long-term partnerships with the companies we serve. We want our customers to be fully satisfied with the cleaning and hospitality services we provide. Our expert team guarantees the same detailed attention to properties of all sizes, every time.
              </p>
            </motion.div>

            {/* Values Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="flex-1 bg-white p-10 md:p-12 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-javlin-blue mb-6 text-center">Our Values</h3>
              <p className="text-slate-600 leading-relaxed text-center mb-8">
                We always aim to satisfy the needs of our customers. We care about environmental causes, which is why we always use natural and non-toxic cleaning products.
              </p>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2 max-w-xs mx-auto">
                <div className="flex items-center gap-2 text-slate-800 font-semibold"><CheckCircle2 className="w-5 h-5 text-javlin-green shrink-0" /> Honesty</div>
                <div className="flex items-center gap-2 text-slate-800 font-semibold"><CheckCircle2 className="w-5 h-5 text-javlin-green shrink-0" /> Punctuality</div>
                <div className="flex items-center gap-2 text-slate-800 font-semibold"><CheckCircle2 className="w-5 h-5 text-javlin-green shrink-0" /> Responsibility</div>
                <div className="flex items-center gap-2 text-slate-800 font-semibold"><CheckCircle2 className="w-5 h-5 text-javlin-green shrink-0" /> Satisfaction</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. BLUE HIGHLIGHT STRIP */}
      <section className="py-20 bg-javlin-blue">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { icon: Star, title: "Top Rated Company", desc: "Recognized for excellence and highly rated by our partners." },
              { icon: Users, title: "Expert Team", desc: "Well-trained staff who are highly motivated with a 'can-do' attitude." },
              { icon: Leaf, title: "Eco Friendly Products", desc: "Committed to using natural, non-toxic, and safe cleaning solutions." },
            ].map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeIn}
                className="bg-white rounded-3xl p-8 text-center shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto bg-javlin-green/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-javlin-green" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. FOCUSED SERVICES GALLERY (2 ROWS) */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-12">
            <h2 className="text-3xl font-bold text-javlin-blue uppercase tracking-wider">
              Our Core Services
            </h2>
          </motion.div>

          {/* Grid optimized for 2 Rows (8 items) on desktop, 4 items on mobile */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12"
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx} variants={fadeIn}
                className={`relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100 group cursor-pointer shadow-sm hover:shadow-xl transition-all ${idx >= 4 ? 'hidden md:block' : 'block'}`}
              >
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Taller Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent"></div>
                
                {/* Text Box with slide-up description reveal */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3 line-clamp-2">
                    {service.desc}
                  </p>
                  <div className="w-8 h-1 bg-javlin-green rounded-full group-hover:w-16 transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Reused Homepage Button */}
          <Link href="/services" className="inline-flex items-center gap-2 bg-javlin-blue hover:bg-javlin-blue-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-javlin-blue/50">
            Explore All Services <ArrowRight className="w-5 h-5" />
          </Link>
          
        </div>
      </section>

      {/* 6. GREEN PRIVACY & STAFFING BANNER */}
      <section className="bg-javlin-green py-12 px-6 text-center border-t-4 border-javlin-green-light">
        <div className="container mx-auto max-w-4xl">
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-sm">
            We at Javlin Cleaning and Services respect and understand your privacy. Keeping that in concentration, we provide both male and female staff options in all our services.
          </p>
        </div>
      </section>

    </div>
  );
}