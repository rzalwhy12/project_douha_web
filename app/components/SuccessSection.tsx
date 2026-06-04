export default function SuccessSection() {
  return (
    <div className="bg-white px-4 py-4">
      <section id="benefit" className="relative bg-black text-white py-24 md:py-32 rounded-2xl overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('/foto-serah-terima/DWI.png')" }} 
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.95) 10%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 100%)"
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-center">
          {/* Content Block — Centered in container, text left-aligned */}
          <div className="max-w-2xl text-left w-full">
            {/* Subtitle */}
            <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-[0.15em] font-semibold mb-3">
              BAYANGKAN RUMAH IMPIAN ANDA TERWUJUD
            </p>

            {/* Headline */}
            <h2 
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-6 text-white"
              style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
            >
              PROSES PEMBANGUNAN LEBIH TENANG. RUMAH BERDIRI TANPA STRES DAN DRAMA.
            </h2>

            {/* Body */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl">
              Semua progres terlihat jelas tanpa Anda harus sering pulang. Dengan laporan proyek real-time, pekerjaan sesuai standar, dan biaya yang terukur sejak awal, rumah impian Anda akan terwujud dengan aman sementara Anda tetap bisa fokus bekerja tanpa cemas.
            </p>

            {/* CTA Button */}
            <a 
              href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer" 
              className="inline-block bg-[#c9a227] hover:bg-[#b08d1e] text-black font-bold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Wujudkan Rumah Impian Anda
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
