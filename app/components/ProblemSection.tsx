import Link from "next/link";

export default function ProblemSection() {
  const problemsLeft = [
    {
      bold: "sulit dipercaya",
      text: "Kontraktor atau tukang yang",
      suffix: "",
    },
    {
      bold: "setelah panjang lebar",
      text: "Pelanggan baru mengerti",
      suffix: " menjelaskan",
    },
    {
      bold: "kompetitor dapat perhatian",
      text: "yang seharusnya milik Anda",
      suffix: "",
    },
  ];

  const problemsRight = [
    {
      bold: "bekerja keras tapi omzet jalan di tempat",
      text: "Anda",
      suffix: "",
    },
    {
      bold: "biaya habis sia-sia",
      text: "Marketing dollar —",
      suffix: " karena pesan tidak nyangkut",
    },
    {
      bold: "Pertumbuhan macet",
      text: "— bukan karena offer lemah, tapi pesan tidak jelas",
      suffix: "",
    },
  ];

  return (
    <section
      id="masalah"
      style={{ background: "linear-gradient(to bottom, #f9f3ec, #f5ede3)" }}
      className="py-10 md:py-14"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">

        {/* Down-arrow icon */}
        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-900 mb-8 -mt-44">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>

        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-12"
          style={{ color: "#1a1a2e", fontFamily: "var(--font-oswald), 'Impact', sans-serif", letterSpacing: "0.02em" }}
        >
          KAMI MENGERTI RASA SAKIT DAN FRUSTRASI <br className="hidden sm:block" />
          MENCOBA MENDAPAT{" "}
          <span style={{ color: "#e02020" }}>RUMAH IMPIAN <br className="hidden sm:block" />
            YANG BENAR-BENAR JADI.</span>
        </h2>

        {/* Two-column problem list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left mb-12">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {problemsLeft.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "#1a1a2e" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {item.text}{" "}
                  <strong className="font-bold text-gray-900">{item.bold}</strong>
                  {item.suffix}
                </p>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {problemsRight.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "#1a1a2e" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  <strong className="font-bold text-gray-900">{item.bold}</strong>
                  {item.text !== item.bold ? " " + item.text : ""}
                  {item.suffix}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing tagline */}
        <div className="mb-8">
          <p className="text-gray-700 text-base sm:text-lg italic">
            Di era keterbatasan waktu dan jarak, kepercayaan adalah segalanya.
          </p>
          <p className="text-gray-900 text-base sm:text-lg font-bold mt-1">
            Tanpa transparansi, jawabannya selalu TIDAK!
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full text-white font-bold text-base sm:text-lg transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
          style={{ background: "#e02020", boxShadow: "0 4px 18px rgba(224,32,32,0.35)" }}
        >
          Konsultasi Gratis Sekarang
        </Link>
      </div>
    </section>
  );
}
