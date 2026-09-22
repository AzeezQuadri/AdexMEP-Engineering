import React, { useState } from 'react';
import { X, Save, RotateCcw, Sliders, CheckCircle2, Dices, Sparkles } from 'lucide-react';
import { BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG, getRandomizedTestimonials } from '../data/constants';

interface CustomizerModalProps {
  isOpen: boolean;
  config: BusinessConfig;
  onSave: (newConfig: BusinessConfig) => void;
  onReset: () => void;
  onClose: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  isOpen,
  config,
  onSave,
  onReset,
  onClose
}) => {
  const [formData, setFormData] = useState<BusinessConfig>(config);
  const [activeTab, setActiveTab] = useState<'business' | 'pricing' | 'testimonials'>('business');
  const [savedAlert, setSavedAlert] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      onClose();
    }, 1200);
  };

  const handlePriceChange = (pkgId: string, newPrice: number) => {
    setFormData((prev) => ({
      ...prev,
      packages: prev.packages.map((pkg) =>
        pkg.id === pkgId ? { ...pkg, startingPrice: newPrice } : pkg
      )
    }));
  };

  const handleTestimonialChange = (
    id: string,
    field: 'clientName' | 'companyOrProjectType' | 'testimonialText',
    val: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((t) =>
        t.id === id ? { ...t, [field]: val } : t
      )
    }));
  };

  return (
    <div
      id="customizer-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0d1117] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090c12]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                Website Content &amp; Pricing Settings
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Update business details, Telegram handle, packages &amp; testimonials
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-white/5 bg-[#0a0d13]">
          <button
            type="button"
            onClick={() => setActiveTab('business')}
            className={`pb-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'business'
                ? 'text-amber-400 border-amber-400'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Business &amp; Telegram
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pricing')}
            className={`pb-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'pricing'
                ? 'text-amber-400 border-amber-400'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Package Starting Prices
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('testimonials')}
            className={`pb-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'testimonials'
                ? 'text-amber-400 border-amber-400'
                : 'text-slate-400 border-transparent hover:text-slate-200'
            }`}
          >
            Testimonial Slots
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          {savedAlert && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>Settings successfully saved and applied to website preview!</span>
            </div>
          )}

          {/* TAB 1: Business & Contact Info */}
          {activeTab === 'business' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080a0f] border border-white/10 focus:border-amber-400 text-white text-sm focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Telegram Username (Primary Lead Funnel)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-400 font-mono text-sm">@</span>
                  <input
                    type="text"
                    value={formData.telegramUsername.replace(/^@/, '')}
                    onChange={(e) => setFormData({ ...formData, telegramUsername: e.target.value.replace(/^@/, '') })}
                    className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-[#080a0f] border border-white/10 focus:border-amber-400 text-white text-sm focus:outline-none font-mono"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  All website buttons, CTAs, and deep-link proposals target this handle.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Contact Email Placeholder
                  </label>
                  <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080a0f] border border-white/10 focus:border-amber-400 text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone / WhatsApp Placeholder
                  </label>
                  <input
                    type="text"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080a0f] border border-white/10 focus:border-amber-400 text-white text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Working Hours / Response Time Note
                </label>
                <input
                  type="text"
                  value={formData.workingHours}
                  onChange={(e) => setFormData({ ...formData, workingHours: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080a0f] border border-white/10 focus:border-amber-400 text-white text-sm focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Pricing */}
          {activeTab === 'pricing' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-400">
                Adjust starting prices for the 3 transparent packages shown on the website:
              </p>
              {formData.packages.map((pkg) => (
                <div key={pkg.id} className="p-4 rounded-xl bg-[#080a0f] border border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">{pkg.name}</h4>
                    <p className="text-xs text-slate-400">Package {pkg.numberStr}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-amber-400 font-mono">$</span>
                    <input
                      type="number"
                      value={pkg.startingPrice}
                      onChange={(e) => handlePriceChange(pkg.id, Number(e.target.value))}
                      className="w-24 px-3 py-1.5 rounded-lg bg-[#121620] border border-white/20 text-white font-mono text-sm focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Testimonials */}
          {activeTab === 'testimonials' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3 pb-2 border-b border-white/5">
                <p className="text-xs text-slate-400">
                  Configure content for the 6 testimonial slots:
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const fresh = getRandomizedTestimonials(6);
                    setFormData(prev => ({ ...prev, testimonials: fresh }));
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono font-semibold transition-all cursor-pointer"
                >
                  <Dices className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Randomize Reviews</span>
                </button>
              </div>
              {formData.testimonials.map((t) => (
                <div key={t.id} className="p-4 rounded-xl bg-[#080a0f] border border-white/10 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {t.slotNumber}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Client Name"
                      value={t.clientName}
                      onChange={(e) => handleTestimonialChange(t.id, 'clientName', e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-[#121620] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                    <input
                      type="text"
                      placeholder="Company / Project Type"
                      value={t.companyOrProjectType}
                      onChange={(e) => handleTestimonialChange(t.id, 'companyOrProjectType', e.target.value)}
                      className="px-3 py-1.5 rounded-lg bg-[#121620] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="Testimonial text..."
                    value={t.testimonialText}
                    onChange={(e) => handleTestimonialChange(t.id, 'testimonialText', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#121620] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 resize-none"
                  ></textarea>
                </div>
              ))}
            </div>
          )}

          {/* Modal Footer Controls */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => {
                onReset();
                setFormData(DEFAULT_BUSINESS_CONFIG);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-mono transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/20"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
