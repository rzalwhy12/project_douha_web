export default function PlanSection() {
  const plans = [
    {
      number: "01",
      badge: "Paling Populer",
      image: "/foto-video/WhatsApp Image 2026-04-10 at 13.15.19.jpeg",
      title: "Konsultasi & Perencanaan",
      description:
        "Kami pelajari kebutuhan, konsep, lokasi, dan anggaran Anda secara detail. RAB & desain disusun transparan — tidak ada biaya tersembunyi.",
      price: "Gratis Konsultasi Pertama",
      priceNote: "mulai dari Rp 2,5 juta / m²",
      cta: "Mulai Konsultasi Gratis",
      ctaHref: "https://wa.me/6285655518055",
    },
    {
      number: "02",
      badge: "Proses Pembangunan",
      image: "/foto-video/rumah 1.png",
      title: "Pembangunan & Laporan Rutin",
      description:
        "Pembangunan dimulai sesuai kontrak. Anda menerima laporan foto & video secara rutin — pantau progres rumah Anda dari mana saja.",
      price: "Pembayaran Bertahap",
      priceNote: "sesuai progres pekerjaan",
      cta: "Lihat Cara Kerjanya",
      ctaHref: "#proses",
    },
    {
      number: "03",
      badge: "Serah Terima",
      image: "/foto-serah-terima/SITI.png",
      title: "Serah Terima & Garansi",
      description:
        "Rumah selesai sesuai spesifikasi yang disepakati. Kami lakukan serah terima resmi lengkap dengan garansi pekerjaan tertulis.",
      price: "Garansi Pekerjaan",
      priceNote: "kontrak & dokumentasi resmi",
      cta: "Lihat Portfolio Proyek",
      ctaHref: "#portfolio",
    },
  ];

  return (
    <section id="layanan" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Top icon + headline */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gray-900 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.05] mb-6 text-gray-900"
            style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
          >
            3 CARA UNTUK{" "}
            <span className="text-red-600">WUJUDKAN<br />RUMAH IMPIAN ANDA</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Pilihan layanan yang tepat bergantung pada kebutuhan dan kondisi Anda. Berikut cara kami membantu Anda membangun rumah dengan{" "}
            <strong className="text-gray-900">tenang dan terpercaya</strong>.
          </p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              {/* Image with number overlay */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />
                {/* Number */}
                <span className="absolute top-4 left-4 text-white font-black text-3xl leading-none"
                  style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif", textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
                  {plan.number}
                </span>
                {/* Badge */}
                <span className="absolute top-4 right-4 bg-white/90 text-gray-900 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm">
                  {plan.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-2xl font-black text-gray-900 leading-tight mb-3"
                  style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}
                >
                  {plan.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {plan.description}
                </p>

                {/* Price badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-green-700 font-bold text-xs">{plan.price}</span>
                    <span className="text-gray-500 text-xs"> — {plan.priceNote}</span>
                  </div>
                </div>

                {/* See more link */}
                <button className="text-gray-700 text-sm font-semibold text-left mb-4 hover:text-red-600 transition-colors">
                  Lihat Detail Layanan +
                </button>

                {/* CTA button */}
                <a
                  href={plan.ctaHref}
                  className="block text-center bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
