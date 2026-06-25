import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center gap-6 max-w-2xl">
      {/* Headline */}
      <h1
        className="text-5xl sm:text-6xl lg:text-[72px] font-black uppercase leading-[1] tracking-tight"
        style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
      >
        BANGUN RUMAH<br/>
        <span className="text-[#FFC107]">DARI JAUH</span>{" "}
        TANPA RIBET
      </h1>

      {/* Sub-headline */}
      <div className="text-white text-base sm:text-lg leading-relaxed max-w-xl space-y-4 font-medium">
        <p>
          Kami membantu Anda dalam proses bangun rumah, renovasi,
          hingga desain rumah, tanpa Anda harus selalu hadir di lokasi.
        </p>
        <p>
          Semua dikerjakan dengan <strong>Sistem Pengawasan Real Time,
          Progress Pelaporan Project Jarak Jauh berbasis Teknologi
          serta Kontrak yang Jelas dan Aman</strong>, sehingga Anda tetap
          merasa tenang dan bisa memantau progres dari mana saja.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link
          href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#E52020] hover:bg-red-700 text-white font-bold text-[17px] transition-all duration-200"
        >
          Konsultasi Gratis Sekarang!
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#E52020] font-bold text-[17px] hover:bg-gray-100 transition-all duration-200"
        >
          Lihat Portofolio
        </Link>
      </div>
    </div>
  );
}
