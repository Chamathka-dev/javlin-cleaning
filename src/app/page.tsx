"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle, ArrowRight, ShieldCheck, Clock, ThumbsUp, HeartHandshake, Sun, MapPin, CalendarCheck } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-javlin-blue/70 mix-blend-multiply"></div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            WE CLEAN <br />
            <span className="text-javlin-green-light">BECAUSE WE CARE</span>
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl"
          >
            A fully Qatari-owned company providing premium industrial cleaning, domestic care, and hospitality services.
          </motion.p>
          
          <motion.a 
            href="#booking-form"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="group flex items-center gap-2 bg-javlin-green hover:bg-javlin-green-light text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-javlin-green/50"
          >
            Book a Cleaning
            <ArrowDownCircle className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* 2. PREMIUM SERVICES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Tasks of all sizes and scopes. We provide clean, secure, and stable workplaces.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              // Added accurate slugs to match the service database
              { title: "Deep Cleaning", slug: "deep-cleaning", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", desc: "Cleaning your place on a macro detailed level." },
              { title: "Domestic Cleaning", slug: "domestic-cleaning", img: "https://images.unsplash.com/photo-1647381518264-97ff1835026f?q=80&w=1170", desc: "Daily, weekly, monthly, and yearly house cleaning." },
              { title: "Commercial Cleaning", slug: "commercial-cleaning", img: "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?q=80&w=1025", desc: "High-level care for client facilities and external façades." },
              { title: "Hospitality", slug: "waiter-and-waitress-service", img: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?q=80&w=1169", desc: "Providing waiters, cashiers, receptionists, and cleaners." },
              { title: "Disinfection Service", slug: "sanitization-and-disinfection", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800", desc: "Complete sanitization destroying 100% of germs and viruses." },
              { title: "Pest Control", slug: "pest-control", img: "https://images.unsplash.com/photo-1628267138997-2bd92e89aaf7?q=80&w=1202", desc: "Commercial, residential, and industrial pest control services." },
              { title: "Stadium Cleaning", slug: "stadium-cleaning-services", img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800", desc: "Pre-match and post-event cleaning for arenas and stadiums." },
              { title: "General Cleaning", slug: "general-cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800", desc: "Routine sweeping, vacuuming, dusting, and mopping." },
            ].map((service, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn} 
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 border-t-4 border-t-transparent hover:border-t-javlin-green ${index >= 4 ? 'hidden md:block' : 'block'}`}
              >
                {/* Wrapped the entire card content inside the Link */}
                <Link href={`/services/${service.slug}`} className="flex flex-col h-full block cursor-pointer">
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-javlin-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                    <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-1">{service.desc}</p>
                    <span className="text-javlin-blue font-bold text-sm flex items-center gap-2 group-hover:text-javlin-green transition-colors mt-auto">
                      Read More 
                      <span className="bg-javlin-blue/10 group-hover:bg-javlin-green text-javlin-blue group-hover:text-white rounded-full p-1 transition-colors">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/services" className="inline-flex items-center gap-2 bg-javlin-blue hover:bg-javlin-blue-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-javlin-blue/50">
              Explore All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50 lg:rounded-l-[120px] -z-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/3">
              <div className="inline-flex items-center gap-2 bg-javlin-green/10 text-javlin-green px-4 py-2 rounded-full text-sm font-bold mb-6">
                <ShieldCheck className="w-4 h-4" /> Core Values
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Why Choose <br/><span className="text-javlin-green">Javlin?</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                We are professionals in all fields and have been providing clean, secure, and stable workplaces.
              </p>
              
              <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 hidden lg:block group">
                <Image 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800" 
                  alt="Professional Cleaning Team" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-javlin-blue/20"></div>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Honesty", icon: HeartHandshake, desc: "We build long-term partnerships based on transparent and trustworthy service." },
                { title: "Punctuality", icon: Clock, desc: "We respect your schedule, ensuring our teams arrive and finish exactly on time." },
                { title: "Responsibility", icon: ShieldCheck, desc: "We care about the environment, using natural and non-toxic cleaning products." },
                { title: "Customer Satisfaction", icon: ThumbsUp, desc: "Our expert team guarantees the same detailed attention to properties of all sizes." },
              ].map((badge, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:border-l-4 hover:border-l-javlin-green hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-javlin-green group-hover:scale-110 transition-all duration-300">
                    <badge.icon className="w-7 h-7 text-javlin-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{badge.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{badge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLAR PANEL CLEANING */}
      <section className="py-20 bg-javlin-blue text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2"
            >
              <div className="inline-flex items-center gap-2 bg-javlin-green px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Sun className="w-4 h-4" /> Specialized Service
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Maximize Your Solar Energy Efficiency</h2>
              <p className="text-javlin-blue-light text-lg mb-8">
                Dust, sand, and environmental debris can drastically reduce the energy output of your solar panels. Our specialized solar panel cleaning division uses purified water systems and non-abrasive techniques to ensure your panels operate at peak performance, safely and efficiently.
              </p>
              <a href="#booking-form" className="inline-flex items-center gap-2 bg-white text-javlin-blue hover:bg-javlin-green hover:text-white px-8 py-4 rounded-full font-bold transition-all">
                Request a Quote <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="lg:w-1/2 relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <Image src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200" alt="Solar Panel Cleaning" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. ORIGINAL 3 FEATURES */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-javlin-green/5 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "24 Hour Booking",
                icon: Clock,
                desc: "Book Your Janitorial Service Online via WhatsApp / Call Us.",
              },
              {
                title: "All Over Qatar",
                icon: MapPin,
                desc: "JCS covers all areas of Qatar, and we drop the cleaners to your place.",
              },
              {
                title: "7 Days a week",
                icon: CalendarCheck,
                desc: "JCS provides comprehensive cleaning services for 7 days a week.",
              },
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-white p-10 rounded-3xl text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group"
              >
                <div className="w-20 h-20 mx-auto bg-javlin-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-javlin-green group-hover:rotate-6 transition-all duration-300">
                  <badge.icon className="w-10 h-10 text-javlin-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{badge.title}</h3>
                <p className="text-slate-600 leading-relaxed">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOOKING FORM SECTION */}
      <section id="booking-form" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Book Your Cleaning</h2>
            <p className="text-slate-600">Fill out the form below and our expert team will get back to you immediately.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>

      {/* 7. SMALL CLOSING TEXT */}
      <section className="py-12 bg-javlin-blue text-center text-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold mb-3">Ready for a spotless environment?</h3>
          <p className="text-javlin-blue-light">Let Javlin handle the hard work so you can focus on what matters most.</p>
        </div>
      </section>

    </div>
  );
}