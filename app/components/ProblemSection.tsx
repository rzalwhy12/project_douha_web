import Link from "next/link";

export default function ProblemSection() {
  return (
    <section id="masalah" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black uppercase leading-tight mb-12 text-[#113B7A]" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
          KAMI TAHU APA YANG SERING<br className="hidden sm:block" />
          MEMBUAT ORANG TAKUT BANGUN RUMAH:
        </h2>

        {/* Two-column problem list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left mb-8 max-w-2xl mx-auto">
          {/* Left column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-3">
              <IconX />
              <p className="text-[#113B7A] text-base sm:text-lg leading-snug">
                Kontraktor atau tukang<br/>
                yang <strong className="font-bold">sulit dipercaya</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <IconX />
              <p className="text-[#113B7A] text-base sm:text-lg leading-snug">
                Biaya tiba-tiba <strong className="font-bold">membengkak</strong>
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-3">
              <IconX />
              <p className="text-[#113B7A] text-base sm:text-lg leading-snug">
                Hasil akhirnya<br/>
                <strong className="font-bold">tidak sesuai janji</strong>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <IconX />
              <p className="text-[#113B7A] text-base sm:text-lg leading-snug">
                Harus <strong className="font-bold">bolak-balik</strong><br/>
                pulang mengawasi
              </p>
            </div>
          </div>
        </div>

        {/* Center item */}
        <div className="flex justify-center items-start gap-3 mb-14 max-w-2xl mx-auto">
          <IconX />
          <p className="text-[#113B7A] text-base sm:text-lg leading-snug text-left">
            Risiko <strong className="font-bold">ditipu saat sedang bekerja di luar negeri</strong>
          </p>
        </div>

        {/* Closing tagline */}
        <div className="mb-10 text-[#113B7A]">
          <p className="text-base sm:text-lg mb-2">
            Kami percaya:
          </p>
          <p className="text-lg sm:text-[22px] leading-snug font-bold max-w-3xl mx-auto">
            Setiap keluarga berhak memiliki rumah yang dibangun dengan jujur dan transparan, tanpa drama dan tanpa stres.
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

function IconX() {
  return (
    <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-[#113B7A] text-white">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </span>
  );
}
