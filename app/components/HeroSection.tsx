import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Header from "./Header";
import HeroVideoBackground from "./HeroVideoBackground";

export default function HeroSection() {
  return (
    <div className="bg-white px-4 pt-4 pb-0">
      <section
        className="relative overflow-hidden bg-black text-white rounded-2xl"
      >
      {/* Video background — cycles through 3 videos with crossfade */}
      <HeroVideoBackground />

      {/* Header inside the card */}
      <div className="relative">
        <Header />
      </div>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-10 md:pt-14 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <HeroContent />
          </div>
          {/* Right: Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroImage />
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative max-w-7xl mx-auto px-6 pb-4 pt-2">
        <div className="border-t border-white/10 pt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {[
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              label: "Legalitas PT",
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
              label: "Klien Dalam & Luar Negeri",
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
              label: "Laporan Progres Rutin",
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
              label: "Kontrak Aman",
            },
          ].map((badge, i, arr) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-red-500">{badge.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-wide whitespace-nowrap">{badge.label}</span>
              </div>
              {i < arr.length - 1 && (
                <span className="text-white/20 text-xs select-none">•</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA strip — inside the dark hero section */}
      <div className="relative max-w-7xl mx-auto px-4 pb-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* Card 1 — Most Popular */}
          <a
            href="#konsultasi"
            className="flex items-center gap-4 px-6 py-5 bg-white text-gray-900 border-2 border-white rounded-sm hover:bg-gray-100 transition-colors group"
          >
            <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-black text-red-600 mb-0.5 leading-none">
                PALING POPULER
              </p>
              <p className="font-black text-sm uppercase tracking-wide text-gray-900 leading-tight">
                KONSULTASI ONLINE GRATIS
              </p>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="#portfolio"
            className="flex items-center gap-4 px-6 py-5 bg-white text-gray-900 border-2 border-white rounded-sm hover:bg-gray-100 transition-colors group"
          >
            <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
              </svg>
            </div>
            <div>
              <p className="font-black text-sm uppercase tracking-wide text-gray-900 leading-tight">
                LIHAT PORTFOLIO PROYEK
              </p>
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="#contact"
            className="flex items-center gap-4 px-6 py-5 bg-white text-gray-900 border-2 border-white rounded-sm hover:bg-gray-100 transition-colors group"
          >
            <div className="w-9 h-9 bg-black flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <p className="font-black text-sm uppercase tracking-wide text-gray-900 leading-tight">
                HUBUNGI TIM KAMI
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
    </div>
  );
}
