import React from 'react';
import { 
  FileText, 
  Presentation, 
  MessageSquare, 
  Network, 
  Building, 
  Cpu, 
  CheckCircle2, 
  FolderCheck, 
  Coins, 
  Shield, 
  Compass, 
  Layers 
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5 text-amber-400" />,
  Presentation: <Presentation className="w-5 h-5 text-amber-400" />,
  MessageSquare: <MessageSquare className="w-5 h-5 text-amber-400" />,
  Network: <Network className="w-5 h-5 text-amber-400" />,
  Buildings: <Building className="w-5 h-5 text-amber-400" />,
  Cpu: <Cpu className="w-5 h-5 text-amber-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-amber-400" />,
  FolderCheck: <FolderCheck className="w-5 h-5 text-amber-400" />,
  Coins: <Coins className="w-5 h-5 text-amber-400" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="relative py-24 bg-[#080a0d] border-t border-white/5 overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-xs tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>STANDARDS &amp; QUALITY ASSURANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5">
            Why Partner With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Engineering Team</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We focus on technical precision, coordinated multi-trade documentation, and transparent communication to ensure your MEP drawings are accurate, clean, and contractor-ready.
          </p>
        </div>

        {/* 9 Quality Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div
              key={point.title}
              className="p-6 rounded-2xl bg-[#0e1219]/90 border border-white/5 hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#141b27] border border-amber-500/25 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/10 group-hover:border-amber-500/40 transition-colors">
                  {ICON_MAP[point.iconName] || <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] text-amber-400/70 font-semibold">0{index + 1}</span>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-display tracking-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Drafting Standards Callout Banner */}
        <div className="mt-14 p-6 rounded-xl bg-[#0c1016] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span>Standardized Layering &amp; Line Weights (AIA / ISO standards compliant)</span>
          </div>
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span>Coordinated Spatial Clearance &amp; System Color Coding</span>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span>Autodesk AutoCAD &amp; Autodesk Revit Native File Outputs</span>
          </div>
        </div>

      </div>
    </section>
  );
};
