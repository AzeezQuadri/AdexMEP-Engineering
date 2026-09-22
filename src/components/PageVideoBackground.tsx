import React, { useState, useEffect, useRef } from 'react';
import { Video, Eye, EyeOff, Sparkles, Sliders, Play, Pause } from 'lucide-react';
import { PROJECT_VIDEOS } from '../data/constants';

interface PageVideoBackgroundProps {
  pageType: 'home' | 'video-proof';
  defaultOpacity?: number; // e.g. 0.25 - 0.45
}

export const PageVideoBackground: React.FC<PageVideoBackgroundProps> = ({
  pageType,
  defaultOpacity = 0.32
}) => {
  // Video selection based on page context:
  // Home page uses the 3D Revit MEP / BIM Visualization (zWaknq4wNeE)
  // Video Proof page uses the MEP Design & Coordination showcase (am2fLpsYvZI)
  const defaultVideoId = pageType === 'home' ? 'zWaknq4wNeE' : 'am2fLpsYvZI';
  const [currentVideoId, setCurrentVideoId] = useState<string>(defaultVideoId);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [opacityLevel, setOpacityLevel] = useState<'subtle' | 'balanced' | 'vivid'>('balanced');
  const [showControls, setShowControls] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Map opacity string to numeric value
  const opacityValue = {
    subtle: 0.18,
    balanced: defaultOpacity,
    vivid: 0.48
  }[opacityLevel];

  // Active video object
  const activeVideo = PROJECT_VIDEOS.find(v => v.id === currentVideoId) || PROJECT_VIDEOS[0];
  const activeVideoKey = activeVideo.youtubeId || activeVideo.id;

  // Canvas animated CAD particle grid layer (runs at 60fps behind the content)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Schematic nodes
    const nodeCount = Math.min(Math.floor(width / 70), 30);
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; pulse: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI
      });
    }

    let scanLineY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle cyan grid lines
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Moving scanning laser beam
      scanLineY += 0.75;
      if (scanLineY > height) scanLineY = 0;
      const grad = ctx.createLinearGradient(0, scanLineY - 30, 0, scanLineY + 30);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
      grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.09)');
      grad.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanLineY - 30, width, 60);

      // Update and connect nodes (representing MEP piping/ducting schematic)
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Draw node
        const currentRadius = node.radius + Math.sin(node.pulse) * 0.8;
        ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearest nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dist = Math.hypot(node.x - other.x, node.y - other.y);
          if (dist < 140) {
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.12 * (1 - dist / 140)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Background Animated Video Layer */}
      <div 
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none"
      >
        {/* Procedural CAD Grid Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Ambient Video Iframe Container */}
        {isEnabled && (
          <div 
            className="absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none overflow-hidden"
            style={{ opacity: opacityValue }}
          >
            {/* Scale up to 125% to hide standard player chrome and fill 100% viewport */}
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${activeVideoKey}&playsinline=1&rel=0&modestbranding=1`}
              title="Ambient Background Engineering Video"
              allow="autoplay; fullscreen"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vh] min-w-[1200px] min-h-[800px] border-0 pointer-events-none scale-110 blur-[0.5px] contrast-[1.1] saturate-[1.2]"
            />
          </div>
        )}

        {/* Deep High-Tech Vignette and Text-Illumination Gradients */}
        {/* This gradient guarantees every single line of text in front remains ALIGHT and crystal clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050811]/92 via-[#050811]/80 to-[#050811]/95 pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10 opacity-70"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050811] to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050811] to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Floating Atmosphere & Background Video Control Badge */}
      <div className="fixed bottom-20 left-4 z-40 hidden sm:block">
        <div className="relative">
          {showControls ? (
            <div className="p-3.5 rounded-2xl bg-[#090e1a]/95 border border-cyan-500/40 backdrop-blur-xl shadow-2xl shadow-black/90 w-72 text-xs font-mono space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="flex items-center justify-between pb-2 border-b border-cyan-500/20">
                <div className="flex items-center gap-2 text-cyan-300 font-bold">
                  <Video className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="tracking-wider uppercase">Background Video</span>
                </div>
                <button
                  onClick={() => setShowControls(false)}
                  className="text-slate-400 hover:text-white text-[10px] px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              {/* Toggle Video On/Off */}
              <div className="flex items-center justify-between">
                <span className="text-slate-300 text-[11px]">Animation Stream:</span>
                <button
                  onClick={() => setIsEnabled(!isEnabled)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition-all ${
                    isEnabled
                      ? 'bg-cyan-500 text-slate-950 shadow-sm shadow-cyan-500/50'
                      : 'bg-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  {isEnabled ? 'ACTIVE' : 'PAUSED'}
                </button>
              </div>

              {/* Opacity Selector */}
              <div className="space-y-1">
                <span className="text-slate-300 text-[11px]">Illumination / Opacity:</span>
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  {(['subtle', 'balanced', 'vivid'] as const).map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => setOpacityLevel(lvl)}
                      className={`py-1 rounded text-[10px] font-bold uppercase transition-colors ${
                        opacityLevel === lvl
                          ? 'bg-cyan-500/25 border border-cyan-400 text-cyan-300'
                          : 'bg-white/5 text-slate-400 hover:bg-white/10'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Theme Selector */}
              <div className="space-y-1 pt-1">
                <span className="text-slate-300 text-[11px]">Active Video Walkthrough:</span>
                <select
                  value={currentVideoId}
                  onChange={(e) => setCurrentVideoId(e.target.value)}
                  className="w-full bg-[#050811] border border-cyan-500/30 rounded-lg p-1.5 text-[11px] text-cyan-200 focus:outline-none focus:border-cyan-400"
                >
                  {PROJECT_VIDEOS.map(v => (
                    <option key={v.id} value={v.id}>
                      {v.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="text-[10px] text-slate-400 pt-1 border-t border-white/5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Text alight with high-contrast radiant glow</span>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowControls(true)}
              id="toggle-bg-video-controls-btn"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#070c18]/90 hover:bg-[#0c1424] border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-[11px] font-mono shadow-lg shadow-black/80 backdrop-blur-md transition-all active:scale-95 cursor-pointer group"
              title="Click to adjust background animation video settings"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              <Video className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="font-semibold uppercase tracking-wider">
                {isEnabled ? 'BG Video: Active' : 'BG Video: Paused'}
              </span>
              <Sliders className="w-3 h-3 text-slate-400 group-hover:text-cyan-300 ml-0.5" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};
