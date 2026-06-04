export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-sm lg:max-w-md">
      {/* Gold circle background */}
      <div
        className="absolute rounded-full"
        style={{
          width: "88%",
          aspectRatio: "1",
          background: "radial-gradient(circle, #c9a227 0%, #8a6a0a 100%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -46%)",
          zIndex: 0,
        }}
      />

      {/* Certified badge — top left */}
      <div
        className="absolute z-20"
        style={{ top: "6%", left: "2%" }}
      >
        <div
          className="flex flex-col items-center justify-center rounded-full border-2 border-yellow-600 bg-black text-center"
          style={{ width: 88, height: 88, padding: "6px" }}
        >
          <p className="text-yellow-400 text-[8px] font-bold uppercase tracking-wider leading-tight">
            BERPENGALAMAN
          </p>
          <p className="text-white text-[10px] font-black uppercase leading-tight mt-0.5">
            DOUHA
          </p>
          <p className="text-yellow-400 text-[8px] font-bold uppercase tracking-wider leading-tight">
            KONSTRUKSI
          </p>
        </div>
      </div>

      {/* Main photo in circle */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{
          width: "80%",
          aspectRatio: "1",
          zIndex: 1,
          border: "4px solid rgba(255,255,255,0.1)",
        }}
      >
        <img
          src="/foto-serah-terima/SUGENG.png"
          alt="Klien Douha Konstruksi"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Bottom-left info card */}
      <div
        className="absolute z-20 bg-black/90 text-white rounded-xl px-4 py-3 backdrop-blur-sm border border-gray-700 shadow-xl"
        style={{ bottom: "4%", left: "-4%" }}
      >
        <p className="text-xs text-gray-400 font-medium leading-snug">
          Dipercaya membangun
        </p>
        <p className="text-sm font-black text-white leading-snug">
          Rumah Klien TKI & Perantau.
        </p>
        <p className="text-[11px] text-yellow-400 font-bold mt-0.5">
          ★ Lebih dari 30 proyek selesai!
        </p>
      </div>

      {/* Decorative dots */}
      <div
        className="absolute z-0 opacity-20"
        style={{ bottom: "10%", right: "2%" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          {[0, 12, 24, 36, 48].map((x) =>
            [0, 12, 24, 36, 48].map((y) => (
              <circle
                key={`${x}-${y}`}
                cx={x + 6}
                cy={y + 6}
                r="2"
                fill="white"
              />
            ))
          )}
        </svg>
      </div>
    </div>
  );
}
