"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show the sticky header if scrolled past the Hero section
      setIsScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // If we are at the top of the page, don't even render the hover trigger area
  if (!isScrolled) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-4 z-[9999] group">
      
      {/* The hidden navbar that drops down on hover */}
      <div className="absolute top-0 left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10 shadow-2xl transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          
          {/* Logo for sticky header */}
          <div className="flex-shrink-0">
            <Link href="#">
              <img
                src="/logo/DOUHA KONSTRUKSI putih.png"
                alt="Douha Konstruksi"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation for sticky header */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold ml-auto">
            <Link href="#masalah" className="text-gray-300 hover:text-white transition-all px-4 py-2 whitespace-nowrap hover:bg-white/5 rounded-lg">
              Masalah
            </Link>
            <Link href="#kelebihan" className="text-gray-300 hover:text-white transition-all px-4 py-2 whitespace-nowrap hover:bg-white/5 rounded-lg">
              Kelebihan
            </Link>
            <Link href="#layanan" className="text-gray-300 hover:text-white transition-all px-4 py-2 whitespace-nowrap hover:bg-white/5 rounded-lg">
              Layanan
            </Link>
            <Link href="#benefit" className="text-gray-300 hover:text-white transition-all px-4 py-2 whitespace-nowrap hover:bg-white/5 rounded-lg">
              Benefit
            </Link>
            <Link href="/portfolio" className="text-[#c9a227] hover:text-white transition-all px-4 py-2 whitespace-nowrap hover:bg-white/5 rounded-lg">
              Portofolio
            </Link>
            <Link href="#testimoni" className="text-gray-300 hover:text-white transition-all px-4 py-2 whitespace-nowrap hover:bg-white/5 rounded-lg">
              Testimoni
            </Link>
          </nav>

          {/* CTA for sticky header */}
          <div className="flex-shrink-0">
            <Link
              href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 whitespace-nowrap"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
