import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Play, 
  Send, 
  Video as VideoIcon, 
  Image as ImageIcon, 
  Sparkles, 
  Layers, 
  SlidersHorizontal, 
  Eye, 
  Maximize2, 
  CheckCircle2,
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { PROJECT_VIDEOS, INITIAL_PROJECT_IMAGES } from '../data/constants';
import { ProjectVideo, ProjectImage, ProjectCategory } from '../types';
import { VideoModal } from './VideoModal';
import { PortfolioModal } from './PortfolioModal';
import { createTelegramUrl } from '../utils/telegram';
import { handleImageError } from '../utils/imageFallback';

interface VideoProofPageProps {
  telegramUsername: string;
  onBackToHome: () => void;
  onRequestQuote: () => void;
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

export const VideoProofPage: React.FC<VideoProofPageProps> = ({
  telegramUsername,
  onBackToHome,
  onRequestQuote
}) => {
  const [activeVideo, setActiveVideo] = useState<ProjectVideo | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalImage, setActiveModalImage] = useState<ProjectImage | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const POSTER_BGS = [
    'https://i.ibb.co/nsV3rGyT/IMG-2440.jpg',
    'https://i.ibb.co/CpFMB7V7/IMG-2439.jpg',
    'https://i.ibb.co/PGyqHmXL/IMG-2438.jpg',
    'https://i.ibb.co/1YzwJYX7/IMG-2435.jpg',
  ];

  const filteredImages = selectedCategory === 'All'
    ? INITIAL_PROJECT_IMAGES
    : INITIAL_PROJECT_IMAGES.filter((img) => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, visibleCount);
  const hasMore = visibleCount < filteredImages.length;

  const generalTelegramUrl = createTelegramUrl(
    "Hello, I finished watching your MEP video proof and reviewing the attached drawing assets on Page 2. I'd like to get a quote for my project.",
    telegramUsername
  );

