import { getProjects } from "../../actions/portfolio";
import { CreatePortfolioForm, ProjectList } from "./ClientComponents";
import { logoutAdmin } from "../../actions/auth";
import Link from "next/link";
import { ArrowLeft, LayoutGrid } from "lucide-react";

export const metadata = {
  title: "Admin Dasbor - Manajemen Portofolio",
};

export default async function AdminPortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#c9a227] selection:text-black">

      {/* Admin Navbar */}
      <nav className="sticky top-0 z-50 bg-[#111]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors group">
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">Douha Admin</h1>
              <p className="text-xs text-[#c9a227] font-semibold tracking-widest uppercase">Workspace</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/portfolio" target="_blank" className="text-sm font-semibold text-gray-300 hover:text-white border border-white/20 hover:border-[#c9a227] px-4 py-2 rounded-full transition-all">
              Lihat Web
            </Link>
            <form action={logoutAdmin}>
              <button
                type="submit"
                className="text-sm font-semibold text-gray-400 hover:text-red-400 border border-white/10 hover:border-red-500/50 px-4 py-2 rounded-full transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </form>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#c9a227] to-yellow-200 border-2 border-white/20 shadow-[0_0_15px_rgba(201,162,39,0.3)]"></div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header Title */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider mb-2" style={{ fontFamily: "var(--font-oswald), 'Impact', sans-serif" }}>
              Manajemen <span className="text-[#c9a227]">Portofolio</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Unggah, kelola, dan tampilkan karya terbaik Douha Konstruksi.
            </p>
          </div>
        </div>

        {/* Form Component */}
        <CreatePortfolioForm />

        {/* List Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <LayoutGrid className="w-6 h-6 text-[#c9a227]" />
            <h3 className="text-2xl font-bold text-white">Daftar Proyek Anda</h3>
            <div className="ml-4 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-gray-300">
              {projects.length} Proyek
            </div>
          </div>

          {/* ProjectList mengelola modal state di atasnya sendiri */}
          <ProjectList projects={projects} />
        </div>
      </main>
    </div>
  );
}
