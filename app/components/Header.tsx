import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-transparent text-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">

        {/* Logo — styled as white speech-bubble card */}
        <div className="flex-shrink-0">
          <div
            className="relative bg-white text-black px-3 py-2 rounded-md inline-flex flex-col items-center leading-none"
            style={{ minWidth: 64 }}
          >
            <img
              src="/logo/DOUHA%20KONSTRUKSI.png"
              alt="Douha Konstruksi"
              className="h-8 w-auto object-contain"
            />
            {/* Speech-bubble tail */}
            <span
              className="absolute -bottom-2 left-4 w-0 h-0"
              style={{
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "8px solid white",
              }}
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold ml-auto">
          <Link href="#masalah" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg whitespace-nowrap">
            Masalah
          </Link>
          <Link href="#kelebihan" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg whitespace-nowrap">
            Kelebihan
          </Link>
          <Link href="#layanan" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg whitespace-nowrap">
            Layanan
          </Link>
          <Link href="#benefit" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg whitespace-nowrap">
            Benefit
          </Link>
          <Link href="#testimoni" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all px-4 py-2 rounded-lg whitespace-nowrap">
            Testimoni
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Link
            href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 whitespace-nowrap"
            style={{ boxShadow: "0 4px 14px rgba(220,38,38,0.4)" }}
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
