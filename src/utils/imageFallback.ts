import React from 'react';

// High-contrast, mathematically precise SVG engineering blueprint fallbacks
// Used if any CDN image request encounters a network interruption or hotlink rate limit.

export const BLUEPRINT_FALLBACK_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450"><rect width="800" height="450" fill="%23060c18"/><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="%230ea5e9" stroke-width="0.8" stroke-opacity="0.25"/><circle cx="40" cy="40" r="1.5" fill="%2338bdf8" fill-opacity="0.5"/></pattern><pattern id="subgrid" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M 8 0 L 0 0 0 8" fill="none" stroke="%230284c7" stroke-width="0.3" stroke-opacity="0.15"/></pattern></defs><rect width="800" height="450" fill="url(%23subgrid)"/><rect width="800" height="450" fill="url(%23grid)"/><g stroke="%2338bdf8" stroke-width="1.8" fill="none" opacity="0.85"><path d="M 80,120 L 320,120 L 320,280 L 520,280 L 520,160 L 720,160"/><rect x="180" y="100" width="80" height="40" rx="4" stroke="%23f59e0b" stroke-width="1.5" fill="%230c1e3d" fill-opacity="0.6"/><rect x="420" y="260" width="70" height="40" rx="4" stroke="%2306b6d4" stroke-width="1.5" fill="%230c1e3d" fill-opacity="0.6"/><circle cx="320" cy="120" r="8" fill="%2338bdf8"/><circle cx="520" cy="280" r="8" fill="%2306b6d4"/><circle cx="520" cy="160" r="8" fill="%23f59e0b"/></g><text x="40" y="50" font-family="monospace" font-size="14" fill="%2338bdf8" letter-spacing="2">[MEP ENGINEERING DRAFTING ARCHIVE - VERIFIED DRAWING]</text><text x="40" y="410" font-family="monospace" font-size="12" fill="%2394a3b8">SCALE: 1:100 // CAD COORDINATION OVERLAY // DWG REV: 04</text><text x="740" y="410" font-family="monospace" font-size="12" fill="%2338bdf8" text-anchor="end">SYS-ID: MEP-CSD-2026</text></svg>`;

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackText?: string) {
  const target = e.currentTarget;
  // Prevent infinite loop if fallback itself errors
  if (target.src !== BLUEPRINT_FALLBACK_SVG) {
    target.onerror = null;
    target.src = BLUEPRINT_FALLBACK_SVG;
    if (fallbackText) {
      target.alt = fallbackText;
    }
  }
}
