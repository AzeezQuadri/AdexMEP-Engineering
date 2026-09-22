import React from 'react';
import { Flame, Check, Sparkles, Type } from 'lucide-react';

export type FontThemeId = 'fire' | 'blueprint' | 'modern' | 'orbitron' | 'cadmono';

export interface FontOption {
  id: FontThemeId;
  name: string;
  fontFamilyName: string;
  fontCSS: string;
  isRecommended?: boolean;
  tagline: string;
}

export const FONT_OPTIONS: FontOption[] = [
  {
    id: 'fire',
    name: 'Inferno Fire',
    fontFamilyName: 'Russo One',
    fontCSS: "'Russo One', sans-serif",
    isRecommended: true,
    tagline: 'Fiery Industrial Display'
  },
  {
    id: 'blueprint',
    name: 'Cyber Blueprint',
    fontFamilyName: 'Space Grotesk',
    fontCSS: "'Space Grotesk', sans-serif",
    tagline: 'Technical Drafting'
  },
  {
    id: 'modern',
    name: 'Modern Neo',
    fontFamilyName: 'Plus Jakarta',
    fontCSS: "'Plus Jakarta Sans', sans-serif",
    tagline: 'Architectural Clean'
  },
  {
    id: 'orbitron',
    name: 'Sci-Fi Orbit',
    fontFamilyName: 'Orbitron',
    fontCSS: "'Orbitron', sans-serif",
    tagline: 'Futuristic HUD'
  },
  {
    id: 'cadmono',
    name: 'CAD Precision',
    fontFamilyName: 'JetBrains Mono',
    fontCSS: "'JetBrains Mono', monospace",
    tagline: 'Schematic Monospace'
  }
];

interface TopFontSelectorProps {
  currentFont: FontThemeId;
  onSelectFont: (fontId: FontThemeId) => void;
}

export const TopFontSelector: React.FC<TopFontSelectorProps> = ({
  currentFont,
  onSelectFont
}) => {
  return (
    <div
      id="top-edge-font-selector"
      className="fixed top-0 left-0 right-0 z-50 bg-[#03060d]/95 backdrop-blur-xl border-b border-white/[0.08] text-xs py-1.5 px-3 sm:px-6 shadow-2xl shadow-black/80 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
        
        {/* Left Edge Label */}
        <div className="flex items-center gap-2 flex-shrink-0 text-slate-300 select-none">
          <div className="w-5 h-5 rounded-md bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
            <Type className="w-3 h-3" />
          </div>
          <span className="hidden md:inline font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
            Choose Font:
          </span>
          <span className="md:hidden font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
            Fonts:
          </span>
        </div>

        {/* 5 Font Options Buttons */}
        <div className="flex items-center gap-2 sm:gap-2.5 flex-nowrap flex-shrink-0 py-0.5">
          {FONT_OPTIONS.map((opt) => {
            const isActive = currentFont === opt.id;

            // OPTION 1: RECOMMENDED FONT -> Red & White + Black displaying fire!
            if (opt.isRecommended) {
              return (
                <button
                  key={opt.id}
                  id={`font-opt-${opt.id}`}
                  onClick={() => onSelectFont(opt.id)}
                  title={`Recommended: ${opt.name} (${opt.fontFamilyName}) - Red, White & Black Fire Theme`}
                  className={`group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden border ${
                    isActive
                      ? 'bg-black text-white border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.7)] animate-fire-glow'
                      : 'bg-black/90 hover:bg-black text-white/95 border-red-600/70 hover:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.4)]'
                  }`}
                  style={{ minHeight: '34px' }}
                >
                  {/* Subtle procedural fire ember background effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Fire Sparks Animation */}
                  <span className="absolute top-1 left-3 w-1 h-1 rounded-full bg-red-400 animate-fire-spark pointer-events-none opacity-80"></span>
                  <span className="absolute bottom-1 right-4 w-1 h-1 rounded-full bg-amber-300 animate-fire-spark pointer-events-none opacity-75" style={{ animationDelay: '0.4s' }}></span>

                  {/* Animated Fire Flame Icon */}
                  <div className="relative flex items-center justify-center flex-shrink-0">
                    <Flame className="w-4 h-4 text-red-500 fill-orange-500 animate-flame-waver drop-shadow-[0_0_6px_#ef4444]" />
                  </div>

                  {/* "RECOMMENDED" Badge in Red and White on Black */}
                  <span className="flex-shrink-0 px-1.5 py-0.5 rounded-full bg-red-600 text-white font-black text-[9px] uppercase tracking-wider shadow-[0_0_8px_rgba(239,68,68,0.9)] border border-white/20">
                    RECOMMENDED
                  </span>

                  {/* Font Name in Actual Russo One Face with Red & White Text Display */}
                  <span
                    className="font-bold text-xs sm:text-[13px] tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] flex items-center gap-1 whitespace-nowrap"
                    style={{ fontFamily: opt.fontCSS }}
                  >
                    <span>{opt.name}</span>
                    <span className="hidden lg:inline text-[10px] text-red-300 font-normal opacity-90">
                      (Russo One)
                    </span>
                  </span>

                  {/* Active Checkmark */}
                  {isActive && (
                    <span className="w-3.5 h-3.5 rounded-full bg-red-500 text-white flex items-center justify-center flex-shrink-0 shadow-[0_0_6px_#ef4444]">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                  )}
                </button>
              );
            }

            // Standard Fonts (Options 2 to 5)
            return (
              <button
                key={opt.id}
                id={`font-opt-${opt.id}`}
                onClick={() => onSelectFont(opt.id)}
                title={`Select ${opt.name} (${opt.fontFamilyName})`}
                className={`relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-200 border-cyan-400/80 shadow-[0_0_14px_rgba(6,182,212,0.35)]'
                    : 'bg-[#0a101f]/70 hover:bg-[#101b33] text-slate-300 hover:text-white border-white/10 hover:border-cyan-500/30'
                }`}
                style={{ minHeight: '34px' }}
              >
                <span
                  className="font-medium text-xs sm:text-[12px] tracking-tight"
                  style={{ fontFamily: opt.fontCSS }}
                >
                  {opt.name}
                </span>

                {isActive && (
                  <span className="w-3.5 h-3.5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right active indicator */}
        <div className="hidden xl:flex items-center gap-1.5 text-[10px] font-mono text-slate-400 flex-shrink-0">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Active:</span>
          <span className="text-white font-bold">
            {FONT_OPTIONS.find((f) => f.id === currentFont)?.name}
          </span>
        </div>
      </div>
    </div>
  );
};
