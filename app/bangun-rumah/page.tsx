import StickyHeader from "../components/StickyHeader";
import Header from "../components/Header";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import ProdukSection from "../components/ProdukSection";
import Link from "next/link";
import Image from "next/image";

export default function BangunRumah() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <StickyHeader />
      <AnnouncementBar />

      {/* 1. Hero Section */}
      <section className="relative bg-[#113B7A] text-white overflow-hidden flex flex-col pt-12 md:pt-20 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0">
          <Image src="/bg.png" alt="Bangun Rumah" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#113B7A] to-[#113B7A]/80" />
        </div>
        
        {/* Navbar inside Hero */}
        <div className="relative w-full z-20 mb-10 md:mb-16">
          <Header />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex-grow">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-6 leading-tight" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
              Jasa Bangun Rumah Profesional
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed font-medium">
              Bangun Rumah dari Jauh Tanpa Ribet. Mewujudkan rumah 1 lantai atau 2 lantai impian Anda dengan sistem yang transparan, rapi, dan menenangkan.
            </p>
            <Link
              href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full bg-[#E52020] hover:bg-red-700 text-white font-bold text-[18px] sm:text-xl transition-all duration-200 shadow-xl"
            >
              Konsultasi Gratis Sekarang
            </Link>
          </div>
        </div>
      </section>

      <ProdukSection />


      {/* 4. Langkah Mudah */}
      <section className="py-20 md:py-32 bg-white flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden rounded-sm border border-gray-100">
            
            {/* Left Column (Images) */}
            <div className="w-full md:w-1/2 flex flex-col">
              {/* Top Image (Blueprint) */}
              <div className="relative h-64 sm:h-80 md:h-[60%] w-full bg-gray-200">
                <Image 
                  src="/bg.png" 
                  alt="Langkah Mudah" 
                  fill 
                  className="object-cover"
                />
              </div>
              {/* Bottom Image / Graphic */}
              <div className="relative h-48 sm:h-64 md:h-[40%] w-full bg-[#0b488f] flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="flex items-center justify-center gap-3 font-black italic">
                    <span className="text-6xl text-yellow-400">#</span>
                    <div className="flex flex-col items-start leading-none uppercase" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
                      <span className="text-3xl text-white outline-text">Bangun Rumah</span>
                      <span className="text-3xl text-yellow-400 outline-text">dari Jauh</span>
                      <span className="text-lg bg-yellow-400 text-[#0b488f] px-2 py-1 mt-1 rounded-sm not-italic">Tanpa Ribet!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Content) */}
            <div className="w-full md:w-1/2 p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white">
              <div className="mb-12">
                <h2 className="text-5xl sm:text-6xl font-black text-[#113B7A] uppercase leading-tight mb-2">
                  LANGKAH <br/> MUDAH
                </h2>
                <p className="text-xl sm:text-2xl font-bold text-[#113B7A]">
                  mewujudkan rumah anda
                </p>
              </div>

              <div className="flex flex-col gap-6 mb-16">
                {[
                  "Konsultasi Gratis",
                  "Survey lokasi",
                  "Konsep dan Design Rumah",
                  "Pembangunan",
                  "Serah Terima"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-10 h-10 shrink-0 bg-[#113B7A] text-white flex items-center justify-center font-bold text-xl rounded-sm">
                      {i + 1}
                    </div>
                    <span className="font-bold text-[#113B7A] text-lg sm:text-xl">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <div className="relative w-48 h-12 mb-4">
                  <Image 
                    src="/logo/DOUHA KONSTRUKSI.png" 
                    alt="Douha Konstruksi" 
                    fill 
                    className="object-contain object-left"
                  />
                </div>
                <div className="flex h-1.5 w-64">
                  <div className="w-2/3 bg-[#113B7A]" />
                  <div className="w-1/3 bg-[#FFB800]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Kenapa Harus Kami */}
      <section className="relative py-20 md:py-32 bg-[#2d2d2d] overflow-hidden flex flex-col justify-center min-h-screen">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/bg.png" 
            alt="Interior" 
            fill 
            className="object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 flex flex-col items-center md:items-start">
          
          {/* Top Logo */}
          <div className="w-full flex justify-center mb-16 md:mb-24">
            <Image 
              src="/logo/DOUHA KONSTRUKSI putih.png" 
              alt="Douha Konstruksi Logo" 
              width={220} 
              height={90} 
              className="object-contain drop-shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-4xl text-left w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 uppercase leading-tight drop-shadow-md">
              KENAPA <br /> HARUS KAMI ?
            </h2>
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 drop-shadow-md">
              Douha Konstruksi lahir dari realita :
            </h3>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium drop-shadow-sm">
              Banyak pekerja dari luar kota / luar negeri dan pekerja sibuk gagal bangun rumah karena kurangnya perencanaan sebelum pembangunan, tidak bisa mengawasi pembangunan rumahnya serta trauma pembangunan rumah / renovasi tidak sesuai keinginan.<br className="hidden md:block"/>
              Value utama kami antara lain :
            </p>

            {/* Values Box */}
            <div className="border-2 border-white rounded-3xl p-8 sm:p-10 md:p-12 mb-16 shadow-2xl backdrop-blur-md bg-white/10 w-full sm:w-auto inline-block">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-white font-bold text-lg sm:text-xl">
                <div>1. Sistem yang rapi</div>
                <div>3. Komunikasi Tenang dan aktif</div>
                <div>2. Transparansi</div>
                <div>4. Tanggung jawab Hasil</div>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="w-full flex justify-end">
            <div className="flex h-2.5 w-64 md:w-80 shadow-lg">
              <div className="w-2/3 bg-[#113B7A]" />
              <div className="w-1/3 bg-[#FFB800]" />
            </div>
          </div>

        </div>
      </section>

      {/* 6. Transparan Section */}
      <section className="relative pt-20 bg-[#f4f6f8] min-h-screen flex flex-col justify-between">
        
        <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 flex-1 flex flex-col">
          {/* Top Logo */}
          <div className="w-full flex justify-center mb-16 md:mb-24">
            <Image 
              src="/logo/DOUHA KONSTRUKSI.png" 
              alt="Douha Konstruksi Logo" 
              width={220} 
              height={90} 
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="max-w-2xl text-left relative z-10 mb-10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#113B7A] mb-4">
              TRANSPARAN
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#113B7A] mb-12">
              Kepercayaan lahir dari keterbukaan. Meski jauh, Anda tetap tahu apa yang terjadi.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#113B7A] mb-2">
                Implementasi:
              </h3>
              <div className="flex h-1.5 w-40 mb-6">
                <div className="w-2/3 bg-[#113B7A]" />
                <div className="w-1/3 bg-[#FFB800]" />
              </div>
            </div>

            <ul className="space-y-2 text-lg sm:text-xl text-[#113B7A] font-medium">
              <li>1. Memberikan Update foto & video progress pembangunan ataupun pekerjaan</li>
              <li>2. Ada Laporan mingguan pekerjaan</li>
              <li>3. Komunikasi terbuka via WhatsApp ataupun video call</li>
            </ul>
          </div>
        </div>

        {/* Bottom Image Placeholder */}
        <div className="relative w-full h-72 sm:h-96 md:h-[500px] mt-auto border-t-8 border-[#333]">
          <Image 
            src="/bg.png" 
            alt="Transparan - Client Monitoring" 
            fill 
            className="object-cover object-bottom opacity-50 grayscale"
          />
        </div>
      </section>

      {/* 7. Komunikasi Tenang & Aktif Section */}
      <section className="relative py-20 bg-white min-h-screen flex flex-col justify-center">
        {/* Top Logo */}
        <div className="w-full flex justify-center mb-16 md:mb-20">
          <Image 
            src="/logo/DOUHA KONSTRUKSI.png" 
            alt="Douha Konstruksi Logo" 
            width={220} 
            height={90} 
            className="object-contain"
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column (Text Content) */}
          <div className="w-full md:w-1/2 flex flex-col text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#113B7A] mb-4 uppercase leading-tight">
              KOMUNIKASI TENANG <br/> & AKTIF
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#113B7A] mb-12">
              Anda tidak perlu mengejar informasi. Bangun rumah seharusnya menenangkan, bukan menguras pikiran
            </p>

            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#113B7A] mb-2">
                Implementasi:
              </h3>
              <div className="flex h-1.5 w-40 mb-6">
                <div className="w-2/3 bg-[#113B7A]" />
                <div className="w-1/3 bg-[#FFB800]" />
              </div>
            </div>

            <ul className="space-y-4 text-lg sm:text-xl text-[#113B7A] font-medium">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>PIC dari kami khusus untuk anda jadi anda tidak perlu merasa dilempar kemana mana saat komunikasi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>Memberikan Jadwal laporan tetap</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span>Anda akan kami berikan Penjelasan teknis yang disederhanakan sehingga mudah dipahami</span>
              </li>
            </ul>
          </div>

          {/* Right Column (Image Placeholder) */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-50">
            <Image 
              src="/bg.png" 
              alt="Komunikasi - Blueprint" 
              fill 
              className="object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* 8. Tanggung Jawab Hasil Section */}
      <section className="relative py-20 bg-[#113B7A] min-h-screen flex flex-col justify-center">
        {/* Top Logo */}
        <div className="w-full flex justify-center mb-16 md:mb-20">
          <Image 
            src="/logo/DOUHA KONSTRUKSI putih.png" 
            alt="Douha Konstruksi Logo" 
            width={220} 
            height={90} 
            className="object-contain"
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column (Image Placeholder) */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <Image 
              src="/bg.png" 
              alt="Tanggung Jawab Hasil - Worker" 
              fill 
              className="object-cover object-center opacity-90"
            />
          </div>

          {/* Right Column (Text Content) */}
          <div className="w-full md:w-1/2 flex flex-col text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 uppercase leading-tight">
              TANGGUNG JAWAB HASIL
            </h2>
            <p className="text-lg sm:text-xl font-bold text-white mb-12">
              kami bertanggung jawab pada proses dan hasil akhir. <br/> Rumah Anda adalah amanah kami
            </p>

            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Implementasi:
              </h3>
              <div className="flex h-1.5 w-40 mb-6">
                <div className="w-2/3 bg-white" />
                <div className="w-1/3 bg-[#FFB800]" />
              </div>
            </div>

            <ul className="space-y-4 text-lg sm:text-xl text-white font-medium">
              <li className="flex items-start gap-2">
                <span className="font-bold">1.</span>
                <span>Kami mengawasi dan Kontroling kualitas internal pembangunan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">2.</span>
                <span>Serah terima sesuai jadwal dan bertahap sesuai dengan progress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">3.</span>
                <span>Kami Memberikan Garansi pekerjaan setelah pembangunan</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="py-24 bg-[#E52020] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white mb-8 leading-tight" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
            Siap Bangun Rumah Impian Anda Sekarang?
          </h2>
          <Link
            href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-white text-[#E52020] hover:bg-gray-100 font-black text-xl transition-all shadow-xl"
          >
            Hubungi Kami via WhatsApp
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
