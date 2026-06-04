export default function TestimonialSection() {
  return (
    <div className="bg-white px-4 py-4">
      <section id="testimoni" className="relative bg-black text-white py-24 md:py-32 rounded-2xl overflow-hidden">
        
        {/* Top half-circle decorative element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-white rounded-b-full"></div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">
          
          {/* Headline */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-6 text-white"
            style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
          >
            <span className="text-red-600">DIPERCAYA</span> OLEH PEKERJA MIGRAN<br/>
            (SEPERTI ANDA) DAN <span className="text-red-600">PENGUSAHA SIBUK</span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-base md:text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
            Dari perantau di luar negeri hingga pegawai di dalam kota, puluhan klien telah menggunakan sistem kerja transparan Douha Konstruksi untuk mewujudkan rumah impian mereka tanpa rasa khawatir.
          </p>

          {/* Logos Row (Simulated text logos to represent client backgrounds) */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60 mb-20">
            <span className="text-xl font-bold font-serif italic">TKI Taiwan</span>
            <span className="text-2xl font-black tracking-widest uppercase">KOREA</span>
            <span className="text-xl font-bold">HONG KONG</span>
            <span className="text-xl font-semibold tracking-wide">Pegawai BUMN</span>
            <span className="text-xl font-medium tracking-tight">Pengusaha Lokal</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-24">
            <a 
              href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto text-center"
            >
              Mulai Konsultasi Gratis
            </a>
            <a 
              href="#portfolio"
              className="bg-transparent hover:bg-white/10 text-white font-semibold text-sm px-8 py-3.5 rounded-full border border-gray-500 transition-colors w-full sm:w-auto text-center"
            >
              Lihat Contoh Laporan
            </a>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-4 max-w-3xl mx-auto text-left">
            
            {/* Testimonial 1 */}
            <div className="bg-[#141414] p-6 sm:p-8 rounded-xl border border-gray-800">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                "Awalnya ragu bangun rumah dari luar negeri, tapi setelah pakai Douha Konstruksi, saya tenang banget karena selalu di-update progresnya tiap minggu lewat foto dan video."
              </p>
              <p className="text-white text-sm sm:text-base font-bold">
                — Siti, TKI Taiwan
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#141414] p-6 sm:p-8 rounded-xl border border-gray-800">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                "Jujur, tanpa pengawasan langsung saya sempat takut dibohongi. Tapi Douha benar-benar transparan, dari RAB sampai laporan material semuanya jelas. Alhamdulillah rumah impian jadi dengan lancar."
              </p>
              <p className="text-white text-sm sm:text-base font-bold">
                — Sugeng, TKI Korea
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#141414] p-6 sm:p-8 rounded-xl border border-gray-800">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                "Sibuk kerja bikin saya nggak bisa ngecek proyek tiap hari. Untungnya tim Douha sangat profesional. Serah terima tepat waktu dan kualitas bangunannya sangat memuaskan! Pokoknya top."
              </p>
              <p className="text-white text-sm sm:text-base font-bold">
                — Anang, Pegawai BUMN
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
