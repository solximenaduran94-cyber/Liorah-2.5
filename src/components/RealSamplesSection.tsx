import React, { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  Heart,
  Check,
  Smartphone,
  Globe,
  Play,
  RotateCcw,
  Compass,
  ArrowRight,
  Eye,
  Layers,
  ChevronRight,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { REAL_SAMPLES, RealSampleItem } from '../data/realSamples';
import { InvitationCardFace } from './InvitationCardFace';

interface RealSamplesSectionProps {
  onSelectSampleToCustomize: (sample: RealSampleItem) => void;
  onOpenSampleViewer: (sample: RealSampleItem) => void;
}

export const RealSamplesSection: React.FC<RealSamplesSectionProps> = ({
  onSelectSampleToCustomize,
  onOpenSampleViewer,
}) => {
  const [selectedSampleId, setSelectedSampleId] = useState<string>(REAL_SAMPLES[0].id);
  const [filterCategory, setFilterCategory] = useState<string>('Todas');
  const [stageMode, setStageMode] = useState<'frame_tour' | 'live_browser'>('frame_tour');
  const [activeTourIndex, setActiveTourIndex] = useState<number>(0);
  const [iframeKey, setIframeKey] = useState<number>(0);

  const activeSample = REAL_SAMPLES.find((s) => s.id === selectedSampleId) || REAL_SAMPLES[0];

  const filteredSamples = REAL_SAMPLES.filter((item) => {
    if (filterCategory === 'Todas') return true;
    if (filterCategory === 'XV Años') return item.category === 'XV Años';
    if (filterCategory === 'Bodas') return item.category === 'Bodas';
    return true;
  });

  const handleSelectActive = (id: string) => {
    setSelectedSampleId(id);
    setActiveTourIndex(0);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <section id="muestras-reales" className="py-16 md:py-24 bg-[#F5EFE6]/70 border-t border-b border-[#E5D7C5] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="gold-divider mb-3">
            <span className="text-xs text-[#C5A059]">♥</span>
          </div>
          <p className="font-ui text-xs uppercase tracking-[0.22em] text-[#C5A059] font-medium mb-2">
            Invitaciones Digitales en Vivo
          </p>
          <h2 className="font-prestige text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-wide">
            Galería de Muestras Oficiales
          </h2>
          <p className="font-romantic text-lg sm:text-xl text-[#6B5E54] italic mt-2">
            "Diseño que celebra momentos únicos • Rápido y con amor"
          </p>
          <p className="font-ui text-xs sm:text-sm text-[#6B5E54] mt-3 leading-relaxed">
            Explorá el frame original y el recorrido interactivo de cada invitación real de LIORAH STUDIO. Podés navegar el recorrido en vivo o abrir el enlace oficial directamente en tu celular.
          </p>
        </div>

        {/* 1. INTERACTIVE LIVE SMARTPHONE STAGE (Mobile Optimized) */}
        <div className="mb-16 rounded-3xl bg-[#FFFDF9] border border-[#E5D7C5] p-4 sm:p-7 lg:p-9 shadow-lg shadow-[#C5A059]/5">
          {/* Top Quick-Selector Pills */}
          <div className="flex items-center justify-between border-b border-[#E5D7C5] pb-4 mb-6 sm:mb-8 gap-3 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2">
              <span className="font-ui text-[11px] uppercase tracking-wider text-[#A39589] font-semibold whitespace-nowrap">
                Elegí una invitación:
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {REAL_SAMPLES.map((sample) => {
                  const isCurrent = sample.id === activeSample.id;
                  return (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => handleSelectActive(sample.id)}
                      className={`rounded-2xl px-3 sm:px-4 py-1.5 text-xs font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                        isCurrent
                          ? 'bg-[#1A1A1A] text-[#FAF6F0] font-semibold shadow-xs ring-1 ring-[#C5A059]'
                          : 'bg-[#FAF6F0] text-[#6B5E54] hover:bg-[#F5EFE6] border border-[#E5D7C5]'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-black/20 shrink-0"
                        style={{ backgroundColor: sample.paletteColors[0] || '#C5A059' }}
                      />
                      <span>{sample.celebrant}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full font-semibold">
                ● {REAL_SAMPLES.length} Sitios Activos
              </span>
            </div>
          </div>

          {/* Stage Grid: Left Details vs Right Smartphone */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Active Sample Story & Details (6 cols) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="rounded-full bg-[#1A1A1A] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#FAF6F0]">
                    {activeSample.category}
                  </span>
                  <span className="rounded-full bg-[#F5EAEB] px-3 py-1 text-[10px] font-semibold text-[#C5A059] border border-[#E5D7C5] flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Sitio Activo Oficial</span>
                  </span>
                  <span className="rounded-full bg-[#FFFDF9] px-2.5 py-1 text-[10px] font-bold text-[#1A1A1A] border border-[#E5D7C5]">
                    $60.000 ARS <span className="text-[#C5A059] font-normal">(≈ $50 USD · $990 MXN)</span>
                  </span>
                </div>

                <h3 className="font-prestige text-2xl sm:text-3xl font-bold text-[#1A1A1A] tracking-wide">
                  {activeSample.title}
                </h3>

                <p className="font-romantic italic text-base text-[#6B5E54] mt-1 leading-relaxed">
                  "{activeSample.tagline}"
                </p>
              </div>

              {/* Recorrido Guiado Interactivo (Interactive Tour Sections) */}
              <div className="rounded-2xl bg-[#FAF6F0] p-4 border border-[#E5D7C5] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-ui text-xs uppercase tracking-wider text-[#1A1A1A] font-bold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Recorrido de la Invitación ({activeSample.sectionsTour.length} pasos)</span>
                  </span>
                  <span className="text-[10px] text-[#A39589] font-ui">Tocá un paso para ver el detalle:</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {activeSample.sectionsTour.map((tour, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveTourIndex(idx)}
                      className={`p-2 rounded-xl text-left transition-all border cursor-pointer ${
                        activeTourIndex === idx
                          ? 'bg-[#FFFDF9] border-[#C5A059] shadow-xs'
                          : 'bg-[#FFFDF9]/60 border-transparent hover:border-[#E5D7C5]'
                      }`}
                    >
                      <div className="text-base mb-0.5">{tour.icon}</div>
                      <p className="font-ui text-[11px] font-bold text-[#1A1A1A] line-clamp-1">{tour.title}</p>
                    </button>
                  ))}
                </div>

                {/* Active Tour Detail Banner */}
                <div className="p-3 bg-[#FFFDF9] rounded-xl border border-[#E5D7C5] flex items-center justify-between gap-3">
                  <div>
                    <p className="font-ui text-xs font-bold text-[#1A1A1A]">
                      {activeSample.sectionsTour[activeTourIndex]?.icon} {activeSample.sectionsTour[activeTourIndex]?.title}
                    </p>
                    <p className="font-ui text-[11px] text-[#6B5E54] mt-0.5">
                      {activeSample.sectionsTour[activeTourIndex]?.description}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-[#C5A059] bg-[#FAF6F0] px-2 py-0.5 rounded-md shrink-0">
                    Paso {activeTourIndex + 1}/{activeSample.sectionsTour.length}
                  </span>
                </div>
              </div>

              {/* Direct Web Address Box with 1-Tap Mobile Link */}
              <div className="rounded-2xl bg-[#FFFDF9] p-3.5 border border-[#C5A059]/40 font-mono text-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shadow-xs">
                <div className="flex items-center gap-2 min-w-0">
                  <Globe className="h-4 w-4 text-[#C5A059] shrink-0" />
                  <span className="truncate text-[#1A1A1A] text-xs font-semibold">{activeSample.liveUrl}</span>
                </div>
                <a
                  href={activeSample.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#C5A059] hover:bg-[#b08d47] text-[#1A1A1A] px-4 py-2 text-xs font-ui font-bold shadow-xs transition-colors shrink-0 cursor-pointer"
                >
                  <span>Abrir en el Celular</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={() => onSelectSampleToCustomize(activeSample)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1A1A1A] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF6F0] shadow-md hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-all cursor-pointer whitespace-nowrap font-ui"
                >
                  <Heart className="h-3.5 w-3.5 text-[#C5A059] fill-[#C5A059]" />
                  <span>Quiero Este Diseño para Mi Evento</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenSampleViewer(activeSample)}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E5D7C5] bg-[#FFFDF9] px-4 py-3.5 text-xs font-semibold tracking-wider text-[#1A1A1A] hover:bg-[#F5EFE6] transition-colors cursor-pointer whitespace-nowrap font-ui"
                >
                  <Smartphone className="h-4 w-4 text-[#C5A059]" />
                  <span>Visor Pantalla Completa</span>
                </button>
              </div>
            </div>

            {/* Right: Real Interactive Smartphone Frame Loading the Live Frame / Tour (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-center w-full">
              {/* Smartphone View Switcher */}
              <div className="mb-3 flex items-center gap-1.5 bg-[#FAF6F0] p-1 rounded-2xl border border-[#E5D7C5] text-xs font-ui">
                <button
                  type="button"
                  onClick={() => setStageMode('frame_tour')}
                  className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    stageMode === 'frame_tour'
                      ? 'bg-[#1A1A1A] text-white shadow-xs font-semibold'
                      : 'text-[#6B5E54] hover:text-[#1A1A1A]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Frame & Recorrido</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStageMode('live_browser')}
                  className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    stageMode === 'live_browser'
                      ? 'bg-[#1A1A1A] text-white shadow-xs font-semibold'
                      : 'text-[#6B5E54] hover:text-[#1A1A1A]'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Navegador Web en Vivo</span>
                </button>
              </div>

              {/* Smartphone Bezel (Mobile-responsive width) */}
              <div className="relative w-full max-w-[320px] sm:max-w-[360px] rounded-[40px] bg-[#1A1A1A] p-2.5 sm:p-3 shadow-2xl shadow-stone-900/30 ring-1 ring-[#C5A059]/40 mx-auto">
                {/* Dynamic Island Notch */}
                <div className="absolute top-4 sm:top-5 left-1/2 z-30 h-4.5 w-24 -translate-x-1/2 rounded-full bg-black flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-900 ring-1 ring-slate-800" />
                </div>

                {/* Viewport Screen */}
                <div className="relative h-[480px] sm:h-[560px] w-full overflow-hidden rounded-[30px] bg-white text-stone-900">
                  {stageMode === 'frame_tour' ? (
                    /* High-fidelity interactive Frame & Tour representation that ALWAYS renders cleanly on mobile */
                    <div className="h-full w-full flex flex-col justify-between">
                      <div className="flex-1 overflow-y-auto">
                        <InvitationCardFace
                          sample={activeSample}
                          activeStepIndex={activeTourIndex}
                          onStepChange={(step) => setActiveTourIndex(step)}
                        />
                      </div>

                      {/* Recorrido step indicator at bottom of phone */}
                      <div className="p-2 bg-[#FAF6F0] border-t border-[#E5D7C5] flex items-center justify-around text-[10px] font-ui">
                        {[
                          { label: 'Portada', icon: '✨' },
                          { label: 'Reloj', icon: '⏳' },
                          { label: 'Salón', icon: '📍' },
                          { label: 'RSVP', icon: '💌' },
                        ].map((btn, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActiveTourIndex(i)}
                            className={`flex items-center gap-1 py-1 px-2.5 rounded-lg cursor-pointer transition-all ${
                              activeTourIndex === i
                                ? 'bg-[#1A1A1A] text-[#FAF6F0] font-bold shadow-xs'
                                : 'text-[#6B5E54] hover:text-[#1A1A1A]'
                            }`}
                          >
                            <span>{btn.icon}</span>
                            <span>{btn.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Live iframe with sandbox permissions */
                    <iframe
                      key={iframeKey}
                      src={activeSample.liveUrl}
                      title={activeSample.title}
                      className="h-full w-full border-0"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      allow="autoplay; clipboard-write"
                    />
                  )}
                </div>
              </div>

              {/* Mobile Quick Action Link */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-center text-xs font-ui">
                <a
                  href={activeSample.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#FAF6F0] border border-[#C5A059] text-[#1A1A1A] px-4 py-1.5 text-xs font-semibold shadow-xs hover:bg-[#FFFDF9] transition-all cursor-pointer"
                >
                  <Smartphone className="h-3.5 w-3.5 text-[#C5A059]" />
                  <span>¿Estás en el celu? Tocá acá para abrirla en pantalla completa</span>
                  <ExternalLink className="h-3 w-3 text-[#C5A059]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. COMPLETE CATALOG OF THE 5 OFFICIAL ACTIVE SAMPLES */}
        <div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-prestige text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-wide">
                Catálogo de Muestras Oficiales ({REAL_SAMPLES.length})
              </h3>
              <p className="font-romantic italic text-xs sm:text-sm text-[#6B5E54]">
                "Cada tarjeta muestra el frame original y podés ingresar directamente desde tu celular"
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {['Todas', 'XV Años', 'Bodas'].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilterCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium tracking-wider transition-all cursor-pointer font-ui ${
                    filterCategory === cat
                      ? 'bg-[#1A1A1A] text-[#FAF6F0] shadow-xs'
                      : 'bg-[#FFFDF9] text-[#6B5E54] border border-[#E5D7C5] hover:border-[#C5A059]'
                  }`}
                >
                  {cat === 'Todas' ? `Todas (${REAL_SAMPLES.length})` : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid: Each card features the actual invitation face and mobile-ready buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredSamples.map((sample) => (
              <div
                key={sample.id}
                className={`flex flex-col justify-between rounded-3xl bg-[#FFFDF9] p-4 sm:p-5 shadow-xs border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#C5A059]/10 ${
                  sample.id === activeSample.id
                    ? 'border-[#C5A059] ring-1 ring-[#C5A059]'
                    : 'border-[#E5D7C5] hover:border-[#C5A059]'
                }`}
              >
                <div>
                  {/* Miniature Smartphone Mockup containing the EXACT customized invitation face */}
                  <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto overflow-hidden rounded-[26px] bg-[#1A1A1A] p-2 mb-4 border border-[#E5D7C5] shadow-md group">
                    {/* Phone Screen Displaying the Specific Invitation Face */}
                    <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-white">
                      <InvitationCardFace sample={sample} />

                      {/* Desktop Hover / Tap Overlay */}
                      <div className="absolute inset-0 bg-[#1A1A1A]/70 opacity-0 hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 text-center">
                        <button
                          type="button"
                          onClick={() => handleSelectActive(sample.id)}
                          className="w-full rounded-xl bg-[#FFFDF9] py-2 px-3 text-xs font-semibold text-[#1A1A1A] shadow-md hover:bg-[#F5EFE6] flex items-center justify-center gap-1.5 transition-all cursor-pointer border border-[#E5D7C5] font-ui"
                        >
                          <Play className="h-3.5 w-3.5 fill-[#C5A059] text-[#C5A059]" />
                          <span>Ver Recorrido en Smartphone</span>
                        </button>

                        <a
                          href={sample.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full rounded-xl bg-[#C5A059] py-2 px-3 text-xs font-semibold text-[#1A1A1A] hover:bg-[#b08d47] flex items-center justify-center gap-1.5 transition-all cursor-pointer font-ui shadow-md"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Abrir Invitación Web</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="px-1 text-left">
                    <div className="flex items-center justify-between gap-2 mb-1 font-ui">
                      <span className="rounded-full bg-[#1A1A1A] px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[#FAF6F0]">
                        {sample.category}
                      </span>
                      <span className="font-romantic italic text-[11px] text-[#C5A059] font-semibold">
                        {sample.celebrant}
                      </span>
                    </div>

                    <h4 className="font-prestige text-lg font-bold text-[#1A1A1A] hover:text-[#C5A059] transition-colors tracking-wide">
                      {sample.title}
                    </h4>

                    <p className="font-romantic italic text-xs text-[#6B5E54] mt-1 line-clamp-2 leading-relaxed">
                      "{sample.tagline}"
                    </p>

                    {/* Features checklist */}
                    <div className="mt-3 space-y-1 text-xs text-[#6B5E54] font-ui">
                      {sample.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-3.5 w-3.5 text-[#C5A059] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Palette dots */}
                    <div className="mt-3 pt-2.5 border-t border-[#E5D7C5]/50 flex items-center gap-2 font-ui">
                      <span className="text-[10px] uppercase tracking-wider text-[#A39589]">Paleta:</span>
                      <div className="flex items-center gap-1.5">
                        {sample.paletteColors.map((color, idx) => (
                          <span
                            key={idx}
                            className="h-3.5 w-3.5 rounded-full border border-black/10 shadow-2xs"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile-Friendly Action Buttons (Always visible on cell phones) */}
                <div className="mt-4 pt-3.5 border-t border-[#E5D7C5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 font-ui">
                  <a
                    href={sample.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FAF6F0] hover:bg-[#E5D7C5]/40 border border-[#C5A059] text-xs font-semibold text-[#1A1A1A] py-2 px-3 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-[#C5A059]" />
                    <span>Abrir en el Celu</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectSampleToCustomize(sample)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#1A1A1A] px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-[#FAF6F0] hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-all cursor-pointer shadow-xs whitespace-nowrap"
                  >
                    <span>Elegir este diseño</span>
                    <Heart className="h-3 w-3 text-[#C5A059] fill-[#C5A059]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
