import { getProjects } from "../actions/portfolio";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Portofolio - Douha Konstruksi",
  description: "Lihat hasil karya dan proyek pembangunan yang telah diselesaikan oleh Douha Konstruksi.",
};

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar Permanen */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo/DOUHA KONSTRUKSI putih.png"
              alt="Douha Konstruksi"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1 text-sm font-semibold">
            <Link href="/#masalah" className="text-gray-300 hover:text-white transition-all px-4 py-2 hover:bg-white/5 rounded-lg whitespace-nowrap">Masalah</Link>
            <Link href="/#kelebihan" className="text-gray-300 hover:text-white transition-all px-4 py-2 hover:bg-white/5 rounded-lg whitespace-nowrap">Kelebihan</Link>
            <Link href="/#layanan" className="text-gray-300 hover:text-white transition-all px-4 py-2 hover:bg-white/5 rounded-lg whitespace-nowrap">Layanan</Link>
            <Link href="/#testimoni" className="text-gray-300 hover:text-white transition-all px-4 py-2 hover:bg-white/5 rounded-lg whitespace-nowrap">Testimoni</Link>
            <Link href="/portfolio" className="text-[#c9a227] font-bold px-4 py-2 hover:bg-white/5 rounded-lg whitespace-nowrap">Portofolio</Link>
          </div>

          {/* CTA */}
          <Link
            href="https://wa.me/6285746478187"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 whitespace-nowrap"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </nav>


      {/* Hero Section untuk Portofolio */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 flex flex-col items-center justify-center border-b border-white/10">
        <div className="absolute inset-0 bg-[url('/foto-video/rumah%201.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase text-[#c9a227] tracking-wider mb-4" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
            Portofolio Kami
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Bukti nyata dedikasi dan kualitas kerja Douha Konstruksi dalam mewujudkan rumah impian klien kami di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Grid Portofolio */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {projects.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400">Belum ada proyek yang ditampilkan.</h2>
            <p className="text-gray-500 mt-2">Silakan kembali lagi nanti untuk melihat update terbaru dari kami.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link href={`/portfolio/${project.objectId}`} key={project.objectId} className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/10 transition-all duration-300 hover:border-[#c9a227]/50 hover:shadow-[0_0_30px_rgba(201,162,39,0.15)] flex flex-col">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  {project.images?.[0] ? (
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5">
                      <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5 border border-white/10">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      {project.images.length} Foto
                    </div>
                  )}
                </div>
                <div className="p-6 relative z-20 flex-grow flex flex-col">
                  <div className="w-12 h-1 bg-[#c9a227] mb-4 transform origin-left group-hover:scale-x-150 transition-transform duration-300"></div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-oswald uppercase tracking-wide group-hover:text-[#c9a227] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-6 text-[#c9a227] text-sm font-bold uppercase tracking-wider flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Lihat Detail
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
