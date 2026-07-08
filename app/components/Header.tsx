"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/bangun-rumah", label: "Bangun Rumah" },
  { href: "/renovasi", label: "Renovasi" },
  { href: "/desain-rumah", label: "Desain Rumah" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-transparent text-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="inline-flex items-center" onClick={() => setMenuOpen(false)}>
            <img
              src="/logo/DOUHA KONSTRUKSI putih.png"
              alt="Douha Konstruksi"
              className="h-32 sm:h-38 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 text-base font-bold ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-gray-300 transition-all px-4 py-2 rounded-lg whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="https://wa.me/6285746478187"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E52020] hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 whitespace-nowrap"
          >
            Konsultasi Gratis
          </Link>

          {/* Hamburger Button — hanya di mobile */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8.5px]" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#0d2d5e]/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-white font-bold text-lg px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] flex-shrink-0" />
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
