import React, { useState, useRef } from 'react';
import { QuoteFormData } from '../types';
import { Send, UploadCloud, CheckCircle2, File, X, Sparkles, ArrowRight } from 'lucide-react';
import { createTelegramUrl } from '../utils/telegram';

interface QuoteFormProps {
  telegramUsername: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ telegramUsername }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phoneOrWhatsApp: '',
    company: '',
    projectType: 'Commercial',
    serviceRequired: 'MEP Drawing',
    projectLocation: '',
    approximateProjectSize: '',
    requiredDrawingType: 'Full Coordinated Drawing Set (DWG + PDF)',
    projectDescription: '',
    deadline: '',
    preferredContactMethod: 'Telegram',
    files: []
  });

  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const projectTypes: ('Residential' | 'Commercial' | 'Industrial' | 'Other')[] = [
    'Residential',
    'Commercial',
    'Industrial',
    'Other'
  ];

  const servicesList = [
    'MEP Drawing',
    'HVAC',
    'Plumbing',
    'Electrical',
    'Fire Protection',
    'Revit/BIM',
    'MEP Coordination',
    'Shop Drawings',
    'As-Built Drawings',
    'Mechanical Room',
    'Permit/Construction Support',
    'Other'
  ];

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    const fileArray = Array.from(newFiles).map((f) => ({
      name: f.name,
      size: Math.round(f.size / 1024) // in KB
    }));
    setFormData((prev) => ({
      ...prev,
      files: [...prev.files, ...fileArray]
    }));
  };

  const removeFile = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const generateTelegramMessage = () => {
    return `Hello @${telegramUsername.replace(/^@/, '')}, I'm requesting an MEP drawing quote:
• Name: ${formData.fullName || 'Not specified'}
• Company: ${formData.company || 'N/A'}
• Email: ${formData.email || 'N/A'}
• Phone/WhatsApp: ${formData.phoneOrWhatsApp || 'N/A'}
• Project Type: ${formData.projectType}
• Service Required: ${formData.serviceRequired}
• Drawing Type: ${formData.requiredDrawingType || 'Standard CAD/BIM'}
• Project Size: ${formData.approximateProjectSize || 'To be determined'}
• Location: ${formData.projectLocation || 'To be specified'}
• Deadline: ${formData.deadline || 'Standard turnaround'}
• Preferred Contact: ${formData.preferredContactMethod}
• Scope Details: ${formData.projectDescription || 'Please review attached architectural plans.'}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const directTelegramUrl = createTelegramUrl(generateTelegramMessage(), telegramUsername);

  return (
    <section id="quote" className="relative py-24 bg-[#090b0e] border-t border-white/5">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-amber-400 font-mono text-xs tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECT QUOTATION INTAKE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight mb-5">
            Request an <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Engineering Quote</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Submit your project details below to receive an itemized scope, deliverables breakdown, and baseline quotation from our MEP engineering team.
          </p>
        </div>

        {/* Form Container */}
        <div className="relative rounded-3xl bg-[#0f131a] border border-amber-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden crosshair-corner">
          
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center max-w-xl mx-auto animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-6">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                Quote Request Registered
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Thank you, <span className="text-amber-300 font-semibold">{formData.fullName || 'Colleague'}</span>. Your drawing requirements for <span className="text-white font-medium">{formData.serviceRequired}</span> have been compiled. For fastest review, send these details directly to our engineer on Telegram.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                <a
                  href={directTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Send Quote Directly to Telegram</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors"
                >
                  Edit Project Details
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form-full-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="form-full-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. John Miller"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone / WhatsApp & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form-phone" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Phone / WhatsApp
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    value={formData.phoneOrWhatsApp}
                    onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-company" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Company / Firm Name
                  </label>
                  <input
                    id="form-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Architects / BuildCorp"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Project Type & Service Required */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form-project-type" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Project Type <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="form-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white text-sm focus:outline-none transition-colors"
                  >
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt} className="bg-[#090c12] text-white">
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="form-service-required" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Service Required <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="form-service-required"
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white text-sm focus:outline-none transition-colors"
                  >
                    {servicesList.map((srv) => (
                      <option key={srv} value={srv} className="bg-[#090c12] text-white">
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Project Location & Approximate Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form-location" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Project Location (City / State / Country)
                  </label>
                  <input
                    id="form-location"
                    type="text"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Austin, TX / London, UK / Remote"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-size" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Approximate Project Size (sq ft / m²)
                  </label>
                  <input
                    id="form-size"
                    type="text"
                    value={formData.approximateProjectSize}
                    onChange={(e) => setFormData({ ...formData, approximateProjectSize: e.target.value })}
                    placeholder="e.g. 4,500 sq ft / 420 m²"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 5: Required Drawing Type & Deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="form-drawing-type" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Required Drawing Type
                  </label>
                  <input
                    id="form-drawing-type"
                    type="text"
                    value={formData.requiredDrawingType}
                    onChange={(e) => setFormData({ ...formData, requiredDrawingType: e.target.value })}
                    placeholder="e.g. Schematic / Shop Drawing / As-Built / Revit BIM"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="form-deadline" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Target Deadline
                  </label>
                  <input
                    id="form-deadline"
                    type="text"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    placeholder="e.g. 5 business days / Urgent / Flexible"
                    className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Project Description Textarea */}
              <div>
                <label htmlFor="form-description" className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Project Description &amp; Requirements
                </label>
                <textarea
                  id="form-description"
                  rows={4}
                  value={formData.projectDescription}
                  onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                  placeholder="Describe your project scope, equipment preferences, existing architectural format (AutoCAD DWG, PDF, Revit), and specific deliverables needed..."
                  className="w-full px-4 py-3 rounded-xl bg-[#090c12] border border-white/10 focus:border-amber-400 text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-y"
                ></textarea>
              </div>

              {/* File Upload (Drag-and-Drop + Click) */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Upload Project Files (Plans, DWG, PDF, Sketches)
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors ${
                    dragActive
                      ? 'border-amber-400 bg-amber-500/10'
                      : 'border-white/15 bg-[#090c12] hover:border-amber-500/40 hover:bg-white/[0.02]'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={(e) => handleFiles(e.target.files)}
                    className="hidden"
                  />
                  <UploadCloud className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-200">
                    Click to browse or drag and drop project drawings
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Supports DWG, DXF, RVT, PDF, ZIP, PNG, JPG (Large files can also be shared directly on Telegram)
                  </p>
                </div>

                {/* File chips list */}
                {formData.files.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {formData.files.map((file, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141b27] border border-white/10 text-xs text-slate-200"
                      >
                        <File className="w-3.5 h-3.5 text-amber-400" />
                        <span className="font-mono">{file.name}</span>
                        <span className="text-[10px] text-slate-500">({file.size} KB)</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(idx);
                          }}
                          className="hover:text-red-400 text-slate-400"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(['Telegram', 'Email', 'WhatsApp', 'Phone'] as const).map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        formData.preferredContactMethod === method
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-[#090c12] border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  id="form-submit-quote-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-amber-500/25 cursor-pointer"
                >
                  <span>REQUEST MY QUOTE</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <a
                  href={directTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="form-telegram-quote-btn"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#141b27] hover:bg-[#1b2434] border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>MESSAGE US ON TELEGRAM</span>
                </a>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