  return (
    <div className="min-h-screen bg-transparent text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 pt-[44px] pb-24 relative">
      {/* Top Sticky Navigation Bar with Prominent Back Button */}
      <div className="sticky top-[44px] z-40 bg-[#070c18]/95 backdrop-blur-xl border-b border-cyan-500/30 px-4 sm:px-6 lg:px-8 py-4 shadow-2xl shadow-black/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Back Button */}
          <button
            onClick={onBackToHome}
            id="video-page-top-back-btn"
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/40 hover:border-cyan-400 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 group cursor-pointer"
            title="Return to Main Website"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Main Website</span>
          </button>

          {/* Breadcrumb / Page Status indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300">
            <span className="text-slate-400">PAGE 2 OF 2:</span>
            <span className="text-cyan-300 font-bold uppercase tracking-wider">
              VIDEO PROOF &amp; ATTACHED ASSETS
            </span>
          </div>

          {/* Telegram contact action */}
          <div className="flex items-center gap-3">
            <a
              href={generalTelegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a1222] hover:bg-[#111e38] border border-cyan-500/30 text-cyan-200 hover:text-white text-xs font-semibold tracking-wide transition-all"
            >
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">Telegram:</span>
              <span>@{telegramUsername.replace(/^@/, '')}</span>
            </a>

            <button
              onClick={onRequestQuote}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header for Video Proof Page - Alight & Perfectly Aligned */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-cyan-500/[0.06] rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 mb-6">
            <button
              onClick={onBackToHome}
              className="hover:text-cyan-300 transition-colors cursor-pointer text-slate-400"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-cyan-300 font-bold">Video Proof &amp; Attached Drawings</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/35 text-cyan-200 font-mono text-xs tracking-wider mb-4 backdrop-blur-md shadow-md shadow-cyan-500/10">
              <VideoIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span className="tracking-[0.15em] uppercase font-bold">PROJECT PROOF PAGE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight mb-4 text-alight">
              MEP Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 drop-shadow-[0_2px_14px_rgba(6,182,212,0.4)]">Video Proof &amp; Walkthroughs</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal mb-8 text-alight-body">
              Watch our multi-trade MEP walkthrough videos, HVAC clash coordination recordings, and 3D BIM models. All videos and attached drawing assets are framed in landscape 16:9 widescreen presentation. When you finish, click the back button anytime to return to the main website.
            </p>

            {/* Quick summary badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a1222]/90 border border-cyan-500/25 text-slate-100 shadow-md backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>4 Video Proof Walkthroughs (16:9)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a1222]/90 border border-cyan-500/25 text-slate-100 shadow-md backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>38 Attached Landscape Drawings</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0a1222]/90 border border-cyan-500/25 text-slate-100 shadow-md backdrop-blur-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Revit BIM &amp; AutoCAD 2D/3D Proof</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: ALL 4 VIDEO PROOFS */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/15 bg-transparent">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyan-500/15">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <VideoIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display text-alight">
                  Project Video Walkthroughs
                </h2>
                <p className="text-xs text-slate-300 font-mono">
                  4 Interactive Widescreen 16:9 Recordings
                </p>
              </div>
            </div>

            <button
              onClick={onBackToHome}
              className="text-xs font-mono text-cyan-300 hover:text-cyan-200 flex items-center gap-1.5 transition-colors cursor-pointer px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
          </div>

          {/* 4 Video Cards Grid in Landscape 16:9 Aspect Ratio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PROJECT_VIDEOS.map((video, idx) => {
              const telegramUrl = createTelegramUrl(
                `Hello, I watched your video "${video.title}" (${video.category}) on Page 2 and would like to discuss my MEP project requirements.`,
                telegramUsername
              );

              return (
                <div
                  key={video.id}
                  id={`video-proof-${video.id}`}
                  className="group relative flex flex-col justify-between rounded-2xl bg-[#090f1d]/90 border border-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-cyan-500/15 hover:-translate-y-1 crosshair-corner backdrop-blur-md"
                >
                  {/* 16:9 Landscape Video Container */}
                  <div
                    className="relative w-full aspect-video bg-[#040609] overflow-hidden cursor-pointer"
                    onClick={() => setActiveVideo(video)}
                  >
                    <img
                      src={video.thumbnailUrl || POSTER_BGS[idx] || POSTER_BGS[0]}
                      alt={video.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, video.title)}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-75 group-hover:opacity-90"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-black/30 to-transparent"></div>

                    {/* Corner Reticles */}
                    <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-300/60 pointer-events-none">
                      + [VIDEO PROOF 0{idx + 1}]
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                        0{idx + 1}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#0c1628]/90 text-cyan-100 border border-cyan-500/30 backdrop-blur-md">
                        {video.category}
                      </span>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                        {video.duration || 'HD 1080P'}
                      </span>
                    </div>

                    {/* Concentric Pulsing Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-400/20 animate-ping pointer-events-none opacity-50"></div>
                        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/30 blur-md pointer-events-none"></div>
                        
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950 translate-x-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Technical HUD Strip */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200 z-10">
                      <span className="flex items-center gap-1.5 bg-black/75 px-2.5 py-1 rounded-md border border-cyan-500/30 backdrop-blur-md text-cyan-300 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Engineering Recording
                      </span>
                      <span className="bg-black/75 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md text-slate-300">
                        Click to Play
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Details - Alight & Harmoniously Aligned */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display tracking-tight mb-2.5 leading-snug text-alight">
                        {video.title}
                      </h3>
                      <p className="text-sm text-slate-100 leading-relaxed mb-6 font-normal text-alight-body">
                        {video.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-cyan-500/15 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveVideo(video)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-slate-950" />
                        <span>Play Video</span>
                      </button>

                      <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 text-slate-100 hover:text-cyan-200 border border-cyan-500/30 text-xs font-semibold tracking-wide transition-all"
                      >
                        <Send className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Enquire on Telegram</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: ALL ATTACHED LANDSCAPE DRAWING ASSETS */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/15 bg-transparent">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-cyan-500/15">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ImageIcon className="w-3.5 h-3.5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display text-alight">
                  Attached Drawing Assets &amp; Proof
                </h2>
                <p className="text-xs text-slate-300 font-mono">
                  38 Architectural &amp; Engineering Drawing Assets // Landscape 16:9
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:block text-xs font-mono text-slate-300">
                Showing {displayedImages.length} of {filteredImages.length} Assets
              </div>
              <button
                onClick={onBackToHome}
                className="text-xs font-mono text-cyan-300 hover:text-cyan-200 flex items-center gap-1.5 transition-colors cursor-pointer px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>

          {/* Discipline Filters */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-[#080d1a]/90 border border-cyan-500/25 backdrop-blur-md shadow-xl">
              {CATEGORIES.map((cat) => {
                const count = cat === 'All'
                  ? INITIAL_PROJECT_IMAGES.length
                  : INITIAL_PROJECT_IMAGES.filter((img) => img.category === cat).length;

                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setVisibleCount(12);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="ml-1.5 text-[10px] font-mono opacity-80">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid of Attached Drawings in Landscape 16:9 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {displayedImages.map((image) => {
              const telegramUrl = createTelegramUrl(
                `Hello, I'm reviewing attached drawing #${image.id}: "${image.title}" (${image.category}) on Page 2 and would like to request a quote.`,
                telegramUsername
              );

              return (
                <div
                  key={image.id}
                  id={`attached-asset-${image.id}`}
                  className="group relative flex flex-col justify-between rounded-2xl bg-[#090f1d]/90 border border-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-cyan-500/15 hover:-translate-y-1 crosshair-corner backdrop-blur-md"
                >
                  {/* 16:9 Landscape matching video size */}
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

                    <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-transparent to-transparent opacity-90"></div>

                    {/* Corner info */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-black/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                        ASSET #{image.id.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#0c1628]/90 text-cyan-100 border border-cyan-500/30 backdrop-blur-md font-mono">
                        {image.category.toUpperCase()}
                      </span>
                    </div>

                    {image.isReference && (
                      <div className="absolute top-3 right-3 z-10">
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-500/40 backdrop-blur-md">
                          REFERENCE / EXAMPLE
                        </span>
                      </div>
                    )}

                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-cyan-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <span className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 shadow-2xl font-bold flex items-center gap-2 text-xs uppercase tracking-wider">
                        <Maximize2 className="w-3.5 h-3.5 text-slate-950" />
                        <span>Inspect Drawing</span>
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-300 z-10">
                      <span className="bg-black/70 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                        LANDSCAPE 16:9 // DWG &amp; PDF
                      </span>
                      <span className="bg-black/70 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-md text-cyan-300 font-semibold">
                        Click to Enlarge
                      </span>
                    </div>
                  </div>

                  {/* Details - Alight Text & Perfect Alignment */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display tracking-tight leading-snug mb-2.5 text-alight">
                        {image.title}
                      </h3>
                      <p className="text-sm text-slate-100 leading-relaxed mb-6 font-normal text-alight-body">
                        {image.description}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-cyan-500/15 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveModalImage(image)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 text-xs font-semibold text-slate-100 hover:text-cyan-200 border border-cyan-500/30 transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Full Blueprint View</span>
                      </button>

                      <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/40 hover:border-cyan-400 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md"
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
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 12)}
                className="px-8 py-4 rounded-xl bg-[#090f1d] hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 text-slate-100 hover:text-slate-950 border border-cyan-500/30 hover:border-cyan-400 font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-cyan-500/10 active:scale-95 cursor-pointer"
              >
                Load More Drawings ({filteredImages.length - visibleCount} Remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM SECTION: BACK BUTTON & LEAD GENERATION */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/15 bg-transparent">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-[#080e1b]/95 border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden backdrop-blur-xl crosshair-corner">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Finished Reviewing Proof?
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-display mb-4 text-alight">
              Return to the Main Website or Get an Instant Quote
            </h3>

            <p className="text-sm sm:text-base text-slate-100 max-w-2xl mx-auto leading-relaxed mb-8 text-alight-body">
              Send your project specifications, CAD/PDF files, and equipment lists directly to our engineering team on Telegram for a rapid scope review.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Prominent Back Button */}
              <button
                onClick={onBackToHome}
                id="video-page-bottom-back-btn"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-cyan-500/25 active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-slate-950" />
                <span>Back to Main Website</span>
              </button>

              {/* Telegram direct contact */}
              <a
                href={generalTelegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#0d162a] hover:bg-[#132242] border border-cyan-500/40 text-cyan-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Message on Telegram</span>
              </a>

              {/* Request a Quote */}
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-cyan-500/20 border border-cyan-500/30 text-slate-100 hover:text-white font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Request a Quote</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Video Modal Player (Streamable logo removed) */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
          telegramUsername={telegramUsername}
        />
      )}

      {/* Lightbox Modal for Attached Drawings */}
      {activeModalImage && (
        <PortfolioModal
          image={activeModalImage}
          allImages={filteredImages}
          onClose={() => setActiveModalImage(null)}
          onSelectImage={(newImg) => setActiveModalImage(newImg)}
          telegramUsername={telegramUsername}
        />
      )}
    </div>
  );
};
