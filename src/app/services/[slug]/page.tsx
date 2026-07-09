"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import BookingForm from "@/components/BookingForm";

// 1. Massive Data Dictionary for all 26 services (With updated high-res images)
const serviceDatabase: Record<string, any> = {
  "general-cleaning": {
    title: "General Cleaning",
    text: "Keeping your place clean and hygienic is absolutely essential. Javlin Cleaning and Services provides a general cleaning service which consists of simple cleaning duties such as sweeping, vacuuming, dusting, mopping, and so on. This type of general cleaning is performed more often to maintain cleanliness and hygiene.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200",
    benefitsTitle: "Having a general cleaning on regularly schedule has the following benefits:",
    benefits: [
      "Everything important gets cleaned frequently.",
      "Tidy and organized places convey order and comfort.",
      "Prevents the growth of harmful bacteria in key areas.",
      "Keeps odors from developing."
    ]
  },
  "deep-cleaning": {
    title: "Deep Cleaning",
    text: "Deep cleaning goes beyond the surface level. It is a comprehensive, top-to-bottom cleaning process that removes deep-seated dirt, grime, and allergens that regular cleaning often misses. Ideal for seasonal spring cleaning or resetting a property.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    benefitsTitle: "Benefits of our deep cleaning service:",
    benefits: [
      "Eliminates hidden dust mites and allergens.",
      "Improves indoor air quality drastically.",
      "Restores the original shine of floors and surfaces.",
      "Prolongs the lifespan of your fixtures and furniture."
    ]
  },
  "domestic-cleaning": {
    title: "Domestic Cleaning",
    text: "Your home is your sanctuary. Our domestic cleaning services are tailored to fit your household's unique schedule and needs. Whether you require daily, weekly, or monthly visits, our vetted professionals ensure your living space remains pristine.",
    img: "https://images.unsplash.com/photo-1647381518264-97ff1835026f?q=80&w=1170",
    benefitsTitle: "Why choose our domestic cleaning:",
    benefits: [
      "More free time to spend with your family.",
      "Consistent, reliable, and trustworthy staff.",
      "Customizable cleaning checklists.",
      "Use of safe, family-friendly cleaning products."
    ]
  },
  "commercial-cleaning": {
    title: "Commercial Cleaning",
    text: "A clean office is a productive office. We provide high-level care for corporate facilities, ensuring that your business environment reflects the professionalism of your brand to both employees and visiting clients.",
    img: "https://images.unsplash.com/photo-1781637590564-01c65dbf2039?q=80&w=1200",
    benefitsTitle: "Advantages for your business:",
    benefits: [
      "Boosts employee morale and productivity.",
      "Reduces sick days by eliminating office germs.",
      "Creates a lasting positive impression on clients.",
      "Flexible after-hours cleaning schedules."
    ]
  },
  "stadium-cleaning-services": {
    title: "Stadium Cleaning Services",
    text: "Large-scale venues require highly coordinated cleaning efforts. Our stadium cleaning division handles pre-match preparation, in-game maintenance, and intensive post-event waste management and sanitization.",
    img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=1200",
    benefitsTitle: "Why venues trust us:",
    benefits: [
      "Rapid turnaround times between events.",
      "Ability to deploy massive, coordinated teams.",
      "Strict adherence to health and safety protocols.",
      "Comprehensive waste segregation and disposal."
    ]
  },
  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning",
    text: "Dust and sand buildup can drastically reduce the energy output of your solar investment. We use specialized, non-abrasive purified water systems to safely clean your panels and maximize their efficiency.",
    img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200",
    benefitsTitle: "Benefits of maintaining solar panels:",
    benefits: [
      "Increases energy output by up to 25%.",
      "Prevents permanent etching and glass damage.",
      "Maintains manufacturer warranties.",
      "Safe, chemical-free cleaning process."
    ]
  },
  "soft-services": {
    title: "Soft Services",
    text: "Facility management requires more than just cleaning. Our soft services encompass a broad range of non-technical support, ensuring your facility runs smoothly, safely, and comfortably on a daily basis.",
    img: "https://images.unsplash.com/photo-1687840936382-7333b7d26fca?q=80&w=687",
    benefitsTitle: "Our soft services include:",
    benefits: [
      "Comprehensive waste management.",
      "Landscaping and grounds maintenance.",
      "Security and reception support.",
      "Pantry and mailroom management."
    ]
  },
  
  "maids": {
    title: "Maids",
    text: "Finding reliable help shouldn't be stressful. We provide highly trained, vetted, and trustworthy maids who integrate seamlessly into your household to manage all daily cleaning and organizing tasks.",
    img: "https://images.unsplash.com/photo-1722962674305-fc3dbac2fcb2?q=80&w=1170",
    benefitsTitle: "What you get with our maids:",
    benefits: [
      "Fully background-checked personnel.",
      "Trained in high-end fabric and surface care.",
      "Flexible full-time or part-time arrangements.",
      "Utmost respect for your privacy."
    ]
  },
  "office-cleaning": {
    title: "Office Cleaning",
    text: "We specialize in maintaining pristine corporate environments. From boardrooms to breakrooms, our office cleaning services ensure that your workspace remains clean, organized, and hygienic every single day.",
    img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200",
    benefitsTitle: "Office cleaning highlights:",
    benefits: [
      "Daily trash removal and desk sanitization.",
      "Deep cleaning of carpets and upholstery.",
      "Restroom and pantry restocks.",
      "Zero disruption to your working hours."
    ]
  },
  "pool-cleaning": {
    title: "Pool Cleaning",
    text: "A clean pool is a safe pool. Our comprehensive pool maintenance program includes skimming, vacuuming, chemical balancing, and filter cleaning to keep your water crystal clear year-round.",
    img: "https://images.unsplash.com/photo-1774109556498-652c0458d4af?q=80&w=687",
    benefitsTitle: "Why professional pool care matters:",
    benefits: [
      "Prevents algae blooms and bacteria growth.",
      "Protects pool pumps and equipment from damage.",
      "Maintains perfect pH levels for skin safety.",
      "Enhances the visual appeal of your property."
    ]
  },
  "pest-control": {
    title: "Pest Control",
    text: "Protect your property from unwanted invaders. Our pest control division utilizes safe, effective, and environmentally conscious methods to eradicate insects, rodents, and other pests from residential and commercial spaces.",
    img: "https://images.unsplash.com/photo-1628267138997-2bd92e89aaf7?q=80&w=1200",
    benefitsTitle: "Our pest management approach:",
    benefits: [
      "Thorough inspections to identify nesting areas.",
      "Targeted treatments that are safe for pets and humans.",
      "Long-term preventative strategies.",
      "Discreet and fast-acting solutions."
    ]
  },
  "bank-cleaning": {
    title: "Bank Cleaning",
    text: "Financial institutions require a unique level of security and cleanliness. Our specialized teams are trained to operate in high-security environments, maintaining immaculate lobbies, teller stations, and executive offices.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    benefitsTitle: "Why banks choose Javlin:",
    benefits: [
      "Strict confidentiality and security protocols.",
      "Immaculate presentation for high-net-worth clients.",
      "Sanitization of high-touch ATM and teller areas.",
      "Fully bonded and insured cleaning teams."
    ]
  },
  "educational-institutes": {
    title: "Educational Institutes",
    text: "Schools and universities are breeding grounds for germs. We provide comprehensive cleaning solutions for educational facilities to protect students and staff while creating an environment conducive to learning.",
    img: "https://images.unsplash.com/photo-1669101602108-fa5ba89507ee?q=80&w=1170",
    benefitsTitle: "Our school cleaning benefits:",
    benefits: [
      "Reduces student and teacher absenteeism.",
      "Use of safe, non-toxic cleaning chemicals.",
      "Deep cleaning during summer and winter breaks.",
      "Sanitization of cafeterias, gyms, and classrooms."
    ]
  },
  "resto-cafe": {
    title: "Resto/Café Cleaning",
    text: "In the food and beverage industry, cleanliness is tied directly to your reputation. We provide heavy-duty degreasing, dining area sanitization, and kitchen deep-cleaning to ensure you exceed health inspection standards.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200",
    benefitsTitle: "Restaurant cleaning advantages:",
    benefits: [
      "Ensures compliance with local health codes.",
      "Eliminates grease buildup in kitchen exhausts.",
      "Creates a spotless dining experience for guests.",
      "Overnight cleaning to avoid operational disruption."
    ]
  },
  "office-boy": {
    title: "Office Boy Services",
    text: "Keep your daily operations running smoothly. Our professional office boys assist with making tea and coffee, managing files, handling deliveries, and ensuring the general tidiness of your workspace throughout the day.",
    img: "https://images.unsplash.com/photo-1627905646269-7f034dcc5738?q=80&w=1170",
    benefitsTitle: "How an office boy helps:",
    benefits: [
      "Allows your core team to focus on their work.",
      "Ensures guests are promptly served refreshments.",
      "Maintains pantry cleanliness all day.",
      "Handles minor administrative errands efficiently."
    ]
  },
  "waiter-and-waitress-service": {
    title: "Waiter & Waitress Service",
    text: "Elevate your events with our premium hospitality staff. We supply highly trained, well-groomed, and courteous waiters and waitresses for corporate events, private parties, and VIP functions.",
    img: "https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?q=80&w=1200",
    benefitsTitle: "Our hospitality guarantee:",
    benefits: [
      "Polished, professional, and uniformed staff.",
      "Trained in fine dining and VIP etiquette.",
      "Capable of handling high-pressure event environments.",
      "Seamless integration with your event management team."
    ]
  },
  "school-bus-assistants": {
    title: "School Bus Assistants",
    text: "The safety of children is our top priority. We provide caring, responsible, and fully vetted school bus assistants to ensure students safely board, travel, and disembark during their daily commutes.",
    img: "https://images.unsplash.com/photo-1617756218933-943423e097b1?q=80&w=1170",
    benefitsTitle: "Why trust our bus assistants:",
    benefits: [
      "First-aid and emergency response trained.",
      "Strict adherence to child safety protocols.",
      "Assistance with seatbelts and boarding.",
      "Peace of mind for parents and school boards."
    ]
  },
  "move-in-and-out-cleaning": {
    title: "Move-In & Out Cleaning",
    text: "Moving is stressful enough without worrying about the cleaning. Whether you need your security deposit back or want your new home sanitized before unpacking, our move-in/out teams leave the property spotless.",
    img: "https://images.unsplash.com/photo-1698917414969-feade59e3343?q=80&w=1172",
    benefitsTitle: "Benefits of transition cleaning:",
    benefits: [
      "Guarantees a hygienic fresh start in a new home.",
      "Helps secure end-of-tenancy deposits.",
      "Includes deep cleaning of appliances and cabinets.",
      "Removes lingering odors from previous tenants."
    ]
  },
  "party-or-event-cleaning": {
    title: "Party & Event Cleaning",
    text: "Enjoy your event and leave the mess to us. We provide pre-event setup cleaning, on-site porter services during the event, and comprehensive post-event teardown and waste removal.",
    img: "https://images.unsplash.com/photo-1661697522363-24ad7adc2bc5?q=80&w=687",
    benefitsTitle: "Event cleaning features:",
    benefits: [
      "Discreet cleaning while the event is ongoing.",
      "Rapid post-event turnaround of the venue.",
      "Complete spill management and trash removal.",
      "Restroom maintenance throughout the function."
    ]
  },
  "post-construction-cleaning": {
    title: "Post Construction Cleaning",
    text: "Construction leaves behind a tremendous amount of dust and hazardous debris. Our specialized post-construction crews perform heavy-duty cleaning to make your newly built or renovated space ready for occupancy.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    benefitsTitle: "Why post-construction cleaning is vital:",
    benefits: [
      "Removes fine silica dust from the air and vents.",
      "Safe removal of nails, glass, and construction debris.",
      "Deep cleaning of newly installed windows and floors.",
      "Prepares the property for immediate handover."
    ]
  },
  "floor-cleaning-and-polishing": {
    title: "Floor Cleaning & Polishing",
    text: "Restore the original luster to your floors. We specialize in hard floor care, utilizing industrial scrubbers and high-speed polishers to strip, clean, and re-seal marble, tile, vinyl, and hardwood floors.",
    img: "https://images.unsplash.com/photo-1580256081112-e49377338b7f?q=80&w=1200",
    benefitsTitle: "Benefits of floor polishing:",
    benefits: [
      "Removes deep scuff marks and scratches.",
      "Applies a protective seal against future damage.",
      "Brings back the mirror-shine to dull marble.",
      "Enhances the overall brightness of the room."
    ]
  },
  "sofa-cleaning": {
    title: "Sofa Cleaning",
    text: "Couches harbor dead skin, dust mites, and stubborn stains. Our deep-extraction sofa cleaning service revitalizes your upholstery, removing deep-seated dirt while protecting the integrity of the fabric or leather.",
    img: "https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=1200",
    benefitsTitle: "Why clean your upholstery:",
    benefits: [
      "Drastically reduces indoor allergens.",
      "Removes stubborn pet odors and stains.",
      "Restores the original color and texture.",
      "Extends the life of your expensive furniture."
    ]
  },
  "carpet-and-rugs-cleaning": {
    title: "Carpet & Rugs Cleaning",
    text: "Vacuuming only removes surface dirt. We use professional hot water extraction (steam cleaning) to penetrate deep into the carpet fibers, lifting out years of dirt, bacteria, and allergens.",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1074",
    benefitsTitle: "Advantages of our carpet care:",
    benefits: [
      "Eliminates high-traffic wear patterns.",
      "Uses safe, non-toxic carpet shampoos.",
      "Fast drying times to prevent mold growth.",
      "Specialized care for delicate Persian and Oriental rugs."
    ]
  },
  "curtain-cleaning": {
    title: "Curtain Cleaning",
    text: "Curtains act as massive filters, trapping airborne dust and odors. Our specialized curtain cleaning service removes the dirt without the need to take them down, ensuring they look fresh and hang perfectly.",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200",
    benefitsTitle: "Why steam clean your curtains:",
    benefits: [
      "No hassle of unhooking and rehanging.",
      "Prevents fabric shrinkage and damage.",
      "Removes trapped cooking odors and smoke.",
      "Brightens the entire appearance of the room."
    ]
  },
  "mattress-cleaning": {
    title: "Mattress Cleaning",
    text: "We spend a third of our lives in bed. Our mattress deep-cleaning service uses high-powered UV vacuums and steam extraction to kill dust mites, remove sweat stains, and sanitize your sleeping environment.",
    img: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1200",
    benefitsTitle: "The health benefits of a clean mattress:",
    benefits: [
      "Improves sleep quality and breathing.",
      "Eliminates bed bugs and dust mites.",
      "Removes deeply embedded bodily fluids and odors.",
      "Prolongs the structural life of the mattress."
    ]
  },
  // Fallback if URL is mistyped
  "fallback": {
    title: "Premium Cleaning Service",
    text: "We provide high-quality, professional cleaning services tailored to your exact needs. Our expert staff utilizes eco-friendly products and advanced techniques to ensure a perfectly clean and secure environment.",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    benefitsTitle: "Benefits of choosing Javlin:",
    benefits: [
      "Expert, highly trained professionals.",
      "100% satisfaction guarantee.",
      "Use of safe, eco-friendly products.",
      "Flexible scheduling to fit your needs."
    ]
  }
};

