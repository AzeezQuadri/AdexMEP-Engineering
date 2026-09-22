/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { VideoShowcase } from './components/VideoShowcase';
import { VideoProofPage } from './components/VideoProofPage';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { QuoteForm } from './components/QuoteForm';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CustomizerModal } from './components/CustomizerModal';
import { PageVideoBackground } from './components/PageVideoBackground';
import { TopFontSelector, FontThemeId } from './components/TopFontSelector';
import { DEFAULT_BUSINESS_CONFIG } from './data/constants';
import { BusinessConfig } from './types';

const STORAGE_KEY = 'mep_engineering_business_config';
const FONT_STORAGE_KEY = 'mep_selected_font_theme';

export default function App() {
  const [fontTheme, setFontTheme] = useState<FontThemeId>(() => {
    try {
      const saved = localStorage.getItem(FONT_STORAGE_KEY);
      if (saved && ['fire', 'blueprint', 'modern', 'orbitron', 'cadmono'].includes(saved)) {
        return saved as FontThemeId;
      }
    } catch (e) {
      console.warn('Could not read font from localStorage', e);
    }
    return 'fire'; // Default to Recommended fire font
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-font', fontTheme);
    try {
      localStorage.setItem(FONT_STORAGE_KEY, fontTheme);
    } catch (e) {
      console.warn('Could not save font to localStorage', e);
    }
  }, [fontTheme]);

  const [config, setConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: BusinessConfig = JSON.parse(saved);
        // If saved config still has old placeholder testimonials, upgrade to authentic ones
        const hasPlaceholder = parsed.testimonials?.some(t => t.clientName.includes('Placeholder'));
        if (hasPlaceholder) {
          parsed.testimonials = DEFAULT_BUSINESS_CONFIG.testimonials;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch (e) {
      console.warn('Could not read saved config from localStorage', e);
    }
    return DEFAULT_BUSINESS_CONFIG;
  });

  const [currentPage, setCurrentPage] = useState<'home' | 'video-proof'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#video-proof') {
      return 'video-proof';
    }
    return 'home';
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Synchronize hash with page state and browser history
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#video-proof') {
        setCurrentPage('video-proof');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#home' || window.location.hash === '' || window.location.hash.startsWith('#')) {
        if (window.location.hash !== '#video-proof') {
          setCurrentPage('home');
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSaveConfig = (newConfig: BusinessConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Could not write config to localStorage', e);
    }
  };

  const handleResetConfig = () => {
    setConfig(DEFAULT_BUSINESS_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Could not clear config from localStorage', e);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVideoProof = () => {
    setCurrentPage('video-proof');
    window.location.hash = '#video-proof';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.location.hash = '#home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToQuote = () => {
    setCurrentPage('home');
    window.location.hash = '#quote';
    setTimeout(() => {
      scrollToSection('quote');
    }, 100);
  };

  // If on Page 2: Dedicated Video Proof & Attached Images Showcase
  if (currentPage === 'video-proof') {
    return (
      <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 pb-16 md:pb-0 relative">
        {/* Top Edge 5 Font Selector (Recommended: Fire Red & White + Black) */}
        <TopFontSelector currentFont={fontTheme} onSelectFont={setFontTheme} />

        {/* Animated Background Video for Page 2 */}
        <PageVideoBackground pageType="video-proof" defaultOpacity={0.28} />

        <div className="relative z-10">
          <VideoProofPage
            telegramUsername={config.telegramUsername}
            onBackToHome={handleBackToHome}
            onRequestQuote={handleGoToQuote}
          />

          {/* Footer */}
          <Footer config={config} />

          {/* Mobile Sticky Quick Action Bar with Back button */}
          <MobileStickyBar
            telegramUsername={config.telegramUsername}
            onRequestQuote={handleGoToQuote}
            isSecondPage={true}
            onBackToHome={handleBackToHome}
          />

          {/* Business Owner Customizer Modal */}
          <CustomizerModal
            isOpen={isCustomizerOpen}
            config={config}
            onSave={handleSaveConfig}
            onReset={handleResetConfig}
            onClose={() => setIsCustomizerOpen(false)}
          />
        </div>
      </div>
    );
  }

  // Page 1: Main Home Page
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 pb-16 md:pb-0 relative">
      {/* Top Edge 5 Font Selector (Recommended: Fire Red & White + Black) */}
      <TopFontSelector currentFont={fontTheme} onSelectFont={setFontTheme} />

      {/* Animated Background Video for Page 1 (Home) */}
      <PageVideoBackground pageType="home" defaultOpacity={0.32} />

      <div className="relative z-10">
        {/* Sticky Header Navigation */}
        <Navbar
          businessName={config.businessName}
          telegramUsername={config.telegramUsername}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
          onRequestQuoteClick={() => scrollToSection('quote')}
          onOpenVideoProof={handleOpenVideoProof}
        />

        <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          telegramUsername={config.telegramUsername}
          onRequestQuote={() => scrollToSection('quote')}
          onViewServices={() => scrollToSection('services')}
          onViewVideoProof={handleOpenVideoProof}
        />

        {/* 2. Video Showcase (Project Videos & Walkthrough Proof) - MOVED TO TOP */}
        <VideoShowcase 
          telegramUsername={config.telegramUsername}
          onOpenVideoProofPage={handleOpenVideoProof}
        />

        {/* 3. Services Section (All 14 Services) */}
        <Services
          telegramUsername={config.telegramUsername}
          onRequestQuote={() => scrollToSection('quote')}
        />

        {/* 4. Why Choose Us (9 Quality Points & Standards) */}
        <WhyChooseUs />

        {/* 5. Portfolio / Visual Proof (All 38 Image Assets + Categories + Lightbox) */}
        <Portfolio telegramUsername={config.telegramUsername} />

        {/* 6. How It Works (5-Stage Process) */}
        <Process onStartProject={() => scrollToSection('quote')} />

        {/* 7. Packages & Pricing (Basic $150, Professional $350, Complete $750) */}
        <Pricing
          packages={config.packages}
          telegramUsername={config.telegramUsername}
          onRequestCustomQuote={() => scrollToSection('quote')}
        />

        {/* 8. What Clients Say (6 Testimonial Slots) */}
        <Testimonials
          testimonials={config.testimonials}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* 9. Frequently Asked Questions (10 Questions Accordion) */}
        <FAQ telegramUsername={config.telegramUsername} />

        {/* 10. Request a Quote Form (Full intake + File upload + Telegram 1-click sync) */}
        <QuoteForm telegramUsername={config.telegramUsername} />

        {/* 11. Final High-Impact CTA Banner */}
        <CTASection
          telegramUsername={config.telegramUsername}
          onRequestQuote={() => scrollToSection('quote')}
        />
      </main>

      {/* Footer */}
      <Footer config={config} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar
        telegramUsername={config.telegramUsername}
        onRequestQuote={() => scrollToSection('quote')}
        isSecondPage={false}
      />

      {/* Business Owner Customizer Modal */}
      <CustomizerModal
        isOpen={isCustomizerOpen}
        config={config}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
        onClose={() => setIsCustomizerOpen(false)}
      />
        </div>
      </div>
    );
  }
