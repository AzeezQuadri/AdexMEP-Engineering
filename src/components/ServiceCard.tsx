import React from 'react';
import { 
  Compass, 
  Wind, 
  Droplets, 
  Zap, 
  ShieldAlert, 
  Home, 
  Building2, 
  Factory, 
  Wrench, 
  FileCheck, 
  Box, 
  Layers, 
  Cog, 
  FileSpreadsheet, 
  Send, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { ServiceItem } from '../types';
import { createTelegramUrl } from '../utils/telegram';

interface ServiceCardProps {
  service: ServiceItem;
  telegramUsername: string;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-amber-400" />,
  Wind: <Wind className="w-5 h-5 text-amber-400" />,
  Droplets: <Droplets className="w-5 h-5 text-amber-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-amber-400" />,
  Home: <Home className="w-5 h-5 text-amber-400" />,
  Building2: <Building2 className="w-5 h-5 text-amber-400" />,
  Factory: <Factory className="w-5 h-5 text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-amber-400" />,
  FileCheck: <FileCheck className="w-5 h-5 text-amber-400" />,
  Box: <Box className="w-5 h-5 text-amber-400" />,
  Layers: <Layers className="w-5 h-5 text-amber-400" />,
  Cog: <Cog className="w-5 h-5 text-amber-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-amber-400" />,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, telegramUsername }) => {
  const telegramUrl = createTelegramUrl(service.telegramMessage, telegramUsername);

  return (
    <div
      id={`service-${service.id}`}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#0a0d14]/90 hover:bg-[#0e131d] border border-white/[0.08] hover:border-amber-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 crosshair-corner"
    >
      <div>
        {/* Top bar with Service Number and Category Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-amber-400 tracking-widest bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/25">
              SERVICE {service.numberStr}
            </span>
          </div>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/15 to-transparent border border-amber-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
            {ICON_MAP[service.iconName] || <Compass className="w-5 h-5 text-amber-400" />}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors font-display mb-3 tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
          {service.description}
        </p>

        {/* Bullet Points */}
        {service.bullets && service.bullets.length > 0 && (
          <ul className="space-y-2.5 mb-6 border-t border-white/[0.08] pt-5">
            {service.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Legal / Jurisdiction Note if applicable */}
        {service.jurisdictionNote && (
          <div className="mb-6 p-3 rounded-xl bg-amber-500/[0.06] border border-amber-500/20 flex items-start gap-2.5 text-[11px] text-amber-300/85 leading-snug">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>{service.jurisdictionNote}</span>
          </div>
        )}
      </div>

      {/* CTA Button leading to contextual Telegram message */}
      <div className="pt-5 border-t border-white/[0.08]">
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-[#121722] hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-500 text-slate-200 hover:text-slate-950 font-bold text-xs uppercase tracking-wider border border-amber-500/30 hover:border-amber-400 transition-all duration-300 shadow-md group/btn"
        >
          <Send className="w-3.5 h-3.5 text-amber-400 group-hover/btn:text-slate-950 transition-colors" />
          <span>{service.ctaText}</span>
        </a>
      </div>
    </div>
  );
};