export default function SingleServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const data = serviceDatabase[slug] || serviceDatabase["fallback"];

  const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      {/* 1. CENTERED IMMERSIVE HERO */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center text-center bg-slate-950 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src={data.img} alt={data.title} fill className="object-cover opacity-50" priority />
          <div className="absolute inset-0 bg-slate-950/60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-javlin-green/20 text-javlin-green-light border border-javlin-green/30 px-5 py-2 rounded-full text-xs font-bold mb-6 tracking-widest uppercase backdrop-blur-sm">
            <Sparkles className="w-4 h-4" /> Service Overview
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.1] capitalize"
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 font-bold tracking-widest text-sm uppercase"
          >
            HOME <span className="mx-2 text-white/50">•</span> SERVICES <span className="mx-2 text-white/50">•</span> <span className="text-javlin-green-light">{data.title}</span>
          </motion.p>
        </div>
      </section>

      {/* 2. ASYMMETRIC CONTENT BLOCK (The "Story" Layout) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute -right-40 top-20 w-96 h-96 bg-javlin-blue/5 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:w-1/2 relative h-[450px] md:h-[550px] w-full order-2 lg:order-1">
              <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-white">
                <Image src={data.img} alt={data.title} fill className="object-cover" priority />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-javlin-green rounded-[40px] -z-0 hidden md:block"></div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="lg:w-1/2 flex flex-col justify-center order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                Premium <br/><span className="text-javlin-blue">{data.title}.</span>
              </h2>
              <div className="w-16 h-1.5 bg-javlin-green rounded-full mb-8"></div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                {data.text}
              </p>
              
              <div className="mt-6">
                <a href="#booking-form" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1">
                  Book This Service
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. DARK BENTO-STYLE BENEFITS GRID */}
      <section className="py-28 bg-slate-900 text-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">{data.benefitsTitle}</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Discover the long-term value and operational excellence embedded in this service.</p>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.benefits.map((benefit: string, idx: number) => (
              <motion.div key={idx} variants={fadeIn} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 flex gap-6 items-start hover:border-javlin-green/50 hover:bg-slate-800 transition-colors group">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shrink-0 border border-slate-700 group-hover:border-javlin-green transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-javlin-green" />
                </div>
                <p className="text-slate-200 text-lg font-medium leading-relaxed pt-2">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. GREEN CTA BANNER */}
      <section className="bg-javlin-green py-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-white text-3xl md:text-4xl font-black leading-tight text-center md:text-left md:w-2/3 tracking-tight">
            Cost-effective, reliable cleaning services aimed at exceeding client expectations.
          </h3>
          <Link href="/contact" className="bg-slate-900 hover:bg-black text-white px-10 py-5 rounded-full font-bold whitespace-nowrap transition-all shadow-xl hover:-translate-y-1">
            Get an Estimate
          </Link>
        </div>
      </section>
      
      {/* 5. BOOKING FORM AT BOTTOM */}
      <section id="booking-form" className="py-28 bg-white relative">
        <div className="absolute top-0 w-full h-1/2 bg-slate-100 z-0"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Schedule Today</h2>
            <p className="text-slate-600 text-lg">Provide your details below, and our dispatch desk will confirm your appointment for <span className="font-bold text-javlin-blue">{data.title}</span>.</p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl shadow-slate-900/10 border border-slate-100">
            <BookingForm />
          </motion.div>
        </div>
      </section>

    </div>
  );
}