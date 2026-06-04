export default function AnnouncementBar() {
  return (
    <div className="bg-red-600 text-white py-2.5 px-4 text-center flex items-center justify-center gap-3 text-sm font-medium">
      <span>
        Bangun Rumah Impian Anda Dari Jauh — Konsultasi Pertama Gratis, Daftar Sekarang!
      </span>
      <a
        href="https://wa.me/6285655518055" target="_blank" rel="noopener noreferrer"
        className="inline-block bg-black/40 hover:bg-black/60 text-white text-xs font-bold px-4 py-1.5 rounded-full border border-white/30 transition-colors whitespace-nowrap"
      >
        Mulai Konsultasi →
      </a>
    </div>
  );
}
