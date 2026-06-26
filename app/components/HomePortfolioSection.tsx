import { getProjects } from "../actions/portfolio";
import Link from "next/link";

export default async function HomePortfolioSection() {
  const allProjects = await getProjects();
  // Ambil 3 portofolio terakhir
  const latestProjects = allProjects.slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#c9a227] tracking-wider mb-4" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
              Portofolio Terbaru
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
              Lihat beberapa hasil karya dan proyek pembangunan yang telah diselesaikan oleh Douha Konstruksi.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="flex-shrink-0 inline-flex items-center gap-2 border-2 border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-white px-6 py-3 rounded-full font-bold transition-all"
          >
            Lihat Selengkapnya
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Portfolio Grid */}
        {latestProjects.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">Belum ada portofolio yang ditampilkan.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestProjects.map((project) => (
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
      </div>
    </section>
  );
}
