import React from 'react';
import { Send, ArrowRight, Sparkles } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';

interface CTASectionProps {
  telegramUsername: string;
  onRequestQuote: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ telegramUsername, onRequestQuote }) => {
  const telegramUrl = createTelegramUrl(
    "Hello, I'm ready to get started with an MEP engineering drawing project. Let's discuss scope and quotation.",
    telegramUsername
  );

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#080a0d] to-[#0d121a] border-t border-white/5 overflow-hidden">
      {/* Background blueprint elements */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>READY TO COMMENCE DRAWINGS?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5 leading-tight">
          Deliver Accurate, Contractor-Ready <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
            MEP Engineering Sets
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Connect directly with our engineering drafting team on Telegram or request a project quotation with your existing architectural plans today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-bottom-telegram-btn"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/25 cursor-pointer"
          >
            <Send className="w-4 h-4 text-slate-950" />
            <span>MESSAGE ON TELEGRAM (@{telegramUsername.replace(/^@/, '')})</span>
          </a>

          <button
            onClick={onRequestQuote}
            id="cta-bottom-quote-btn"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#141b27] hover:bg-[#1d2738] border border-white/10 hover:border-amber-400/50 text-white font-semibold text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
