"use client";

import { useState, useRef, useEffect } from "react";

const videos = [
  "https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/testimoni/ADS_MBAK_DWI__MARET___1_.mp4",
  "https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/testimoni/ANDROMEDA_GIANTAMA__1_.mp4",
  "https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/testimoni/DOUHA_KONSTRUKSI__MBAK_KHULUT___1_.mp4",
  "https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/testimoni/MBAK_SOVIA_KETANON_TULUNGAGUNG__1_.mp4",
  "https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/testimoni/PAK_SUGENG__1_.mp4",
  "https://backendlessappcontent.com/B19F51F1-260E-4E0F-9441-99C1FC08FCA0/80E839A6-433C-46EC-BF7D-1C1598A913EC/files/testimoni/snaptik_7573184715692199189_v3.mp4",
];

const videoClients = [
  { name: "Dwi Sulistyoningsih", city: "Rejoagung, Tulungagung" },
  { name: "drg. Berlian Giantama", city: "Tulungagung" },
  { name: "Khulut Vitaloka", city: "Rejotangan, Tulungagung" },
  { name: "Sovia & Suami", city: "Ketanon, Tulungagung" },
  { name: "Pak Sugeng", city: "Kediri" },
  { name: "Anang Sugiarto", city: "Tulungagung" },
];

const writtenTestimonialsLeft = [
  {
    text: "Telah merencanakan pembangunan rumah sejak setahun lalu. Karena sibuk bekerja dan tidak bisa memantau langsung, saya sempat khawatir. Namun sangat puas dengan Douha Konstruksi karena konsultasi mudah, progres selalu diupdate, dan desain selesai cepat sesuai ekspektasi.",
    name: "Dwi Sulistyoningsih",
    city: "Tulungagung (Desa Rejoagung)"
  },
  {
    text: "Untuk klinik gigi, saya ingin konsep hangat bernuansa terracotta. Memilih Douha karena fast response dan portofolio sangat rapi. Selain mengutamakan keinginan pelanggan, harganya paling terjangkau dibanding penyedia jasa lain. Sangat puas!",
    name: "drg. Berlian Giantama",
    city: "Tulungagung"
  },
  {
    text: "Khawatir merenovasi rumah karena akan tinggal di Taiwan. Lewat TikTok saya menemukan Douha Konstruksi. Sangat terbantu dengan kemudahan berdiskusi dan merevisi desain secara langsung, sehingga konsep matang sebelum saya berangkat.",
    name: "Khulut Vitaloka",
    city: "Tulungagung (Kec. Rejotangan / Kalidawir)"
  }
];

