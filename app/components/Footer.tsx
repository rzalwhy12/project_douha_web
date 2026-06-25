export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-16 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-12">
        
        {/* Left Side: Logo */}
        <div className="shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto mb-6 md:mb-0">
          <img 
            src="/logo/DOUHA KONSTRUKSI putih.png" 
            alt="Douha Konstruksi Logo" 
            className="w-32 md:w-40 object-contain"
          />
        </div>

        {/* Right Side: Horizontal Info & Links */}
        <div className="flex flex-col items-center md:items-end w-full gap-5">
          
          {/* Info Text (Horizontal / Menyamping) */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-gray-400 text-center md:text-right">
            <span><strong className="text-gray-300">Douha Konstruksi:</strong> Solusi Bangun Rumah dari Jauh Tanpa Ribet.</span>
            <span><strong className="text-gray-300">Lokasi Kantor:</strong> Jalan Metropol megah no 04, Sumbergempol, Tulungagung</span>
            <span><strong className="text-gray-300">Area layanan:</strong> Tulungagung – Kediri – Blitar – Trenggalek (diluar kota tersebut konsultasi GRATIS)</span>
            <span><strong className="text-gray-300">WhatsApp:</strong> 085746478187</span>
            <span><strong className="text-gray-300">Email:</strong> douhakonstrulsi@gmail.com</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2 mt-2">
            <a href="/portfolio" className="text-white font-bold text-sm tracking-wide hover:underline underline-offset-4 transition-all">Portfolio</a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a href="#layanan" className="text-white font-bold text-sm tracking-wide hover:underline underline-offset-4 transition-all">Layanan</a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a href="https://wa.me/6285746478187" className="text-white font-bold text-sm tracking-wide hover:underline underline-offset-4 transition-all" target="_blank" rel="noopener noreferrer">Kontak</a>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div className="mt-16 text-center flex flex-col gap-1 items-center justify-center text-[10px] sm:text-xs text-gray-600">
        <p>Copyright © {currentYear} Douha Konstruksi. All rights reserved.</p>
      </div>
    </footer>
  );
}
