import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center gap-6 max-w-xl">
      {/* Headline */}
      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight"
        style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
      >
        BANGUN RUMAH IMPIANMU.{" "}
        <span className="text-red-500">DARI JAUH TANPA RIBET</span>{" "}
        DAN TERPERCAYA.
      </h1>

      {/* Sub-headline */}
      <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
        Jika Anda sedang mencari kontraktor yang bisa dipercaya dari jarak jauh,
        Anda tidak sendirian. Itu sulit — tapi kami bisa membantu.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Link
          href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ boxShadow: "0 4px 18px rgba(220,38,38,0.4)" }}
        >
          Konsultasi Gratis Sekarang
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-black transition-all duration-200"
        >
          Lihat Contoh Proyek
        </Link>
      </div>

      {/* Social proof / sub note */}
      <p className="text-gray-500 text-xs sm:text-sm mt-1">
        Berdasarkan pengalaman nyata membantu puluhan keluarga TKI & pekerja luar kota.
        <br />
        <span className="text-yellow-400 font-semibold">
          ★ Klien kami dari Malaysia, Arab Saudi, Taiwan & kota besar Indonesia.
        </span>
      </p>
    </div>
  );
}
