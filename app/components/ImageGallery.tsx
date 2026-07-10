"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export default function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") handlePrev(e as any);
      if (e.key === "ArrowRight") handleNext(e as any);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images.length]);

  const handlePrev = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const handleNext = (e: React.MouseEvent | KeyboardEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  if (!images || images.length === 0) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
        <p className="text-gray-400">Belum ada foto untuk proyek ini.</p>
      </div>
    );
  }

  return (
    <>
      {/* Grid foto */}
      <div className="space-y-6">
        {/* Foto Pertama (Paling Besar) */}
        <div 
          className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group cursor-pointer"
          onClick={() => setSelectedIndex(0)}
        >
          <img 
            src={images[0]} 
            alt={`${title} - Foto Utama`} 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
            <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Klik untuk perbesar
            </span>
          </div>
        </div>
        
        {/* Sisa Foto */}
        {images.length > 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {images.slice(1).map((img, idx) => (
              <div 
                key={idx} 
                className="w-full rounded-xl overflow-hidden border border-white/10 shadow-lg relative group h-64 md:h-80 cursor-pointer"
                onClick={() => setSelectedIndex(idx + 1)}
              >
                <img 
                  src={img} 
                  alt={`${title} - Foto ${idx + 2}`} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                  <span className="bg-black/60 text-white px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                    Perbesar
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Zoom */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-md transition-colors"
              onClick={() => setSelectedIndex(null)}
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
            
            {images.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-md transition-colors"
                  onClick={handlePrev}
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  className="absolute right-4 md:right-8 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-md transition-colors"
                  onClick={handleNext}
                  aria-label="Selanjutnya"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <img 
              src={images[selectedIndex]} 
              alt={`${title} - Zoomed ${selectedIndex + 1}`} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                {selectedIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
