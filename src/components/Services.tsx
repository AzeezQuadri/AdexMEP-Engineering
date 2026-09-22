import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/constants';
import { ServiceCard } from './ServiceCard';
import { Layers, Send, ArrowRight, Sparkles } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';

interface ServicesProps {
  telegramUsername: string;
  onRequestQuote: () => void;
}

export const Services: React.FC<ServicesProps> = ({ telegramUsername, onRequestQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mep' | 'building' | 'advanced'>('all');

  const filterCategories: { id: 'all' | 'mep' | 'building' | 'advanced'; label: string }[] = [
    { id: 'all', label: 'All 14 Services' },
    { id: 'mep', label: 'Core MEP Disciplines' },
    { id: 'building', label: 'Residential & Commercial' },
    { id: 'advanced', label: 'Revit BIM & Coordination' },
  ];

  const filteredServices = SERVICES_LIST.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'mep') {
      return ['mep-drawings', 'hvac-design', 'plumbing-design', 'electrical-design', 'fire-protection'].includes(s.id);
    }
    if (activeFilter === 'building') {
      return ['residential-mep', 'commercial-mep', 'industrial-mep', 'mechanical-room', 'permit-construction'].includes(s.id);
    }
    if (activeFilter === 'advanced') {
      return ['revit-bim', 'mep-coordination', 'shop-drawings', 'as-built-drawings'].includes(s.id);
    }
    return true;
  });

  const generalTelegramUrl = createTelegramUrl(
    "Hello, I'd like to discuss the MEP drawing services required for my project and receive a proposal.",
    telegramUsername
  );

  return (
    <section id="services" className="relative py-28 bg-[#06080d] border-t border-white/[0.08] overflow-hidden">
      {/* Blueprint grid accent background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs tracking-wider mb-5 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-[0.15em] uppercase font-semibold">ENGINEERING SCOPE &amp; DISCIPLINES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5 leading-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">MEP Services</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From single-trade mechanical drawings to fully coordinated multi-discipline Revit BIM models, our engineering drawing packages deliver contractor-ready clarity.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10 p-2 rounded-2xl bg-[#0b0e15]/90 border border-white/[0.08] backdrop-blur-md shadow-xl">
            {filterCategories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-md shadow-amber-500/25 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 14 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              telegramUsername={telegramUsername}
            />
          ))}
        </div>

        {/* Mid-services Conversion Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0e1420] via-[#0b0e15] to-[#121826] border border-amber-500/40 relative overflow-hidden shadow-2xl shadow-black/80">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 z-10">
            <div className="max-w-2xl text-center md:text-left">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Custom Engineering Scope
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1 mb-3 leading-snug">
                Need a specific combination of disciplines or custom deliverables?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Send your current architectural plans, equipment lists or project scope to our engineering team on Telegram for an immediate, tailored quotation.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center">
              <a
                href={generalTelegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/25 whitespace-nowrap"
              >
                <Send className="w-4 h-4 text-slate-950" />
                <span>Discuss on Telegram</span>
              </a>
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#141b28] hover:bg-[#1d273a] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
