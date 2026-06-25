import Link from "next/link";
import Image from "next/image";
import HeroVideoBackground from "./HeroVideoBackground";

export default function GuideSection() {
  const listItems = [
    "Berpengalaman",
    "Sistem kerja profesional",
    "Menangani klien dari dalam kota, luar kota & luar negeri serta pekerja sibuk",
    "Tim ahli & legalitas PT yang terpercaya",
  ];

  return (
    <section className="relative overflow-hidden min-h-[80vh] py-16 md:py-24 flex items-center">
      {/* Background Video Component */}
      <div className="absolute inset-0 z-0">
        <HeroVideoBackground />
        {/* Blue overlay to maintain the Guide section theme */}
        <div className="absolute inset-0 bg-[#164380]/60" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col items-center">
        {/* Paragraphs */}
        <div className="text-white text-base sm:text-xl md:text-[22px] leading-snug font-medium mb-12 text-left sm:text-center space-y-6 w-full">
          <p>
            Kami memahami betapa beratnya membangun rumah dari jauh.<br className="hidden sm:block"/>
            Klien kami banyak yang bekerja sebagai <strong className="font-bold">TKI, pegawai sibuk,</strong><br className="hidden sm:block"/>
            <strong className="font-bold">dan pengusaha</strong>, mereka tidak punya waktu untuk mengurus<br className="hidden sm:block"/>
            detail kecil pembangunan.
          </p>
          <p>
            Inilah alasan mereka <strong className="font-bold">memilih Douha Konstruksi:</strong>
          </p>
        </div>

        {/* 2-Column List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-3xl mb-6">
          {listItems.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <IconCheck />
              <p className="text-white font-bold text-base sm:text-lg leading-tight pt-1">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Center Item */}
        <div className="flex items-start gap-4 mb-16 w-full max-w-3xl md:justify-center">
          <IconCheck />
          <p className="text-white font-bold text-base sm:text-lg leading-tight pt-1">
            Portfolio project yang nyata
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-[#E52020] hover:bg-red-700 text-white font-bold text-[18px] sm:text-xl transition-all duration-200"
        >
          Konsultasi Gratis Sekarang!
        </Link>
      </div>
    </section>
  );
}

function IconCheck() {
  return (
    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#164380]">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </span>
  );
}