const writtenTestimonialsRight = [
  {
    text: "Sangat terbantu layanan Douha Konstruksi yang memudahkan komunikasi jarak jauh (Korea - Tulungagung). Update progres lancar berkat koordinasi baik, respons cepat, serta bantuan keluarga di rumah. Rumah impian terwujud tanpa kendala.",
    name: "Anang Sugiarto",
    city: "Tulungagung (Bekerja di Korea)"
  },
  {
    text: "Sebagai perantau yang tidak bisa memantau proyek setiap hari, kami sangat terbantu transparansi Douha Konstruksi. Lewat dokumentasi harian, kami bisa mengoreksi langsung bagian yang kurang sesuai. Rumah pertama selesai dengan baik.",
    name: "Sovia & Suami",
    city: "Ketanon, Tulungagung"
  },
  {
    text: "Mewakili anak yang membangun dari jauh, saya sangat puas dengan kualitas pengerjaan. Segala perencanaan dieksekusi dengan baik. Pembangunan lancar, tidak ribet, dan selalu mengerjakan setiap permintaan dengan penuh tanggung jawab.",
    name: "Pak Sugeng",
    city: "Kediri"
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [needsTap, setNeedsTap] = useState(false); // fallback tap-to-play mobile
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const preloadRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextIndex = (currentIndex + 1) % videos.length;
  const prevIndex = (currentIndex - 1 + videos.length) % videos.length;

  // Paksa set muted via DOM (fix React bug dengan muted attribute)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, [currentIndex]);

  // IntersectionObserver — threshold 0.1 agar mobile lebih mudah trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting && videoRef.current) {
          videoRef.current.pause();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Play saat visible — paksa muted via DOM sebelum play() untuk mobile
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVisible) return;

    video.muted = true; // WAJIB sebelum play() di mobile
    video.currentTime = 0;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setNeedsTap(false))
        .catch(() => {
          // Autoplay diblokir browser (umum di mobile) — tampilkan tombol play
          setNeedsTap(true);
          setIsLoading(false);
        });
    }
  }, [currentIndex, isVisible]);

  const handleTapToPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().then(() => setNeedsTap(false)).catch(() => {});
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (videoRef.current) videoRef.current.muted = newMuted;
  };

  const handleNext = () => {
    setIsLoading(true);
    setNeedsTap(false);
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setIsLoading(true);
    setNeedsTap(false);
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section ref={sectionRef} id="testimoni" className="bg-white py-20 md:py-28">
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
                  <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center font-bold text-[#113B7A] text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#113B7A] leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.city}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
            ))}
          </div>

          {/* Center Column - Video Player & Controls */}
          <div className="flex flex-col items-center gap-6">
            {/* iPhone Frame Container */}
            <div className="relative flex-shrink-0 w-[320px] h-[650px] bg-black rounded-[45px] border-[10px] border-gray-900 shadow-2xl overflow-hidden ring-4 ring-gray-200">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 w-[120px] mx-auto rounded-b-[16px] z-30" />

            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 z-40 flex items-center justify-center bg-black/60">
                <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white animate-spin" />
              </div>
            )}

            {/* Video aktif — autoPlay + muted wajib untuk mobile */}
            <video
              ref={videoRef}
              key={currentIndex}
              src={videos[currentIndex]}
              className="absolute inset-0 w-full h-full object-cover"
              preload="auto"
              autoPlay
              loop
              muted
              playsInline
              onCanPlay={() => setIsLoading(false)}
              onWaiting={() => setIsLoading(true)}
            />

            {/* Hidden preloader next video */}
            <video
              key={`pre-next-${nextIndex}`}
              src={videos[nextIndex]}
              preload="auto"
              muted
              playsInline
              className="hidden"
              ref={(el) => { preloadRefs.current[0] = el; }}
            />

            {/* Tap to Play overlay — muncul jika autoplay diblokir mobile */}
            {needsTap && (
              <div
                className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/50 cursor-pointer"
                onClick={handleTapToPlay}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <p className="text-white text-sm font-bold">Tap untuk memutar</p>
              </div>
            )}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-black/60 to-transparent z-10" />

            <div className="absolute top-12 left-4 z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-500 overflow-hidden flex items-center justify-center border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="text-left text-white drop-shadow-md">
                <p className="font-bold text-sm leading-tight">{videoClients[currentIndex].name}</p>
                <p className="text-xs opacity-90">{videoClients[currentIndex].city}</p>
              </div>
            </div>

            <div className="absolute inset-0 z-20 flex">
              <div className="w-1/2 h-full cursor-pointer" onClick={handlePrev} aria-label="Video Sebelumnya" />
              <div className="w-1/2 h-full cursor-pointer" onClick={handleNext} aria-label="Video Selanjutnya" />
            </div>

            {/* Mute/Unmute Button */}
            <button 
              onClick={toggleMute}
              className="absolute bottom-6 right-6 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              {isMuted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              )}
            </button>

            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 flex flex-col justify-end p-6 pr-20 text-white text-left pointer-events-none">
              <p className="font-medium text-xs sm:text-sm leading-relaxed drop-shadow-md line-clamp-4">
                "{[...writtenTestimonialsLeft, ...writtenTestimonialsRight][currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Navigation Controls Below iPhone Frame */}
          <div className="flex flex-col items-center gap-4 w-[320px]">
            {/* Progress Bars */}
            <div className="flex gap-2 w-full px-2">
              {videos.map((_, i) => (
                <div key={i} className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden cursor-pointer" onClick={() => setCurrentIndex(i)}>
                  <div className={`h-full bg-[#113B7A] transition-all duration-300 ${i === currentIndex ? 'w-full' : i < currentIndex ? 'w-full' : 'w-0'}`} />
                </div>
              ))}
            </div>

            {/* Prev/Next Buttons Row */}
            <div className="flex justify-between items-center w-full px-2">
              <button 
                onClick={handlePrev}
                className="flex items-center gap-2 text-[#113B7A] hover:text-[#FFB800] font-bold text-sm md:text-base transition-colors bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                Sebelumnya
              </button>
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 text-[#113B7A] hover:text-[#FFB800] font-bold text-sm md:text-base transition-colors bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-full"
              >
                Selanjutnya
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
          </div>
        </div>

          {/* Right Column - Written Testimonials */}
          <div className="flex-1 space-y-6 hidden lg:flex lg:flex-col">
            {writtenTestimonialsRight.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-left border border-gray-100 shadow-sm relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center font-bold text-[#113B7A] text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#113B7A] leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.city}</p>
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
                  <div className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center font-bold text-[#113B7A] text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#113B7A] leading-tight">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.city}</p>
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
