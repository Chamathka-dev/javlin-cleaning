import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import our new layout components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import NavigationLoader from "@/components/NavigationLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Javlin Cleaning and Services | Qatar",
  description: "Fully Qatari-owned company providing professional industrial cleaning, domestic cleaning, and hospitality services.",
  keywords: "cleaning Qatar, deep cleaning, hospitality services, domestic cleaning, commercial cleaning Doha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>

        <NavigationLoader />
        
        {/* Global Navigation */}
        <Navbar />
        
        {/* Main Content (Pages injected here) */}
        <main className="min-h-screen flex flex-col">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp CTA */}
        <FloatingWhatsApp />
        
      </body>
    </html>
  );
}