import React from 'react';
import { Send, Mail, Phone, Clock, ShieldAlert, ArrowUp } from 'lucide-react';
import { BusinessConfig } from '../types';
import { createTelegramUrl } from '../utils/telegram';

interface FooterProps {
  config: BusinessConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const telegramUrl = createTelegramUrl(
    "Hello, I'm contacting you via your website footer regarding MEP drawing and engineering services.",
    config.telegramUsername
  );

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio Showcase', href: '#portfolio' },
    { label: 'Video Showcase', href: '#videos' },
    { label: 'How It Works', href: '#process' },
    { label: 'Packages & Pricing', href: '#packages' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Request a Quote', href: '#quote' },
  ];

  const serviceLinks = [
    { label: 'MEP Drawing Services', href: '#services' },
    { label: 'HVAC Design & Drawings', href: '#services' },
    { label: 'Plumbing & Drainage Drawings', href: '#services' },
    { label: 'Electrical Power & Lighting', href: '#services' },
    { label: 'Fire Protection & Sprinklers', href: '#services' },
    { label: 'Revit MEP / BIM Modeling', href: '#services' },
    { label: 'MEP Coordination & Clash', href: '#services' },
    { label: 'Shop & As-Built Documentation', href: '#services' },
  ];

  return (
    <footer id="site-footer" className="bg-[#05070a] border-t border-white/10 text-slate-400 text-xs">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-[1px]">
                <div className="w-full h-full bg-[#0c0f15] rounded-[7px] flex items-center justify-center relative font-mono text-[10px] font-bold text-amber-400 tracking-tighter">
                  MEP
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white font-display block leading-tight">
                  {config.businessName}
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400 font-medium">
                  MEP Drawings &amp; Engineering Services
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Accurate, coordinated, and professional MEP drawing support for residential, commercial, and industrial construction projects. Delivering contractor-ready CAD &amp; Revit BIM files.
            </p>

            {/* Direct Telegram Card */}
            <div className="pt-2">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#121824] hover:bg-amber-500 border border-amber-500/30 hover:border-amber-400 text-amber-300 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
              >
                <Send className="w-4 h-4 text-amber-400 group-hover:text-slate-950 transition-colors" />
                <span>Telegram: @{config.telegramUsername.replace(/^@/, '')}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              MEP Disciplines
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Placeholders & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact
            </h4>
            
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-slate-300">
                <Send className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a
                  href={`https://t.me/${config.telegramUsername.replace(/^@/, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 font-mono"
                >
                  @{config.telegramUsername.replace(/^@/, '')}
                </a>
              </div>

              {config.contactEmail && (
                <div className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <a
                    href={`mailto:${config.contactEmail}`}
                    className="hover:text-amber-300 font-mono"
                  >
                    {config.contactEmail}
                  </a>
                </div>
              )}

              {config.contactPhone && (
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="font-mono">{config.contactPhone}</span>
                </div>
              )}

              <div className="flex items-center gap-2 text-slate-400 pt-2 border-t border-white/5">
                <Clock className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                <span>{config.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] leading-relaxed text-slate-400">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-500/70 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Engineering Notice &amp; Disclaimer:</strong> MEP drawing and engineering support services. All drawings are produced according to provided client data and project specifications. Local jurisdiction requirements and professional engineer (PE) licensing/stamping requirements, where applicable, are subject to local code and client arrangement.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-mono">
          <p>
            &copy; {new Date().getFullYear()} {config.businessName}. Professional MEP Drawing &amp; Engineering Services. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
