import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"; 

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2a2a2a] text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Javlin Cleaning Services Logo" 
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400">JAVLIN CLEANING AND SERVICES W.L.L</p>
              <p className="text-sm font-medium text-slate-400 font-sans" dir="rtl">جافلين للتنظيفات والخدمات ذ.م.م</p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/javlin.qa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-javlin-blue hover:border-javlin-blue transition-colors">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/javlincleaning?igsh=eHNiYnZ4enN3c2Jp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-javlin-blue hover:border-javlin-blue transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://vt.tiktok.com/ZSX8jVDoa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-javlin-blue hover:border-javlin-blue transition-colors">
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Matrix */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">SERVICES</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/general-cleaning" className="hover:text-javlin-blue transition-colors">General Cleaning</Link></li>
              <li><Link href="/services/deep-cleaning" className="hover:text-javlin-blue transition-colors">Deep Cleaning</Link></li>
              <li><Link href="/services/domestic-cleaning" className="hover:text-javlin-blue transition-colors">Domestic Cleaning</Link></li>
              <li><Link href="/services/commercial-cleaning" className="hover:text-javlin-blue transition-colors">Commercial Cleaning</Link></li>
            </ul>
          </div>

          {/* Other Services Matrix */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">OTHER SERVICES</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services/soft-services" className="hover:text-javlin-blue transition-colors">Soft Services</Link></li>
              <li><Link href="/services/maids" className="hover:text-javlin-blue transition-colors">Maids</Link></li>
              {/* Replaced Disinfection with Mattress Cleaning */}
              <li><Link href="/services/mattress-cleaning" className="hover:text-javlin-blue transition-colors">Mattress Cleaning</Link></li>
              <li><Link href="/services/pest-control" className="hover:text-javlin-blue transition-colors">Pest Control</Link></li>
            </ul>
          </div>

          {/* Sitemap Matrix */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide text-sm">SITEMAP</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-javlin-blue transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-javlin-blue transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-javlin-blue transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-javlin-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-center">
          <p>© {currentYear} Javlin Cleaning & Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}