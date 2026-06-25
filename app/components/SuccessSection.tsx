import Link from "next/link";
import Image from "next/image";

export default function SuccessSection() {
  return (
    <section id="langkah" className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        
        {/* Headline */}
        <h2 
          className="text-3xl sm:text-4xl md:text-[42px] font-black uppercase leading-[1.1] mb-16 text-[#113B7A]"
          style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
        >
          HANYA 3 LANGKAH SEDERHANA<br className="hidden sm:block" />
          UNTUK MEMULAI MEMBANGUN RUMAH:
        </h2>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-16">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-6">
              <Image src="/icon konsultasi.png" alt="Konsultasi Kebutuhan" fill className="object-contain" />
            </div>
            <h3 className="text-[#113B7A] text-xl font-bold mb-3">
              1. Konsultasi Kebutuhan Anda
            </h3>
            <p className="text-black text-base sm:text-[17px] leading-snug">
              Kami pelajari kebutuhan,<br className="hidden sm:block"/>
              konsep, dan lokasi.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-6">
              <Image src="/icon RAB.png" alt="RAB & Desain" fill className="object-contain" />
            </div>
            <h3 className="text-[#113B7A] text-xl font-bold mb-3">
              2. RAB & Desain Disusun<br className="hidden sm:block"/> dengan Jelas
            </h3>
            <p className="text-black text-base sm:text-[17px] leading-snug">
              Semua biaya dan gambar disetujui<br className="hidden sm:block"/>
              di awal.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-6">
              <Image src="/Icon pembangunan.png" alt="Pembangunan Dimulai" fill className="object-contain" />
            </div>
            <h3 className="text-[#113B7A] text-xl font-bold mb-3">
              3. Pembangunan Dimulai dan<br className="hidden sm:block"/> Kami Update Rutin
            </h3>
            <p className="text-black text-base sm:text-[17px] leading-snug">
              Laporan harian/weekly berupa<br className="hidden sm:block"/>
              foto & video. Anda bisa pantau<br className="hidden sm:block"/>
              dari mana saja.
            </p>
          </div>

        </div>

        {/* Benefits List */}
        <div className="text-[#113B7A] text-base sm:text-[17px] font-medium leading-relaxed mb-12 max-w-4xl mx-auto">
          <p>
            Pembayaran bertahap sesuai progress &bull; Kontrak kerja resmi &bull; Dokumentasi lengkap
          </p>
          <p>
            Laporan Real Time &bull; Garansi pekerjaan &bull; Tidak ada biaya tersembunyi
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 rounded-full bg-[#E52020] hover:bg-red-700 text-white font-bold text-[17px] transition-all duration-200"
        >
          Konsultasi Gratis Sekarang!
        </Link>
      </div>
    </section>
  );
}
