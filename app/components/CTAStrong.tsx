export default function CTAStrong() {
  return (
    <div className="bg-white px-4 py-4">
      <section id="contact" className="relative bg-black text-white py-24 md:py-32 rounded-2xl overflow-hidden">
        {/* Background Image with Heavy Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: "url('/foto-video/rumah 1.png')" }} 
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.5) 100%)"
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-center">
          {/* Content Block — Centered in container, but text left-aligned */}
          <div className="max-w-2xl text-left w-full">
            {/* Gold Badge Icon */}
            <div className="mb-6 inline-flex items-center justify-center w-20 h-20">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#c9a227]">
                <path d="M50 5 L58 13 L69 10 L73 21 L84 22 L83 34 L92 40 L86 50 L93 59 L83 63 L83 75 L71 74 L66 85 L55 81 L47 91 L39 83 L28 89 L24 78 L12 79 L16 68 L7 60 L14 51 L8 41 L18 36 L17 24 L28 23 L33 12 L43 16 L49 6 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3"/>
                <text x="50" y="48" fontSize="10" fill="currentColor" textAnchor="middle" fontWeight="bold" letterSpacing="1">DOUHA</text>
                <text x="50" y="60" fontSize="8" fill="currentColor" textAnchor="middle" fontWeight="bold" letterSpacing="1">KONSTRUKSI</text>
              </svg>
            </div>

            {/* Subtitle */}
            <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold mb-3">
              Mulai Langkah Pertama Anda
            </p>

            {/* Headline */}
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-6 text-white"
              style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
            >
              SIAP UNTUK MEMBANGUN RUMAH IMPIAN TANPA RASA KHAWATIR?
            </h2>

            {/* Body */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Dapatkan konsultasi gratis, penyusunan RAB transparan, dan desain awal yang sesuai dengan kebutuhan Anda. Bergabunglah dengan puluhan klien kami yang telah sukses membangun rumah idaman dari jauh secara aman.
            </p>

            {/* CTA Button */}
            <a 
              href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer" 
              className="inline-block bg-[#c9a227] hover:bg-[#b08d1e] text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Mulai Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
