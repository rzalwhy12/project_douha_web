"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { saveProject, deleteProject, updateProject } from "../../actions/portfolio";
import { UploadCloud, Trash2, PlusCircle, CheckCircle, Pencil, X } from "lucide-react";
import type { Project } from "../../actions/portfolio";

const APP_ID = process.env.NEXT_PUBLIC_BACKENDLESS_APP_ID;
const API_KEY = process.env.NEXT_PUBLIC_BACKENDLESS_API_KEY;
const BACKENDLESS_BASE = `https://api.backendless.com/${APP_ID}/${API_KEY}`;

// Upload file langsung dari browser ke Backendless
async function uploadFileToBackendless(file: File): Promise<string> {
  const filename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
  const uploadUrl = `${BACKENDLESS_BASE}/files/portfolio/${filename}?overwrite=true`;

  const fd = new FormData();
  fd.append("file", file);

  const res = await fetch(uploadUrl, { method: "POST", body: fd });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gagal upload "${file.name}": ${errText}`);
  }

  const data = await res.json();
  if (!data.fileURL) throw new Error(`URL tidak ditemukan: ${JSON.stringify(data)}`);
  return data.fileURL;
}

// ─── CREATE FORM ─────────────────────────────────────────────────────────────

export function CreatePortfolioForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [fileCount, setFileCount] = useState(0);
  const [progress, setProgress] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    setProgress(null);

    const formEl = event.currentTarget;
    const title = (formEl.elements.namedItem("title") as HTMLInputElement).value;
    const description = (formEl.elements.namedItem("description") as HTMLTextAreaElement).value;
    const fileInput = formEl.elements.namedItem("images") as HTMLInputElement;
    const files = fileInput.files ? Array.from(fileInput.files) : [];

    if (!title || !description) { setError("Judul dan deskripsi wajib diisi."); setLoading(false); return; }
    if (files.length === 0) { setError("Minimal 1 foto wajib diunggah."); setLoading(false); return; }
    if (files.length > 5) { setError("Maksimal hanya 5 gambar."); setLoading(false); return; }

    try {
      const uploadedUrls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        setProgress(`Mengunggah foto ${i + 1} dari ${files.length}...`);
        uploadedUrls.push(await uploadFileToBackendless(files[i]));
      }
      setProgress("Menyimpan data ke database...");
      const result = await saveProject({ title, description, images: uploadedUrls });
      if (result.error) { setError(result.error); } else {
        setSuccess(true);
        formEl.reset();
        setFileCount(0);
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
      setProgress(null);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative bg-[#111]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] mb-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="relative z-10 flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
        <div className="bg-[#c9a227]/20 p-3 rounded-2xl"><PlusCircle className="w-6 h-6 text-[#c9a227]" /></div>
        <h2 className="text-2xl font-bold text-white tracking-wide">Tambah Proyek Baru</h2>
      </div>

      {error && <div className="mb-6 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"><svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{error}</div>}
      {success && <div className="mb-6 bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0" />Portofolio berhasil disimpan!</div>}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Judul Proyek</label>
            <input type="text" name="title" required placeholder="Contoh: Villa Modern Bali" className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all" />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Deskripsi Lengkap</label>
            <textarea name="description" required rows={6} placeholder="Ceritakan detail proyek..." className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227] transition-all resize-none"></textarea>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Galeri Foto (Maks 5)</label>
          <div className="relative flex-grow flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-2xl bg-black/30 hover:bg-black/50 hover:border-[#c9a227]/50 transition-all group overflow-hidden min-h-[240px]">
            <input type="file" name="images" accept="image/*" multiple required onChange={(e) => setFileCount(e.target.files?.length || 0)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
            <div className="flex flex-col items-center text-center p-6 pointer-events-none">
              <div className="bg-white/5 p-4 rounded-full mb-4 group-hover:scale-110 group-hover:bg-[#c9a227]/20 transition-all">
                <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-[#c9a227]" />
              </div>
              <p className="text-white font-medium mb-1">{fileCount > 0 ? <span className="text-[#c9a227]">{fileCount} file terpilih</span> : "Klik atau Tarik Foto Kesini"}</p>
              <p className="text-gray-500 text-xs mt-2">Shift/Ctrl untuk multi-select</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-end gap-4">
        {progress && <p className="text-sm text-[#c9a227] font-semibold animate-pulse">{progress}</p>}
        <button type="submit" disabled={loading} className="group relative inline-flex items-center justify-center gap-3 bg-[#c9a227] hover:bg-[#b08d1e] text-black font-black uppercase tracking-widest px-10 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative z-10 flex items-center gap-2">
            {loading ? <><svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Memproses...</> : "Simpan Portofolio"}
          </span>
        </button>
      </div>
    </form>
  );
}

// ─── EDIT MODAL ───────────────────────────────────────────────────────────────

export function EditPortfolioModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState<string | null>(null);
  const [existingImages, setExistingImages] = useState<string[]>(project.images || []);
  const [newFileCount, setNewFileCount] = useState(0);

  function removeExistingImage(idx: number) {
    setExistingImages(prev => prev.filter((_, i) => i !== idx));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setProgress(null);

    const formEl = event.currentTarget;
    const title = (formEl.elements.namedItem("title") as HTMLInputElement).value;
    const description = (formEl.elements.namedItem("description") as HTMLTextAreaElement).value;
    const fileInput = formEl.elements.namedItem("newImages") as HTMLInputElement;
    const newFiles = fileInput.files ? Array.from(fileInput.files) : [];

    const totalImages = existingImages.length + newFiles.length;
    if (totalImages > 5) { setError("Total foto tidak boleh lebih dari 5."); setLoading(false); return; }

    try {
      let finalImages = [...existingImages];
      for (let i = 0; i < newFiles.length; i++) {
        setProgress(`Mengunggah foto baru ${i + 1} dari ${newFiles.length}...`);
        finalImages.push(await uploadFileToBackendless(newFiles[i]));
      }

      setProgress("Menyimpan perubahan...");
      const result = await updateProject(project.objectId, { title, description, images: finalImages });

      if (result.error) { setError(result.error); } else { onClose(); }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
      setProgress(null);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#111] border border-white/10 rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#111] z-10 flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500/20 p-2.5 rounded-xl"><Pencil className="w-5 h-5 text-blue-400" /></div>
            <h3 className="text-xl font-bold text-white">Edit Proyek</h3>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"><svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>{error}</div>}

          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Judul Proyek</label>
            <input type="text" name="title" required defaultValue={project.title} className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">Deskripsi</label>
            <textarea name="description" required rows={5} defaultValue={project.description} className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none"></textarea>
          </div>

          {/* Existing Images */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-3 uppercase tracking-wider">
              Foto Saat Ini ({existingImages.length}/5)
            </label>
            {existingImages.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {existingImages.map((img, idx) => (
                  <div key={idx} className="relative group aspect-square rounded-xl overflow-hidden border border-white/10">
                    <img src={img} alt={`Foto ${idx + 1}`} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(idx)}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                    >
                      <Trash2 className="w-5 h-5 text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">Tidak ada foto yang tersisa.</p>
            )}
          </div>

          {/* Add New Photos */}
          {existingImages.length < 5 && (
            <div>
              <label className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wider">
                Tambah Foto Baru (Sisa slot: {5 - existingImages.length})
              </label>
              <div className="relative flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-2xl bg-black/30 hover:border-blue-400/50 transition-all group min-h-[140px]">
                <input type="file" name="newImages" accept="image/*" multiple onChange={(e) => setNewFileCount(e.target.files?.length || 0)} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                <div className="flex flex-col items-center text-center p-4 pointer-events-none">
                  <UploadCloud className="w-7 h-7 text-gray-400 group-hover:text-blue-400 mb-2 transition-colors" />
                  <p className="text-white text-sm font-medium">{newFileCount > 0 ? <span className="text-blue-400">{newFileCount} foto baru dipilih</span> : "Klik untuk tambah foto"}</p>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            {progress && <p className="text-sm text-blue-400 font-semibold animate-pulse">{progress}</p>}
            <div className="flex gap-3 ml-auto">
              <button type="button" onClick={onClose} className="px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold rounded-xl transition-colors">
                Batal
              </button>
              <button type="submit" disabled={loading} className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center gap-2">
                {loading ? <><svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Menyimpan...</> : <><Pencil className="w-4 h-4" />Simpan Perubahan</>}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── PROJECT LIST (mengelola state modal di atas kartu) ──────────────────────

export function ProjectList({ projects }: { projects: Project[] }) {
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  if (projects.length === 0) {
    return (
      <div className="bg-[#111] border border-white/10 rounded-3xl p-16 text-center">
        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-2">Belum Ada Portofolio</h4>
        <p className="text-gray-500 max-w-md mx-auto">
          Gunakan form di atas untuk mulai menambahkan portofolio pertama Anda.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Modal dirender di sini — di luar grid kartu, tidak ada transform yang mengganggu */}
      {editingProject && (
        <EditPortfolioModal
          project={editingProject}
          onClose={() => setEditingProject(null)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.objectId}
            className="group flex flex-col bg-[#111] border border-white/10 hover:border-[#c9a227]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(201,162,39,0.3)] hover:-translate-y-1"
          >
            {/* Image Cover */}
            <div className="h-56 relative overflow-hidden bg-black">
              {project.images?.[0] ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-white/5">
                  <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                {project.images?.length || 0}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col relative z-10 -mt-6 bg-[#111] rounded-t-2xl">
              <div className="w-10 h-1 bg-[#c9a227] mb-5 rounded-full"></div>
              <h3 className="font-bold text-xl text-white mb-3 line-clamp-1 group-hover:text-[#c9a227] transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">{project.description}</p>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                <span className="text-xs text-gray-600 font-semibold uppercase tracking-wider">
                  {new Date(project.created).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                <div className="flex items-center gap-2">
                  {/* Tombol Edit — setEditingProject di sini, modal dirender di atas */}
                  <button
                    onClick={() => setEditingProject(project)}
                    className="p-2.5 bg-blue-500/10 hover:bg-blue-500 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white rounded-lg transition-all duration-300"
                    title="Edit Proyek"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <DeletePortfolioButton objectId={project.objectId} images={project.images || []} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── DELETE BUTTON ────────────────────────────────────────────────────────────

export function DeletePortfolioButton({ objectId, images }: { objectId: string; images: string[] }) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Apakah Anda yakin ingin menghapus portofolio ini? Tindakan ini tidak dapat dibatalkan.")) return;
    setLoading(true);
    await deleteProject(objectId, images);
    setLoading(false);
  }

  return (
    <button onClick={handleDelete} disabled={loading} className="p-2.5 bg-red-500/10 hover:bg-red-500 border border-red-500/30 hover:border-red-500 text-red-500 hover:text-white rounded-lg transition-all duration-300 disabled:opacity-50" title="Hapus Proyek">
      {loading
        ? <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        : <Trash2 className="w-5 h-5" />
      }
    </button>
  );
}
