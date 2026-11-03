import React, { useState, useRef, useEffect } from 'react';
import { Play, Lock, Music } from 'lucide-react';
import { StoreProductItem } from './StoreProductCard';

interface WebPageScreenMockupProps {
  product: StoreProductItem;
  customImage?: string;
}

export const WebPageScreenMockup: React.FC<WebPageScreenMockupProps> = ({ product, customImage }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 210, height: 410 });

  useEffect(() => {
    if (!containerRef.current) return;
    const updateSize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth || 210,
          height: containerRef.current.clientHeight || 410,
        });
      }
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const getDomainLabel = () => {
    if (product.liveUrl) {
      try {
        const u = new URL(product.liveUrl);
        return u.hostname;
      } catch {
        return product.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
      }
    }
    return `liorah.site/${product.id.replace('prod-', '')}`;
  };

  // If a custom image was uploaded by the user:
  if (customImage) {
    return (
      <div className="w-full h-full relative overflow-hidden bg-stone-900 flex flex-col justify-between select-none">
        <img
          src={customImage}
          alt={product.name}
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="relative z-10 bg-black/70 backdrop-blur-xs py-1 px-2 border-b border-white/20 flex items-center justify-between text-[8px] text-white">
          <div className="flex items-center gap-1 font-mono truncate">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">{getDomainLabel()}</span>
          </div>
          <span className="text-[7px] text-[#D4AF37] font-bold uppercase">MINIATURA WEB</span>
        </div>
      </div>
    );
  }

  // Calculate dynamic scale for the 390px mobile viewport
  const scale = dimensions.width / 390;
  const scaledIframeHeight = Math.round(dimensions.height / (scale || 1));

  // Render the authentic replica background for each design
  const renderAuthenticDesign = () => {
    // 1. CELESTE XV (misxv.celeste.liorah.site)
    if (product.id === 'prod-celeste-xv') {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#1D4ED8] via-[#2563EB] to-[#1E3A8A] flex flex-col justify-between text-center select-none text-white relative overflow-hidden">
          {/* Top Real Photo of Celeste */}
          <div className="relative w-full h-[180px] shrink-0 overflow-hidden">
            <img
              src="/images/real_sites/celeste_hero.jpg"
              alt="Celeste - Mis XV Años"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#1D4ED8]" />
            <div className="absolute top-2 right-2 text-base animate-pulse">🦋</div>
            <div className="absolute top-10 left-2 text-xs opacity-75">✨</div>
          </div>

          {/* Copy and details */}
          <div className="px-2 py-1 space-y-1 relative z-10 flex-1 flex flex-col justify-center">
            <span className="font-ui text-[7px] uppercase tracking-[0.25em] text-sky-200 font-semibold block">
              Mis XV Años
            </span>
            <div className="inline-flex items-center justify-center gap-1">
              <h4 className="font-prestige text-xl font-extrabold tracking-widest text-white uppercase drop-shadow-md">
                CELE
              </h4>
              <span className="text-sm text-sky-300">💙</span>
            </div>
            <p className="font-romantic italic text-[8.5px] text-sky-100">
              "Una noche mágica para celebrar juntos"
            </p>
            <div className="w-8 h-[1px] bg-sky-200/50 mx-auto my-0.5" />
            <div className="bg-blue-900/40 backdrop-blur-xs rounded-lg p-1 border border-white/20 max-w-[155px] mx-auto text-[7.5px] space-y-0.5">
              <p className="font-bold tracking-wider text-white">
                VIERNES 27 NOV 2026
              </p>
              <p className="text-[6.5px] text-sky-200">
                20:30 HS · Sindicato Camioneros Neuquén
              </p>
            </div>
          </div>

          {/* Audio Player Pill */}
          <div className="relative z-10 pb-2">
            <div className="inline-flex items-center gap-1 bg-white text-[#1D4ED8] px-3 py-1 rounded-full text-[7.5px] font-bold font-ui tracking-wider uppercase shadow-md mx-auto">
              <Play className="w-2 h-2 fill-[#1D4ED8]" />
              <span>DALE PLAY!</span>
            </div>
          </div>
        </div>
      );
    }

    // 2. ARIEL & CECILIA (arielycecilia.liorah.site)
    if (product.id === 'prod-ariel-cecilia') {
      return (
        <div className="w-full h-full bg-[#141C12] flex flex-col justify-between text-center select-none text-[#FAF8F3] relative overflow-hidden">
          {/* Top Real Photo of Ariel & Cecilia */}
          <div className="relative w-full h-[180px] shrink-0 overflow-hidden">
            <img
              src="/images/real_sites/ariel_cecilia_hero.jpg"
              alt="Cecilia & Ariel"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#141C12]" />
            <div className="absolute top-2 left-2 text-xs opacity-75">🌿</div>
            <div className="absolute top-2 right-2 text-xs opacity-75">🌿</div>
          </div>

          <div className="px-2 py-1 space-y-1 relative z-10 flex-1 flex flex-col justify-center">
            <span className="font-ui text-[6.5px] uppercase tracking-[0.3em] text-[#C5A059] font-bold block">
              NUESTRA BODA 🌿
            </span>
            <h4 className="font-romantic text-lg font-normal tracking-wide text-[#FAF8F3] leading-tight">
              Cecilia & Ariel
            </h4>
            <p className="font-romantic italic text-[8.5px] text-[#A39589]">
              "Un amor para toda la vida"
            </p>
            <div className="w-8 h-[1px] bg-[#C5A059]/60 mx-auto my-0.5" />
            <div className="bg-[#1C261A] rounded-lg p-1 border border-[#C5A059]/30 max-w-[155px] mx-auto text-[7.5px] space-y-0.5">
              <p className="font-bold tracking-wider text-[#D4AF37]">
                20 DE NOVIEMBRE 2026
              </p>
              <p className="text-[6.5px] text-[#A39589]">
                Padre Stoppler 728, Grand Bourg
              </p>
            </div>
          </div>

          <div className="relative z-10 pb-2">
            <div className="inline-flex items-center gap-1 bg-[#C5A059] text-[#141C12] px-3 py-1 rounded-full text-[7.5px] font-bold font-ui tracking-wider uppercase shadow-md mx-auto">
              <Play className="w-2 h-2 fill-[#141C12]" />
              <span>DALE PLAY!</span>
            </div>
          </div>
        </div>
      );
    }

    // 3. XIOMARA XV (xiomara.misxv.liorah.site)
    if (product.id === 'prod-xiomara-xv') {
      return (
        <div className="w-full h-full bg-[#0d041c] flex flex-col justify-between text-center select-none text-white relative overflow-hidden">
          {/* Subtle violet decorative background */}
          <div className="absolute inset-0 bg-radial from-purple-900/30 via-transparent to-transparent opacity-80" />
          <div className="absolute top-2 right-2 text-sm opacity-80 animate-pulse">🦋</div>
          <div className="absolute top-8 left-2 text-xs opacity-60">🌸</div>
          <div className="absolute bottom-12 right-2 text-xs opacity-70">✨</div>

          <div className="px-2 py-4 space-y-2 relative z-10 my-auto">
            <div className="w-8 h-8 rounded-full bg-purple-900/50 border border-[#D4AF37]/60 mx-auto flex items-center justify-center text-[#D4AF37] text-sm shadow-sm">
              👑
            </div>
            <span className="font-ui text-[6.5px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">
              MIS XV AÑOS · GALA
            </span>
            <h4 className="font-romantic text-2xl font-bold tracking-wider text-purple-100 uppercase">
              Xiomara
            </h4>
            <p className="font-romantic italic text-[8.5px] text-purple-200/85">
              "Flores, mariposas & noche soñada"
            </p>
            <div className="w-8 h-[1px] bg-[#D4AF37]/60 mx-auto my-1" />
            <div className="bg-purple-950/70 rounded-lg p-1.5 border border-[#D4AF37]/35 max-w-[155px] mx-auto text-[7.5px] space-y-0.5">
              <p className="font-bold tracking-wider text-[#D4AF37]">
                SÁBADO 21 NOV 2026
              </p>
              <p className="text-[6.5px] text-purple-200">
                21:00 HS · Salón Neuquén (Río Limay)
              </p>
            </div>
          </div>

          <div className="relative z-10 pb-2">
            <div className="inline-flex items-center gap-1 bg-[#D4AF37] text-[#0d041c] px-3 py-1 rounded-full text-[7.5px] font-bold font-ui tracking-wider uppercase shadow-md mx-auto">
              <Play className="w-2 h-2 fill-[#0d041c]" />
              <span>DALE PLAY!</span>
            </div>
          </div>
        </div>
      );
    }

    // 4. DARIEL (dariel.liorah.site)
    if (product.id === 'prod-dariel') {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0A0F1D] flex flex-col justify-between text-center select-none text-[#FAF6F0] relative overflow-hidden">
          {/* Real Baby Dariel Photo */}
          <div className="relative w-full h-[180px] shrink-0 overflow-hidden">
            <img
              src="/images/real_sites/dariel_baby.jpg"
              alt="Dariel - Primer Añito"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#0F172A]" />
            <div className="absolute top-2 right-2 text-xs text-amber-300">⭐</div>
          </div>

          <div className="px-2 py-1 space-y-1 relative z-10 flex-1 flex flex-col justify-center">
            <span className="font-ui text-[6.5px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold block">
              MI PRIMER AÑITO ⭐
            </span>
            <h4 className="font-prestige text-lg font-bold tracking-[0.16em] text-[#FFFDF9] uppercase">
              Dariel Pohl
            </h4>
            <p className="font-romantic italic text-[8.5px] text-[#94A3B8]">
              "Un añito lleno de risas y amor"
            </p>
            <div className="w-8 h-[1px] bg-[#D4AF37]/60 mx-auto my-0.5" />
            <div className="bg-[#1E293B]/70 rounded-lg p-1 border border-[#D4AF37]/30 max-w-[155px] mx-auto text-[7.5px] space-y-0.5">
              <p className="font-bold tracking-wider text-[#D4AF37]">
                SÁBADO 8 AGOSTO 2026
              </p>
              <p className="text-[6.5px] text-[#E2E8F0]">
                Adolfo Alsina 3051
              </p>
            </div>
          </div>

          <div className="relative z-10 pb-2">
            <div className="inline-flex items-center gap-1 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rounded-full text-[7.5px] font-bold font-ui tracking-wider uppercase shadow-md mx-auto">
              <Play className="w-2 h-2 fill-[#0F172A]" />
              <span>DALE PLAY!</span>
            </div>
          </div>
        </div>
      );
    }

    // 5. MÍA ANELEY (mia.liorah.site)
    if (product.id === 'prod-mia') {
      return (
        <div className="w-full h-full bg-[#19050f] flex flex-col justify-between text-center select-none text-[#fff5f8] relative overflow-hidden">
          {/* Real Baby Mía Photo */}
          <div className="relative w-full h-[180px] shrink-0 overflow-hidden">
            <img
              src="/images/real_sites/mia_hero.jpg"
              alt="Mía Aneley - 1er Añito"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#19050f]" />
            <div className="absolute top-2 right-2 text-xs opacity-80">👑</div>
            <div className="absolute top-10 left-2 text-xs opacity-65">✨</div>
          </div>

          <div className="px-2 py-1 space-y-1 relative z-10 flex-1 flex flex-col justify-center">
            <span className="font-ui text-[6.5px] uppercase tracking-[0.25em] text-pink-300 font-semibold block">
              MI PRIMER AÑITO 👑
            </span>
            <h4 className="font-script text-2xl text-pink-200 leading-tight">
              Mía Aneley
            </h4>
            <p className="font-romantic italic text-[8px] text-pink-100/80">
              "Jorge & Judit te invitan a festejar"
            </p>
            <div className="w-8 h-[1px] bg-pink-400/50 mx-auto my-0.5" />
            <div className="bg-pink-950/70 rounded-lg p-1 border border-pink-400/30 max-w-[155px] mx-auto text-[7.5px] space-y-0.5">
              <p className="font-bold tracking-wider text-pink-200">
                DOMINGO 25 OCT 2026
              </p>
              <p className="text-[6.5px] text-pink-100/70">
                17:30 HS · Salón Aiken, Laferrere
              </p>
            </div>
          </div>

          <div className="relative z-10 pb-2">
            <div className="inline-flex items-center gap-1 bg-pink-400 text-[#19050f] px-3 py-1 rounded-full text-[7.5px] font-bold font-ui tracking-wider uppercase shadow-md mx-auto">
              <Play className="w-2 h-2 fill-[#19050f]" />
              <span>DALE PLAY!</span>
            </div>
          </div>
        </div>
      );
    }

    // 6. ALMA XV (almaxv.liorah.site)
    if (product.id === 'prod-alma-xv') {
      return (
        <div className="w-full h-full bg-gradient-to-b from-[#500724] via-[#831843] to-[#3B0718] flex flex-col justify-between text-center select-none text-[#FAF6F0] relative overflow-hidden">
          {/* Real Photo of Alma */}
          <div className="relative w-full h-[180px] shrink-0 overflow-hidden">
            <img
              src="/images/real_sites/alma_hero.jpg"
              alt="Alma - Mis XV Años"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#500724]" />
            <div className="absolute top-2 right-2 text-xs opacity-80 animate-pulse">💖</div>
          </div>

          <div className="px-2 py-1 space-y-1 relative z-10 flex-1 flex flex-col justify-center">
            <span className="font-ui text-[6.5px] uppercase tracking-[0.25em] text-[#FBCFE8] font-bold block">
              MIS QUINCE AÑOS
            </span>
            <h4 className="font-script text-2xl text-[#D4AF37] leading-tight">
              Alma
            </h4>
            <p className="font-romantic italic text-[8px] text-[#FCE7F3]">
              "Una noche para no olvidar jamás"
            </p>
            <div className="w-8 h-[1px] bg-[#D4AF37]/60 mx-auto my-0.5" />
            <div className="bg-pink-950/70 rounded-lg p-1 border border-[#D4AF37]/30 max-w-[155px] mx-auto text-[7.5px] space-y-0.5">
              <p className="font-bold tracking-wider text-[#D4AF37]">
                08 DE NOVIEMBRE 2026
              </p>
              <p className="text-[6.5px] text-[#FCE7F3]">
                Fiesta de Gala · 21:00 hs
              </p>
            </div>
          </div>

          <div className="relative z-10 pb-2">
            <div className="inline-flex items-center gap-1 bg-[#D4AF37] text-[#500724] px-3 py-1 rounded-full text-[7.5px] font-bold font-ui tracking-wider uppercase shadow-md mx-auto">
              <Play className="w-2 h-2 fill-[#500724]" />
              <span>DALE PLAY!</span>
            </div>
          </div>
        </div>
      );
    }

    // 7. OLIVIA (olivia.liorah.site - Primer Añito)
    if (product.id === 'prod-olivia') {
      return (
        <div className="w-full h-full bg-[#FFFDF9] flex flex-col justify-between text-center select-none text-[#1A1A1A] relative overflow-hidden">
          {/* Real Baby Olivia Photo */}
          <div className="relative w-full h-[180px] shrink-0 overflow-hidden">
            <img
              src="/images/real_sites/olivia_hero.jpg"
              alt="Olivia - Mi Primer Añito"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#FFFDF9]" />
            <div className="absolute top-2 right-2 text-xs opacity-75">🌸</div>
          </div>

          <div className="px-2 py-1 space-y-1 relative z-10 flex-1 flex flex-col justify-center">
            <span className="font-ui text-[6.5px] uppercase tracking-[0.25em] text-[#EC4899] font-bold block">
              MI PRIMER AÑITO 🌸
            </span>
            <h4 className="font-script text-2xl text-[#1A1A1A] leading-tight">
              Olivia
            </h4>
            <p className="font-romantic italic text-[8px] text-[#6B5E54]">
              "Acuarela floral & safari dulce"
            </p>
            <div className="w-8 h-[1px] bg-[#C5A059] mx-auto my-0.5" />
            <div className="bg-[#FAF6F0] rounded-lg p-1 border border-[#E5D7C5] max-w-[155px] mx-auto text-[7.5px] space-y-0.5">
              <p className="font-bold tracking-wider text-[#1A1A1A]">
                12 DE SEPTIEMBRE 2026
              </p>
              <p className="text-[6.5px] text-[#6B5E54]">
                Salón & Jardín de Eventos
              </p>
            </div>
          </div>

          <div className="relative z-10 pb-2">
            <div className="inline-flex items-center gap-1 bg-[#1A1A1A] text-[#D4AF37] px-3 py-1 rounded-full text-[7.5px] font-bold font-ui tracking-wider uppercase shadow-md mx-auto">
              <Play className="w-2 h-2 fill-[#D4AF37]" />
              <span>DALE PLAY!</span>
            </div>
          </div>
        </div>
      );
    }

    // Default / Generic Fallback
    return (
      <div className="w-full h-full bg-[#FAF8F5] flex flex-col justify-between text-center select-none text-[#1A1A1A] relative overflow-hidden">
        <div className="relative w-full h-[180px] shrink-0 overflow-hidden bg-stone-900">
          {product.coverImage || product.phoneImage ? (
            <img
              src={product.coverImage || product.phoneImage}
              alt={product.name}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-3xl">✨</div>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#FAF8F5]" />
          <div className="absolute top-2 left-2 text-xs opacity-75">✨</div>
          <div className="absolute top-2 right-2 text-xs opacity-75">✨</div>
        </div>

        <div className="px-2 py-1 space-y-1 relative z-10 flex-1 flex flex-col justify-center">
          <p className="font-romantic italic text-[7.5px] text-[#6B5E54]">
            Invitación Digital Web
          </p>
          <span className="font-ui text-[6.5px] uppercase tracking-[0.25em] text-[#C5A059] font-bold block">
            {product.category}
          </span>
          <h4 className="font-romantic text-xl text-[#1A1A1A] leading-tight font-bold">
            {product.celebrant || product.name}
          </h4>
          <div className="w-8 h-[1px] bg-[#C5A059] mx-auto my-0.5" />
          <div className="bg-[#FFFDF9] rounded-lg p-1 border border-[#E5D7C5] max-w-[155px] mx-auto text-[7.5px] space-y-0.5">
            <p className="font-bold tracking-wider text-[#1A1A1A]">
              {product.date}
            </p>
            <p className="text-[6.5px] text-[#6B5E54]">
              Liorah Studio Boutique
            </p>
          </div>
        </div>

        <div className="relative z-10 pb-2">
          <div className="inline-flex items-center gap-1 bg-[#1A1A1A] text-[#D4AF37] px-3 py-1 rounded-full text-[7.5px] font-bold font-ui tracking-wider uppercase shadow-md mx-auto">
            <Play className="w-2 h-2 fill-[#D4AF37]" />
            <span>DALE PLAY!</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden select-none bg-stone-900 flex flex-col"
    >
      {/* 1. Realistic Mobile Browser Top Address Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-[#FFFDF9]/95 backdrop-blur-md px-2 py-1 border-b border-stone-200/80 flex items-center justify-between text-[8px] shadow-xs">
        <div className="flex items-center gap-1 font-mono text-stone-700 truncate max-w-[125px]">
          <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
          <span className="truncate font-semibold text-[7px]">{getDomainLabel()}</span>
        </div>
        <span className="text-[6.5px] text-[#C5A059] font-bold uppercase tracking-wider shrink-0 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>EN VIVO</span>
        </span>
      </div>

      {/* 2. Main Miniature Presentation Area */}
      <div className="w-full h-full relative overflow-hidden">
        {/* Layer A: Real live iframe of the website (scaled to exact container width) */}
        {product.liveUrl && !iframeError && (
          <div className="absolute inset-0 pt-5 overflow-hidden z-10 pointer-events-none">
            <iframe
              src={product.liveUrl}
              title={product.name}
              loading="lazy"
              tabIndex={-1}
              referrerPolicy="no-referrer"
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
              className={`border-0 pointer-events-none origin-top-left transition-opacity duration-700 ${
                iframeLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                width: '390px',
                height: `${scaledIframeHeight}px`,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
            />
          </div>
        )}

        {/* Layer B: Authentic, Pixel-Perfect Replica (renders instantaneously with 0ms delay) */}
        <div className="w-full h-full absolute inset-0 z-0 pt-5">
          {renderAuthenticDesign()}
        </div>
      </div>
    </div>
  );
};

