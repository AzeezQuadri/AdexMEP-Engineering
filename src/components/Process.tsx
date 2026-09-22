import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/constants';
import { FileUp, Search, MessageSquareCode, PenTool, CheckCircle, ArrowRight, GitFork } from 'lucide-react';

interface ProcessProps {
  onStartProject: () => void;
}

const STEP_ICONS = [
  <FileUp className="w-5 h-5 text-amber-400" />,
  <Search className="w-5 h-5 text-amber-400" />,
  <MessageSquareCode className="w-5 h-5 text-amber-400" />,
  <PenTool className="w-5 h-5 text-amber-400" />,
  <CheckCircle className="w-5 h-5 text-amber-400" />
];

export const Process: React.FC<ProcessProps> = ({ onStartProject }) => {
  return (
    <section id="process" className="relative py-24 bg-[#090c10] border-t border-white/5">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-xs tracking-wider mb-4">
            <GitFork className="w-3.5 h-3.5" />
            <span>ENGINEERING WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Works</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A structured, 5-stage coordination process ensuring clarity, precision, and reliable delivery of your MEP drawing sets.
          </p>
        </div>

        {/* 5 Steps Horizontal / Responsive Flow */}
        <div className="relative">
          {/* Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1px] bg-gradient-to-r from-amber-500/20 via-amber-400/40 to-amber-500/20 -translate-y-12 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#0e1219]/90 border border-white/5 hover:border-amber-500/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg crosshair-corner"
              >
                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/25">
                      STEP {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#141b27] border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                      {STEP_ICONS[idx]}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors font-display tracking-tight mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 group-hover:text-amber-400/80 transition-colors">
                  <span>Phase {step.step} Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartProject}
            id="process-start-project-btn"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/25"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>
    </section>
  );
};
