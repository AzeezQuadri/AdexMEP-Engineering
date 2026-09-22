import React, { useEffect, useState } from 'react';
import { X, Send, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Compass, Maximize2, ArrowLeft } from 'lucide-react';
import { ProjectImage } from '../types';
import { createTelegramUrl } from '../utils/telegram';
import { handleImageError } from '../utils/imageFallback';

interface PortfolioModalProps {
  image: ProjectImage | null;
  allImages: ProjectImage[];
  onClose: () => void;
  onSelectImage: (image: ProjectImage) => void;
  telegramUsername: string;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  image,
  allImages,
  onClose,
  onSelectImage,
  telegramUsername
}) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setZoomLevel(1);
  }, [image]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!image) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = allImages.findIndex((img) => img.id === image.id);
        const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        onSelectImage(allImages[prevIndex]);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = allImages.findIndex((img) => img.id === image.id);
        const nextIndex = (currentIndex + 1) % allImages.length;
        onSelectImage(allImages[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, allImages, onClose, onSelectImage]);

  if (!image) return null;

  const currentIndex = allImages.findIndex((img) => img.id === image.id);
  const telegramMessage = `Hello, I'm reviewing drawing asset #${image.id}: "${image.title}" (${image.category}). I'd like to discuss a quote for similar MEP engineering drawings.`;
  const telegramUrl = createTelegramUrl(telegramMessage, telegramUsername);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    onSelectImage(allImages[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    onSelectImage(allImages[prevIndex]);
  };

  return (
    <div
      id="portfolio-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#090c12] border border-amber-500/40 rounded-2xl shadow-2xl shadow-black/95 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/[0.08] bg-[#05070a]">
          <div className="flex items-center gap-2.5">
            {/* Prominent Back Button */}
            <button
              onClick={onClose}
              id="modal-top-back-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/40 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer active:scale-95 group"
              title="Go Back"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back</span>
            </button>

            <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
              #{image.id.toString().padStart(2, '0')} / {allImages.length}
            </span>
            <span className="hidden md:inline text-xs font-semibold px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/10 font-mono">
              {image.category.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5))}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75))}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-300 text-slate-300 border border-white/5 transition-colors cursor-pointer"
              title="Close (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 16:9 Landscape Blueprint Stage matching the video size */}
        <div className="relative w-full aspect-video bg-[#030406] overflow-hidden flex items-center justify-center p-2 sm:p-6 select-none">
          {/* Subtle blueprint grid in viewer background */}
          <div className="absolute inset-0 bg-blueprint-grid opacity-15 pointer-events-none"></div>

          <img
            src={image.directUrl}
            alt={image.title}
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, image.title)}
            loading="eager"
            style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.15s ease-out' }}
            className="w-full h-full object-contain rounded shadow-2xl"
          />

          {/* Left / Right Nav buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/15 transition-all shadow-2xl"
            title="Previous Drawing (Left Arrow)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/80 hover:bg-amber-500 text-white hover:text-slate-950 border border-white/15 transition-all shadow-2xl"
            title="Next Drawing (Right Arrow)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Corner CAD Coordinates */}
          <div className="absolute bottom-3 left-4 font-mono text-[10px] text-amber-500/40 pointer-events-none hidden sm:block">
            MEP-CAD-VIEW // ASPECT: 16:9 LANDSCAPE // ZOOM: {Math.round(zoomLevel * 100)}%
          </div>
        </div>

        {/* Modal Bottom Metadata & Actions */}
        <div className="p-6 border-t border-white/[0.08] bg-[#07090f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight">
              {image.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {image.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              id="modal-bottom-back-btn"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>Discuss This Drawing on Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
