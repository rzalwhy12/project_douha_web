export default function FailureSection() {
  const risks = [
    "Bangunan tidak sesuai dengan rencana",
    "Over-budget tanpa kontrol",
    "Pekerjaan mangkrak",
    "Harus pulang mendadak untuk mengawasi",
    "Waktu & uang terbuang",
    "Potensi penipuan atau kabur ditinggal kontraktor",
  ];

  return (
    <div className="bg-white px-4 py-4">
      <section className="relative bg-black text-white py-24 md:py-32 rounded-2xl overflow-hidden">
        
        {/* Top half-circle decorative element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-6 bg-white rounded-b-full"></div>

        <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center">
          
          {/* Headline */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-6 text-white"
            style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
          >
            <span className="text-red-600">KERUGIAN</span> (FAILURE)<br/>
            JIKA SALAH MEMILIH KONTRAKTOR
          </h2>

          {/* Subtitle */}
          <p className="text-gray-400 text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Anda berisiko mengalami hal-hal di bawah ini. <br/>
            Dan itu sering terjadi… <strong className="text-white">terutama pada klien yang tinggal jauh.</strong>
          </p>

          {/* Risks Grid (Using the dark card style from the reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left mb-16">
            {risks.map((risk, index) => (
              <div key={index} className="bg-[#141414] p-6 sm:p-8 rounded-xl border border-gray-800 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-red-500 font-bold text-lg">✕</span>
                </div>
                <p className="text-gray-300 text-base font-medium leading-snug">
                  {risk}
                </p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-8 py-3.5 rounded-full transition-colors w-full sm:w-auto text-center"
            >
              Cegah Risiko Ini Sekarang
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
