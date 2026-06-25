"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const videos = [
  "/foto-video/IMG_2273.mp4",
  "/foto-video/IMG_2272.mp4",
  "/foto-video/IMG_2107.mp4",
];

const writtenTestimonialsLeft = [
  {
    text: "Pengerjaan sangat rapi dan sesuai dengan target waktu. Tim lapangan komunikatif dan profesional dalam mengatasi kendala.",
    name: "Universitas Negeri Malang",
    logo: "/logo/Lambang-UM.webp"
  },
  {
    text: "Sangat puas dengan kualitas bangunannya. Laporan harian sangat detail sehingga kami yang di luar kota tetap bisa mengontrol.",
    name: "PT. Mega Tuff",
    logo: "/logo/LOGO-Mega-Tuff-Polycarbonate.webp"
  }
];

const writtenTestimonialsRight = [
  {
    text: "RAB sangat transparan tanpa biaya tersembunyi. Semua kesepakatan dijalankan dengan baik, highly recommended!",
    name: "Shera Group",
    logo: "/logo/LOGO-Shera.webp"
  },
  {
    text: "Desain dan hasil jadinya sangat presisi. Sebagai pekerja migran, saya merasa sangat aman menitipkan proyek ke tim ini.",
    name: "Klien Personal (TKI)",
    logo: "/icon konsultasi.png" // Placeholder logo
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <section id="testimoni" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        
        <h2 
          className="text-3xl sm:text-4xl md:text-[42px] font-black uppercase leading-[1.1] mb-6 text-[#113B7A]"
          style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
        >
          KATA MEREKA TENTANG DOUHA KONSTRUKSI
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-16 max-w-2xl mx-auto">
          Lihat langsung pengalaman klien kami yang telah berhasil membangun rumah impiannya tanpa drama dan tanpa stres.
        </p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14">
          
          {/* Left Column - Written Testimonials (Hidden on small screens, shown on bottom) */}
          <div className="flex-1 space-y-6 hidden lg:flex lg:flex-col">
            {writtenTestimonialsLeft.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-left border border-gray-100 shadow-sm relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full p-2 shadow-sm border border-gray-100">
                    <Image src={item.logo} alt={item.name} fill className="object-contain p-1 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#113B7A]">{item.name}</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Center - iPhone Frame Container */}
          <div className="relative flex-shrink-0 w-[320px] h-[650px] bg-black rounded-[45px] border-[10px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-200">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 w-[120px] mx-auto rounded-b-[16px] z-30" />
            <video 
              ref={videoRef}
              src={videos[currentIndex]} 
              className="absolute inset-0 w-full h-full object-cover" 
              autoPlay loop muted playsInline 
            />
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-10" />
            
            <div className="absolute top-8 inset-x-3 flex gap-1.5 z-20">
              {videos.map((_, i) => (
                <div key={i} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className={`h-full bg-white transition-all duration-300 ${i === currentIndex ? 'w-full' : i < currentIndex ? 'w-full' : 'w-0'}`} />
                </div>
              ))}
            </div>

            <div className="absolute top-12 left-4 z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden flex items-center justify-center border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="text-left text-white drop-shadow-md">
                <p className="font-bold text-sm leading-tight">Testimoni Klien</p>
                <p className="text-xs opacity-90">Douha Konstruksi</p>
              </div>
            </div>

            <div className="absolute inset-0 z-20 flex">
              <div className="w-1/2 h-full cursor-pointer" onClick={handlePrev} aria-label="Video Sebelumnya" />
              <div className="w-1/2 h-full cursor-pointer" onClick={handleNext} aria-label="Video Selanjutnya" />
            </div>

            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10 flex flex-col justify-end p-6 text-white text-left pointer-events-none">
              <p className="font-medium text-sm leading-snug drop-shadow-md">
                "Hasilnya sangat memuaskan, dibangun tepat waktu. Terima kasih Douha!"
              </p>
            </div>
          </div>

          {/* Right Column - Written Testimonials */}
          <div className="flex-1 space-y-6 hidden lg:flex lg:flex-col">
            {writtenTestimonialsRight.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-left border border-gray-100 shadow-sm relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full p-2 shadow-sm border border-gray-100">
                    <Image src={item.logo} alt={item.name} fill className="object-contain p-1 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#113B7A]">{item.name}</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Mobile view for written testimonials */}
          <div className="w-full flex flex-col gap-6 lg:hidden mt-10">
            {[...writtenTestimonialsLeft, ...writtenTestimonialsRight].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-left border border-gray-100 shadow-sm relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full p-2 shadow-sm border border-gray-100">
                    <Image src={item.logo} alt={item.name} fill className="object-contain p-1 rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#113B7A]">{item.name}</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
