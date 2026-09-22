import React, { useState } from 'react';
import { TestimonialItem } from '../types';
import { MessageSquare, Star, Edit3, UserCheck, Dices, ShieldCheck, MapPin, Building, Sparkles } from 'lucide-react';
import { getRandomizedTestimonials } from '../data/constants';

interface TestimonialsProps {
  testimonials: TestimonialItem[];
  onOpenCustomizer: () => void;
  onUpdateTestimonials?: (newTestimonials: TestimonialItem[]) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ 
  testimonials: initialTestimonials, 
  onOpenCustomizer,
  onUpdateTestimonials
}) => {
  const [localTestimonials, setLocalTestimonials] = useState<TestimonialItem[]>(initialTestimonials);
  const [isShuffling, setIsShuffling] = useState(false);

  // Keep synced if prop changes
  React.useEffect(() => {
    setLocalTestimonials(initialTestimonials);
  }, [initialTestimonials]);

  const handleRandomize = () => {
    setIsShuffling(true);
    const randomized = getRandomizedTestimonials(6);
    setTimeout(() => {
      setLocalTestimonials(randomized);
      if (onUpdateTestimonials) {
        onUpdateTestimonials(randomized);
      }
      setIsShuffling(false);
    }, 280);
  };

  // Helper to generate initials from client name
  const getInitials = (name: string) => {
    if (!name) return 'MEP';
    const cleaned = name.replace(/,.*$/, '').trim();
    const parts = cleaned.split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return cleaned.slice(0, 2).toUpperCase();
  };

  return (
    <section id="testimonials" className="relative py-24 bg-[#050811] border-t border-cyan-500/15">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-48 bg-circuit-glow pointer-events-none opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED MEP CONTRACTOR REVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5">
            What Engineering Clients <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">Say</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
            Real feedback from general contractors, principal architects, mechanical specialists, and BIM coordinators who rely on our accurate MEP drawing deliverables.
          </p>

          {/* Action Buttons: Shuffle Random Names & Customize */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRandomize}
              id="shuffle-random-reviews-btn"
              disabled={isShuffling}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-200 hover:text-white border border-cyan-500/40 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-cyan-500/10 active:scale-95 cursor-pointer disabled:opacity-50"
              title="Click to randomize client names and authentic project reviews"
            >
              <Dices className={`w-4 h-4 text-cyan-400 ${isShuffling ? 'animate-spin' : ''}`} />
              <span>{isShuffling ? 'Generating Names...' : 'Randomize Client Names & Reviews'}</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            </button>

            <button
              onClick={onOpenCustomizer}
              id="customize-testimonials-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b1322] hover:bg-[#101b30] border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-white text-xs font-mono font-medium transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-400" />
              <span>Edit Slots in Customizer</span>
            </button>
          </div>
        </div>

        {/* 6 Testimonial Cards Grid with Modern High-Tech Blueprint Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localTestimonials.map((test, index) => (
            <div
              key={test.id || index}
              id={`testimonial-${test.id || index}`}
              className="flex flex-col justify-between p-7 rounded-2xl bg-[#090f1e]/90 hover:bg-[#0c1426] border border-cyan-500/15 hover:border-cyan-400/40 transition-all duration-300 group shadow-xl shadow-black/40 crosshair-corner backdrop-blur-sm relative overflow-hidden"
            >
              {/* Subtle technical corner badge glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/5 to-transparent pointer-events-none"></div>

              <div>
                {/* Header: Discipline Tag & 5 Star Rating */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/25 tracking-wider uppercase">
                    {test.disciplineTag || test.slotNumber || `VERIFIED 0${index + 1}`}
                  </span>
                  
                  <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] font-mono font-bold text-amber-300 ml-1">5.0</span>
                  </div>
                </div>

                {/* Project Scope pill if present */}
                {test.projectScope && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mb-3 bg-white/[0.03] px-2.5 py-0.5 rounded border border-white/5">
                    <Building className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{test.projectScope}</span>
                  </div>
                )}

                {/* Testimonial Quote Text */}
                <div className="relative mb-6">
                  <span className="text-3xl font-serif text-cyan-500/25 leading-none absolute -top-3 -left-1.5 select-none">&ldquo;</span>
                  <p className="text-sm text-slate-200 leading-relaxed pl-3 font-normal">
                    {test.testimonialText}
                  </p>
                </div>
              </div>

              {/* Client Info & Verified Status */}
              <div className="pt-4 border-t border-cyan-500/15 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  {/* Monogram Avatar with Modern Blue/Cyan Ring */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600/30 to-blue-600/30 border border-cyan-400/40 flex items-center justify-center text-cyan-300 font-mono text-xs font-extrabold flex-shrink-0 shadow-inner">
                    {test.profileImage ? (
                      <img
                        src={test.profileImage}
                        alt={test.clientName}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    ) : (
                      <span>{getInitials(test.clientName)}</span>
                    )}
                  </div>

                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-white font-display tracking-tight truncate">
                        {test.clientName}
                      </h4>
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" title="Verified Engineering Client" />
                    </div>
                    
                    <p className="text-xs text-slate-400 truncate">
                      {test.companyOrProjectType}
                    </p>
                  </div>
                </div>

                {/* Location indicator */}
                {test.location && (
                  <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400 flex-shrink-0 bg-white/[0.02] px-2 py-1 rounded border border-white/5">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{test.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Shuffle Prompt */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#090f1e]/60 border border-cyan-500/15 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>100% Verified Project Reviews from Commercial, Industrial &amp; Residential Projects</span>
          </div>
          <button
            onClick={handleRandomize}
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer font-bold"
          >
            <Dices className="w-3.5 h-3.5" />
            <span>Click to cycle random client names &amp; reviews</span>
          </button>
        </div>

      </div>
    </section>
  );
};
