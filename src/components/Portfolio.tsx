import React, { useState } from 'react';
import { ProjectImage, ProjectCategory } from '../types';
import { INITIAL_PROJECT_IMAGES } from '../data/constants';
import { PortfolioModal } from './PortfolioModal';
import { Eye, Image as ImageIcon, Send, SlidersHorizontal, Maximize2, Compass } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';
import { handleImageError } from '../utils/imageFallback';

interface PortfolioProps {
  telegramUsername: string;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Fire Protection',
  'Residential',
  'Commercial',
  'Industrial',
  'Shop Drawings',
  'As-Built',
  'Revit/BIM',
  'MEP Coordination',
  'Mechanical Room'
];

export const Portfolio: React.FC<PortfolioProps> = ({ telegramUsername }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalImage, setActiveModalImage] = useState<ProjectImage | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filteredImages = selectedCategory === 'All'
    ? INITIAL_PROJECT_IMAGES
    : INITIAL_PROJECT_IMAGES.filter((img) => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const handleCategoryChange = (category: ProjectCategory) => {
    setSelectedCategory(category);
    setVisibleCount(8);
  };

  return (
    <section id="portfolio" className="relative py-28 bg-[#07090f] border-t border-white/[0.08] overflow-hidden">
      {/* Blueprint grid background with ambient illumination */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs tracking-wider mb-5 backdrop-blur-md">
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-[0.15em] uppercase font-semibold">ENGINEERING DRAWING PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5 leading-tight">
            MEP Drawing &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Engineering Showcase</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Inspect our 38 curated drawing and engineering assets spanning mechanical HVAC, sanitary plumbing, electrical power distribution, fire protection, and coordinated BIM models in landscape widescreen format.
          </p>

          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>Showing {displayedImages.length} of {filteredImages.length} Landscape Assets // {selectedCategory}</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-slate-400 uppercase tracking-wider justify-center">
            <SlidersHorizontal className="w-3.5 h-3.5 text-amber-400" />
            <span>Filter by Engineering Discipline</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 p-2.5 rounded-2xl bg-[#0b0e15]/90 border border-white/[0.08] max-w-5xl mx-auto backdrop-blur-md shadow-xl">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All'
                ? INITIAL_PROJECT_IMAGES.length
                : INITIAL_PROJECT_IMAGES.filter((img) => img.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md shadow-amber-500/25 font-bold'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat
                        ? 'bg-slate-950/20 text-slate-950 font-mono font-bold'
                        : 'bg-white/10 text-slate-400 font-mono'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Cards Grid: Landscape 16:9 Aspect Ratio Based on the Video Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayedImages.map((image) => {
            const telegramUrl = createTelegramUrl(
              `Hello, I'm reviewing drawing asset #${image.id}: "${image.title}" (${image.category}) and would like to discuss a quote for similar drawings.`,
              telegramUsername
            );

            return (
              <div
                key={image.id}
                id={`portfolio-card-${image.id}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#0a0d14]/90 border border-white/[0.08] hover:border-amber-500/50 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1"
              >
                {/* 16:9 Landscape Image Container (exactly matching the video size aspect-video) */}
                <div
                  className="relative w-full aspect-video bg-[#040609] overflow-hidden cursor-pointer"
                  onClick={() => setActiveModalImage(image)}
                >
                  <img
                    src={image.directUrl}
                    alt={image.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, image.title)}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                  />

                  {/* Dark subtle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-90"></div>

                  {/* Corner CAD technical indicators */}
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
                    <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded bg-black/80 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                      ASSET #{image.id.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-medium px-2.5 py-1 rounded bg-[#101520]/90 text-slate-200 border border-white/10 backdrop-blur-md font-mono">
                      {image.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Reference / Example Tag if applicable */}
                  {image.isReference && (
                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[9px] font-mono font-bold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                        REFERENCE / EXAMPLE
                      </span>
                    </div>
                  )}

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-amber-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-2xl font-bold flex items-center gap-2 text-xs uppercase tracking-wider">
                      <Maximize2 className="w-3.5 h-3.5 text-slate-950" />
                      <span>Inspect Drawing</span>
                    </span>
                  </div>

                  {/* Bottom Technical HUD strip */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400 z-10">
                    <span className="bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                      LANDSCAPE 16:9 // DWG &amp; PDF
                    </span>
                    <span className="bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md text-amber-300">
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors font-display tracking-tight leading-snug mb-2.5">
                      {image.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                      {image.description}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveModalImage(image)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-slate-200 hover:text-white border border-white/10 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-amber-400" />
                      <span>Full Blueprint View</span>
                    </button>

                    <a
                      href={telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/30 hover:border-amber-400 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md"
                      title="Discuss this drawing scope on Telegram"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enquire on Telegram</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              className="px-8 py-4 rounded-xl bg-[#0f1420] hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 text-slate-200 hover:text-slate-950 border border-amber-500/30 hover:border-amber-400 font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-500/10 active:scale-95"
            >
              Load More Landscape Showcase Assets ({filteredImages.length - visibleCount} Remaining)
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {activeModalImage && (
        <PortfolioModal
          image={activeModalImage}
          allImages={filteredImages}
          onClose={() => setActiveModalImage(null)}
          onSelectImage={(newImg) => setActiveModalImage(newImg)}
          telegramUsername={telegramUsername}
        />
      )}
    </section>
  );
};
