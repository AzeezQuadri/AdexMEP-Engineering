import React from 'react';
import { Send, ArrowRight, ArrowLeft } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';

interface MobileStickyBarProps {
  telegramUsername: string;
  onRequestQuote: () => void;
  isSecondPage?: boolean;
  onBackToHome?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  telegramUsername,
  onRequestQuote,
  isSecondPage = false,
  onBackToHome
}) => {
  const telegramUrl = createTelegramUrl(
    "Hello, I'm reaching out from mobile regarding your MEP drawing and engineering services.",
    telegramUsername
  );

  return (
    <div
      id="mobile-sticky-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080b10]/95 backdrop-blur-xl border-t border-amber-500/30 p-2.5 px-4 shadow-2xl flex items-center gap-2.5"
    >
      {isSecondPage && onBackToHome ? (
        <>
          {/* Back button on mobile */}
          <button
            onClick={onBackToHome}
            id="mobile-back-to-home-btn"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span className="truncate">Back to Main</span>
          </button>

          {/* Request quote or Telegram */}
          <button
            onClick={onRequestQuote}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-amber-500/20"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950 flex-shrink-0" />
          </button>
        </>
      ) : (
        <>
          {/* Telegram button */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#131924] border border-amber-500/40 text-amber-300 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-md"
          >
            <Send className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span className="truncate">Telegram</span>
          </a>

          {/* Request quote button */}
          <button
            onClick={onRequestQuote}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-amber-500/20"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-950 flex-shrink-0" />
          </button>
        </>
      )}
    </div>
  );
};
