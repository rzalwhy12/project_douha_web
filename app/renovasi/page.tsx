import StickyHeader from "../components/StickyHeader";
import Header from "../components/Header";
import AnnouncementBar from "../components/AnnouncementBar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#00A95D] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-5 h-5 text-[#E52020] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
);

export default function Renovasi() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <StickyHeader />
      <AnnouncementBar />

      {/* Header section with dark background for contrast since the original Header is transparent text-white */}
      <div className="bg-[#113B7A] w-full relative z-20">
        <Header />
      </div>

      <main className="py-12 md:py-20 px-4 sm:px-6">
        {/* Poster / Pricelist Section exactly like the design */}
        <section className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden mb-20 rounded-t-lg">
          
          {/* Top Half: Hero Image */}
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image 
              src="/bg.png" 
              alt="Renovasi Rumah" 
              fill 
              className="object-cover object-center"
            />
            
            {/* Badge top-left */}
            <div className="absolute top-6 left-6 z-10">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-br-2xl rounded-tl-2xl shadow-lg flex items-center gap-3 border-l-8 border-[#113B7A]">
                <div className="text-4xl text-[#113B7A] font-black italic">#</div>
                <div className="flex flex-col leading-none font-bold italic">
                  <span className="text-xl text-[#113B7A]">Bangun Rumah</span>
                  <span className="text-xl text-[#FFB800]">dari Jauh</span>
                  <span className="text-xs bg-[#FFB800] text-[#113B7A] px-1 mt-1 inline-block not-italic rounded-sm">Tanpa Ribet!</span>
                </div>
              </div>
            </div>

            {/* Gradient Overlay & Text at bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 pb-8 px-8 md:px-12">
              <h3 className="text-white text-lg md:text-xl font-bold tracking-widest mb-1">PRICELIST</h3>
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wide leading-tight">
                JASA BANGUN RUMAH <br /> 1 LANTAI
              </h2>
            </div>
          </div>

          {/* Bottom Half: White Background Content */}
          <div className="p-8 md:p-12">
            
            {/* Price & Logo row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b-2 border-gray-100 pb-8">
              <div>
                <p className="text-2xl font-black text-gray-900 mb-3">Start From:</p>
                <div className="bg-[#113B7A] text-white font-black text-3xl sm:text-4xl px-8 py-4 rounded-xl shadow-md inline-flex items-center">
                  <span className="text-[#FFB800]">Rp. 3.800.000</span> <span className="text-xl ml-2 font-bold"> / m2</span>
                </div>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <Image 
                  src="/logo/DOUHA KONSTRUKSI.png" 
                  alt="Douha Konstruksi Logo" 
                  width={150} 
                  height={50} 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-[#113B7A] text-xl sm:text-2xl font-bold mb-8 leading-snug">
              Mewujudkan rumah 1 lantai yang kokoh, fungsional dan nyaman sesuai keinginan anda. sudah termasuk :
            </p>

            {/* Grid of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Manajemen proyek",
                "Pengawasan teknis",
                "Tenaga Kerja",
                "Standart mutu dan pekerjaan",
                "Bahan Bangunan"
              ].map((item, idx) => (
                <div key={idx} className="bg-[#113B7A] text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center shadow-sm">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </div>

            {/* Target Audience */}
            <p className="text-[#113B7A] text-lg md:text-xl mb-8 font-medium">
              Cocok untuk : Rumah tinggal keluarga, Rumah pensiun, dan Rumah orang tua dll
            </p>

            {/* Disclaimer */}
            <p className="text-[#113B7A] text-sm md:text-base font-bold italic opacity-80">
              *Harga dapat berubah sesuai spesifikasi material, desain rumah, dan kebutuhan teknis bangunan
            </p>
          </div>
        </section>

        {/* Poster / Pricelist Section 2 (2 Lantai) */}
        <section className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden mb-20 rounded-t-lg">
          
          {/* Top Half: Hero Image */}
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image 
              src="/bg.png" 
              alt="Bangun Rumah 2 Lantai" 
              fill 
              className="object-cover object-center"
            />
            
            {/* Badge top-left */}
            <div className="absolute top-6 left-6 z-10">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-br-2xl rounded-tl-2xl shadow-lg flex items-center gap-3 border-l-8 border-[#113B7A]">
                <div className="text-4xl text-[#113B7A] font-black italic">#</div>
                <div className="flex flex-col leading-none font-bold italic">
                  <span className="text-xl text-[#113B7A]">Bangun Rumah</span>
                  <span className="text-xl text-[#FFB800]">dari Jauh</span>
                  <span className="text-xs bg-[#FFB800] text-[#113B7A] px-1 mt-1 inline-block not-italic rounded-sm">Tanpa Ribet!</span>
                </div>
              </div>
            </div>

            {/* Gradient Overlay & Text at bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 pb-8 px-8 md:px-12">
              <h3 className="text-white text-lg md:text-xl font-bold tracking-widest mb-1">PRICELIST</h3>
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wide leading-tight">
                JASA BANGUN RUMAH <br /> 2 LANTAI
              </h2>
            </div>
          </div>

          {/* Bottom Half: White Background Content */}
          <div className="p-8 md:p-12">
            
            {/* Price & Logo row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 border-b-2 border-gray-100 pb-8">
              <div>
                <p className="text-2xl font-black text-gray-900 mb-3">Start From:</p>
                <div className="bg-[#113B7A] text-white font-black text-3xl sm:text-4xl px-8 py-4 rounded-xl shadow-md inline-flex items-center">
                  <span className="text-[#FFB800]">Rp. 4.500.000</span> <span className="text-xl ml-2 font-bold"> / m2</span>
                </div>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <Image 
                  src="/logo/DOUHA KONSTRUKSI.png" 
                  alt="Douha Konstruksi Logo" 
                  width={150} 
                  height={50} 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-[#113B7A] text-xl sm:text-2xl font-bold mb-8 leading-snug">
              Pembangunan rumah bertingkat dengan perhitungan struktur yang matang dan pengawasan ketat.
            </p>

            {/* Grid of features */}
            <div className="flex flex-col gap-4 mb-10">
              {[
                "Perhitungan struktur lebih detail",
                "Kontrol kualitas tiap tahapan"
              ].map((item, idx) => (
                <div key={idx} className="bg-[#113B7A] text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center shadow-sm w-fit">
                  <div className="w-2 h-2 bg-white rounded-full mr-4 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </div>

            {/* Target Audience */}
            <p className="text-[#113B7A] text-lg md:text-xl mb-8 font-medium">
              Cocok untuk lahan terbatas
            </p>

            {/* Disclaimer */}
            <p className="text-[#113B7A] text-sm md:text-base font-bold italic opacity-80">
              *Penyesuaian harga bergantung pada struktur bangunan, tingkat kesulitan pekerjaan, dan spesifikasi material.
            </p>
          </div>
        </section>

        {/* Poster / Pricelist Section 3 (Renovasi) */}
        <section className="max-w-4xl mx-auto bg-white shadow-2xl overflow-hidden mb-20 rounded-t-lg">
          
          {/* Top Half: Hero Image */}
          <div className="relative h-[400px] md:h-[500px] w-full">
            <Image 
              src="/bg.png" 
              alt="Renovasi Rumah" 
              fill 
              className="object-cover object-center"
            />
            
            {/* Badge top-left */}
            <div className="absolute top-6 left-6 z-10">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-br-2xl rounded-tl-2xl shadow-lg flex items-center gap-3 border-l-8 border-[#113B7A]">
                <div className="text-4xl text-[#113B7A] font-black italic">#</div>
                <div className="flex flex-col leading-none font-bold italic">
                  <span className="text-xl text-[#113B7A]">Bangun Rumah</span>
                  <span className="text-xl text-[#FFB800]">dari Jauh</span>
                  <span className="text-xs bg-[#FFB800] text-[#113B7A] px-1 mt-1 inline-block not-italic rounded-sm">Tanpa Ribet!</span>
                </div>
              </div>
            </div>

            {/* Gradient Overlay & Text at bottom */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 pb-8 px-8 md:px-12">
              <h3 className="text-white text-lg md:text-xl font-bold tracking-widest mb-1">PRICELIST</h3>
              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wide leading-tight">
                JASA RENOVASI RUMAH
              </h2>
            </div>
          </div>

          {/* Bottom Half: White Background Content */}
          <div className="p-8 md:p-12">
            
            {/* Price & Logo row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6 border-b-2 border-gray-100 pb-8">
              <div>
                <p className="text-2xl font-black text-gray-900 mb-3">Start From:</p>
                <div className="bg-[#113B7A] text-white font-black text-3xl sm:text-4xl px-8 py-4 rounded-xl shadow-md inline-block">
                  <span className="text-[#FFB800] uppercase">Sesuai RAB</span>
                </div>
              </div>
              <div className="flex-shrink-0 mt-4 md:mt-0">
                <Image 
                  src="/logo/DOUHA KONSTRUKSI.png" 
                  alt="Douha Konstruksi Logo" 
                  width={150} 
                  height={50} 
                  className="object-contain"
                />
              </div>
            </div>

            {/* Description */}
            <p className="text-[#113B7A] text-xl sm:text-2xl font-bold mb-6 leading-snug">
              Menyesuaikan RAB dan tingkat kerumitan renovasi
            </p>

            <p className="text-[#113B7A] text-lg sm:text-xl font-medium mb-8 leading-snug">
              Memperbaiki, mengembangkan, atau menata ulang rumah lama agar lebih aman, nyaman, dan sesuai kebutuhan baru.
            </p>

            {/* Types of Renovation */}
            <h4 className="text-[#113B7A] text-xl font-bold mb-4">Jenis Renovasi:</h4>
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                "Renovasi ringan",
                "Renovasi sebagian",
                "Renovasi total"
              ].map((item, idx) => (
                <div key={idx} className="bg-[#113B7A] text-white px-6 py-3 rounded-xl font-bold text-lg flex items-center shadow-sm w-fit">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-[#113B7A] text-sm md:text-base font-bold italic opacity-80">
              *Estimasi harga wajib melalui survey lapangan dan analisa teknis.
            </p>
          </div>
        </section>

        {/* CTA Section at bottom */}
        <section className="max-w-4xl mx-auto py-12 bg-[#E52020] text-center px-6 rounded-3xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
            Mulai Renovasi Rumah Anda Bersama Kami
          </h2>
          <Link
            href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-white text-[#E52020] hover:bg-gray-100 font-black text-xl transition-all shadow-md"
          >
            Konsultasi Gratis Sekarang
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}
