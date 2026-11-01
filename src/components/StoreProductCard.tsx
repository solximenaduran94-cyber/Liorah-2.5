import React from 'react';
import { ExternalLink, Play, Sparkles, Check, Heart, Smartphone } from 'lucide-react';
import { LiorahPackageTier } from '../types';
import { WebPageScreenMockup } from './WebPageScreenMockup';
import { SupportedCurrency, formatPrice } from '../utils/currency';

export interface StoreProductItem {
  id: string;
  name: string;
  category: 'Boda' | '15 años' | 'Cumpleaños / Bautismo';
  price: number;
  celebrant: string;
  date: string;
  coverImage?: string;
  phoneImage?: string;
  liveUrl?: string;
  isBestseller?: boolean;
  styleTag: string;
  paletteColors?: string[];
}

interface StoreProductCardProps {
  product: StoreProductItem;
  customImage?: string;
  currency?: SupportedCurrency;
  onBuy: (product: StoreProductItem, tier: LiorahPackageTier) => void;
  onOpenDemo: (product: StoreProductItem) => void;
}

export const StoreProductCard: React.FC<StoreProductCardProps> = ({
  product,
  customImage,
  currency = 'ARS',
  onBuy,
  onOpenDemo,
}) => {
  return (
    <div className="group flex flex-col justify-between text-center bg-[#FFFDF9] rounded-2xl p-4 transition-all duration-300 hover:shadow-md border border-transparent hover:border-[#E5D7C5]">
      {/* Mockup Presentation Container: Centered Smartphone Showcase */}
      <div
        onClick={() => onOpenDemo(product)}
        className="relative bg-gradient-to-b from-[#FAF7F2] to-[#F3EEE5] rounded-2xl p-4 sm:p-5 mb-4 flex items-center justify-center min-h-[440px] sm:min-h-[460px] cursor-pointer overflow-hidden group/mockup border border-[#EBE4D8] hover:border-[#D4AF37]/50 transition-all duration-300"
      >
        {/* Ambient soft glow behind phone */}
        <div className="absolute inset-0 bg-radial from-white via-transparent to-transparent opacity-80" />

        {/* Smartphone Mockup: Centered & High Fidelity */}
        <div className="relative w-[215px] sm:w-[230px] h-[415px] sm:h-[435px] bg-[#1A1A1A] rounded-[38px] p-2.5 shadow-2xl border-4 border-[#2D2D2D] transition-transform duration-300 group-hover/mockup:scale-[1.03] group-hover/mockup:shadow-3xl z-10 flex flex-col">
          {/* Dynamic Island / Speaker Pill */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#141414] rounded-full z-30 flex items-center justify-center border border-white/10 shadow-xs">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1F1F1F] mr-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#0D3B66]/60" />
          </div>

          {/* Phone Screen: Authentic Web Page Miniature */}
          <div className="w-full h-full bg-[#FFFDF9] rounded-[28px] overflow-hidden relative border border-stone-300 shadow-inner">
            <WebPageScreenMockup product={product} customImage={customImage} />

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center z-40">
              <div className="w-10 h-10 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center shadow-lg mb-2 transform scale-90 group-hover/mockup:scale-100 transition-transform">
                <ExternalLink className="w-4 h-4 text-[#C5A059]" />
              </div>
              <span className="text-white text-[11px] font-bold font-ui uppercase tracking-wider drop-shadow-md">
                Ver Demo Web
              </span>
              <span className="text-white/80 text-[9px] font-romantic italic">
                Tocar para interactuar
              </span>
            </div>
          </div>
        </div>

        {/* Live URL badge if it's an official active site */}
        {product.liveUrl && (
          <div className="absolute top-3 right-3 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1A1A1A]/90 backdrop-blur-xs px-2.5 py-1 text-[9px] font-semibold text-[#D4AF37] border border-[#D4AF37]/40 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sitio Activo</span>
            </span>
          </div>
        )}
      </div>

      {/* Info & Title */}
      <div className="space-y-1.5">
        <h3 className="font-romantic text-base sm:text-lg text-[#1A1A1A] font-normal leading-snug">
          Invitación Página Web | {product.name}
        </h3>

        {/* Price display in selected currency (ARS, USD, MXN, EUR, CLP) */}
        <div className="py-1">
          <p className="font-ui text-sm sm:text-base font-semibold text-[#1A1A1A]">
            {formatPrice(product.price, currency)}
          </p>
          <div className="flex items-center justify-center gap-2 text-[10px] text-[#A39589] font-ui mt-0.5">
            <span>JPG {formatPrice(10000, currency, false)}</span>
            <span>·</span>
            <span>PDF {formatPrice(25000, currency, false)}</span>
            <span>·</span>
            <span>Video {formatPrice(34000, currency, false)}</span>
          </div>
          {product.price >= 60000 && (
            <p className="text-[10px] text-[#C5A059] font-medium mt-1">
              ★ Incluye video de portada para ingresar a la web
            </p>
          )}
        </div>

        {/* Action Button: COMPRAR (InvitArte style clean uppercase) */}
        <div className="pt-2 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => onBuy(product, 'interactive')}
            className="w-full py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A1A1A] hover:text-[#C5A059] border-b border-[#1A1A1A] hover:border-[#C5A059] transition-all cursor-pointer text-center"
          >
            COMPRAR
          </button>

          {/* Secondary Live Demo Button */}
          <button
            type="button"
            onClick={() => onOpenDemo(product)}
            className="text-[11px] font-ui text-[#6B5E54] hover:text-[#1A1A1A] transition-colors flex items-center justify-center gap-1 cursor-pointer pt-0.5"
          >
            <ExternalLink className="w-3 h-3 text-[#C5A059]" />
            <span>Ver demo interactiva</span>
          </button>
        </div>
      </div>
    </div>
  );
};
