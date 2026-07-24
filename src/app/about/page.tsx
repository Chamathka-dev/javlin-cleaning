"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, Users, Leaf, CheckCircle2, ArrowRight, ShieldCheck, Clock, ThumbsUp, HeartHandshake, Sparkles } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Removed Disinfection and added Mattress Cleaning with the updated image URL to maintain the perfect 8-item grid
  const services = [
    { title: "Deep Cleaning", slug: "deep-cleaning", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", desc: "Cleaning your place on a macro detailed level." },
    { title: "Domestic Cleaning", slug: "domestic-cleaning", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800", desc: "Daily, weekly, monthly, and yearly house cleaning." },
    { title: "Commercial Cleaning", slug: "commercial-cleaning", img: "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?q=80&w=1025", desc: "High-level care for client facilities and external façades." },
    { title: "Hospitality", slug: "waiter-and-waitress-service", img: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?q=80&w=1169", desc: "Providing waiters, cashiers, receptionists, and cleaners." },
    { title: "Mattress Cleaning", slug: "mattress-cleaning", img: "https://images.unsplash.com/photo-1688384452551-5cacc39946e0?q=80&w=1170", desc: "Eliminate dust mites and allergens from your bed." },
    { title: "Pest Control", slug: "pest-control", img: "https://images.unsplash.com/photo-1628267138997-2bd92e89aaf7?q=80&w=1202", desc: "Commercial, residential, and industrial pest control services." },
    { title: "Stadium Cleaning", slug: "stadium-cleaning-services", img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800", desc: "Pre-match and post-event cleaning for arenas and stadiums." },
    { title: "General Cleaning", slug: "general-cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800", desc: "Routine sweeping, vacuuming, dusting, and mopping." },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      {/* 1. CENTERED IMMERSIVE HERO */}
      {/* Increased pt-20 to pt-32 to push content safely below the fixed navbar */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center bg-slate-950 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070" alt="About Javlin" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-slate-950/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="max-w-3xl flex flex-col items-center">
            
            {/* Added Sparkles icon to perfectly match the Services page design */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-javlin-green/20 text-javlin-green-light border border-javlin-green/30 px-5 py-2 rounded-full text-xs font-bold mb-6 tracking-widest uppercase backdrop-blur-sm">
              <Sparkles className="w-4 h-4" /> Who We Are
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1]"
            >
              Excellence in <br />
              <span className="text-javlin-green">Every Detail.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
We are a premier enterprise dedicated to engineering clean, secure, and luxurious spaces for commercial, industrial, and domestic clients.            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. THE STORY (ASYMMETRIC LAYOUT) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -left-40 top-20 w-96 h-96 bg-javlin-blue/5 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:w-1/2 relative h-[500px] w-full">
              <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white">
                <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200" alt="Corporate Cleaning" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-javlin-green rounded-[40px] -z-0 hidden md:block"></div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                A Legacy of <br/><span className="text-javlin-blue">Trust & Quality.</span>
              </h2>
              <div className="w-16 h-1.5 bg-javlin-green rounded-full mb-8"></div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                We are an industry-leading enterprise that has been providing top-notch cleaning and hospitality services for years.
              </p>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                The founders of Javlin have been helping a vast range of company owners and operators with all of their industrial cleaning and hospitality requirements. Whether you are a large or small business searching for frequent or regular cleaning and hospitality services, our team can help with tasks of all sizes and scopes. We are professionals in all fields and have been providing clean, secure, and stable workplaces across the state.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-javlin-blue/10 flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-javlin-blue" />
                  </div>
                  <span className="font-bold text-slate-800">Top Rated</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-javlin-green/10 flex items-center justify-center shrink-0">
                    <Leaf className="w-6 h-6 text-javlin-green" />
                  </div>
                  <span className="font-bold text-slate-800">Eco-Friendly</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. HEAVY COLOR BLOCK: VISION & VALUES BENTO GRID */}
      <section className="py-28 bg-javlin-blue text-white relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Our Core Philosophy</h2>
            <p className="text-javlin-blue-light text-lg max-w-2xl mx-auto">The foundational principles that drive our operations every single day.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Massive Vision Box */}
            <motion.div variants={fadeIn} className="md:col-span-12 lg:col-span-7 bg-white/10 backdrop-blur-md p-10 md:p-12 rounded-[32px] border border-white/10 relative overflow-hidden group hover:bg-white/15 transition-colors">
              <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                <Users className="w-32 h-32 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Our Vision</h3>
              <p className="text-lg leading-relaxed text-slate-200 relative z-10 max-w-lg">
                One of our primary Visions is to establish long-term partnerships with the companies we serve. We want our customers to be fully satisfied with the cleaning and hospitality services we provide. Our expert team guarantees the same detailed attention to properties of all sizes, every time.
              </p>
            </motion.div>

            {/* Values Summary Box */}
            <motion.div variants={fadeIn} className="md:col-span-12 lg:col-span-5 bg-javlin-green p-10 md:p-12 rounded-[32px] shadow-2xl flex flex-col justify-center">
              <h3 className="text-3xl font-black mb-6 text-slate-900">Our Values</h3>
              <p className="text-slate-900/80 font-medium leading-relaxed mb-8 text-lg">
                We always aim to satisfy the needs of our customers. We care about environmental causes, which is why we always use natural and non-toxic cleaning products.
              </p>
            </motion.div>

            {/* 4 Pillars of Values */}
            {[
              { title: "Honesty", icon: HeartHandshake, desc: "Transparent service." },
              { title: "Punctuality", icon: Clock, desc: "On-time execution." },
              { title: "Responsibility", icon: ShieldCheck, desc: "Eco-conscious methods." },
              { title: "Satisfaction", icon: ThumbsUp, desc: "Guaranteed results." },
            ].map((val, idx) => (
              <motion.div key={idx} variants={fadeIn} className="md:col-span-6 lg:col-span-3 bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-javlin-green/50 transition-colors">
                <val.icon className="w-10 h-10 text-javlin-green mb-4" />
                <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                <p className="text-sm text-slate-400">{val.desc}</p>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* 4. CORE SERVICES GALLERY (Correctly routing to dynamic slugs) */}
      <section className="py-28 bg-slate-50 text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Our Core Services
            </h2>
            <p className="text-slate-500 text-lg">A glance at our comprehensive service framework.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {services.map((service, idx) => (
              <Link href={`/services/${service.slug}`} key={idx}>
                <motion.div 
                  variants={fadeIn}
                  className="relative aspect-square overflow-hidden rounded-[24px] bg-slate-900 group cursor-pointer shadow-sm hover:shadow-2xl transition-all"
                >
                  <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent group-hover:via-slate-950/30 transition-all duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">{service.title}</h3>
                    <p className="text-sm text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-0 line-clamp-2 drop-shadow-sm font-medium">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>

          <Link href="/services" className="inline-flex items-center gap-2 bg-javlin-blue hover:bg-javlin-blue-dark text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-lg hover:shadow-javlin-blue/30">
            Explore All Services Directory <ArrowRight className="w-5 h-5" />
          </Link>
          
        </div>
      </section>

      {/* 5. PRIVACY & STAFFING BANNER */}
      <section className="bg-javlin-green py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl flex flex-col items-center">
          <ShieldCheck className="w-12 h-12 text-white mb-6 opacity-90" />
          <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">Privacy & Respect</h3>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed drop-shadow-sm">
            We at Javlin Cleaning and Services respect and understand your privacy. Keeping that in concentration, we provide both <span className="text-slate-900 font-bold">male and female staff options</span> across all our services.
          </p>
        </div>
      </section>

    </div>
  );
}
