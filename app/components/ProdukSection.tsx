import Image from "next/image";

export default function ProdukSection() {
  return (
    <section id="layanan" className="relative py-20 md:py-32 w-full flex items-center justify-center min-h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* We use a generic background or if there's a blueprint image, but we'll stick to a placeholder overlay */}
        <div className="absolute inset-0 bg-gray-200" />
        <Image 
          src="/bg.png" 
          alt="Blueprint Background" 
          fill 
          className="object-cover object-center opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/10" />
      </div>

      {/* Main Blue Card */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#113B7A] p-8 sm:p-12 md:p-16 rounded-sm shadow-2xl text-white">
          
          {/* Header */}
          <div className="mb-14">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-wide mb-4">
              PRODUK KAMI
            </h2>
            {/* Underline */}
            <div className="flex h-1.5 w-64">
              <div className="w-1/2 bg-white" />
              <div className="w-1/2 bg-[#FFB800]" />
            </div>
          </div>

          {/* List Items */}
          <div className="flex flex-col gap-10">
            {/* 1. Konstruksi */}
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                {/* Custom Icon for Konstruksi (Worker & Bricks) */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2C10.34 2 9 3.34 9 5v1H5v2h14V6h-4V5c0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1v1h-2V5c0-.55.45-1 1-1zM2 10v2h5v-2H2zm7 0v2h6v-2H9zm8 0v2h5v-2h-5zM2 14v2h8v-2H2zm10 0v2h10v-2H12zM2 18v2h5v-2H2zm7 0v2h6v-2H9zm8 0v2h5v-2h-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Konstruksi</h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Pembangunan rumah, Bangunan Usaha, Bangunan Kost, dan perkerjaan di bidang sipil serta renovasi
                </p>
              </div>
            </div>

            {/* 2. Eksterior */}
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                {/* Custom Icon for Eksterior (House Outline) */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M3 9l9-7 9 7v11H3V9z" />
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M9 22V12h6v10" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Eksterior</h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Melayani pembuatan kanopi, pagar, dinding roster, pintu, lampu hiasan dengan material seperti besi, kayu, plasitik dll
                </p>
              </div>
            </div>

            {/* 3. Desain Rumah */}
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                {/* Custom Icon for Desain (Pencil & Ruler) */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.385 1.542l8.073 8.073M16.5 3.5L3.5 16.5 2 22l5.5-1.5L20.5 7.5zM8 12l4 4" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Desain Rumah</h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Jasa pembuatan desain rumah3D eksterior, interior, arsitektur, RAB, Gambar dan rancangan kerja lengkap.
                </p>
              </div>
            </div>
          </div>

          {/* Logo Footer */}
          <div className="mt-16 flex justify-center">
            <Image 
              src="/logo/DOUHA KONSTRUKSI putih.png" 
              alt="Douha Konstruksi Logo" 
              width={200} 
              height={80} 
              className="object-contain opacity-90"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
