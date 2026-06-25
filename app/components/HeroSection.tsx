import HeroContent from "./HeroContent";
import Header from "./Header";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full">
      <section className="relative overflow-hidden bg-black text-white min-h-[85vh] flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/bg.png" alt="Background" fill className="object-cover object-center" priority />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none bg-black/50 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/40 sm:to-transparent"
        />
      </div>

      {/* Header inside the section */}
      <div className="relative w-full z-20">
        <Header />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-8 md:pt-12 pb-20 flex-grow flex flex-col justify-start">
        <HeroContent />
      </div>

      {/* Bottom Partner Logos */}
      <div className="relative z-20 w-full px-4 sm:px-6 pb-6 mt-auto">
        <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl py-6 px-8 flex flex-wrap items-center justify-center gap-8 md:gap-14 shadow-xl border border-gray-100">
          <div className="relative h-12 sm:h-16 w-28 sm:w-36 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/logo/id-11134004-7rbkb-m8ek0v61x6z243.jpg" alt="Biogar" fill className="object-contain" />
          </div>
          <div className="relative h-12 sm:h-16 w-28 sm:w-36 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/logo/LOGO-Mega-Tuff-Polycarbonate.webp" alt="Mega Tuff" fill className="object-contain" />
          </div>
          <div className="relative h-12 sm:h-16 w-28 sm:w-36 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/logo/Lambang-UM.webp" alt="UM" fill className="object-contain" />
          </div>
          <div className="relative h-12 sm:h-16 w-28 sm:w-36 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/logo/DID2019014748.jpg" alt="Partner Logo" fill className="object-contain" />
          </div>
          <div className="relative h-12 sm:h-16 w-28 sm:w-36 opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
            <Image src="/logo/LOGO-Shera.webp" alt="Shera" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
