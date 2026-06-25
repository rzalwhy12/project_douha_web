import Link from "next/link";
import Image from "next/image";

export default function CTAStrong() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 flex items-center justify-center min-h-[60vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bg.png" 
          alt="CTA Background" 
          fill 
          className="object-cover object-center"
        />
        {/* White overlay */}
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* First CTA Block */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#113B7A] mb-8 leading-snug">
            Siap mulai bangun rumah?
          </h2>
          <Link
            href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full bg-[#E52020] hover:bg-red-700 text-white font-bold text-lg sm:text-[19px] transition-all duration-200"
          >
            Konsultasi Gratis Sekarang!
          </Link>
        </div>

        {/* Second CTA Block */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#113B7A] mb-8 leading-snug">
            Belum yakin? Lihat dulu hasil pekerjaan kami:
          </h2>
          <Link
            href="/portfolio"
            className="inline-block px-10 py-3.5 rounded-full bg-[#113B7A] hover:bg-blue-900 text-white font-bold text-lg sm:text-[19px] transition-all duration-200"
          >
            Lihat Portfolio Proyek
          </Link>
        </div>

      </div>
    </section>
  );
}
