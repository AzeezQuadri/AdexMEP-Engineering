import React, { useState } from 'react';
import { FAQ_LIST } from '../data/constants';
import { HelpCircle, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';

interface FAQProps {
  telegramUsername: string;
}

export const FAQ: React.FC<FAQProps> = ({ telegramUsername }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // first two open by default

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const telegramUrl = createTelegramUrl(
    "Hello, I have a specific question regarding your MEP drawing services that wasn't covered in the FAQ.",
    telegramUsername
  );

  return (
    <section id="faq" className="relative py-24 bg-[#080a0d] border-t border-white/5">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-xs tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Questions</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Clear, transparent answers about our engineering drawing deliverables, supported formats, BIM coordination, and engagement workflow.
          </p>
        </div>

        {/* 10 FAQ Items Accordion */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndices.includes(idx);

            return (
              <div
                key={idx}
                id={`faq-item-${idx + 1}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#10151f] border-amber-500/40 shadow-lg shadow-amber-500/5'
                    : 'bg-[#0d1016]/80 border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white font-display tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform ${
                      isOpen ? 'bg-amber-500 text-slate-950 rotate-180' : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Telegram Enquiry Box */}
        <div className="mt-12 p-6 rounded-xl bg-[#0d1118] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white font-display">Have a question not listed here?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Ask our engineering drafting team directly on Telegram for immediate answers.</p>
          </div>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/20 whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Ask on Telegram</span>
          </a>
        </div>

      </div>
    </section>
  );
};
