"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);

  // This effect runs every time the route or query parameters change.
  // When it fires, it means the new page has successfully loaded!
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname, searchParams]);

  // This effect listens for clicks on any link across the entire site.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find the closest anchor tag in case they clicked an icon/span inside the link
      const anchor = target.closest("a");

      if (anchor && anchor.href) {
        const currentUrl = new URL(window.location.href);
        const targetUrl = new URL(anchor.href, window.location.origin);

        // Only trigger the loading animation if it's an internal link
        // navigating to a different page, and not opening in a new tab.
        if (
          targetUrl.origin === currentUrl.origin &&
          targetUrl.pathname !== currentUrl.pathname &&
          !anchor.hasAttribute("download") &&
          anchor.target !== "_blank"
        ) {
          setIsNavigating(true);
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          // z-[99999] ensures this sits above everything, including the navbar
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/40 backdrop-blur-md"
        >
          {/* Pulsing White Circle */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="relative w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border border-slate-100"
          >
            {/* Javlin Logo inside */}
            <Image 
              src="/logo.png" 
              alt="Loading..." 
              fill 
              className="object-contain p-5"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}