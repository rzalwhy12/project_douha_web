import { getProjectById } from "../../actions/portfolio";
import StickyHeader from "../../components/StickyHeader";
import Footer from "../../components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = await getProjectById(params.id);
  if (!project) {
    return { title: "Proyek Tidak Ditemukan - Douha Konstruksi" };
  }
  return {
    title: `${project.title} - Douha Konstruksi`,
    description: project.description.substring(0, 160),
  };
}

export default async function PortfolioDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = await getProjectById(params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <StickyHeader />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-b border-white/10">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <Link href="/portfolio" className="inline-flex items-center text-[#c9a227] hover:text-white transition-colors mb-6 uppercase tracking-widest text-sm font-bold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Kembali ke Portofolio
          </Link>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-wider mb-6" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
            {project.title}
          </h1>
          <div className="w-24 h-1.5 bg-[#c9a227] mx-auto mb-8"></div>
        </div>
      </section>

      {/* Content & Gallery Section */}
      <section className="py-12 md:py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Deskripsi */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold text-[#c9a227] mb-6 font-oswald uppercase tracking-wide">
                Tentang Proyek
              </h3>
              <div className="prose prose-invert prose-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
                {project.description}
              </div>
              <div className="mt-10 pt-8 border-t border-white/10">
                <a 
                  href="https://wa.me/6285746478187" target="_blank" rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center w-full bg-[#c9a227] hover:bg-[#b08d1e] text-black font-bold text-base px-8 py-4 rounded-full transition-all duration-200"
                >
                  Konsultasi Proyek Serupa
                </a>
              </div>
            </div>
          </div>

          {/* Galeri Foto */}
          <div className="w-full lg:w-2/3 order-1 lg:order-2 space-y-6">
            {project.images && project.images.length > 0 ? (
              <>
                {/* Foto Pertama (Paling Besar) */}
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} - Foto Utama`} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Sisa Foto */}
                {project.images.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {project.images.slice(1).map((img, idx) => (
                      <div key={idx} className="w-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative group h-64 md:h-80">
                        <img 
                          src={img} 
                          alt={`${project.title} - Foto ${idx + 2}`} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
                <p className="text-gray-400">Belum ada foto untuk proyek ini.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
