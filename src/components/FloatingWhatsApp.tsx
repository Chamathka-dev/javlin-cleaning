"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  // Replace this with the client's actual WhatsApp number (include country code, e.g., 974...)
  const whatsappNumber = "97433277657"; 
  const defaultMessage = "Hello Javlin Cleaning, I would like to inquire about your services.";

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      
      <FaWhatsapp className="w-8 h-8 relative z-10" />
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-2 px-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
        Chat with us!
        {/* Little triangle arrow pointing right */}
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900"></span>
      </span>
    </a>
  );
}