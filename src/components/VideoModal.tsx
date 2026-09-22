import React, { useEffect, useState } from 'react';
import { X, Send, Play, ArrowLeft, ExternalLink, RefreshCw } from 'lucide-react';
import { ProjectVideo } from '../types';
import { createTelegramUrl } from '../utils/telegram';

interface VideoModalProps {
  video: ProjectVideo | null;
  onClose: () => void;
  telegramUsername: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, telegramUsername }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [video, onClose]);

  if (!video) return null;

  const telegramUrl = createTelegramUrl(
    `Hello, I watched your project video "${video.title}" (${video.category}). I'd like to discuss a quote for similar MEP engineering and drawing services.`,
    telegramUsername
  );

  const directWatchUrl = video.youtubeUrl || `https://www.youtube.com/watch?v=${video.youtubeId || video.id}`;
  const embedSource = `${video.embedUrl}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div
      id="video-player-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#0a0d14] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-black/90 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-[#06080d]">
          <div className="flex items-center gap-2.5">
            {/* Prominent Back Button */}
            <button
              onClick={onClose}
              id="video-modal-top-back-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/40 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer active:scale-95 group"
              title="Go Back"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back</span>
            </button>

            <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Play className="w-3.5 h-3.5 fill-cyan-400" />
            </div>
            <div>
              <span className="font-mono text-[11px] font-bold tracking-widest text-cyan-300 uppercase">
                ENGINEERING WALKTHROUGH
              </span>
              <span className="text-slate-300 text-xs ml-2 font-mono hidden sm:inline">
                // {video.category}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={directWatchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-200 border border-white/10 text-xs font-mono transition-colors"
              title="Open video in external player"
            >
              <span>Watch External</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-300 text-slate-300 border border-white/5 transition-all cursor-pointer"
              title="Close modal (ESC)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 16:9 Landscape Video Container */}
        <div className="relative w-full aspect-video bg-black overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#06080d] z-10 gap-3">
              <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin" />
              <p className="text-xs font-mono text-cyan-200 tracking-wider">
                LOADING 1080P MEP VIDEO FEED...
              </p>
            </div>
          )}

          <iframe
            src={embedSource}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>

        {/* Modal Footer Info with Back and Telegram buttons */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-[#080b11] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white font-display tracking-tight">
              {video.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {video.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              id="video-modal-bottom-back-btn"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/20 whitespace-nowrap"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>Discuss Project on Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
