import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-transparent text-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="inline-flex items-center">
            <img
              src="/logo/DOUHA KONSTRUKSI putih.png"
              alt="Douha Konstruksi"
              className="h-32 sm:h-38 w-auto object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-4 text-base font-bold ml-auto">
          <Link href="#bangun-rumah" className="text-white hover:text-gray-300 transition-all px-4 py-2 rounded-lg whitespace-nowrap">
            Bangun Rumah
          </Link>
          <Link href="#renovasi" className="text-white hover:text-gray-300 transition-all px-4 py-2 rounded-lg whitespace-nowrap">
            Renovasi
          </Link>
          <Link href="#design-rumah" className="text-white hover:text-gray-300 transition-all px-4 py-2 rounded-lg whitespace-nowrap">
            Design Rumah
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex-shrink-0">
          <Link
            href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-[#E52020] hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 whitespace-nowrap"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </div>
    </header>
  );
}
