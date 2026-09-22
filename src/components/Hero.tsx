import React from 'react';
import { ArrowRight, Send, Layers, CheckCircle2, Video as VideoIcon, Play } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';

interface HeroProps {
  telegramUsername: string;
  onRequestQuote: () => void;
  onViewServices: () => void;
  onViewVideoProof?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  telegramUsername,
  onRequestQuote,
  onViewServices,
  onViewVideoProof
}) => {
  const telegramUrl = createTelegramUrl(
    "Hello, I'm interested in discussing an MEP Drawing & Engineering project. I'd like to get a quote and review scope.",
    telegramUsername
  );

  const keyDisciplines = [
    'HVAC & Mechanical',
    'Plumbing & Drainage',
    'Electrical & Power',
    'Fire Protection',
    'Revit MEP / BIM',
    'Clash Coordination'
  ];

  return (
    <section
      id="home"
      className="relative min-h-[94vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent"
    >
      {/* Blueprint grid background with radial dark vignette */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-35 pointer-events-none"></div>
      <div className="absolute inset-0 bg-blueprint-radial pointer-events-none"></div>
      
      {/* Architectural ambient cyan light beams */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/[0.12] via-sky-400/[0.05] to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/[0.06] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-400/[0.06] rounded-full blur-3xl pointer-events-none"></div>

      {/* Modern CAD Schematic Grid markers */}
      <div className="absolute top-24 left-8 sm:left-14 font-mono text-[10px] text-cyan-400/50 tracking-widest pointer-events-none hidden md:block">
        [SYS-GRID: 01.MEP] // COORD: 40.7128° N, 74.0060° W // ELEV: +0.000m
      </div>
      <div className="absolute top-24 right-8 sm:right-14 font-mono text-[10px] text-cyan-400/50 tracking-widest pointer-events-none hidden md:block">
        REVIT BIM &amp; AUTOCAD 2D/3D // COMBINED SERVICES DRAWINGS (CSD)
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Engineering discipline chip - Alight & Radiant */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-200 text-xs font-mono tracking-wider mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400"></span>
            <span className="tracking-[0.15em] font-bold uppercase">PRECISION MEP ENGINEERING &amp; DRAFTING</span>
          </div>

          {/* Master Headline - Fully Alight with Intense Radiant Highlight on white headline "MEP Drawing" */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.12] mb-6 text-alight">
            Professional <span className="mep-drawing-highlight text-white mx-1">MEP Drawing</span> &amp; Engineering Services
          </h1>

          {/* Supporting Text - High Contrast Radiant Body Text */}
          <p className="text-lg sm:text-xl text-slate-100 max-w-3xl leading-relaxed mb-8 font-normal text-alight-body">
            Accurate, coordinated and professional MEP drawing support for residential, commercial and industrial projects worldwide.
          </p>

          {/* Quick link to Page 2 Video Proof */}
          {onViewVideoProof && (
            <div className="mb-8">
              <button
                onClick={onViewVideoProof}
                id="hero-watch-videos-badge-btn"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/45 text-cyan-200 hover:text-white font-mono text-xs tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/15 group cursor-pointer active:scale-95"
              >
                <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-slate-950 translate-x-[0.5px]" />
                </div>
                <span className="font-bold uppercase tracking-wider">WATCH ALL VIDEO PROOFS (PAGE 2)</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* 3 Primary Actions - Balanced Spacing & Crisp Alignment */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-xl mb-14">
            {/* Primary Action 1: REQUEST A QUOTE */}
            <button
              onClick={onRequestQuote}
              id="hero-request-quote-btn"
              className="flex-1 min-w-[200px] sm:flex-none inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-cyan-500/25 cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            {/* Primary Action 2: VIEW SERVICES */}
            <button
              onClick={onViewServices}
              id="hero-view-services-btn"
              className="flex-1 min-w-[180px] sm:flex-none inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#0a1222]/90 hover:bg-[#101b32] border border-cyan-500/25 hover:border-cyan-400 text-slate-100 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer backdrop-blur-md"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>VIEW SERVICES</span>
            </button>

            {/* Primary Action 3: MESSAGE US ON TELEGRAM */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-telegram-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#0a1426]/90 hover:bg-[#101e38] border border-cyan-500/35 text-cyan-200 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl shadow-cyan-950/40 cursor-pointer backdrop-blur-md"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>MESSAGE US ON TELEGRAM</span>
            </a>
          </div>

          {/* Quick Pillar Highlights (Who we serve & Disciplines) - Clean Aligned Grid */}
          <div className="w-full pt-8 border-t border-cyan-500/15">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {keyDisciplines.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-[#090f1e]/90 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-[#0e162c] transition-all backdrop-blur-md group shadow-md"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold text-slate-100 text-center whitespace-nowrap">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Technical Detail Strip - Aligned and Alight */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-300 font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              2D AutoCAD (.DWG) &amp; 3D Revit (.RVT)
            </span>
            <span className="text-slate-600">|</span>
            <span>Clash-Free Coordination</span>
            <span className="text-slate-600">|</span>
            <span>Multi-Discipline Engineering Support</span>
            <span className="text-slate-600">|</span>
            <span className="text-cyan-300 font-bold">Direct Telegram @{telegramUsername.replace(/^@/, '')}</span>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050811] to-transparent pointer-events-none"></div>
    </section>
  );
};
