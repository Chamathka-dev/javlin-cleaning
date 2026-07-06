"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";

export default function ServicesHubPage() {
  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

  // Full 26 Services Array mapped precisely from the old Mega Menu
  const servicesList = [
    { title: "General Cleaning", slug: "general-cleaning", img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800", desc: "Routine sweeping, vacuuming, dusting, and mopping." },
    { title: "Deep Cleaning", slug: "deep-cleaning", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800", desc: "Cleaning your place on a macro detailed level." },
    { title: "Domestic Cleaning", slug: "domestic-cleaning", img: "https://images.unsplash.com/photo-1647381518264-97ff1835026f?q=80&w=1170", desc: "Daily, weekly, monthly, and yearly house cleaning." },
    { title: "Commercial Cleaning", slug: "commercial-cleaning", img: "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?q=80&w=1025", desc: "High-level care for client facilities and external façades." },
    { title: "Stadium Cleaning Services", slug: "stadium-cleaning-services", img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=800", desc: "Pre-match and post-event cleaning for arenas and stadiums." },
    { title: "Solar Panel Cleaning", slug: "solar-panel-cleaning", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800", desc: "Maximize your solar energy efficiency." },
    { title: "Soft Services", slug: "soft-services", img: "https://images.unsplash.com/photo-1687840936382-7333b7d26fca?q=80&w=687", desc: "Comprehensive soft facility management solutions." },
    { title: "Sanitization & Disinfection", slug: "sanitization-and-disinfection", img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800", desc: "Complete sanitization destroying 100% of germs and viruses." },
    { title: "Maids", slug: "maids", img: "https://images.unsplash.com/photo-1722962674305-fc3dbac2fcb2?q=80&w=1170", desc: "Experienced and vetted maids for your home." },
    
    { title: "Office Cleaning", slug: "office-cleaning", img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800", desc: "Professional cleaning for corporate and office spaces." },
    { title: "Pool Cleaning", slug: "pool-cleaning", img: "https://images.unsplash.com/photo-1774109556498-652c0458d4af?q=80&w=687", desc: "Keep your swimming pools crystal clear and hygienic." },
    { title: "Pest Control", slug: "pest-control", img: "https://images.unsplash.com/photo-1628267138997-2bd92e89aaf7?q=80&w=1202", desc: "Commercial, residential, and industrial pest control services." },
    { title: "Bank Cleaning", slug: "bank-cleaning", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800", desc: "Secure and confidential cleaning for financial institutions." },
    { title: "Educational Institutes", slug: "educational-institutes", img: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?q=80&w=1170", desc: "Safe and hygienic cleaning for schools and universities." },
    { title: "Resto/Café", slug: "resto-cafe", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800", desc: "Specialized deep cleaning for restaurants and cafes." },
    { title: "Office Boy", slug: "office-boy", img: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?q=80&w=1170", desc: "Reliable office boys for daily corporate assistance." },
    { title: "Waiter and Waitress Service", slug: "waiter-and-waitress-service", img: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?q=80&w=1169", desc: "Professional hospitality staff for your events and venues." },
    { title: "School Bus Assistants", slug: "school-bus-assistants", img: "https://images.unsplash.com/photo-1617756218933-943423e097b1?q=80&w=1170", desc: "Caring and responsible assistants for student transport." },
    
    { title: "Move-In and Out Cleaning", slug: "move-in-and-out-cleaning", img: "https://images.unsplash.com/photo-1698917414969-feade59e3343?q=80&w=1172", desc: "Comprehensive deep cleaning for smooth transitions." },
    { title: "Party or Event Cleaning", slug: "party-or-event-cleaning", img: "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5?q=80&w=687", desc: "Pre and post-event cleaning services." },
    { title: "Post Construction Cleaning", slug: "post-construction-cleaning", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800", desc: "Removing dust and debris after construction or renovation." },
    { title: "Floor Cleaning and Polishing", slug: "floor-cleaning-and-polishing", img: "https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=800", desc: "Restore shine to wood, tile, and marble floors." },
    { title: "Sofa Cleaning", slug: "sofa-cleaning", img: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=800", desc: "Deep extraction cleaning for fabric and leather sofas." },
    { title: "Carpet and Rugs Cleaning", slug: "carpet-and-rugs-cleaning", img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1074", desc: "Professional stain removal and carpet refreshment." },
    { title: "Curtain Cleaning", slug: "curtain-cleaning", img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800", desc: "Steam cleaning and dust removal for all drapery." },
    { title: "Mattress Cleaning", slug: "mattress-cleaning", img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800", desc: "Eliminate dust mites and allergens from mattresses." },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen pt-20 bg-slate-50">
      
      {/* MATCHING HERO HEADER */}
      <section className="relative w-full h-[40vh] min-h-[350px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-javlin-blue/80 mix-blend-multiply"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            EXPLORE <br />
            <span className="text-javlin-green-light">Our Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-javlin-blue-light font-bold tracking-widest text-sm uppercase"
          >
            HOME <span className="mx-2 text-white/50">•</span> SERVICES
          </motion.p>
        </div>
      </section>

      {/* 26-ITEM GRID */}
      <section className="container mx-auto px-6 py-20">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.05 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {servicesList.map((service, idx) => (
            <motion.div key={idx} variants={fadeIn} className="h-full">
              {/* THE ENTIRE CARD IS NOW A CLICKABLE LINK */}
              <Link href={`/services/${service.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={service.img} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-javlin-blue mb-2 group-hover:text-javlin-green transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 flex-1 leading-relaxed">{service.desc}</p>
                  <span className="text-javlin-green font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read More &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* GREEN CTA BANNER */}
      <section className="bg-javlin-green py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-white text-3xl md:text-4xl font-bold leading-tight text-center md:text-left md:w-2/3">
            Our cost effective and reliable cleaning services that we aim to provide to all clients
          </h3>
          <Link href="/contact" className="bg-slate-900 hover:bg-black text-white px-10 py-4 rounded-full font-bold whitespace-nowrap transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Get in touch
          </Link>
        </div>
      </section>

      {/* BOOKING FORM AT BOTTOM */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Book Your Cleaning</h2>
            <p className="text-slate-600">Fill out the form below and our expert team will get back to you immediately.</p>
          </div>
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <BookingForm />
          </div>
        </div>
      </section>

    </div>
  );
}