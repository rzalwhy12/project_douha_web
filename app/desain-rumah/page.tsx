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

export default function DesainRumah() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <StickyHeader />
      <AnnouncementBar />

      <div className="bg-[#113B7A] w-full relative z-20">
        <Header />
      </div>

      <main className="py-12 md:py-20 px-4 sm:px-6">
        {/* Poster / Pricelist Section 2.5 (Layanan Desain) */}
        <section className="max-w-6xl mx-auto mb-20 relative rounded-xl overflow-hidden shadow-2xl bg-[#E8E8E8]">
          {/* Background image covering the whole section with overlay */}
          <div className="absolute inset-0 z-0">
             <Image src="/bg.png" alt="Desain Background" fill className="object-cover opacity-20" />
             <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
          </div>

          <div className="relative z-10 p-6 sm:p-12">
            {/* Header / Logo */}
            <div className="flex flex-col items-center mb-10">
              <Image 
                src="/logo/DOUHA KONSTRUKSI.png" 
                alt="Douha Konstruksi Logo" 
                width={200} 
                height={80} 
                className="object-contain mb-6"
              />
              <h3 className="text-[#113B7A] text-2xl md:text-3xl font-black tracking-widest mb-2">PRICELIST</h3>
              <div className="bg-[#FFB800] px-8 py-3 shadow-lg transform -skew-x-6">
                <h2 className="text-[#113B7A] text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider transform skew-x-6">
                  LAYANAN DESAIN
                </h2>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card Basic */}
              <div className="bg-[#f0f4f8] rounded-3xl border-4 border-[#113B7A] overflow-hidden flex flex-col relative shadow-xl">
                 <div className="p-6 flex-grow">
                   <h3 className="text-center text-2xl font-black text-[#113B7A] mb-6">PAKET BASIC</h3>
                   <ul className="space-y-3 text-sm font-bold text-[#113B7A]">
                     <li className="flex gap-3"><CheckIcon/> Konsep</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Denah Rumah</li>
                     <li className="flex gap-3"><CheckIcon/> <div>Gambar Tampak Rumah <br/><span className="text-xs font-normal">(depan, samping, kiri, kanan, belakang)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> <div>Gambar Potongan Rumah <br/><span className="text-xs font-normal">(melintang dan memanjang)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana Pondasi Rumah</li>
                     <li className="flex gap-3"><CheckIcon/> <div>Visualisasi 3D Render Rumah Exterior <br/><span className="text-xs font-normal">(3 Tampilan Rumah)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> Revisi maksimal 3x</li>
                     <li className="flex gap-3"><CheckIcon/> Soft Copy File</li>
                     <li className="flex gap-3"><CrossIcon/> Hard Copy File</li>
                     <li className="flex gap-3"><CrossIcon/> Box Exclusive</li>
                     <li className="flex gap-3"><CrossIcon/> Gambar Rencana pola Lantai</li>
                     <li className="flex gap-3"><CrossIcon/> Gambar Rencana atap dan Plafond</li>
                     <li className="flex gap-3"><CrossIcon/> Gambar Rencana Titik Lampu</li>
                     <li className="flex gap-3"><CrossIcon/> Gambar Rencana Stop Kontak Lampu</li>
                     <li className="flex gap-3"><CrossIcon/> <div>Gambar Rencana Plumbung air bersih <br/> dan kotor</div></li>
                     <li className="flex gap-3"><CrossIcon/> Gambar Interior</li>
                     <li className="flex gap-3"><CrossIcon/> Video Exterior</li>
                     <li className="flex gap-3"><CrossIcon/> Video Interior</li>
                     <li className="flex gap-3"><CrossIcon/> Detail Pondasi</li>
                     <li className="flex gap-3"><CrossIcon/> Detail Pembesian</li>
                     <li className="flex gap-3"><CrossIcon/> Detail Kolom Rumah</li>
                     <li className="flex gap-3"><CrossIcon/> Detail Sloof rumah</li>
                     <li className="flex gap-3"><CrossIcon/> RAB (Rencana Anggaran Biaya)</li>
                   </ul>
                 </div>
                 <div className="bg-[#113B7A] p-6 text-center text-white mt-auto mx-4 mb-4 shadow-lg">
                   <p className="text-lg font-bold text-gray-400 relative inline-block">
                     50.000/m2
                     <span className="absolute inset-0 border-t-2 border-red-500 top-1/2 -rotate-12 w-full"></span>
                   </p>
                   <p className="text-3xl font-black text-[#FFB800]">25.000/m2</p>
                 </div>
              </div>

              {/* Card Standart */}
              <div className="bg-[#f0f4f8] rounded-3xl border-4 border-[#113B7A] overflow-hidden flex flex-col relative shadow-xl">
                 <div className="p-6 flex-grow">
                   <h3 className="text-center text-2xl font-black text-[#113B7A] mb-6">PAKET STANDART</h3>
                   <ul className="space-y-3 text-sm font-bold text-[#113B7A]">
                     <li className="flex gap-3"><CheckIcon/> Konsep</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Denah Rumah</li>
                     <li className="flex gap-3"><CheckIcon/> <div>Gambar Tampak Rumah <br/><span className="text-xs font-normal">(depan, samping, kiri, kanan, belakang)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> <div>Gambar Potongan Rumah <br/><span className="text-xs font-normal">(melintang dan memanjang)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana Pondasi Rumah</li>
                     <li className="flex gap-3"><CheckIcon/> <div>Visualisasi 3D Render Rumah Exterior <br/><span className="text-xs font-normal">(4 Tampilan Rumah)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> Revisi maksimal 4x</li>
                     <li className="flex gap-3"><CheckIcon/> Soft Copy File</li>
                     <li className="flex gap-3"><CheckIcon/> Hard Copy File</li>
                     <li className="flex gap-3"><CheckIcon/> Box Exclusive</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana pola Lantai</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana atap dan Plafond</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana Titik Lampu</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana Stop Kontak Lampu</li>
                     <li className="flex gap-3"><CheckIcon/> <div>Gambar Rencana Plumbung air bersih <br/> dan kotor</div></li>
                     <li className="flex gap-3"><CrossIcon/> Gambar Interior</li>
                     <li className="flex gap-3"><CrossIcon/> Video Exterior</li>
                     <li className="flex gap-3"><CrossIcon/> Video Interior</li>
                     <li className="flex gap-3"><CrossIcon/> Detail Pondasi</li>
                     <li className="flex gap-3"><CrossIcon/> Detail Pembesian</li>
                     <li className="flex gap-3"><CrossIcon/> Detail Kolom Rumah</li>
                     <li className="flex gap-3"><CrossIcon/> Detail Sloof rumah</li>
                     <li className="flex gap-3"><CrossIcon/> RAB (Rencana Anggaran Biaya)</li>
                   </ul>
                 </div>
                 <div className="bg-[#113B7A] p-6 text-center text-white mt-auto mx-4 mb-4 shadow-lg">
                   <p className="text-lg font-bold text-gray-400 relative inline-block">
                     70.000/m2
                     <span className="absolute inset-0 border-t-2 border-red-500 top-1/2 -rotate-12 w-full"></span>
                   </p>
                   <p className="text-3xl font-black text-[#FFB800]">35.000/m2</p>
                 </div>
              </div>

              {/* Card Premium */}
              <div className="bg-[#f0f4f8] rounded-3xl border-4 border-[#113B7A] overflow-hidden flex flex-col relative shadow-xl">
                 <div className="p-6 flex-grow">
                   <h3 className="text-center text-2xl font-black text-[#113B7A] mb-6">PAKET PREMIUM</h3>
                   <ul className="space-y-3 text-sm font-bold text-[#113B7A]">
                     <li className="flex gap-3"><CheckIcon/> Konsep</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Denah Rumah</li>
                     <li className="flex gap-3"><CheckIcon/> <div>Gambar Tampak Rumah <br/><span className="text-xs font-normal">(depan, samping, kiri, kanan, belakang)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> <div>Gambar Potongan Rumah <br/><span className="text-xs font-normal">(melintang dan memanjang)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana Pondasi Rumah</li>
                     <li className="flex gap-3"><CheckIcon/> <div>Visualisasi 3D Render Rumah Exterior <br/><span className="text-xs font-normal">(5 Tampilan Rumah)</span></div></li>
                     <li className="flex gap-3"><CheckIcon/> Revisi maksimal 5x</li>
                     <li className="flex gap-3"><CheckIcon/> Soft Copy File</li>
                     <li className="flex gap-3"><CheckIcon/> Hard Copy File</li>
                     <li className="flex gap-3"><CheckIcon/> Box Exclusive</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana pola Lantai</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana atap dan Plafond</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana Titik Lampu</li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Rencana Stop Kontak Lampu</li>
                     <li className="flex gap-3"><CheckIcon/> <div>Gambar Rencana Plumbung air bersih <br/> dan kotor</div></li>
                     <li className="flex gap-3"><CheckIcon/> Gambar Interior</li>
                     <li className="flex gap-3"><CheckIcon/> Video Exterior</li>
                     <li className="flex gap-3"><CheckIcon/> Video Interior</li>
                     <li className="flex gap-3"><CheckIcon/> Detail Pondasi</li>
                     <li className="flex gap-3"><CheckIcon/> Detail Pembesian</li>
                     <li className="flex gap-3"><CheckIcon/> Detail Kolom Rumah</li>
                     <li className="flex gap-3"><CheckIcon/> Detail Sloof rumah</li>
                     <li className="flex gap-3"><CheckIcon/> RAB (Rencana Anggaran Biaya)</li>
                   </ul>
                 </div>
                 <div className="bg-[#113B7A] p-6 text-center text-white mt-auto mx-4 mb-4 shadow-lg">
                   <p className="text-lg font-bold text-gray-400 relative inline-block">
                     100.000/m2
                     <span className="absolute inset-0 border-t-2 border-red-500 top-1/2 -rotate-12 w-full"></span>
                   </p>
                   <p className="text-3xl font-black text-[#FFB800]">45.000/m2</p>
                 </div>
              </div>
            </div>

            {/* Bottom Bar styling from the image */}
            <div className="mt-12 flex justify-center">
              <div className="flex h-3 w-64 md:w-96 shadow-md">
                <div className="w-2/3 bg-white" />
                <div className="w-1/3 bg-[#FFB800]" />
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section at bottom */}
        <section className="max-w-4xl mx-auto py-12 bg-[#E52020] text-center px-6 rounded-3xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
            Mulai Desain Rumah Anda Bersama Kami
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
