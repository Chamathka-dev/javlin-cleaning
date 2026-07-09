"use client";

import { motion } from "framer-motion";
import { ArrowDownCircle, ArrowRight, ShieldCheck, Clock, ThumbsUp, HeartHandshake, MapPin, CalendarCheck, Sparkles, Users, Award, Leaf, Quote, Star, PhoneCall } from "lucide-react";
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Mattress Cleaning added with size: "md" to perfectly fill the final 2 empty slots
  const services = [
    { title: "Deep Cleaning", slug: "deep-cleaning", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", desc: "Cleaning your place on a macro detailed level.", size: "lg" },
    { title: "Domestic Cleaning", slug: "domestic-cleaning", img: "https://images.unsplash.com/photo-1647381518264-97ff1835026f?q=80&w=1170", desc: "Daily, weekly, monthly, and yearly house cleaning.", size: "sm" },
    { title: "Commercial Cleaning", slug: "commercial-cleaning", img: "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?q=80&w=1025", desc: "High-level care for client facilities and external façades.", size: "sm" },
    { title: "Hospitality", slug: "waiter-and-waitress-service", img: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?q=80&w=1169", desc: "Providing waiters, cashiers, receptionists, and cleaners.", size: "md" },
    { title: "Pest Control", slug: "pest-control", img: "https://images.unsplash.com/photo-1628267138997-2bd92e89aaf7?q=80&w=1202", desc: "Commercial, residential, and industrial pest control.", size: "sm" },
    { title: "Sofa Cleaning", slug: "sofa-cleaning", img: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=800", desc: "Deep extraction cleaning for fabric and leather sofas.", size: "sm" },
    { title: "Mattress Cleaning", slug: "mattress-cleaning", img: "https://images.unsplash.com/photo-1688384452551-5cacc39946e0?q=80&w=1170", desc: "Eliminate dust mites and allergens from your bed.", size: "md" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      {/* 1. STANDALONE CENTERED HERO SECTION */}
      {/* Changed pt-20 to pt-32 to push content safely below the fixed navbar */}
      <section className="relative w-full h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-slate-950 pt-32">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070" alt="Premium Cleaning" fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-slate-950/60"></div>
        </div>
        
        {/* Removed the bottom padding (pb-24/32) that was pushing the text upwards */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-javlin-green/20 text-javlin-green-light border border-javlin-green/30 px-5 py-2 rounded-full text-xs font-bold mb-8 tracking-widest uppercase backdrop-blur-sm">
            <Sparkles className="w-4 h-4" /> ELITE CLEANING & HOSPITALITY
          </motion.div>
          
          <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            We Bring Comfort <br />
            <span className="text-javlin-green">Beyond Cleaning</span>
          </motion.h1>
          
          <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
            Behind every service we provide is a deep respect for your environment. We pour our hearts into every detail to create pristine, healthy spaces where your family and business can thrive, worry-free.
          </motion.p>
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap justify-center gap-4">
            <a href="#booking-form" className="group flex items-center gap-3 bg-javlin-green hover:bg-javlin-green-light text-slate-950 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-javlin-green/30">
              Book a Cleaning
              <ArrowDownCircle className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a href="tel:+97431009917" className="group flex items-center gap-2 border border-slate-500 hover:border-white text-white px-8 py-4 rounded-2xl font-bold transition-all bg-white/5 backdrop-blur-sm">
              <PhoneCall className="w-5 h-5 text-javlin-green" /> +974 3327 7657
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center">
              <div className="flex flex-col items-center justify-center pt-4 md:pt-0">
                <Users className="w-8 h-8 text-javlin-blue mb-3" />
                <h3 className="text-3xl font-black text-slate-900">500+</h3>
                <p className="text-slate-500 font-medium mt-1">Corporate Clients</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <Award className="w-8 h-8 text-javlin-blue mb-3" />
                <h3 className="text-3xl font-black text-slate-900">Expert</h3>
                <p className="text-slate-500 font-medium mt-1">Vetted Professionals</p>
              </div>
              <div className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <Leaf className="w-8 h-8 text-javlin-green mb-3" />
                <h3 className="text-3xl font-black text-slate-900">100%</h3>
                <p className="text-slate-500 font-medium mt-1">Eco-Friendly Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (THE PROCESS) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">How Javlin Works</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">A seamless, hassle-free experience from your first contact to a spotless finish.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-javlin-blue/20 to-transparent -z-10"></div>
            
            {[
              { step: "01", title: "Book a Service", desc: "Contact us via form, WhatsApp, or phone to schedule a time that fits your needs.", icon: CalendarCheck },
              { step: "02", title: "We Execute", desc: "Our fully equipped, expert team arrives punctually to deliver high-end cleaning.", icon: ShieldCheck },
              { step: "03", title: "Enjoy Your Space", desc: "Relax in a pristine, healthy, and perfectly organized environment.", icon: Sparkles },
            ].map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center mb-6 relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-javlin-green text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {item.step}
                  </div>
                  <item.icon className="w-10 h-10 text-javlin-blue" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed max-w-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HEAVY COLOR BLOCK: SERVICES BENTO GRID */}
      <section className="py-28 bg-slate-900 text-white border-y-8 border-javlin-green">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-javlin-green font-bold tracking-widest text-sm uppercase mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Premium Service Framework</h2>
              <p className="text-slate-400 max-w-xl text-lg">We handle tasks of all scopes with dynamic resource management and rigorous quality control.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 bg-javlin-blue hover:bg-javlin-blue-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all">
              Explore All 25 Services <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Asymmetric Bento Box on Dark Background */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[250px] gap-4 max-w-7xl mx-auto">
            {services.map((service, index) => {
              let gridClasses = "col-span-1 row-span-1";
              if (service.size === "lg") gridClasses = "col-span-1 md:col-span-2 lg:row-span-2";
              if (service.size === "md") gridClasses = "col-span-1 md:col-span-2 row-span-1";

              return (
                <Link href={`/services/${service.slug}`} key={index} className={`bg-slate-800 rounded-3xl overflow-hidden shadow-2xl group relative flex flex-col justify-end p-8 ${gridClasses} cursor-pointer`}>
                  
                  <div className="absolute inset-0 z-0">
                    <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent group-hover:via-slate-950/30 transition-all duration-300"></div>
                  </div>

                  <div className="relative z-10 w-full transform group-hover:-translate-y-2 transition-transform duration-300">
                    <h3 className={`font-black text-white mb-2 tracking-tight drop-shadow-md ${service.size === 'lg' ? 'text-3xl md:text-4xl' : 'text-xl'}`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-100 text-sm line-clamp-2 max-w-md font-medium leading-relaxed mb-4 drop-shadow-sm">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-2 bg-javlin-green hover:bg-javlin-green-light text-slate-900 font-bold text-xs px-4 py-2 rounded-full transition-all duration-300 shadow-md">
                      View Details &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. CLIENT TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Client Satisfaction</h2>
            <p className="text-slate-500 text-lg">Don't just take our word for it. Hear from our partners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ahmed Al-Thani", role: "Corporate Manager", text: "Javlin has completely transformed our office hygiene. Their punctuality and attention to detail are unmatched in Qatar." },
              { name: "Sarah Williams", role: "Homeowner", text: "The deep cleaning service before we moved in was spectacular. The eco-friendly products made the house smell incredibly fresh." },
              { name: "Khalid Mansour", role: "Event Director", text: "We rely on Javlin's hospitality staff for all our VIP events. Professional, perfectly groomed, and highly trained." }
            ].map((review, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-javlin-green/20" />
                <div className="flex gap-1 text-amber-400 mb-6">
                  <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-700 leading-relaxed mb-8 italic">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-javlin-blue font-medium">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REDESIGNED CORE VALUES */}
      <section className="py-24 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Why Choose <br/><span className="text-javlin-blue">Javlin?</span></h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">We build long-term partnerships based on transparent and trustworthy service execution.</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700 font-bold"><div className="w-6 h-6 bg-javlin-green rounded-full flex items-center justify-center text-white"><MapPin className="w-3 h-3"/></div> All Over Qatar</li>
                <li className="flex items-center gap-3 text-slate-700 font-bold"><div className="w-6 h-6 bg-javlin-green rounded-full flex items-center justify-center text-white"><Clock className="w-3 h-3"/></div> 7 Days a Week</li>
                <li className="flex items-center gap-3 text-slate-700 font-bold"><div className="w-6 h-6 bg-javlin-green rounded-full flex items-center justify-center text-white"><PhoneCall className="w-3 h-3"/></div> 24 Hour Booking</li>
              </ul>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Honesty", icon: HeartHandshake, desc: "Transparent pricing and trustworthy service." },
                { title: "Punctuality", icon: Clock, desc: "We arrive exactly when scheduled." },
                { title: "Responsibility", icon: ShieldCheck, desc: "Using natural, non-toxic products." },
                { title: "Satisfaction", icon: ThumbsUp, desc: "Guaranteed attention to detail every time." },
              ].map((badge, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-javlin-blue transition-colors flex items-start gap-4">
                  <div className="w-12 h-12 bg-javlin-blue/10 rounded-xl flex items-center justify-center shrink-0">
                    <badge.icon className="w-6 h-6 text-javlin-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{badge.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOOKING FORM INTEGRATION */}
      <section id="booking-form" className="py-28 bg-white relative">
        <div className="absolute top-0 w-full h-1/2 bg-slate-100 z-0"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Book Your Cleaning</h2>
            <p className="text-slate-600 text-lg">Provide project parameters below, and our dispatch desk will confirm your appointment.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl shadow-slate-900/10 border border-slate-100">
            <BookingForm />
          </motion.div>
        </div>
      </section>

    </div>
  );
}