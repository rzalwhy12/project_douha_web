export default function GuideSection() {
  const cards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      label: "Berpengalaman",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      label: "Menangani klien dalam & luar kota serta pekerja sibuk",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      label: "Sistem kerja profesional & legalitas PT terpercaya",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
        </svg>
      ),
      label: "Portfolio project yang nyata & terbukti",
    },
  ];

  return (
    <div className="bg-white px-4 py-4">
      <section id="kelebihan" className="bg-[#0a0a0a] py-20 md:py-28 rounded-2xl relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">

          {/* Top icon + label — centered */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-3">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#e02020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                </svg>
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 border-2 border-black"/>
            </div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 font-semibold">
              KAMI PEMANDU ANDA
            </p>
          </div>

          {/* Headline — center aligned */}
          <div className="text-center mb-8">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-8"
              style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
            >
              AUTHORITY
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5 max-w-2xl mx-auto">
              Kami memahami betapa beratnya membangun rumah dari jauh — tanpa bisa hadir langsung mengawasi setiap detail.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5 max-w-2xl mx-auto">
              Itulah kenapa klien kami — mulai dari <strong className="text-white">TKI, pegawai sibuk, hingga pengusaha</strong> — mempercayakan proyek mereka kepada Douha Konstruksi, sebuah tim dengan sistem kerja profesional dan portofolio nyata.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Setiap proyek dikerjakan dengan <strong className="text-white">transparansi penuh</strong> sehingga kepercayaan Anda terjaga dan proses pembangunan berjalan lancar.
            </p>

            <p className="text-white font-bold text-base sm:text-lg">
              Inilah alasan mereka memilih Douha Konstruksi:
            </p>
          </div>

          {/* 4 icon cards — same layout as reference */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {cards.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-black"/>
                </div>
                <p className="text-white font-bold text-sm leading-snug">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-14">
            <a
              href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-base px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
              style={{ boxShadow: "0 4px 18px rgba(220,38,38,0.45)" }}
            >
              Konsultasi Gratis Sekarang
            </a>
            <a
              href="#portfolio"
              className="inline-block bg-transparent hover:bg-white/10 text-white font-semibold text-base px-8 py-3.5 rounded-full border-2 border-white/60 hover:border-white transition-all duration-200"
            >
              Lihat Portfolio Proyek
            </a>
            <p className="text-gray-400 text-sm sm:text-base text-center max-w-md mt-2 leading-relaxed">
              Selama bertahun-tahun, Douha Konstruksi telah membantu ratusan keluarga mewujudkan rumah impian mereka.{" "}
              <strong className="text-white">Sekarang giliran Anda.</strong>
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
