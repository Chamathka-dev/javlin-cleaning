"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-3">
          
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Javlin Logo" width={160} height={100} priority className="object-contain w-auto h-16 md:h-24" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex space-x-8 items-center">
              <Link href="/" className="text-sm font-bold text-slate-700 hover:text-javlin-blue transition-colors">HOME</Link>
              <Link href="/about" className="text-sm font-bold text-slate-700 hover:text-javlin-blue transition-colors">ABOUT US</Link>
              
              {/* SERVICES WITH 26-ITEM MEGA-MENU */}
              <div className="relative group py-8">
                <Link href="/services" className="text-sm font-bold text-javlin-blue hover:text-javlin-blue-dark transition-colors">
                  SERVICES
                </Link>
                
                <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>
                
                <div className="absolute top-[calc(100%-10px)] right-0 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-8 w-[950px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 grid grid-cols-3 gap-x-8 gap-y-3 border border-slate-100 z-50">                  
                  {/* Column 1 (9 Items) */}
                  <div className="flex flex-col space-y-3">
                    <Link href="/services/general-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> General Cleaning</Link>
                    <Link href="/services/deep-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Deep Cleaning</Link>
                    <Link href="/services/domestic-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Domestic Cleaning</Link>
                    <Link href="/services/commercial-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Commercial Cleaning</Link>
                    <Link href="/services/stadium-cleaning-services" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Stadium Cleaning Services</Link>
                    <Link href="/services/solar-panel-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Solar Panel Cleaning</Link>
                    <Link href="/services/soft-services" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Soft Services</Link>
                    <Link href="/services/maids" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Maids</Link>
                  </div>

                  {/* Column 2 (9 Items) */}
                  <div className="flex flex-col space-y-3">
                    <Link href="/services/office-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Office Cleaning</Link>
                    <Link href="/services/pool-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Pool Cleaning</Link>
                    <Link href="/services/pest-control" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Pest Control</Link>
                    <Link href="/services/bank-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Bank Cleaning</Link>
                    <Link href="/services/educational-institutes" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Educational Institutes</Link>
                    <Link href="/services/resto-cafe" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Resto/Café</Link>
                    <Link href="/services/office-boy" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Office Boy</Link>
                    <Link href="/services/waiter-and-waitress-service" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Waiter and Waitress Service</Link>
                    <Link href="/services/school-bus-assistants" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> School Bus Assistants</Link>
                  </div>

                  {/* Column 3 (8 Items) */}
                  <div className="flex flex-col space-y-3">
                    <Link href="/services/move-in-and-out-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Move-In and Out Cleaning</Link>
                    <Link href="/services/party-or-event-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Party or Event Cleaning</Link>
                    <Link href="/services/post-construction-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Post Construction Cleaning</Link>
                    <Link href="/services/floor-cleaning-and-polishing" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Floor Cleaning and Polishing</Link>
                    <Link href="/services/sofa-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Sofa Cleaning</Link>
                    <Link href="/services/carpet-and-rugs-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Carpet and Rugs Cleaning</Link>
                    <Link href="/services/curtain-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Curtain Cleaning</Link>
                    <Link href="/services/mattress-cleaning" className="text-sm text-slate-600 hover:text-javlin-blue hover:translate-x-1 transition-all flex items-center gap-1"><ChevronRight className="w-3 h-3"/> Mattress Cleaning</Link>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="text-sm font-bold text-slate-700 hover:text-javlin-blue transition-colors">CONTACT</Link>
            </div>

            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6 text-slate-600">
              <FaFacebook className="w-4 h-4 hover:text-javlin-blue cursor-pointer transition-colors" />
              <FaInstagram className="w-4 h-4 hover:text-javlin-blue cursor-pointer transition-colors" />
              <FaTwitter className="w-4 h-4 hover:text-javlin-blue cursor-pointer transition-colors" />
              <Search className="w-4 h-4 ml-2 hover:text-javlin-blue cursor-pointer transition-colors" />
            </div>
          </div>

          <button className="lg:hidden text-slate-700 hover:text-javlin-blue" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full max-h-[70vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-4 flex flex-col">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-700 hover:text-javlin-blue block py-2">HOME</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-700 hover:text-javlin-blue block py-2">ABOUT US</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="text-sm font-bold text-javlin-blue block py-2">SERVICES (Explore All 26 Services)</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-700 hover:text-javlin-blue block py-2">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
}