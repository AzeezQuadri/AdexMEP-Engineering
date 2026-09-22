import React, { useState } from 'react';
import { Play, Video as VideoIcon, Send, Sparkles, Layers, ArrowRight, ExternalLink } from 'lucide-react';
import { PROJECT_VIDEOS } from '../data/constants';
import { ProjectVideo } from '../types';
import { VideoModal } from './VideoModal';
import { createTelegramUrl } from '../utils/telegram';
import { handleImageError } from '../utils/imageFallback';

interface VideoShowcaseProps {
  telegramUsername: string;
  onOpenVideoProofPage?: () => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ 
  telegramUsername,
  onOpenVideoProofPage 
}) => {
  const [activeVideo, setActiveVideo] = useState<ProjectVideo | null>(null);

  // High quality landscape posters
  const POSTER_BGS = [
    'https://i.ibb.co/1YzwJYX7/IMG-2435.jpg',
    'https://i.ibb.co/nsV3rGyT/IMG-2440.jpg',
    'https://i.ibb.co/CpFMB7V7/IMG-2439.jpg',
    'https://i.ibb.co/PGyqHmXL/IMG-2438.jpg',
  ];

  return (
    <section id="videos" className="relative py-28 bg-transparent border-t border-cyan-500/15 overflow-hidden">
      {/* Blueprint grid pattern with subtle cyan radial illumination */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/[0.06] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Perfectly Aligned & Alight */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/35 text-cyan-200 font-mono text-xs tracking-wider mb-5 backdrop-blur-md shadow-md shadow-cyan-500/10">
            <VideoIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-[0.15em] uppercase font-bold">ENGINEERING VIDEO SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5 leading-tight text-alight">
            Coordinated MEP <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 drop-shadow-[0_2px_12px_rgba(6,182,212,0.3)]">Project Walkthroughs</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal mb-8 text-alight-body">
            Inspect our multi-trade MEP drawings, HVAC duct routing, electrical layouts, and 3D Revit BIM coordination walkthroughs in widescreen landscape presentation.
          </p>

          {onOpenVideoProofPage && (
            <button
              onClick={onOpenVideoProofPage}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/40 hover:border-cyan-400 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl shadow-cyan-500/10 group cursor-pointer active:scale-95"
            >
              <VideoIcon className="w-4 h-4" />
              <span>Go to Dedicated Video Proof Page (Page 2)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* 4 Video Cards Grid in Landscape 16:9 Aspect Ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECT_VIDEOS.map((video, idx) => {
            const telegramUrl = createTelegramUrl(
              `Hello, I watched your video "${video.title}" (${video.category}) and would like to discuss my MEP project requirements.`,
              telegramUsername
            );

            return (
              <div
                key={video.id}
                id={`video-card-${video.id}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#090f1d]/90 border border-cyan-500/25 hover:border-cyan-400/60 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-cyan-500/15 hover:-translate-y-1 crosshair-corner backdrop-blur-md"
              >
                {/* 16:9 Landscape Video Container matching the video size */}
                <div
                  className="relative w-full aspect-video bg-[#040609] overflow-hidden cursor-pointer"
                  onClick={() => setActiveVideo(video)}
                >
                  {/* Poster image */}
                  <img
                    src={video.thumbnailUrl || POSTER_BGS[idx] || POSTER_BGS[0]}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, video.title)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-75 group-hover:opacity-90"
                  />

                  {/* High-end dark gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-black/30 to-transparent"></div>

                  {/* Corner CAD reticles / crosshairs */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-cyan-300/60 pointer-events-none">
                    + [DISCIPLINE: {video.category.toUpperCase()}]
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

                  {/* Modern Concentric Pulsing Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative flex items-center justify-center">
                      {/* Ambient cyan pulse halo */}
                      <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cyan-400/20 animate-ping pointer-events-none opacity-50"></div>
                      <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cyan-500/30 blur-md pointer-events-none"></div>
                      
                      {/* Play Button Disc */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950 translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Technical HUD Strip on Video */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-200 z-10">
                    <span className="flex items-center gap-1.5 bg-black/75 px-2.5 py-1 rounded-md border border-cyan-500/30 backdrop-blur-md text-cyan-300 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Interactive Walkthrough
                    </span>
                    <span className="bg-black/75 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md text-slate-300">
                      Click to Watch
                    </span>
                  </div>
                </div>

                {/* Card Content & Details - Alight & Perfectly Aligned */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display tracking-tight mb-2.5 leading-snug text-alight">
                      {video.title}
                    </h3>
                    <p className="text-sm text-slate-100 leading-relaxed mb-6 font-normal text-alight-body">
                      {video.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-cyan-500/15 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveVideo(video)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Play Walkthrough</span>
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

        {onOpenVideoProofPage && (
          <div className="mt-14 text-center">
            <button
              onClick={onOpenVideoProofPage}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-cyan-500/25 group cursor-pointer"
            >
              <VideoIcon className="w-4 h-4 text-slate-950" />
              <span>View All Video Proof &amp; Attached Assets on Page 2</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
          telegramUsername={telegramUsername}
        />
      )}
    </section>
  );
};
