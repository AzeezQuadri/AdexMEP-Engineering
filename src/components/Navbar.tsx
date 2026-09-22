import React, { useState, useEffect } from 'react';
import { Send, Menu, X, Settings2, ArrowRight } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';

interface NavbarProps {
  businessName: string;
  telegramUsername: string;
  onOpenCustomizer: () => void;
  onRequestQuoteClick: () => void;
  onOpenVideoProof?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  businessName,
  telegramUsername,
  onOpenCustomizer,
  onRequestQuoteClick,
  onOpenVideoProof
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Video Proof (Page 2)', href: '#video-proof', isVideoProof: true },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Packages', href: '#packages' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#quote' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isVideoProof?: boolean) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (isVideoProof && onOpenVideoProof) {
      onOpenVideoProof();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const telegramUrl = createTelegramUrl(
    "Hello, I'd like to discuss an MEP engineering drawing project and get a quote.",
    telegramUsername
  );

  return (
    <header
      id="site-header"
      className={`fixed top-[44px] left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050811]/90 backdrop-blur-xl border-b border-cyan-500/15 py-3.5 shadow-2xl shadow-black/90'
          : 'bg-[#050811]/60 backdrop-blur-md border-b border-white/[0.04] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Business Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="nav-logo"
            className="flex items-center gap-3.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/25">
              <div className="w-full h-full bg-[#070c18] rounded-[11px] flex items-center justify-center relative overflow-hidden group-hover:bg-[#0c152a] transition-colors">
                <div className="absolute inset-0 bg-blueprint-grid-dense opacity-40"></div>
                <div className="relative flex flex-col items-center justify-center font-mono text-[10px] font-bold text-cyan-300 tracking-tighter leading-none">
                  <span>MEP</span>
                  <span className="w-4 h-[1px] bg-cyan-400 my-[1px]"></span>
                  <span className="text-[8px] text-sky-200">CAD</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors font-display leading-tight">
                {businessName}
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 font-medium">
                Engineering &amp; Drafting
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isVideoProof)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all ${
                  link.isVideoProof
                    ? 'text-cyan-300 hover:text-cyan-200 font-bold px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30'
                    : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Telegram Contact Button */}
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-telegram-btn"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a1222] hover:bg-[#101b32] border border-cyan-500/20 text-cyan-300 hover:text-cyan-200 text-xs font-semibold tracking-wide transition-all shadow-sm"
              title={`Telegram: @${telegramUsername.replace(/^@/, '')}`}
            >
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              <span>@{telegramUsername.replace(/^@/, '')}</span>
            </a>

            {/* Highlighted Request Quote Button */}
            <button
              onClick={onRequestQuoteClick}
              id="nav-request-quote-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>

            {/* Customizer / Edit Placeholder trigger */}
            <button
              onClick={onOpenCustomizer}
              id="nav-edit-mode-btn"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              title="Edit Business Info & Pricing"
            >
              <Settings2 className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu & Settings Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCustomizer}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-300"
              title="Edit Business Info"
            >
              <Settings2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-xl bg-[#0a1222] border border-cyan-500/20 text-slate-200 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050812]/98 border-b border-cyan-500/30 px-5 pt-4 pb-6 mt-3 space-y-3 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isVideoProof)}
                className={`block px-3 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                  link.isVideoProof
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300 font-bold'
                    : 'bg-white/[0.03] border-white/5 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0a1222] border border-cyan-500/40 text-cyan-300 font-semibold text-xs tracking-wide"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Telegram: @{telegramUsername.replace(/^@/, '')}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuoteClick();
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
