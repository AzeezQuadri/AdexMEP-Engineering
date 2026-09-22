import React from 'react';
import { PackageItem } from '../types';
import { Check, Send, Sparkles, ArrowRight } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';

interface PricingProps {
  packages: PackageItem[];
  telegramUsername: string;
  onRequestCustomQuote: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  packages,
  telegramUsername,
  onRequestCustomQuote
}) => {
  const customQuoteTelegramUrl = createTelegramUrl(
    "Hello, I need a custom MEP drawing scope. I'd like to discuss my drawings, required deliverables, and get a project-specific quote.",
    telegramUsername
  );

  return (
    <section id="packages" className="relative py-28 bg-[#06080d] border-t border-white/[0.08] overflow-hidden">
      {/* Blueprint grid pattern */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs tracking-wider mb-5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="tracking-[0.15em] uppercase font-semibold">TRANSPARENT SERVICE TIERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5 leading-tight">
            Engineering Drawing <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Packages &amp; Pricing</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Clear starting prices tailored to project scale. Review our structured service packages and connect directly via Telegram to finalize your drawings scope.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const isProfessional = pkg.isPopular || pkg.id === 'professional-mep';
            const telegramUrl = createTelegramUrl(pkg.telegramMessage, telegramUsername);

            return (
              <div
                key={pkg.id}
                id={`package-${pkg.id}`}
                className={`relative flex flex-col justify-between rounded-3xl transition-all duration-500 ${
                  isProfessional
                    ? 'bg-gradient-to-b from-[#111724] via-[#0d121c] to-[#090d14] border-2 border-amber-500/70 shadow-2xl shadow-amber-500/15 lg:-translate-y-3 z-10'
                    : 'bg-[#0a0d14]/90 border border-white/[0.08] hover:border-amber-500/40 shadow-xl'
                } p-8 sm:p-9 crosshair-corner`}
              >
                {/* Visual highlight badge for central Professional package */}
                {isProfessional && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold font-mono text-[10px] uppercase tracking-widest shadow-lg shadow-amber-500/30 whitespace-nowrap">
                      FEATURED MULTI-DISCIPLINE
                    </span>
                  </div>
                )}

                <div>
                  {/* Package Top Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-amber-400 tracking-widest bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                      PACKAGE {pkg.numberStr}
                    </span>
                    {isProfessional && (
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400"></span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white font-display tracking-tight mb-3">
                    {pkg.name}
                  </h3>

                  {/* Starting Price */}
                  <div className="flex items-baseline gap-2 mb-7 pb-6 border-b border-white/[0.08]">
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Starting at</span>
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                      ${pkg.startingPrice}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">/ baseline</span>
                  </div>

                  {/* Suitable For */}
                  <div className="mb-7">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-3">
                      Suitable for:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.suitableFor.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Included Deliverables */}
                  <div className="mb-8">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-3.5">
                      Deliverables Include:
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                          <Check className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Package Specific CTA to Telegram */}
                <div className="pt-5 border-t border-white/[0.08]">
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-4 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md ${
                      isProfessional
                        ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-amber-500/25 active:scale-95'
                        : 'bg-[#121722] hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 text-slate-200 hover:text-slate-950 border border-amber-500/30'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Pricing Disclaimer & Custom Quote Box */}
        <div className="mt-16 max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#0a0d14] border border-amber-500/30 text-center relative overflow-hidden shadow-2xl">
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-4">
            &ldquo;Prices shown are starting prices. Final pricing depends on project size, scope, drawing requirements, complexity and deliverables.&rdquo;
          </p>
          <p className="text-sm font-semibold text-amber-300 mb-8">
            Need a custom scope? Message us on Telegram for a project-specific quote.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onRequestCustomQuote}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/25 cursor-pointer"
            >
              <span>REQUEST CUSTOM QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={customQuoteTelegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4 text-amber-400" />
              <span>Discuss Custom Scope on Telegram</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
