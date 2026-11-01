import React, { useState } from 'react';
import { ExternalLink, X, Smartphone, Globe, ArrowUpRight, Sparkles, AlertCircle } from 'lucide-react';
import { RealSampleItem } from '../data/realSamples';

interface RealSampleViewerModalProps {
  sample: RealSampleItem;
  onClose: () => void;
  onSelectToCustomize: (sample: RealSampleItem) => void;
}

export const RealSampleViewerModal: React.FC<RealSampleViewerModalProps> = ({
  sample,
  onClose,
  onSelectToCustomize,
}) => {
  const [iframeError, setIframeError] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl bg-[#1C1A19] text-stone-100 shadow-2xl border border-stone-700/80 overflow-hidden my-auto flex flex-col max-h-[96dvh] sm:max-h-[92vh]">
        {/* Top Browser Bar */}
        <div className="flex items-center justify-between border-b border-stone-800 bg-[#161413] px-3 sm:px-6 py-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="font-prestige font-bold text-[#FAF6F0] text-xs sm:text-base tracking-widest shrink-0">
              LIORAH STUDIO
            </span>
            <span className="text-[#C5A059] text-xs">♥</span>
            <span className="text-stone-400 text-[11px] sm:text-xs font-ui truncate font-medium">
              {sample.celebrant}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={sample.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#C5A059] text-[#1A1A1A] hover:bg-[#b08d47] px-3 py-1.5 text-xs font-bold font-ui transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Abrir en el Celu</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-stone-400 hover:bg-stone-800 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Notice Bar */}
        <div className="bg-[#2A241F] px-4 py-2 text-center text-xs text-[#E8D8C3] font-ui flex items-center justify-center gap-2 border-b border-stone-800">
          <Smartphone className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Para ver la música y animaciones con fluidez en tu celular:</span>
          <a
            href={sample.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#C5A059] underline font-bold hover:text-white inline-flex items-center gap-0.5"
          >
            Abrir directamente
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Main Viewer Body */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-[#252220] flex flex-col items-center">
          {/* Smartphone Frame with iFrame */}
          <div className="relative w-full max-w-[340px] sm:max-w-[390px] rounded-[36px] sm:rounded-[44px] bg-[#0E0D0D] p-2.5 sm:p-3 shadow-2xl ring-1 ring-white/10 my-auto">
            {/* Dynamic Island Notch */}
            <div className="absolute top-3.5 sm:top-4 left-1/2 z-20 h-4.5 w-24 -translate-x-1/2 rounded-full bg-black flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-slate-900" />
            </div>

            {/* Viewport Screen */}
            <div className="relative h-[480px] sm:h-[600px] w-full overflow-hidden rounded-[28px] sm:rounded-[34px] bg-white text-stone-900">
              {!iframeError ? (
                <iframe
                  src={sample.liveUrl}
                  title={sample.title}
                  className="h-full w-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  onError={() => setIframeError(true)}
                  allow="autoplay; clipboard-write"
                />
              ) : (
                /* Fallback if external security header prevents inline embedding */
                <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF8F5]">
                  <div className="mb-4 h-16 w-16 overflow-hidden rounded-2xl shadow-md border border-stone-200">
                    <img src={sample.image} alt={sample.title} className="h-full w-full object-cover" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-stone-900">{sample.title}</h4>
                  <p className="text-xs text-stone-600 mt-2 mb-4 leading-relaxed">
                    Esta invitación está configurada para verse a pantalla completa en dispositivos móviles.
                  </p>
                  <a
                    href={sample.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-stone-800"
                  >
                    <span>Abrir Invitación Oficial</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Quick Notice under phone */}
          <div className="mt-4 flex items-center gap-2 text-[11px] text-stone-400">
            <Smartphone className="h-3.5 w-3.5 text-amber-500" />
            <span>Vista optimizada para pantalla de smartphone interactiva</span>
          </div>
        </div>

        {/* Bottom Conversion Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-800 bg-[#161413] px-6 py-4">
          <div className="text-left w-full sm:w-auto">
            <span className="text-[10px] uppercase tracking-wider text-stone-400 block">
              ¿Te gusta este estilo para tu evento?
            </span>
            <span className="text-xs font-semibold text-white">
              Personalizamos este modelo con tus datos, fotos y música favorita.
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <a
              href={sample.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-stone-700 px-4 py-2 text-xs font-medium text-stone-300 hover:bg-stone-800 hover:text-white transition-colors cursor-pointer"
            >
              Ver en Pantalla Completa
            </a>

            <button
              type="button"
              onClick={() => onSelectToCustomize(sample)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 px-4 py-2 text-xs font-bold text-stone-950 shadow-md transition-colors cursor-pointer"
            >
              <span>Quiero un Diseño Similar</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
